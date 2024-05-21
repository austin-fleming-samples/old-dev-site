export const TIPJAR_IS_TESTING_MODE = true;

export enum EthereumChainId {
	MAINNET = 1,
	ROPSTEN = 3,
	RINKEBY = 4,
	GOERLI = 5,
	KOVAN = 42,

	ARBITRUM_ONE = 42_161,
	ARBITRUM_RINKEBY = 421_611,

	OPTIMISM = 10,
	OPTIMISTIC_KOVAN = 69,

	POLYGON = 137,
	POLYGON_MUMBAI = 80_001
}

export const ETHEREUM_CHAIN_IDS = {
	MAINNET: 1,
	RINKEBY: 4
};

export const POLYGON_CHAIN_IDS = {
	MAINNET: 137,
	MUMBAI: 80_001
};

/* 
----------------
*/
export const ETHEREUM_CONFIG = {
	ADDRESS: TIPJAR_IS_TESTING_MODE
		? import.meta.env.VITE_ETHEREUM_TESTNET_ADDRESS
		: import.meta.env.VITE_ETHEREUM_MAINNET_ADDRESS,
	CHAIN_ID: TIPJAR_IS_TESTING_MODE ? ETHEREUM_CHAIN_IDS['RINKEBY'] : ETHEREUM_CHAIN_IDS['MAINNET']
};