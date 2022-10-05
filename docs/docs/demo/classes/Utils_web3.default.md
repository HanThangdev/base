[treact-base](../README.md) / [Exports](../modules.md) / [Utils/web3](../modules/Utils_web3.md) / default

# Class: default

[Utils/web3](../modules/Utils_web3.md).default

## Table of contents

### Constructors

- [constructor](Utils_web3.default.md#constructor)

### Methods

- [addTokenWallet](Utils_web3.default.md#addtokenwallet)
- [approveEth](Utils_web3.default.md#approveeth)
- [approveICO](Utils_web3.default.md#approveico)
- [approveTokenCCT](Utils_web3.default.md#approvetokencct)
- [approveTokenHTC](Utils_web3.default.md#approvetokenhtc)
- [approveTokenPRZ](Utils_web3.default.md#approvetokenprz)
- [changeNetwork](Utils_web3.default.md#changenetwork)
- [checkValidAddress](Utils_web3.default.md#checkvalidaddress)
- [checkValidNetwork](Utils_web3.default.md#checkvalidnetwork)
- [claimPRZStaking](Utils_web3.default.md#claimprzstaking)
- [claimSPCStaking](Utils_web3.default.md#claimspcstaking)
- [depositBNB](Utils_web3.default.md#depositbnb)
- [depositEth](Utils_web3.default.md#depositeth)
- [depositToken](Utils_web3.default.md#deposittoken)
- [formatAddress](Utils_web3.default.md#formataddress)
- [getAddressOfOwner](Utils_web3.default.md#getaddressofowner)
- [getBalance](Utils_web3.default.md#getbalance)
- [getBalanceBUSD](Utils_web3.default.md#getbalancebusd)
- [getBalanceOfToken](Utils_web3.default.md#getbalanceoftoken)
- [getBalanceSPC](Utils_web3.default.md#getbalancespc)
- [getChainIdNetwork](Utils_web3.default.md#getchainidnetwork)
- [getFee](Utils_web3.default.md#getfee)
- [getMetaDataStakingPoolByUser](Utils_web3.default.md#getmetadatastakingpoolbyuser)
- [getNativePriceRate](Utils_web3.default.md#getnativepricerate)
- [getProviderFee](Utils_web3.default.md#getproviderfee)
- [getSPCPrice](Utils_web3.default.md#getspcprice)
- [getSPCPriceByTokenRate](Utils_web3.default.md#getspcpricebytokenrate)
- [getSPCReturns](Utils_web3.default.md#getspcreturns)
- [getSPCReturnsByToken](Utils_web3.default.md#getspcreturnsbytoken)
- [getTokenPrice](Utils_web3.default.md#gettokenprice)
- [getTokenPriceRate](Utils_web3.default.md#gettokenpricerate)
- [getTokenReturnsBySPC](Utils_web3.default.md#gettokenreturnsbyspc)
- [getTransactionReceipt](Utils_web3.default.md#gettransactionreceipt)
- [getWeb3Instance](Utils_web3.default.md#getweb3instance)
- [harvestICO](Utils_web3.default.md#harvestico)
- [removeWeb3Instance](Utils_web3.default.md#removeweb3instance)
- [sendStaking](Utils_web3.default.md#sendstaking)
- [sendTransaction](Utils_web3.default.md#sendtransaction)
- [sendTransactionClaimBonus](Utils_web3.default.md#sendtransactionclaimbonus)
- [sendTransactionInvest](Utils_web3.default.md#sendtransactioninvest)
- [sign](Utils_web3.default.md#sign)
- [sleep](Utils_web3.default.md#sleep)
- [spcToBNB](Utils_web3.default.md#spctobnb)
- [spcToBUSD](Utils_web3.default.md#spctobusd)
- [spcToETH](Utils_web3.default.md#spctoeth)
- [spcToToken](Utils_web3.default.md#spctotoken)
- [swapPRZToCCT](Utils_web3.default.md#swapprztocct)
- [swapSPCtoHTC](Utils_web3.default.md#swapspctohtc)
- [swapTokenToSPC](Utils_web3.default.md#swaptokentospc)
- [transferTransaction](Utils_web3.default.md#transfertransaction)

## Constructors

### constructor

• **new default**()

## Methods

### addTokenWallet

▸ `Static` **addTokenWallet**(`chainId`, `tokenAddress`, `tokenSymbol`, `tokenDecimals`, `tokenImage`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `any` |
| `tokenAddress` | `any` |
| `tokenSymbol` | `any` |
| `tokenDecimals` | `any` |
| `tokenImage` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

src/Utils/web3.ts:280

___

### approveEth

▸ `Static` **approveEth**(`publicAddress`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicAddress` | `any` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

src/Utils/web3.ts:362

___

### approveICO

▸ `Static` **approveICO**(`publicAddress`, `amount`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicAddress` | `any` |
| `amount` | `any` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

src/Utils/web3.ts:1021

___

### approveTokenCCT

▸ `Static` **approveTokenCCT**(`publicAddress`, `amount`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicAddress` | `any` |
| `amount` | `any` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

src/Utils/web3.ts:572

___

### approveTokenHTC

▸ `Static` **approveTokenHTC**(`publicAddress`, `amount`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicAddress` | `any` |
| `amount` | `any` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

src/Utils/web3.ts:535

___

### approveTokenPRZ

▸ `Static` **approveTokenPRZ**(`publicAddress`, `amount`, `address?`): `Promise`<`unknown`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `publicAddress` | `string` | `undefined` |
| `amount` | `number` | `undefined` |
| `address` | `any` | `web3Info.TOKENIZE_ADDRESS` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

src/Utils/web3.ts:553

___

### changeNetwork

▸ `Static` **changeNetwork**(`chainId`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

src/Utils/web3.ts:237

___

### checkValidAddress

▸ `Static` **checkValidAddress**(`address`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` \| `string`[] |

#### Returns

`any`

#### Defined in

src/Utils/web3.ts:913

___

### checkValidNetwork

▸ `Static` **checkValidNetwork**(`id`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

src/Utils/web3.ts:225

___

### claimPRZStaking

▸ `Static` **claimPRZStaking**(`publicAddress`, `amount`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicAddress` | `any` |
| `amount` | `any` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

src/Utils/web3.ts:956

___

### claimSPCStaking

▸ `Static` **claimSPCStaking**(`publicAddress`, `amount`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicAddress` | `any` |
| `amount` | `any` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

src/Utils/web3.ts:972

___

### depositBNB

▸ `Static` **depositBNB**(`publicAddress`, `amount`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicAddress` | `any` |
| `amount` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/Utils/web3.ts:469

___

### depositEth

▸ `Static` **depositEth**(`publicAddress`, `amount`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicAddress` | `any` |
| `amount` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/Utils/web3.ts:395

___

### depositToken

▸ `Static` **depositToken**(`publicAddress`, `amount`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicAddress` | `any` |
| `amount` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/Utils/web3.ts:381

___

### formatAddress

▸ `Static` **formatAddress**(`address`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `any` |

#### Returns

`any`

#### Defined in

src/Utils/web3.ts:908

___

### getAddressOfOwner

▸ `Static` **getAddressOfOwner**(`publicAddress`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicAddress` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/Utils/web3.ts:863

___

### getBalance

▸ `Static` **getBalance**(`publicAddress`): `Promise`<{ `eth`: `string` \| `number` ; `usdt`: `string` \| `number`  } \| { `eth`: `undefined` ; `usdt`: `undefined`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicAddress` | `string` |

#### Returns

`Promise`<{ `eth`: `string` \| `number` ; `usdt`: `string` \| `number`  } \| { `eth`: `undefined` ; `usdt`: `undefined`  }\>

#### Defined in

src/Utils/web3.ts:316

___

### getBalanceBUSD

▸ `Static` **getBalanceBUSD**(`publicAddress`): `Promise`<{ `busd`: `string` \| `number`  } \| { `busd`: `undefined`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicAddress` | `any` |

#### Returns

`Promise`<{ `busd`: `string` \| `number`  } \| { `busd`: `undefined`  }\>

#### Defined in

src/Utils/web3.ts:337

___

### getBalanceOfToken

▸ `Static` **getBalanceOfToken**(`publicAddress`): `Promise`<{ `cct`: `string` \| `number` ; `htc`: `string` \| `number` ; `prz`: `string` \| `number` ; `spc`: `string` \| `number`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicAddress` | `string` |

#### Returns

`Promise`<{ `cct`: `string` \| `number` ; `htc`: `string` \| `number` ; `prz`: `string` \| `number` ; `spc`: `string` \| `number`  }\>

#### Defined in

src/Utils/web3.ts:839

___

### getBalanceSPC

▸ `Static` **getBalanceSPC**(`publicAddress`): `Promise`<{ `spc`: `string` \| `number`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicAddress` | `string` |

#### Returns

`Promise`<{ `spc`: `string` \| `number`  }\>

#### Defined in

src/Utils/web3.ts:353

___

### getChainIdNetwork

▸ `Static` **getChainIdNetwork**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

src/Utils/web3.ts:231

___

### getFee

▸ `Static` **getFee**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

src/Utils/web3.ts:827

___

### getMetaDataStakingPoolByUser

▸ `Static` **getMetaDataStakingPoolByUser**(`publicAddress`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicAddress` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/Utils/web3.ts:921

___

### getNativePriceRate

▸ `Static` **getNativePriceRate**(`publicAddress`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicAddress` | `any` |

#### Returns

`Promise`<`number`\>

#### Defined in

src/Utils/web3.ts:887

___

### getProviderFee

▸ `Static` **getProviderFee**(`publicAddress`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicAddress` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/Utils/web3.ts:501

___

### getSPCPrice

▸ `Static` **getSPCPrice**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

src/Utils/web3.ts:523

___

### getSPCPriceByTokenRate

▸ `Static` **getSPCPriceByTokenRate**(`publicAddress`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicAddress` | `any` |

#### Returns

`Promise`<`number`\>

#### Defined in

src/Utils/web3.ts:874

___

### getSPCReturns

▸ `Static` **getSPCReturns**(`publicAddress`, `amount`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicAddress` | `any` |
| `amount` | `any` |

#### Returns

`Promise`<`number`\>

#### Defined in

src/Utils/web3.ts:435

___

### getSPCReturnsByToken

▸ `Static` **getSPCReturnsByToken**(`publicAddress`, `amount`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicAddress` | `any` |
| `amount` | `any` |

#### Returns

`Promise`<`number`\>

#### Defined in

src/Utils/web3.ts:405

___

### getTokenPrice

▸ `Static` **getTokenPrice**(`tokenAddress`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/Utils/web3.ts:511

___

### getTokenPriceRate

▸ `Static` **getTokenPriceRate**(`publicAddress`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicAddress` | `any` |

#### Returns

`Promise`<`number`\>

#### Defined in

src/Utils/web3.ts:898

___

### getTokenReturnsBySPC

▸ `Static` **getTokenReturnsBySPC**(`publicAddress`, `amount`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicAddress` | `any` |
| `amount` | `any` |

#### Returns

`Promise`<`number`\>

#### Defined in

src/Utils/web3.ts:420

___

### getTransactionReceipt

▸ `Static` **getTransactionReceipt**(`hashID`, `symbol`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hashID` | `string` |
| `symbol` | `string` |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

src/Utils/web3.ts:806

___

### getWeb3Instance

▸ `Static` **getWeb3Instance**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `bscContract` | `any` |
| `busdContract` | `any` |
| `cctContract` | `any` |
| `claimContract` | `any` |
| `erc20StakingContract` | `any` |
| `ethContract` | `any` |
| `htcContract` | `any` |
| `icoLockContract` | `any` |
| `icoReceiveContract` | `any` |
| `nativeStakingContract` | `any` |
| `przContract` | `any` |
| `receiveStakingContract` | `any` |
| `spcContract` | `any` |
| `spcbscContract` | `any` |
| `tokenizeContract` | `any` |
| `usdtContract` | `any` |
| `web3` | `any` |

#### Defined in

src/Utils/web3.ts:79

___

### harvestICO

▸ `Static` **harvestICO**(`publicAddress`, `buyId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicAddress` | `any` |
| `buyId` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/Utils/web3.ts:1056

___

### removeWeb3Instance

▸ `Static` **removeWeb3Instance**(): `void`

#### Returns

`void`

#### Defined in

src/Utils/web3.ts:72

___

### sendStaking

▸ `Static` **sendStaking**(`publicAddress`, `amount`, `nonce`, `signature`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicAddress` | `any` |
| `amount` | `any` |
| `nonce` | `any` |
| `signature` | `any` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

src/Utils/web3.ts:935

___

### sendTransaction

▸ `Static` **sendTransaction**(`publicAddress`, `adminAddress`, `amount`, `type`, `gasPrice`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicAddress` | `any` |
| `adminAddress` | `any` |
| `amount` | `any` |
| `type` | `string` |
| `gasPrice` | `any` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

src/Utils/web3.ts:684

___

### sendTransactionClaimBonus

▸ `Static` **sendTransactionClaimBonus**(`publicAddress`, `amount`, `nonce`, `signature`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicAddress` | `any` |
| `amount` | `any` |
| `nonce` | `any` |
| `signature` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/Utils/web3.ts:781

___

### sendTransactionInvest

▸ `Static` **sendTransactionInvest**(`publicAddress`, `icoPackageId`, `numberOfPurchase`, `amount`, `nonce`, `signature`, `gasPrice`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicAddress` | `any` |
| `icoPackageId` | `any` |
| `numberOfPurchase` | `any` |
| `amount` | `any` |
| `nonce` | `any` |
| `signature` | `any` |
| `gasPrice` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/Utils/web3.ts:1036

___

### sign

▸ `Static` **sign**(`message`, `publicAddress`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `publicAddress` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/Utils/web3.ts:309

___

### sleep

▸ `Static` **sleep**(`milliseconds`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `milliseconds` | `undefined` \| `number` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

src/Utils/web3.ts:801

___

### spcToBNB

▸ `Static` **spcToBNB**(`publicAddress`, `amount`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicAddress` | `any` |
| `amount` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/Utils/web3.ts:479

___

### spcToBUSD

▸ `Static` **spcToBUSD**(`publicAddress`, `amount`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicAddress` | `any` |
| `amount` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/Utils/web3.ts:489

___

### spcToETH

▸ `Static` **spcToETH**(`publicAddress`, `amount`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicAddress` | `any` |
| `amount` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/Utils/web3.ts:447

___

### spcToToken

▸ `Static` **spcToToken**(`publicAddress`, `amount`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicAddress` | `any` |
| `amount` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

src/Utils/web3.ts:457

___

### swapPRZToCCT

▸ `Static` **swapPRZToCCT**(`publicAddress`, `amount`, `tokenIn`, `tokenOut`, `amountOutMin?`): `Promise`<`unknown`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `publicAddress` | `any` | `undefined` |
| `amount` | `any` | `undefined` |
| `tokenIn` | `any` | `undefined` |
| `tokenOut` | `any` | `undefined` |
| `amountOutMin` | `number` | `0` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

src/Utils/web3.ts:650

___

### swapSPCtoHTC

▸ `Static` **swapSPCtoHTC**(`publicAddress`, `amount`, `amountOutMin?`): `Promise`<`unknown`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `publicAddress` | `any` | `undefined` |
| `amount` | `any` | `undefined` |
| `amountOutMin` | `number` | `0` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

src/Utils/web3.ts:620

___

### swapTokenToSPC

▸ `Static` **swapTokenToSPC**(`publicAddress`, `tokenAddress`, `amount`, `amountOutMin?`): `Promise`<`unknown`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `publicAddress` | `any` | `undefined` |
| `tokenAddress` | `any` | `undefined` |
| `amount` | `any` | `undefined` |
| `amountOutMin` | `number` | `0` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

src/Utils/web3.ts:590

___

### transferTransaction

▸ `Static` **transferTransaction**(`publicAddress`, `adminAddress`, `amount`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicAddress` | `any` |
| `adminAddress` | `any` |
| `amount` | `any` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

src/Utils/web3.ts:989
