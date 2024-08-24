const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/StreetNft.sol/StreetNft.json");

const tokenAddress = "0x75F781d52aF72893668a9c8761961432E519Ba9d";
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x8dB0af10847437Fcec2d731A23a261cd9d0EE7c0";

async function main() {
  const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
  const balance = await token.balanceOf(walletAddress);
  console.log(`You now have: ${balance} NFTs in your wallet`);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
