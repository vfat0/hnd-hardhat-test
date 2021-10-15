import { ethers } from "hardhat";
import { Hundred__factory } from "./typechain";

const deploy = async () => {
    const [ signer ] = await ethers.getSigners()
    const factory = new Hundred__factory(signer);
    await factory.deploy(signer.address);
}

deploy();