[treact-base](../README.md) / [Exports](../modules.md) / Modules/auth/store/saga

# Module: Modules/auth/store/saga

## Table of contents

### Functions

- [default](Modules_auth_store_saga.md#default)
- [loadProfileSaga](Modules_auth_store_saga.md#loadprofilesaga)
- [loginSaga](Modules_auth_store_saga.md#loginsaga)

## Functions

### default

▸ **default**(): `Generator`<`ForkEffect`<`never`\>, `void`, `unknown`\>

#### Returns

`Generator`<`ForkEffect`<`never`\>, `void`, `unknown`\>

#### Defined in

src/Modules/auth/store/saga.ts:50

___

### loadProfileSaga

▸ **loadProfileSaga**(): `Generator`<`PutEffect`<{ `payload`: { `profile`: `any`  } ; `type`: `string`  }\> \| `PutEffect`<{ `error`: `unknown` ; `type`: `string`  }\>, `void`, `unknown`\>

#### Returns

`Generator`<`PutEffect`<{ `payload`: { `profile`: `any`  } ; `type`: `string`  }\> \| `PutEffect`<{ `error`: `unknown` ; `type`: `string`  }\>, `void`, `unknown`\>

#### Defined in

src/Modules/auth/store/saga.ts:29

___

### loginSaga

▸ **loginSaga**(`__namedParameters`): `Generator`<`Promise`<`any`\> \| `PutEffect`<{ `payload`: { `profile`: `any` = result } ; `type`: `string`  }\> \| `PutEffect`<{ `error`: `unknown` ; `type`: `string`  }\>, `void`, `Object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`Action`](Types_Store.md#action) |

#### Returns

`Generator`<`Promise`<`any`\> \| `PutEffect`<{ `payload`: { `profile`: `any` = result } ; `type`: `string`  }\> \| `PutEffect`<{ `error`: `unknown` ; `type`: `string`  }\>, `void`, `Object`\>

#### Defined in

src/Modules/auth/store/saga.ts:9
