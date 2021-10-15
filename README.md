# hnd-hardhat-test
Vanilla test for Hardhat forking of simple deploy script

To run:

`npm install`

`cp .env.sample .env`

Add a throwaway account/PK to .env

`npx hardhat compile`

Alter the mainnet/testnet urls in hardhat.config.ts if desired.

`npx hardhat run deploy.ts`
