export const SaveWEB3 = (web3, account) => {
    return {
        type: "web3",
        payload: {
            web3: web3,
            account: account,
        }
    };
}
