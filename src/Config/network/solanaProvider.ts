/* eslint-disable import/no-cycle */
/* eslint-disable consistent-return */
import { IWalletProvider } from "@config/network/provider";
import { SafeEventEmitterProvider } from "@web3auth/base";
import { SolanaWallet } from "@web3auth/solana-provider";

const solanaProvider = (provider: SafeEventEmitterProvider): IWalletProvider => {
  const solanaWallet = new SolanaWallet(provider);

  const getAccounts = async (): Promise<string[]> => {
    try {
      const acc = await solanaWallet.requestAccounts();
      return acc;
    } catch (error) {
      console.error("Error", error);
      return [];
    }
  };

  const getBalance = async () => {
    try {
      const accounts = await solanaWallet.requestAccounts();
      const balance = await solanaWallet.request({ method: "getBalance", params: accounts });
      return balance
    } catch (error) {
      console.error("Error", error);
    }
  };

  const signMessage = async () => {
    try {
      const msg = Buffer.from("Test Signing Message ", "utf8");
      const res = await solanaWallet.signMessage(msg);
      return res
    } catch (error) {
      console.error("Error", error);
    }
  };
  const signV4Message = async () => {
    
  };

  const getPrivateKey = async () => {
    try {
      const privateKey = await solanaWallet.request({
        method: "eth_private_key",
      });

      return privateKey;
    } catch (error) {
      return error as string;
    }
  };

  return { getAccounts, getBalance, signMessage, signV4Message, getPrivateKey };
};

export default solanaProvider;
