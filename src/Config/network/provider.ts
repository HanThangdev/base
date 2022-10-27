/* eslint-disable import/no-cycle */
import { SafeEventEmitterProvider } from "@web3auth/base";
import ethProvider from "./ethProvider";
import solanaProvider from "./solanaProvider";


export interface IWalletProvider {
  getAccounts: () => Promise<any>;
  getBalance: () => Promise<any>;
  signMessage: () => Promise<any>;
  signV4Message: () => Promise<any>;
  getPrivateKey: () => Promise<any>;

}

export const getWalletProvider = (chain: string, provider: SafeEventEmitterProvider): IWalletProvider => {
  if (chain === "solana") {
    return solanaProvider(provider);
  }
  return ethProvider(provider);
};
