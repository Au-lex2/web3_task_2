
const { ethers } = require("hardhat");

const hre = require("hardhat");

async function main() {
  await hre.run('compile');

  const ICO = await hre.ethers.getContractFactory("BlockchainUNN_ICO");
  const token_address = "0x000000000000000000000000000000000000dEaD";
  const ico = await ICO.deploy(token_address);
  await ico.deployed();
  console.log("ICO deployed to:", ico.address);

  console.log("Verifying ICO on Etherscan...");
  await hre.run("verify:verify", {
    address: ico.address,
    constructorArguments: [token_address],
  });
  console.log("ICO verified on Etherscan");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
