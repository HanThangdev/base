[treact-base](../README.md) / [Exports](../modules.md) / Config/store/reducerInjectors

# Module: Config/store/reducerInjectors

## Table of contents

### Functions

- [default](Config_store_reducerInjectors.md#default)
- [injectReducerFactory](Config_store_reducerInjectors.md#injectreducerfactory)

## Functions

### default

▸ **default**(`store`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | `any` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `injectReducer` | (`key`: `any`, `reducer`: `any`) => `void` |

#### Defined in

src/Config/store/reducerInjectors.ts:30

___

### injectReducerFactory

▸ **injectReducerFactory**(`store`, `isValid`): (`key`: `any`, `reducer`: `any`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | `any` |
| `isValid` | `boolean` |

#### Returns

`fn`

▸ (`key`, `reducer`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |
| `reducer` | `any` |

##### Returns

`void`

#### Defined in

src/Config/store/reducerInjectors.ts:7
