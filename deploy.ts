import { ethers } from "hardhat";
import { Hundred__factory } from "./typechain";

const deploy = async () => {
    const [ signer ] = await ethers.getSigners()
    const factory = new Hundred__factory(signer);
    const deployResult = await factory.deploy(signer.address);
    console.log(`contract deployed address: ${deployResult.address}, hash: ${deployResult.deployTransaction.hash}`);
}

deploy();