const FakeProductIdentificationSystem = artifacts.require("FakeProductIdentificationSystem");

module.exports = function(deployer) {
    deployer.deploy(FakeProductIdentificationSystem);
};
