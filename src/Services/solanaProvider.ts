import { SafeEventEmitterProvider } from "@web3auth/base";
import { SolanaWallet } from "@web3auth/solana-provider";
import { IWalletProvider } from "./walletProvider";

const solanaProvider = (provider: SafeEventEmitterProvider, uiConsole: (...args: unknown[]) => void): IWalletProvider => {
  const solanaWallet = new SolanaWallet(provider);

  const getAccounts = async (): Promise<string[]> => {
    try {
      const acc = await solanaWallet.requestAccounts();
      uiConsole("Solana accounts", acc);
      return acc;
    } catch (error) {
      console.error("Error", error);
      uiConsole("error", error);
      return [];
    }
  };

  const getBalance = async () => {
    try {
      const accounts = await solanaWallet.requestAccounts();
      const balance = await solanaWallet.request({ method: "getBalance", params: accounts });
      uiConsole("Solana balance", balance);
    } catch (error) {
      console.error("Error", error);
      uiConsole("error", error);
    }
  };

  const signMessage = async () => {
    try {
      const msg = Buffer.from("Test Signing Message ", "utf8");
      const res = await solanaWallet.signMessage(msg);
      uiConsole("Solana sign message", res);
    } catch (error) {
      console.error("Error", error);
      uiConsole("error", error);
    }
  };
  const signV4Message = async () => {
    
      uiConsole("error, method not supported ");
    
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
