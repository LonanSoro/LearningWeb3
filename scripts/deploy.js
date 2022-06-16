// import ethers
const { ethers } = require("hardhat");


async function main() {
    // Tell the script we want to deploy the 'NFTee.sol' contract
    const contract = await ethers.getContractFactory("NFTee");

    // Deploy it
    const deployedContract = await contract.deploy();
    await deployedContract.deployed();


    // Print the address of the deployed contract
    console.log("The NFT Contract deployed to : ", deployedContract.address);


}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });