// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Radius of a node circle.
const kNodeRadius = 6;
// Target y position for page nodes.
const kPageNodesTargetY = 20;
// Range occupied by page nodes at the top of the graph view.
const kPageNodesYRange = 100;
// Range occupied by process nodes at the bottom of the graph view.
const kProcessNodesYRange = 100;
// Range occupied by worker nodes at the bottom of the graph view, above
// process nodes.
const kWorkerNodesYRange = 200;
// Target y position for frame nodes.
const kFrameNodesTargetY = kPageNodesYRange + 50;
// Range that frame nodes cannot enter at the top/bottom of the graph view.
const kFrameNodesTopMargin = kPageNodesYRange;
const kFrameNodesBottomMargin = kWorkerNodesYRange + 50;
// The maximum strength of a boundary force.
// According to https://github.com/d3/d3-force#positioning, strength values
// outside the range [0,1] are "not recommended".
const kMaxBoundaryStrength = 1;
// The strength of a high Y-force. This is appropriate for forces that
// strongly pull towards an attractor, but can still be overridden by the
// strongest force.
const kHighYStrength = 0.9;
// The strength of a weak Y-force. This is appropriate for forces that exert
// some influence but can be easily overridden.
const kWeakYStrength = 0.1;
/**
 * Helper function to return a DOM class attribute for a given tooltip object
 * index. All rows in a tooltip that are part of the same describer object will
 * have the same class so that they can be toggled together.
 */
function tooltipClassForIndex(objectIndex) {
    return `object${objectIndex}`;
}
/**
 * Helper function to toggle the visibility of a set of rows in the tooltip
 * table.
 */
function toggleTooltipRows(clickedRow, objectIndex) {
    // Toggle visibility of only the value rows with the same index in the same
    // tooltip.
    const valueClasses = `tr.value.${tooltipClassForIndex(objectIndex)}`;
    const tooltip = d3.select(clickedRow.parentElement);
    const isCollapsed = tooltip.select(valueClasses).classed('collapsed');
    tooltip.selectAll(valueClasses).classed('collapsed', !isCollapsed);
}
class ToolTipRowData {
}
class ToolTip {
    constructor(div, node) {
        this.floating = true;
        this.descriptionJson_ = '';
        this.x = node.x;
        this.y = node.y - 28;
        this.node = node;
        this.div_ = d3.select(div)
            .append('div')
            .attr('class', 'tooltip')
            .style('opacity', 0)
            .style('left', `${this.x}px`)
            .style('top', `${this.y}px`);
        this.div_.append('table').append('tbody');
        this.div_.transition().duration(200).style('opacity', .9);
        // Set up a drag behavior for this object's div.
        const drag = d3.drag().subject(() => this);
        drag.on('start', this.onDragStart_.bind(this));
        drag.on('drag', this.onDrag_.bind(this));
        this.div_.call(drag);
        this.onDescription(JSON.stringify({}));
    }
    nodeMoved() {
        if (!this.floating) {
            return;
        }
        const node = this.node;
        this.x = node.x;
        this.y = node.y - 28;
        this.div_.style('left', `${this.x}px`).style('top', `${this.y}px`);
    }
    /**
     * @return The [x, y] center of the ToolTip's div element.
     */
    getCenter() {
        const rect = this.div_.node().getBoundingClientRect();
        return [rect.x + rect.width / 2, rect.y + rect.height / 2];
    }
    goAway() {
        this.div_.transition().duration(200).style('opacity', 0).remove();
    }
    /**
     * Updates the description displayed.
     */
    onDescription(descriptionJson) {
        if (this.descriptionJson_ === descriptionJson) {
            return;
        }
        /**
         * Helper for recursively flattening an Object.
         *
         * @param visited The set of visited objects, excluding
         *          {@code object}.
         * @param flattened The flattened object being built.
         * @param path The current flattened path.
         * @param objectIndex An index used to identify this object in expanding
         *                    table rows.
         * @param object The nested dict to be flattened.
         * @returns The last index used by any sub-object of this object.
         */
        function flattenObjectRec(visited, flattened, path, objectIndex, object) {
            if (typeof object !== 'object' || visited.has(object)) {
                return objectIndex;
            }
            visited.add(object);
            objectIndex++;
            // When entering a nested object, add a header row.
            if (path) {
                flattened.push({
                    contents: [path, ''],
                    rowClass: 'heading',
                    objectIndex: objectIndex,
                });
            }
            const subObjects = [];
            for (const [key, value] of Object.entries(object)) {
                // Save non-null objects for recursion at bottom of list.
                if (!!value && typeof value === 'object') {
                    subObjects.push([key, value]);
                }
                else {
                    // Everything else is considered a leaf value.
                    let strValue = String(value);
                    if (strValue.length > 50) {
                        strValue = `${strValue.substring(0, 47)}...`;
                    }
                    flattened.push({
                        contents: [key, strValue],
                        rowClass: 'value',
                        objectIndex: objectIndex,
                    });
                }
            }
            // Now recurse into sub-objects.
            for (const [key, value] of subObjects) {
                const fullPath = path ? `${path} > ${key}` : key;
                objectIndex =
                    flattenObjectRec(visited, flattened, fullPath, objectIndex, value);
            }
            return objectIndex;
        }
        /**
         * Recursively flattens an Object of key/value pairs. Nested objects will be
         * flattened to a list with a subheader row showing the nested key. Each
         * list element includes metadata that will be used to format a table row.
         *
         * Nested objects are always sorted to the end. If there are circular
         * dependencies, they will not be expanded.
         *
         * For example, converting:
         *
         * 'describer': {
         *   'foo': 'hello',
         *   'bar': 1,
         *   'baz': {
         *     'x': 43.5,
         *     'y': 'fox',
         *     'z': [1, 2],
         *     'a': 0,
         *   },
         *   'monkey': 3,
         *   'self': (reference to self)
         * }
         *
         * will yield:
         *
         * [
         *   {contents: ['describer', ''], rowClass: 'header', objectIndex: 1},
         *   {contents: ['foo', 'hello'], rowClass: 'value', objectIndex: 1},
         *   {contents: ['bar', '1'], rowClass: 'value', objectIndex: 1},
         *   {contents: ['monkey', '3]', rowClass: 'value', objectIndex: 1},
         *   {contents: ['describer > baz', ''], rowClass: 'header',
         *    objectIndex: 2},
         *   {contents: ['x', '43.5'], rowClass: 'value', objectIndex: 2},
         *   {contents: ['y', 'fox'], rowClass: 'value', objectIndex: 2},
         *   {contents: ['a', '0'], rowClass: 'value', objectIndex: 2},
         *   {contents: ['describer > baz > z', ''], rowClass: 'header',
         *    objectIndex: 3},
         *   {contents: ['0', '1'], rowClass: 'value', objectIndex: 3},
         *   {contents: ['1', '2'], rowClass: 'value', objectIndex: 3},
         * ]
         */
        function flattenObject(object) {
            const flattened = [];
            flattenObjectRec(new Set(), flattened, '', 0, object);
            return flattened;
        }
        // The JSON is a dictionary of data describer name to their data. Assuming a
        // convention that describers emit a dictionary from string->string, this is
        // flattened to an array. Each top-level dictionary entry is flattened to a
        // 'heading' with [`the describer's name`, ''], followed by some number of
        // entries with a two-element list, each representing a key/value pair.
        this.descriptionJson_ = descriptionJson;
        const flattenedDescription = flattenObject(JSON.parse(descriptionJson));
        if (flattenedDescription.length === 0) {
            flattenedDescription.push({ contents: ['No Data', ''], rowClass: 'heading', objectIndex: 0 });
        }
        // Attach each TooltipRowData element to a table row as data.
        let tr = this.div_.selectAll('tbody').selectAll('tr').data(flattenedDescription);
        // Create <tr> and <td> elements for each row that's new in this update.
        tr.enter()
            .append('tr')
            .selectAll('td')
            .data((d) => d.contents)
            .enter()
            .append('td');
        // Delete the <tr> elements for each row that's disappeared in this update.
        tr.exit().remove();
        // Update the selection to match the elements that were added or removed.
        tr = this.div_.selectAll('tr');
        // Apply style and content to all <tr> and <td> elements. Elements that
        // already existed in the last update will already have settings so each
        // change must be idempotent.
        // Make the first cell of each header row 2 columns wide.
        tr.select('td').attr('colspan', (_d, i, nodes) => {
            const parent = d3.select(nodes[i].parentElement);
            const parentData = parent.datum();
            return parentData.rowClass === 'heading' ? 2 : null;
        });
        // Set the text of each cell.
        tr.selectAll('td')
            // Assign the <tr>'s full row of data to the selection.
            .data((d) => d.contents)
            // Assign the elements of the row array to the <td>'s in the selection.
            .text((d) => d);
        // Make each row clickable.
        tr.on('click', (d, i, nodes) => {
            toggleTooltipRows(nodes[i], d.objectIndex);
        })
            // And add classes to them.
            .each((d, i, nodes) => {
            const el = nodes[i];
            const rowData = d;
            // Add the row's fixed classes if they're not already present. This
            // won't overwrite the "collapsed" class if it's there.
            el.classList.add(rowData.rowClass, tooltipClassForIndex(rowData.objectIndex));
        });
    }
    onDragStart_() {
        this.floating = false;
    }
    onDrag_() {
        this.x = d3.event.x;
        this.y = d3.event.y;
        this.div_.style('left', `${this.x}px`).style('top', `${this.y}px`);
        graph.updateToolTipLinks();
    }
}
class GraphNode {
    constructor(id) {
        this.color = 'black';
        this.iconUrl = '';
        this.tooltip = null;
        this.fx = null;
        this.fy = null;
        this.id = id;
    }
    get title() {
        return '';
    }
    /**
     * Sets the initial x and y position of this node, also resets
     * vx and vy.
     * @param graphWidth Width of the graph view (svg).
     * @param graphHeight Height of the graph view (svg).
     */
    setInitialPosition(graphWidth, graphHeight) {
        this.x = graphWidth / 2;
        this.y = this.targetPositionY(graphHeight);
        this.vx = 0;
        this.vy = 0;
    }
    /**
     * @param graphHeight Height of the graph view (svg).
     */
    targetPositionY(graphHeight) {
        const bounds = this.allowedRangeY(graphHeight);
        return (bounds[0] + bounds[1]) / 2;
    }
    /**
     * @return The strength of the force that pulls the node towards
     *     its target y position.
     */
    get targetYPositionStrength() {
        return kWeakYStrength;
    }
    /**
     * @return A scaling factor applied to the strength of links to this
     *     node.
     */
    get linkStrengthScalingFactor() {
        return 1;
    }
    /**
     * @param graphHeight Height of the graph view.
     */
    allowedRangeY(graphHeight) {
        // By default, nodes just need to be in bounds of the graph.
        return [0, graphHeight];
    }
    /** @return The strength of the repulsion force with other nodes. */
    get manyBodyStrength() {
        return -200;
    }
    /** @return an array of node ids. */
    get linkTargets() {
        return [];
    }
    /**
     * Dashed links express ownership relationships. An object can own multiple
     * things, but be owned by exactly one (per relationship type). As such, the
     * relationship is expressed on the *owned* object. These links are drawn with
     * an arrow at the beginning of the link, pointing to the owned object.
     * @return an array of node ids.
     */
    get dashedLinkTargets() {
        return [];
    }
    /**
     * Selects a color string from an id.
     * @param id The id the returned color is selected from.
     */
    selectColor(id) {
        if (id < 0) {
            id = -id;
        }
        return d3.schemeSet3[Number(id % BigInt(12))];
    }
}
class PageNode extends GraphNode {
    constructor(page) {
        super(page.id);
        this.page = page;
        this.y = kPageNodesTargetY;
    }
    get title() {
        return this.page.mainFrameUrl.url.length > 0 ? this.page.mainFrameUrl.url :
            'Page';
    }
    get targetYPositionStrength() {
        // Gravitate strongly towards the top of the graph. Can be overridden by
        // the bounding force which uses kMaxBoundaryStrength.
        return kHighYStrength;
    }
    get linkStrengthScalingFactor() {
        // Give links from frame nodes to page nodes less weight than links between
        // frame nodes, so the that Y forces pulling page nodes into their area can
        // dominate over link forces pulling them towards frame nodes.
        return 0.5;
    }
    allowedRangeY(_graphHeight) {
        return [0, kPageNodesYRange];
    }
    get manyBodyStrength() {
        return -600;
    }
    get dashedLinkTargets() {
        const targets = [];
        if (this.page.openerFrameId) {
            targets.push(this.page.openerFrameId);
        }
        if (this.page.embedderFrameId) {
            targets.push(this.page.embedderFrameId);
        }
        return targets;
    }
}
class FrameNode extends GraphNode {
    constructor(frame) {
        super(frame.id);
        this.frame = frame;
        this.color = this.selectColor(frame.processId);
    }
    get title() {
        return this.frame.url.url.length > 0 ? this.frame.url.url : 'Frame';
    }
    targetPositionY(_graphHeight) {
        return kFrameNodesTargetY;
    }
    allowedRangeY(graphHeight) {
        return [kFrameNodesTopMargin, graphHeight - kFrameNodesBottomMargin];
    }
    get linkTargets() {
        // Only link to the page if there isn't a parent frame.
        return [
            this.frame.parentFrameId || this.frame.pageId,
            this.frame.processId,
        ];
    }
}
class ProcessNode extends GraphNode {
    constructor(process) {
        super(process.id);
        this.process = process;
        this.color = this.selectColor(process.id);
    }
    get title() {
        return `PID: ${this.process.pid.pid}`;
    }
    get targetYPositionStrength() {
        // Gravitate strongly towards the bottom of the graph. Can be overridden by
        // the bounding force which uses kMaxBoundaryStrength.
        return kHighYStrength;
    }
    get linkStrengthScalingFactor() {
        // Give links to process nodes less weight than links between frame nodes,
        // so the that Y forces pulling process nodes into their area can dominate
        // over link forces pulling them towards frame nodes.
        return 0.5;
    }
    allowedRangeY(graphHeight) {
        return [graphHeight - kProcessNodesYRange, graphHeight];
    }
    get manyBodyStrength() {
        return -600;
    }
}
class WorkerNode extends GraphNode {
    constructor(worker) {
        super(worker.id);
        this.worker = worker;
        this.color = this.selectColor(worker.processId);
    }
    get title() {
        return this.worker.url.url.length > 0 ? this.worker.url.url : 'Worker';
    }
    get targetYPositionStrength() {
        // Gravitate strongly towards the worker area of the graph. Can be
        // overridden by the bounding force which uses kMaxBoundaryStrength.
        return kHighYStrength;
    }
    allowedRangeY(graphHeight) {
        return [
            graphHeight - kWorkerNodesYRange,
            graphHeight - kProcessNodesYRange,
        ];
    }
    get manyBodyStrength() {
        return -600;
    }
    get linkTargets() {
        // Link the process, in addition to all the client and child workers.
        return [
            this.worker.processId,
            ...this.worker.clientFrameIds,
            ...this.worker.clientWorkerIds,
            ...this.worker.childWorkerIds,
        ];
    }
}
/**
 * A force that bounds GraphNodes |allowedRangeY| in Y,
 * as well as bounding them to stay in page bounds in X.
 */
function boundingForce(graphHeight, graphWidth) {
    let nodes = [];
    let bounds = [];
    const xBounds = [2 * kNodeRadius, graphWidth - 2 * kNodeRadius];
    const boundPosition = (pos, bound) => Math.max(bound[0], Math.min(pos, bound[1]));
    function force(_alpha) {
        const n = nodes.length;
        for (let i = 0; i < n; ++i) {
            const bound = bounds[i];
            const node = nodes[i];
            // Calculate where the node will end up after movement. If it will be out
            // of bounds apply a counter-force to bring it back in.
            const yNextPosition = node.y + node.vy;
            const yBoundedPosition = boundPosition(yNextPosition, bound);
            if (yNextPosition !== yBoundedPosition) {
                // Do not include alpha because we want to be strongly repelled from
                // the boundary even if alpha has decayed.
                node.vy += (yBoundedPosition - yNextPosition) * kMaxBoundaryStrength;
            }
            const xNextPosition = node.x + node.vx;
            const xBoundedPosition = boundPosition(xNextPosition, xBounds);
            if (xNextPosition !== xBoundedPosition) {
                // Do not include alpha because we want to be strongly repelled from
                // the boundary even if alpha has decayed.
                node.vx += (xBoundedPosition - xNextPosition) * kMaxBoundaryStrength;
            }
        }
    }
    force.initialize = function (n) {
        nodes = n;
        bounds = nodes.map(node => {
            const nodeBounds = node.allowedRangeY(graphHeight);
            // Leave space for the node circle plus a small border.
            nodeBounds[0] += kNodeRadius * 2;
            nodeBounds[1] -= kNodeRadius * 2;
            return nodeBounds;
        });
    };
    return force;
}
class Graph {
    constructor(svg, div) {
        this.wasResized_ = false;
        this.width_ = 0;
        this.height_ = 0;
        this.simulation_ = null;
        /** A selection for the top-level <g> node that contains all tooltip links. */
        this.toolTipLinkGroup_ = null;
        /** A selection for the top-level <g> node that contains all separators. */
        this.separatorGroup_ = null;
        /** A selection for the top-level <g> node that contains all nodes. */
        this.nodeGroup_ = null;
        /** A selection for the top-level <g> node that contains all edges. */
        this.linkGroup_ = null;
        /** A selection for the top-level <g> node that contains all dashed edges. */
        this.dashedLinkGroup_ = null;
        this.nodes_ = new Map();
        this.links_ = [];
        this.dashedLinks_ = [];
        this.hostWindow_ = null;
        /** The interval timer used to poll for node descriptions. */
        this.pollDescriptionsInterval_ = 0;
        /** The d3.drag instance applied to nodes. */
        this.drag_ = null;
        this.svg_ = svg;
        this.div_ = div;
    }
    initialize() {
        // Set up a message listener to receive the graph data from the WebUI.
        // This is hosted in a webview that is never navigated anywhere else,
        // so these event handlers are never removed.
        window.addEventListener('message', this.onMessage_.bind(this));
        // Set up a resize listener to track the graph on resize.
        window.addEventListener('resize', this.onResize_.bind(this));
        // Create the simulation and set up the permanent forces.
        const simulation = d3.forceSimulation();
        simulation.on('tick', this.onTick_.bind(this));
        const linkForce = d3.forceLink()
            .id(d => d.id.toString());
        const defaultStrength = linkForce.strength();
        // Override the default link strength function to apply scaling factors
        // from the source and target nodes to the link strength. This lets
        // different node types balance link forces with other forces that act on
        // them.
        simulation.force('link', linkForce.strength((l, i, n) => defaultStrength(l, i, n) *
            l.source.linkStrengthScalingFactor *
            l.target.linkStrengthScalingFactor));
        // Sets the repulsion force between nodes (positive number is attraction,
        // negative number is repulsion).
        simulation.force('charge', d3.forceManyBody()
            .strength(this.getManyBodyStrength_.bind(this)));
        this.simulation_ = simulation;
        // Create the <g> elements that host nodes and links.
        // The link groups are created first so that all links end up behind nodes.
        const svg = d3.select(this.svg_);
        this.toolTipLinkGroup_ = svg.append('g').attr('class', 'tool-tip-links');
        this.linkGroup_ =
            svg.append('g').attr('class', 'links');
        this.dashedLinkGroup_ =
            svg.append('g').attr('class', 'dashed-links');
        this.nodeGroup_ = svg.append('g').attr('class', 'nodes');
        this.separatorGroup_ = svg.append('g').attr('class', 'separators');
        const drag = d3.drag();
        drag.clickDistance(4);
        drag.on('start', this.onDragStart_.bind(this));
        drag.on('drag', this.onDrag_.bind(this));
        drag.on('end', this.onDragEnd_.bind(this));
        this.drag_ = drag;
    }
    frameCreated(frame) {
        this.addNode_(new FrameNode(frame));
    }
    pageCreated(page) {
        this.addNode_(new PageNode(page));
    }
    processCreated(process) {
        this.addNode_(new ProcessNode(process));
    }
    workerCreated(worker) {
        this.addNode_(new WorkerNode(worker));
    }
    frameChanged(frame) {
        const frameNode = this.nodes_.get(frame.id);
        frameNode.frame = frame;
    }
    pageChanged(page) {
        const pageNode = this.nodes_.get(page.id);
        // Page node dashed links may change dynamically, so account for that here.
        this.removeDashedNodeLinks_(pageNode);
        pageNode.page = page;
        this.addDashedNodeLinks_(pageNode);
    }
    processChanged(process) {
        const processNode = this.nodes_.get(process.id);
        processNode.process = process;
    }
    workerChanged(worker) {
        const workerNode = this.nodes_.get(worker.id);
        // Worker node links may change dynamically, so account for that here.
        this.removeNodeLinks_(workerNode);
        workerNode.worker = worker;
        this.addNodeLinks_(workerNode);
    }
    favIconDataAvailable(iconInfo) {
        const graphNode = this.nodes_.get(iconInfo.nodeId);
        if (graphNode) {
            graphNode.iconUrl = 'data:image/png;base64,' + iconInfo.iconData;
        }
    }
    nodeDeleted(nodeId) {
        const node = this.nodes_.get(nodeId);
        // Remove any links, and then the node itself.
        this.removeNodeLinks_(node);
        this.removeDashedNodeLinks_(node);
        this.nodes_.delete(nodeId);
    }
    /** Updates floating tooltip positions as well as links to pinned tooltips */
    updateToolTipLinks() {
        const pinnedTooltips = [];
        for (const node of this.nodes_.values()) {
            const tooltip = node.tooltip;
            if (tooltip) {
                if (tooltip.floating) {
                    tooltip.nodeMoved();
                }
                else {
                    pinnedTooltips.push(tooltip);
                }
            }
        }
        function setLineEndpoints(d, line) {
            const center = d.getCenter();
            line.attr('x1', _d => center[0])
                .attr('y1', _d => center[1])
                .attr('x2', d => d.node.x)
                .attr('y2', d => d.node.y);
        }
        const toolTipLinks = this.toolTipLinkGroup_.selectAll('line').data(pinnedTooltips);
        toolTipLinks.enter()
            .append('line')
            .attr('stroke', 'LightGray')
            .attr('stroke-dasharray', '1')
            .attr('stroke-opacity', '0.8')
            .each(function (d) {
            const line = d3.select(this);
            setLineEndpoints(d, line);
        });
        toolTipLinks.each(function (d) {
            const line = d3.select(this);
            setLineEndpoints(d, line);
        });
        toolTipLinks.exit().remove();
    }
    removeNodeLinks_(node) {
        // Filter away any links to or from the provided node.
        this.links_ = this.links_.filter(link => link.source !== node && link.target !== node);
    }
    removeDashedNodeLinks_(node) {
        // Filter away any dashed links to or from the provided node.
        this.dashedLinks_ = this.dashedLinks_.filter(link => link.source !== node && link.target !== node);
    }
    nodeDescriptions_(nodeDescriptions) {
        for (const nodeId in nodeDescriptions) {
            const node = this.nodes_.get(BigInt(nodeId));
            if (node && node.tooltip) {
                node.tooltip.onDescription(nodeDescriptions[nodeId]);
            }
        }
    }
    pollForNodeDescriptions_() {
        const nodeIds = [];
        for (const node of this.nodes_.values()) {
            if (node.tooltip) {
                nodeIds.push(node.id);
            }
        }
        if (nodeIds.length) {
            this.hostWindow_.postMessage(['requestNodeDescriptions', nodeIds], '*');
            if (this.pollDescriptionsInterval_ === 0) {
                // Start polling if not already in progress.
                this.pollDescriptionsInterval_ =
                    setInterval(this.pollForNodeDescriptions_.bind(this), 1000);
            }
        }
        else {
            // No tooltips, stop polling.
            clearInterval(this.pollDescriptionsInterval_);
            this.pollDescriptionsInterval_ = 0;
        }
    }
    /**
     * @param event A graph update event posted from the WebUI.
     */
    onMessage_(event) {
        if (!this.hostWindow_) {
            this.hostWindow_ = event.source;
        }
        const type = event.data[0];
        const data = event.data[1];
        switch (type) {
            case 'frameCreated':
                this.frameCreated(data);
                break;
            case 'pageCreated':
                this.pageCreated(data);
                break;
            case 'processCreated':
                this.processCreated(data);
                break;
            case 'workerCreated':
                this.workerCreated(data);
                break;
            case 'frameChanged':
                this.frameChanged(data);
                break;
            case 'pageChanged':
                this.pageChanged(data);
                break;
            case 'processChanged':
                this.processChanged(data);
                break;
            case 'favIconDataAvailable':
                this.favIconDataAvailable(data);
                break;
            case 'workerChanged':
                this.workerChanged(data);
                break;
            case 'nodeDeleted':
                this.nodeDeleted(data);
                break;
            case 'nodeDescriptions':
                this.nodeDescriptions_(data);
                break;
        }
        this.render_();
    }
    onGraphNodeClick_(node) {
        if (node.tooltip) {
            node.tooltip.goAway();
            node.tooltip = null;
        }
        else {
            node.tooltip = new ToolTip(this.div_, node);
            // Poll for all tooltip node descriptions immediately.
            this.pollForNodeDescriptions_();
        }
    }
    /**
     * Renders nodes_ and edges_ to the SVG DOM.
     *
     * Each edge is a line element.
     * Each node is represented as a group element with three children:
     *   1. A circle that has a color and which animates the node on creation
     *      and deletion.
     *   2. An image that is provided a data URL for the nodes favicon, when
     *      available.
     *   3. A title element that presents the nodes URL on hover-over, if
     *      available.
     * Deleted nodes are classed '.dead', and CSS takes care of hiding their
     * image element if it's been populated with an icon.
     */
    render_() {
        // Select the links.
        const link = this.linkGroup_.selectAll('line').data(this.links_);
        // Add new links.
        link.enter().append('line');
        // Remove dead links.
        link.exit().remove();
        // Select the dashed links.
        const dashedLink = this.dashedLinkGroup_.selectAll('line').data(this.dashedLinks_);
        // Add new dashed links.
        dashedLink.enter().append('line');
        // Remove dead dashed links.
        dashedLink.exit().remove();
        // Select the nodes, except for any dead ones that are still transitioning.
        const nodes = Array.from(this.nodes_.values());
        const node = this.nodeGroup_.selectAll('g:not(.dead)')
            .data(nodes, d => d.id);
        // Add new nodes, if any.
        if (!node.enter().empty()) {
            const newNodes = node.enter()
                .append('g')
                .call(this.drag_)
                .on('click', this.onGraphNodeClick_.bind(this));
            const circles = newNodes.append('circle')
                .attr('id', d => `circle-${d.id}`)
                .attr('r', kNodeRadius * 1.5)
                .attr('fill', 'green'); // New nodes appear green.
            newNodes.append('image')
                .attr('x', -8)
                .attr('y', -8)
                .attr('width', 16)
                .attr('height', 16);
            newNodes.append('title');
            // Transition new nodes to their chosen color in 2 seconds.
            circles.transition()
                .duration(2000)
                .attr('fill', (d) => d.color)
                .attr('r', kNodeRadius);
        }
        if (!node.exit().empty()) {
            // Give dead nodes a distinguishing class to exclude them from the
            // selection above.
            const deletedNodes = node.exit().classed('dead', true);
            // Interrupt any ongoing transitions.
            deletedNodes.interrupt();
            // Turn down the node associated tooltips.
            deletedNodes.each(d => {
                if (d.tooltip) {
                    d.tooltip.goAway();
                }
            });
            // Transition the nodes out and remove them at the end of transition.
            deletedNodes.transition()
                .remove()
                .select('circle')
                .attr('r', 9)
                .attr('fill', 'red')
                .transition()
                .duration(2000)
                .attr('r', 0);
        }
        // Update the title for all nodes.
        node.selectAll('title')
            .text(d => d.title);
        // Update the favicon for all nodes.
        node.selectAll('image')
            .attr('href', d => d.iconUrl);
        // Update and restart the simulation if the graph changed.
        if (!node.enter().empty() || !node.exit().empty() ||
            !link.enter().empty() || !link.exit().empty() ||
            !dashedLink.enter().empty() || !dashedLink.exit().empty()) {
            this.simulation_.nodes(nodes);
            const links = this.links_.concat(this.dashedLinks_);
            this.simulation_.force('link')
                .links(links);
            this.restartSimulation_();
        }
    }
    onTick_() {
        const nodes = this.nodeGroup_.selectAll('g');
        nodes.attr('transform', d => `translate(${d.x},${d.y})`);
        const lines = this.linkGroup_.selectAll('line');
        lines.attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y);
        const dashedLines = this.dashedLinkGroup_.selectAll('line');
        dashedLines.attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y);
        this.updateToolTipLinks();
    }
    /**
     * Adds a new node to the graph, populates its links and gives it an initial
     * position.
     */
    addNode_(node) {
        this.nodes_.set(node.id, node);
        this.addNodeLinks_(node);
        this.addDashedNodeLinks_(node);
        node.setInitialPosition(this.width_, this.height_);
    }
    /**
     * Adds all the links for a node to the graph.
     */
    addNodeLinks_(node) {
        for (const linkTarget of node.linkTargets) {
            const target = this.nodes_.get(linkTarget);
            if (target) {
                this.links_.push({ source: node, target: target });
            }
        }
    }
    /**
     * Adds all the dashed links for a node to the graph.
     */
    addDashedNodeLinks_(node) {
        for (const dashedLinkTarget of node.dashedLinkTargets) {
            const target = this.nodes_.get(dashedLinkTarget);
            if (target) {
                this.dashedLinks_.push({ source: node, target: target });
            }
        }
    }
    /**
     * @param d The dragged node.
     */
    onDragStart_(d) {
        if (!d3.event.active) {
            this.restartSimulation_();
        }
        d.fx = d.x;
        d.fy = d.y;
    }
    /**
     * @param d The dragged node.
     */
    onDrag_(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
    }
    /**
     * @param d The dragged node.
     */
    onDragEnd_(d) {
        if (!d3.event.active) {
            this.simulation_.alphaTarget(0);
        }
        // Leave the node pinned where it was dropped. Return it to free
        // positioning if it's dropped outside its designated area.
        const bounds = d.allowedRangeY(this.height_);
        if (d3.event.y < bounds[0] || d3.event.y > bounds[1]) {
            d.fx = null;
            d.fy = null;
        }
        // Toggle the pinned class as appropriate for the circle backing this node.
        d3.select(`#circle-${d.id}`).classed('pinned', d.fx != null);
    }
    getTargetPositionY_(d) {
        return d.targetPositionY(this.height_);
    }
    getTargetPositionStrengthY_(d) {
        return d.targetYPositionStrength;
    }
    getManyBodyStrength_(d) {
        return d.manyBodyStrength;
    }
    /**
     * @param graphWidth Width of the graph view (svg).
     * @param graphHeight Height of the graph view (svg).
     */
    updateSeparators_(graphWidth, graphHeight) {
        const separators = [
            ['Pages', 'Frame Tree', kPageNodesYRange],
            ['', 'Workers', graphHeight - kWorkerNodesYRange],
            ['', 'Processes', graphHeight - kProcessNodesYRange],
        ];
        const kAboveLabelOffset = -6;
        const kBelowLabelOffset = 14;
        const groups = this.separatorGroup_.selectAll('g').data(separators);
        if (groups.enter()) {
            const group = groups.enter().append('g').attr('transform', (d) => `translate(0,${d[2]})`);
            group.append('line')
                .attr('x1', 10)
                .attr('y1', 0)
                .attr('x2', graphWidth - 10)
                .attr('y2', 0)
                .attr('stroke', 'black')
                .attr('stroke-dasharray', '4');
            group.each(function (d) {
                const parentGroup = d3.select(this);
                if (d[0]) {
                    parentGroup.append('text')
                        .attr('x', 20)
                        .attr('y', kAboveLabelOffset)
                        .attr('class', 'separator')
                        .text(d => d[0]);
                }
                if (d[1]) {
                    parentGroup.append('text')
                        .attr('x', 20)
                        .attr('y', kBelowLabelOffset)
                        .attr('class', 'separator')
                        .text(d => d[1]);
                }
            });
        }
        groups.attr('transform', (d) => {
            const value = d[2];
            return `translate(0,${value})`;
        });
        groups.selectAll('line').attr('x2', graphWidth - 10);
    }
    restartSimulation_() {
        // Restart the simulation.
        this.simulation_.alphaTarget(0.3).restart();
    }
    /**
     * Resizes and restarts the animation after a size change.
     */
    onResize_() {
        this.width_ = this.svg_.clientWidth;
        this.height_ = this.svg_.clientHeight;
        this.updateSeparators_(this.width_, this.height_);
        // Reset both X and Y attractive forces, as they're cached.
        const xForce = d3.forceX().x(this.width_ / 2).strength(0.1);
        const yForce = d3.forceY()
            .y(this.getTargetPositionY_.bind(this))
            .strength(this.getTargetPositionStrengthY_.bind(this));
        this.simulation_.force('x_pos', xForce);
        this.simulation_.force('y_pos', yForce);
        this.simulation_.force('y_bound', boundingForce(this.height_, this.width_));
        if (!this.wasResized_) {
            this.wasResized_ = true;
            // Reinitialize all node positions on first resize.
            this.nodes_.forEach(node => node.setInitialPosition(this.width_, this.height_));
            // Allow the simulation to settle by running it for a bit.
            for (let i = 0; i < 200; ++i) {
                this.simulation_.tick();
            }
        }
        this.restartSimulation_();
    }
}
let graph = null;
function onLoad() {
    graph =
        new Graph(document.querySelector('svg'), document.querySelector('div'));
    graph.initialize();
}
window.addEventListener('load', onLoad);
export {};
