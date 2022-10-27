export const WEB3AUTH_NETWORK = {
  mainnet: {
    displayName: "Mainnet",
  },
  testnet: {
    displayName: "Testnet",
  },
  cyan: {
    displayName: "Cyan",
  },
} as const;

export type Web3authNetWorkType = keyof typeof WEB3AUTH_NETWORK;


export const CHAIN_INFOR= {
  ETH_testnet: {
    method:"eth_private_key"
  },
  ETH_mainnet: {
    method:"eth_private_key"
  },
  solana: {
    method:""
  },
  polygon: {
    method:""
  } ,
} as const;