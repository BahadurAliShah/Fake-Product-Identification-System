const InitialState = {
    show: false,
}

export const LoaderReducer = (state = InitialState, action) => {
    switch (action.type) {
        case "loader":
            return {
                ...state,
                show: action.payload.show,
            };
        default:
            return state;
    }
}
