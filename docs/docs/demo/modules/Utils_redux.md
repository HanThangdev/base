[treact-base](../README.md) / [Exports](../modules.md) / Utils/redux

# Module: Utils/redux

## Table of contents

### Functions

- [FAILURE](Utils_redux.md#failure)
- [REQUEST](Utils_redux.md#request)
- [SUCCESS](Utils_redux.md#success)
- [createReducer](Utils_redux.md#createreducer)
- [updateItemInArray](Utils_redux.md#updateiteminarray)
- [updateObject](Utils_redux.md#updateobject)

## Functions

### FAILURE

▸ **FAILURE**(`actionType`): `string`

Appends FAILURE async action type

#### Parameters

| Name | Type |
| :------ | :------ |
| `actionType` | `any` |

#### Returns

`string`

#### Defined in

src/Utils/redux.ts:49

___

### REQUEST

▸ **REQUEST**(`actionType`): `string`

Appends REQUEST async action type

#### Parameters

| Name | Type |
| :------ | :------ |
| `actionType` | `any` |

#### Returns

`string`

#### Defined in

src/Utils/redux.ts:37

___

### SUCCESS

▸ **SUCCESS**(`actionType`): `string`

Appends SUCCESS async action type

#### Parameters

| Name | Type |
| :------ | :------ |
| `actionType` | `any` |

#### Returns

`string`

#### Defined in

src/Utils/redux.ts:43

___

### createReducer

▸ **createReducer**(`initialState?`, `handlers?`): (`state`: `any`, `action`: `any`) => `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialState?` | `any` |
| `handlers?` | `any` |

#### Returns

`fn`

▸ (`state?`, `action?`): `any`

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `state` | `any` | `initialState` |
| `action` | `any` | `{}` |

##### Returns

`any`

#### Defined in

src/Utils/redux.ts:23

___

### updateItemInArray

▸ **updateItemInArray**(`array`, `itemId`, `updateItemCallback`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any`[] |
| `itemId` | `any` |
| `updateItemCallback` | `any` |

#### Returns

`any`[]

#### Defined in

src/Utils/redux.ts:8

___

### updateObject

▸ **updateObject**(`oldObject`, `newValues`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldObject` | `any` |
| `newValues` | `any` |

#### Returns

`any`

#### Defined in

src/Utils/redux.ts:2
