const InitialState = {
    web3: null,
    account: null
};

export const Web3Reducer = (state = InitialState, action) => {
    switch (action.type) {
        case "web3":
            return {
                ...state,
                web3: action.payload.web3,
                account: action.payload.account,
            };
        default:
            return state;
    }
}
