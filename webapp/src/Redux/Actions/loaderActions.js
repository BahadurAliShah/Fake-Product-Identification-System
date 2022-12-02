export const StartLoading = {
    type: "loader",
    payload: {
        show: true,
    },
};

export const StopLoading = {
    type: "loader",
    payload: {
        show: false,
    }
}
