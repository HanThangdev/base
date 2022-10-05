[treact-base](../README.md) / [Exports](../modules.md) / Config/store/reducers

# Module: Config/store/reducers

## Table of contents

### Variables

- [history](Config_store_reducers.md#history)

### Functions

- [default](Config_store_reducers.md#default)

## Variables

### history

• `Const` **history**: `History`<`unknown`\>

#### Defined in

src/Config/store/reducers.ts:10

## Functions

### default

▸ **default**(`injectedReducers?`): `Reducer`<`CombinedState`<`Object`\>, `AnyAction`\>

Merges the main reducer with the router state and dynamically injected reducers

#### Parameters

| Name | Type |
| :------ | :------ |
| `injectedReducers` | `Object` |

#### Returns

`Reducer`<`CombinedState`<`Object`\>, `AnyAction`\>

#### Defined in

src/Config/store/reducers.ts:16
