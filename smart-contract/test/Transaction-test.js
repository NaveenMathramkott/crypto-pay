const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, Crypto-pay!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello, Crypto-pay!");

    const setGreetingTx = await greeter.setGreeting("welcome to crypto pay!");

    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("welcome to crypto pay!");
  });
});
