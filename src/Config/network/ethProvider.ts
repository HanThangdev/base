/* eslint-disable import/no-cycle */
/* eslint-disable consistent-return */
import { getV4TypedData } from "@constants";
import { SafeEventEmitterProvider } from "@web3auth/base";
import Web3 from "web3";
import { IWalletProvider } from "./provider";

const ethProvider = (provider: SafeEventEmitterProvider): IWalletProvider => {
  const getAccounts = async () => {
    try {
      const web3 = new Web3(provider as any);
      const accounts = await web3.eth.getAccounts();
      return accounts
    } catch (error) {
      console.error("Error", error);
    }
  };

  const getBalance = async () => {
    try {
      const web3 = new Web3(provider as any);
      const accounts = await web3.eth.getAccounts();
      const balance = await web3.eth.getBalance(accounts[0]);
      return balance
    } catch (error) {
      console.error("Error", error);
    }
  };

  const signMessage = async () => {
    try {
      const pubKey = (await provider.request({ method: "eth_accounts" })) as string[];
      const web3 = new Web3(provider as any);
      const message = "0x47173285a8d7341e5e972fc677286384f802f8ef42a5ec5f03bbfa254cb01fad";
      (web3.currentProvider as any)?.send(
        {
          method: "eth_sign",
          params: [pubKey[0], message],
          from: pubKey[0],
        },
        (err: Error, result: any) => {
          if (err) {
            return console.log(err, result)
          }
        }
      );
    } catch (error) {
      console.log("error", error);
    }
  };
  const signV4Message = async () => {
    try {
      const pubKey = (await provider.request({ method: "eth_accounts" })) as string[];
      const web3 = new Web3(provider as any);
      const chainId = await web3.eth.getChainId()
      const typedData = getV4TypedData(chainId.toString());
      (web3.currentProvider as any)?.send(
        {
          method: "eth_signTypedData_v4",
          params: [pubKey[0], JSON.stringify(typedData)],
          from: pubKey[0],
        },
        (err: Error, result: any) => {
          if (err) {
            return console.log(err);
          }
          console.log("Eth sign message => true", result);
        }
      );
    } catch (error) {
      console.log("error", error);
    }
  };

  const getPrivateKey = async () => {
      try {
        const privateKey = (await provider.request({ method: "eth_private_key" })) as string[];
        console.log("privateKey", privateKey)
        return privateKey;
      } catch (error) {
        console.error("Error", error);
      }
  };

  return { getAccounts, getBalance, signMessage, signV4Message, getPrivateKey };
};

export default ethProvider;
