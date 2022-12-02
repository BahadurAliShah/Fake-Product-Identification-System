const Colors = {
    light: {
        primary: "#000000",
        secondary: "#ffffff",
        text: "#000000",
        background: "#ffffff",
    },
    dark: {
        primary: "#ffffff",
        secondary: "#000000",
        text: "#ffffff",
        background: "#000000",
    }
}

const InitialState = {
    theme: "light",
    colors: Colors.light,
}

export const ThemeReducer = (state = InitialState, action) => {
    switch (action.type) {
        case "theme":
            return {
                ...state,
                theme: action.payload.theme,
                colors: Colors[action.payload.theme],
            };
        default:
            return state;
    }
}
