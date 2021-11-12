const colorNames = {
    white: "#FFFFFF",
    slateGray: "#6E7E91",
    scienceBlue: "#0366D6",
    scienceBlueTransparent: "rgba(220, 20, 60, 0.03)",
    mercury: "#E5E5E5",
    doveGray: "#363636",
    mineShaft: "#252525",
    mineShaftLighter: '#313131',
    bluemine: "1F5189",
    tundora: "#414141",
    porcelain: "#F2F3F4",
    whiteLilac: "#FBFBFE",
    ironTransparent: "rgba(209, 213, 218, 0.3)",
    tropicalBlue: "#CDE0F7",
    anakiwa: "8CC2FF",
};

const common = {
    breakpoints: {
        mobileMax: 767,
        tabletMax: 991,
    },
    borderRadiusSmall: "4px",
    boxShadow: "0px -2px 50px rgb(241, 233, 235), 0px 16px 58px rgba(9, 10, 51, 0.03)",

};

export const themeLight = {
    ...common,
    colors: {
        primary: colorNames.scienceBlue,
        textPrimary: colorNames.mineShaft,
        tile: {
            borderHover: colorNames.tropicalBlue,
            border: colorNames.porcelain,
            header: colorNames.scienceBlue,
        },
        buttonLink: {
            text: colorNames.white,
            border: colorNames.ironTransparent,
            shadow: colorNames.anakiwa,
        },
        site: {
            background: colorNames.whiteLilac,
            text: colorNames.slateGray,
        },
        boxBackground: colorNames.white,
        headerLine: colorNames.mercury,
        themeSwitch: {
            background: colorNames.mercury,
            icon: colorNames.white,
        }
    },    

export const themeDark = {
    ...common,
    colors: {
        primary: colorNames.dodgerBlue,
        textPrimary: colorNames.white,
        buttonLink: {
            text: colorNames.white,
            shadow: colorNames.ironTransparent,
            border: colorNames.shipCove,
        },
        tile: {
            borderHover: colorNames.bluemine,
            border: colorNames.tundora,
            header: colorNames.white,
        },
        site: {
            background: colorNames.mineShaftLighter,
            text: colorNames.white,
        },
        boxBackground: colorNames.mineShaftLighter,
        headerLine: colorNames.tundora,
        themeSwitch: {
            background: colorNames.doveGray,
            icon: colorNames.mineShaft,
        }
    },
};