const FakeProductIdentificationSystem = artifacts.require("ProductIdentification");

module.exports = function(deployer) {
    deployer.deploy(FakeProductIdentificationSystem);
};
