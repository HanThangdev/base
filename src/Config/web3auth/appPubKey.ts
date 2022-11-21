// import { getED25519Key } from "@toruslabs/openlogin-ed25519";
import { getPublicCompressed } from "@toruslabs/eccrypto";
import { Web3AuthCore } from "@web3auth/core";
import { CHAIN_CONFIG_TYPE } from "@config/chainConfig";
import { CHAIN_INFOR } from "@constants";

export const getAppPubKey = async(web3auth: Web3AuthCore, chain : CHAIN_CONFIG_TYPE) => {
  const appScopedPrivkey: any = await web3auth?.provider?.request({
    method: CHAIN_INFOR[chain].method, // use "private_key" for other non-evm chains
  });
  const appPubKey = getPublicCompressed(Buffer.from(appScopedPrivkey?.padStart(64, "0"), "hex")).toString("hex");
  return appPubKey
}