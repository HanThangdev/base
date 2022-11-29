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

export const CLIENT_ID = "BD8pvWp8a7mYvc8V2adDX4BrnEb72psCq4CcIkvFUyuj44c6e0InroHoMWqk1Wz6IKw1dJ8Jbbye0X8sSGi9IJU"