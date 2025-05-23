const lightColors = require("@primer/primitives/dist/json/colors/light.json");
const darkColors = require("@primer/primitives/dist/json/colors/dark.json");

function getColors(theme) {
    switch (theme) {
        case "light":
            // Temp override until Primitives are updated
            lightColors.success.emphasis = "#1f883d";
            lightColors.btn.primary.bg = lightColors.success.emphasis;
            lightColors.btn.primary.hoverBg = lightColors.scale.green[5];
            lightColors.fg.default = "#DA1884";
            lightColors.fg.muted = "#C21575";
            lightColors.accent.fg = "#DA1884";
            // editor.foreground = "#BA42A9"

            return lightColors;
        case "dark":
            // Temp override until Primitives are updated
            darkColors.fg.default = "#F050A2";
            darkColors.fg.muted = "#F050A2";
            darkColors.accent.fg = "#F050A2";
            darkColors.severe.subtle = "rgba(219, 109, 40, 0.1)";
            darkColors.danger.subtle = "rgba(248, 81, 73, 0.1)";
            darkColors.done.subtle = "rgba(163, 113, 247, 0.1)";
            darkColors.sponsors.subtle = "rgba(219, 97, 162, 0.1)";
            // editor.foreground = "#BA42A9"

            return darkColors;
        default:
            throw new Error(`Colors are missing for value: ${theme}`);
    }
}

module.exports = {
    getColors,
};
