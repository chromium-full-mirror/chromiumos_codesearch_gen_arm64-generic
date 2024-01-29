/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { css, html, LitElement } from '//resources/mwc/lit/index.js';
// TODO: b/295990177 - Make these absolute.
import { waitForEvent } from '../async_helpers/async_helpers.js';
import { assertExists, hexToRgb } from '../helpers/helpers.js';
import { addColorSchemeChangeListener, removeColorSchemeChangeListener } from './event_binders.js';
import { defaultGetWorker } from './worker.js';
/**
 * The list of tokens that are used to identify shapes and colors in Lottie
 * animation data. If token names change, we will need to update this set.
 * Existing token names are very unlikely to change, it's more likely that new
 * tokens may be added if illustration palettes become more complex. There
 * is currently no easy way to generate this list in Google3, and as a small
 * set it can be manually maintained, but in future a more robust solution may
 * be needed. See go/cros-tokens (internal).
 */
const CROS_TOKENS = new Set([
    'cros.sys.illo.color1',
    'cros.sys.illo.color1.1',
    'cros.sys.illo.color1.2',
    'cros.sys.illo.color2',
    'cros.sys.illo.color3',
    'cros.sys.illo.color4',
    'cros.sys.illo.color5',
    'cros.sys.illo.color6',
    'cros.sys.illo.base',
    'cros.sys.illo.secondary',
    /**
     * These are colors outside of the standard illo palette. Some animations
     * need to modify the base background color depending on the surface so
     * contain tokens for app base, card color etc,
     */
    'cros.sys.app_base',
    'cros.sys.app_base_shaded',
    'cros.sys.app_base_elevated',
    'cros.sys.illo.card.color4',
    'cros.sys.illo.card.on_color4',
    'cros.sys.illo.card.color3',
    'cros.sys.illo.card.on_color3',
    'cros.sys.illo.card.color2',
    'cros.sys.illo.card.on_color2',
    'cros.sys.illo.card.color1',
    'cros.sys.illo.card.on_color1',
]);
/** String variant of the name field used for comparison during parsing. */
const LOTTIE_GRADIENT_FILL_TYPE = 'gf';
/** The CustomEvent names that LottieRenderer can fire. */
export var CrosLottieEvent;
(function (CrosLottieEvent) {
    /**
     * Fired when the animation has been loaded on the worker thread and is
     * ready to play.
     */
    CrosLottieEvent["INITIALIZED"] = "cros-lottie-initialized";
    /**
     * Fired when the animation has been paused on the worker thread.
     */
    CrosLottieEvent["PAUSED"] = "cros-lottie-paused";
    /**
     * Fired when the animation has begun playing on the worker thread.
     */
    CrosLottieEvent["PLAYING"] = "cros-lottie-playing";
    /**
     * Fired when the animation has been resized on the worker thread.
     */
    CrosLottieEvent["RESIZED"] = "cros-lottie-resized";
    /**
     * Fired when the animation has begun playing on the worker thread.
     */
    CrosLottieEvent["STOPPED"] = "cros-lottie-stopped";
})(CrosLottieEvent || (CrosLottieEvent = {}));
/**
 * Helper function for converting between the hexadecimal string we get from the
 * computed style to LottieRGBAArray type. Since these come directly
 * from the computed style and color pipeline, we can be confident that we are
 * only going to be parsing 8 digit hexadecimal strings.
 */
function convertHexToLottieRGBA(hexString) {
    let r;
    let g;
    let b;
    let alpha;
    if (hexString.length === 9) {
        // Assume #rrggbbaa format.
        const hexRgb = hexString.slice(0, -2);
        const alphaString = hexString.slice(-2);
        [r, g, b] = hexToRgb(hexRgb);
        alpha = Number(`0x${alphaString}`);
    }
    else {
        // Assume #rrggbb format.
        [r, g, b] = hexToRgb(hexString);
        alpha = 255;
    }
    return [r / 255, g / 255, b / 255, alpha / 255];
}
/**
 * Takes in a cros token and returns the corresponding css variable.
 * Eg: cros.sys.illo.base -> --cros-sys-illo-base.
 */
function convertTokenToCssVariable(token) {
    return `--${(token).replaceAll('.', '-')}`;
}
function getOrCreateTokenColor(colors, tokenName) {
    if (!colors.has(tokenName)) {
        colors.set(tokenName, {
            cssVar: convertTokenToCssVariable(tokenName),
            shapes: [],
            gradients: []
        });
    }
    return colors.get(tokenName);
}
/**
 * Traverses through a jsonObject, looking for known keys and tokens, and
 * saving them in the `shapes` and `gradients` map.
 */
function traverse(jsonObj, colors) {
    if (jsonObj === null || typeof jsonObj !== 'object')
        return;
    for (const value of Object.values(jsonObj)) {
        const tokenName = jsonObj.nm || null;
        let tokenColor = null;
        let gradient = null;
        let shape = null;
        if (tokenName && CROS_TOKENS.has(tokenName)) {
            tokenColor = getOrCreateTokenColor(colors, tokenName);
            const gradientObj = jsonObj;
            // Attempt to parse the object as a gradient, otherwise we assume it is a
            // regular shape. If more complex animation types get added, this logic
            // will need to be updated along with the types.
            if (gradientObj.ty === LOTTIE_GRADIENT_FILL_TYPE) {
                gradient = gradientObj;
            }
            else {
                shape = jsonObj;
            }
        }
        traverse(value, colors);
        if (tokenColor) {
            if (gradient)
                tokenColor.gradients.push(gradient);
            if (shape)
                tokenColor.shapes.push(shape);
        }
    }
}
/**
 * Lottie renderer with correct hooks to handle dynamic color. This component
 * should only be used for dynamic illustrations, as it involves spinning up an
 * instance of the Lottie library on a worker thread. For static illustrations,
 * it is more performant to use <cros-static-illustration>.
 */
export class LottieRenderer extends LitElement {
    /** The onscreen canvas controlled by lottie_worker.js. */
    get onscreenCanvas() {
        return this.renderRoot.querySelector('#onscreen-canvas');
    }
    /** @nocollapse */
    static { this.styles = css `
    :host {
      display: block;
    }

    canvas {
      height: 100%;
      width: 100%;
    }
  `; }
    /** @nocollapse */
    static { this.properties = {
        assetUrl: { type: String, attribute: 'asset-url' },
        autoplay: { type: Boolean, attribute: true },
        loop: { type: Boolean, attribute: true },
        dynamic: { type: Boolean, attribute: true },
    }; }
    /** @nocollapse */
    static { this.events = {
        ...CrosLottieEvent,
    }; }
    constructor() {
        super();
        /**
         * Function which returns a web worker loaded up with lottie worker js.
         * If unspecified in chromium defaults to a standard web worker pulling from
         * "chrome://resources/cros_components/lottie_renderer/lottie_worker.js". If
         * unspecified in google3 defaults to a standard web worker pulling from
         * "/js/lottie_worker.js".
         * Must be set before attaching lottieRenderer to the DOM:
         *   const renderer = new LottieRenderer();
         *   renderer.getWorker = myCustomGetWorker();
         *   document.body.append(renderer);
         * @export
         */
        this.getWorker = defaultGetWorker;
        this.onColorSchemeChanged = () => {
            if (!this.dynamic)
                return;
            this.refreshAnimationColors();
        };
        /** The worker thread running the lottie library. */
        this.worker = null;
        this.offscreenCanvas = null;
        /** If the offscreen canvas has been transferred to the Worker thread. */
        this.hasTransferredCanvas = false;
        /**
         * Animations are loaded asynchronously, the worker will send an event when
         * it has finished loading.
         */
        this.animationIsLoaded = false;
        /**
         * If the canvas is resized before an animation has finished initializing,
         * we wait and send the size once it's loaded fully into the worker.
         */
        this.workerNeedsSizeUpdate = false;
        /**
         * If there is a control command (play, pause, stop) before the animation has
         * finished initializing, it should be queued and completed after successful
         * initializaton.
         */
        this.workerNeedsControlUpdate = false;
        this.playStateInternal = false;
        /**
         * Propagates resize events from the onscreen canvas to the offscreen one.
         */
        this.resizeObserver = null;
        /**
         * A copy of this.assetUrl that has the color token CSS variables replaced
         * with the hardcoded color strings based on the current color scheme.
         */
        this.animationData = null;
        /**
         * Map from token name to a TokenColor. The TokenColor contains the CSS
         * variable name for the token, as well as a list of references to Lottie
         * animation sub objects, which need to be updated every time the color scheme
         * changes to avoid retraversing the JSON.
         */
        this.colors = new Map();
        this.assetUrl = '';
        this.autoplay = true;
        this.loop = true;
        // Once all apps are launching with dynamic colors, we can default this to
        // true, or remove this attribute altogether.
        this.dynamic = false;
    }
    connectedCallback() {
        super.connectedCallback();
        if (!this.worker) {
            this.worker = this.getWorker();
            this.worker.onmessage = (e) => void this.onMessage(e);
        }
        addColorSchemeChangeListener(this.onColorSchemeChanged);
    }
    firstUpdated() {
        assertExists(this.onscreenCanvas, 'Could not find <cavas> element in lottie-renderer');
        this.resizeObserver =
            new ResizeObserver(this.onCanvasElementResized.bind(this));
        this.resizeObserver.observe(this.onscreenCanvas);
        this.offscreenCanvas = this.onscreenCanvas.transferControlToOffscreen();
        this.initAnimation();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.worker) {
            this.worker.terminate();
            this.worker = null;
        }
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
        removeColorSchemeChangeListener(this.onColorSchemeChanged);
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const prop = changedProperties.get('assetUrl');
        if (this.assetUrl && prop !== undefined && this.worker) {
            this.assetUrlChanged();
        }
    }
    render() {
        return html `
        <canvas id='onscreen-canvas'></canvas>
      `;
    }
    /**
     * Play the current animation, and wait for a successful response from the
     * worker thread. This promise will also wait until animation initialization
     * has completed before resolving.
     */
    async play() {
        return this.setPlayState(true, CrosLottieEvent.PLAYING);
    }
    /**
     * Pause the current animation, and wait for a successful response from the
     * worker thread. This promise will also wait until animation initialization
     * has completed before resolving.
     */
    async pause() {
        return this.setPlayState(false, CrosLottieEvent.PAUSED);
    }
    /**
     * Stop the current animation, and wait for a successful response from the
     * worker thread. Stopping the animation resets it to it's first frame, and
     * pauses it, so there's no need to wait for initialization.
     */
    async stop() {
        assertExists(this.worker, 'lottie-renderer has no web worker.');
        this.worker.postMessage({ control: { stop: true } });
        return waitForEvent(this, CrosLottieEvent.STOPPED);
    }
    async refreshAnimationColors() {
        // We must await update here to ensure the computed style will be up to date
        // with the new color scheme.
        // TODO: b/274998765 - Investigate if this can be removed when using events.
        this.requestUpdate();
        await this.updateComplete;
        if (!this.animationData) {
            console.info('Refresh animation colors failed: No animation data.');
            return;
        }
        this.updateColorsInAnimationData();
        this.sendAnimationToWorker(this.animationData);
    }
    sendAnimationToWorker(animationData) {
        // There are some edge cases where the renderer has been removed from the
        // DOM in between initialization and this function running, which causes
        // the worker to have been terminated. In these cases, we can just early
        // exit without attempting to send anything to the worker.
        if (!this.worker) {
            console.info('lottie-renderer has no web worker.');
            return;
        }
        const animationConfig = ({
            animationData,
            drawSize: this.getCanvasDrawBufferSize(),
            params: {
                loop: this.loop,
                autoplay: this.autoplay,
            },
        });
        // The offscreen canvas can only be transferred across to the WebWorker
        // once, when we first initialize an animation. On subsequent
        // initializations (such as when the asset URL has changed), we avoid
        // re-transferring the canvas and just send across the animation data.
        if (this.hasTransferredCanvas) {
            this.worker.postMessage(animationConfig);
            return;
        }
        this.worker.postMessage({ ...animationConfig, canvas: this.offscreenCanvas }, [this.offscreenCanvas]);
        this.hasTransferredCanvas = true;
    }
    /**
     * Load the animation data from `assetUrl` and begin the color token
     * resolution work. If no `assetUrl` was provided, we don't need to try and
     * fetch or send anything to the worker.
     */
    async initAnimation() {
        if (!this.assetUrl) {
            console.info('No assetUrl provided.');
            return;
        }
        try {
            // In chromium you are not allowed to use `fetch` with `chrome://` URLs,
            // as such we use XMLHttpRequest here.
            this.animationData = await new Promise((resolve, reject) => {
                const req = new XMLHttpRequest();
                req.responseType = 'json';
                req.open('GET', this.assetUrl, true);
                req.onload = () => {
                    resolve(req.response);
                };
                req.onerror = (err) => {
                    reject(err);
                };
                req.send(null);
            });
        }
        catch (error) {
            console.info(`Unable to load JSON from ${this.assetUrl}`, error);
        }
        if (!this.animationData) {
            console.info('cros-lottie-renderer fetched null animation data');
            return;
        }
        // For apps using this component without the Jelly flag, they should ignore
        // the dynamic palette and just use the GM2 colors that are inside the
        // JSON file itself. This means we can skip populating the color map with
        // values, which means `updateColorsInAnimationData` will be a no-op.
        if (this.dynamic) {
            this.colors.clear();
            // When the animation is first loaded, it needs to be traversed via DFS to
            // find all shapes that are mapped to tokens, as these will need to
            // receive color updates. `colors` is the internal list of all known
            // shapes, and will be modified by this function.
            traverse(this.animationData, this.colors);
            if (this.colors.size === 0) {
                console.warn(`Unable to find cros.sys.illo tokens in ${this.assetUrl}. Please ` +
                    `ensure this animation file has been run through the VisD token ` +
                    `resolution script.`);
            }
        }
        this.updateColorsInAnimationData();
        this.sendAnimationToWorker(this.animationData);
    }
    /**
     * Go through the known list of shapes in the animation data that need to have
     * their colors updated, and use the current computed style to ensure they
     * match the current color scheme.
     */
    updateColorsInAnimationData() {
        const computedStyle = getComputedStyle(this);
        for (const color of this.colors.values()) {
            const computedColor = computedStyle.getPropertyValue(color.cssVar).trim();
            const colorArray = convertHexToLottieRGBA(computedColor);
            for (const location of color.shapes) {
                if (location.c) {
                    location.c.k = colorArray;
                }
                else if (location.sc) {
                    location.sc = computedColor;
                }
                else {
                    console.info(`Unable to assign color to shape: ${JSON.stringify(location)}`);
                }
            }
            for (const location of color.gradients) {
                const numOfPoints = location.g.p;
                for (let i = 0; i < numOfPoints; i++) {
                    const gradientFillPoints = location.g.k.k;
                    gradientFillPoints[(4 * i) + 1] = colorArray[0];
                    gradientFillPoints[(4 * i) + 2] = colorArray[1];
                    gradientFillPoints[(4 * i) + 3] = colorArray[2];
                }
            }
        }
    }
    async assetUrlChanged() {
        assertExists(this.worker, 'lottie-renderer has no web worker.');
        // If we have an already loaded animation, stop it from playing and
        // reinitialize.
        if (this.animationIsLoaded) {
            await this.stop();
        }
        await this.initAnimation();
    }
    /**
     * Computes the draw buffer size for the canvas. This ensures that the
     * rasterization is crisp and sharp rather than blurry.
     */
    getCanvasDrawBufferSize() {
        const devicePixelRatio = window.devicePixelRatio;
        const clientRect = this.onscreenCanvas.getBoundingClientRect();
        const drawSize = {
            width: clientRect.width * devicePixelRatio,
            height: clientRect.height * devicePixelRatio,
        };
        return drawSize;
    }
    /**
     * Handles the canvas element resize event. If the animation isn't fully
     * loaded, the canvas size is sent later, once the loading is done.
     */
    onCanvasElementResized() {
        if (!this.animationIsLoaded) {
            this.workerNeedsSizeUpdate = true;
            return;
        }
        this.sendCanvasSizeToWorker();
    }
    sendCanvasSizeToWorker() {
        assertExists(this.worker, 'lottie-renderer has no web worker.');
        this.worker.postMessage({ drawSize: this.getCanvasDrawBufferSize() });
    }
    setPlayState(play, expectedEvent) {
        this.playStateInternal = play;
        if (!this.animationIsLoaded) {
            this.workerNeedsControlUpdate = true;
        }
        else {
            this.sendPlayControlToWorker();
        }
        return waitForEvent(this, expectedEvent);
    }
    sendPlayControlToWorker() {
        assertExists(this.worker, 'lottie-renderer has no web worker.');
        this.worker.postMessage({ control: { play: this.playStateInternal } });
    }
    onMessage(event) {
        const message = event.data.name;
        switch (message) {
            case 'initialized':
                this.animationIsLoaded = true;
                this.fire(CrosLottieEvent.INITIALIZED);
                this.sendPendingInfo();
                break;
            case 'playing':
                this.fire(CrosLottieEvent.PLAYING);
                break;
            case 'paused':
                this.fire(CrosLottieEvent.PAUSED);
                break;
            case 'stopped':
                this.fire(CrosLottieEvent.STOPPED);
                break;
            case 'resized':
                this.fire(CrosLottieEvent.RESIZED, event.data.size);
                break;
            default:
                console.warn(`unknown message type received: ${message}`);
                break;
        }
    }
    fire(event, detail = null) {
        this.dispatchEvent(new CustomEvent(event, { bubbles: true, composed: true, detail }));
    }
    /**
     * Called once the animation is fully loaded into the worker. Sends any
     * size or control information that may have arrived while the animation
     * was not yet fully loaded.
     */
    sendPendingInfo() {
        if (this.workerNeedsSizeUpdate) {
            this.workerNeedsSizeUpdate = false;
            this.sendCanvasSizeToWorker();
        }
        if (this.workerNeedsControlUpdate) {
            this.workerNeedsControlUpdate = false;
            this.sendPlayControlToWorker();
        }
    }
}
customElements.define('cros-lottie-renderer', LottieRenderer);
