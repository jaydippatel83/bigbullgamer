const hre = require("hardhat");
 
 const VRFCoordinator = "0x8C7382F9D8f56b33781fE506E897a4F1e2d17255";
 const LINKToken = "0x326C977E6efc84E512bB9C30f76E30c160eD06FB";
 const keyHash ='0x4447a51eaaa911ffc387867dc26cf8b8119ac8d00d2cac4512c57a18b0a90d1a';
 

async function main() {
  const BigBullGamers = await hre.ethers.getContractFactory("BigBullGamers");
  const bigBullGamers = await BigBullGamers.deploy();
  await bigBullGamers.deployed();
  console.log("bigBullGamers deployed to:", bigBullGamers.address);

  const Token = await hre.ethers.getContractFactory("PostToken");
  const token = await Token.deploy(bigBullGamers.address);
  await token.deployed();
  console.log("Token deployed to:", token.address);

  const MintNFT = await hre.ethers.getContractFactory("MintRewardNFT");
  const mintnft = await MintNFT.deploy();
  await mintnft.deployed();
  console.log("MintNFT deployed to:", mintnft.address);

  const BigBullGamersMemoryGame = await hre.ethers.getContractFactory(
    "MemoryGameNFT"
  );
  const bigBullGamersMemoryGame = await BigBullGamersMemoryGame.deploy();
  await bigBullGamersMemoryGame.deployed();
  console.log("BigBullGamersMemoryGame deployed to:", bigBullGamersMemoryGame.address);

  const BigBullGamerskLottery = await hre.ethers.getContractFactory(
    "LuckyLotteryNFT"
  );
  const bigBullGamerskLottery = await BigBullGamerskLottery.deploy();
  await bigBullGamerskLottery.deployed();
  console.log("BigBullGamerskLottery deployed to:", bigBullGamerskLottery.address);

  const Contest = await hre.ethers.getContractFactory("ContestToken");
  const contest = await Contest.deploy(bigBullGamers.address);
  await contest.deployed();
  console.log("contest deployed to:", contest.address);

  const RandomNumberGenerator = await hre.ethers.getContractFactory(
    "RandomNumberGenerator"
  );
  const randomNumberGenerator = await RandomNumberGenerator.deploy(
    VRFCoordinator,
    LINKToken,
    keyHash
  );
  await randomNumberGenerator.deployed();
  console.log(
    "RandomNumberGenerator deployed to:",
    randomNumberGenerator.address
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
