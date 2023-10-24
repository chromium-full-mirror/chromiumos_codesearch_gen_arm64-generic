export const LIGHT_DEFAULT_COLOR = {
    background: { value: 0xffffffff },
    foreground: { value: 0xffdee1e6 },
    base: { value: 0 },
};
export const DARK_DEFAULT_COLOR = {
    background: { value: 0xff323639 },
    foreground: { value: 0xff202124 },
    base: { value: 0 },
};
export const LIGHT_BASELINE_BLUE_COLOR = {
    background: { value: 0xff0b57d0 },
    foreground: { value: 0xffd3e3fd },
    base: { value: 0xffc7c7c7 },
};
export const DARK_BASELINE_BLUE_COLOR = {
    background: { value: 0xffa8c7fa },
    foreground: { value: 0xff0842a0 },
    base: { value: 0xff757575 },
};
export const LIGHT_BASELINE_GREY_COLOR = {
    background: { value: 0xff0b57d0 },
    foreground: { value: 0xffe3e3e3 },
    base: { value: 0xffc7c7c7 },
};
export const DARK_BASELINE_GREY_COLOR = {
    background: { value: 0xffa8c7fa },
    foreground: { value: 0xff474747 },
    base: { value: 0xff757575 },
};
export var ColorType;
(function (ColorType) {
    ColorType[ColorType["NONE"] = 0] = "NONE";
    ColorType[ColorType["DEFAULT"] = 1] = "DEFAULT";
    ColorType[ColorType["MAIN"] = 2] = "MAIN";
    ColorType[ColorType["CHROME"] = 3] = "CHROME";
    ColorType[ColorType["CUSTOM"] = 4] = "CUSTOM";
    ColorType[ColorType["GREY"] = 5] = "GREY";
})(ColorType || (ColorType = {}));
