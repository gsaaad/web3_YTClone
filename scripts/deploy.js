const hre = require("hardhat");

async function main() {
  const YouTube = await hre.ethers.getContractFactory("YouTube");
  console.log(YouTube);
  const youtube = await YouTube.deploy();

  await youtube.deployed();

  console.log("Youtube Contract deployed to :", youtube.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
