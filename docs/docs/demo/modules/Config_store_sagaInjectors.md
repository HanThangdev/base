[treact-base](../README.md) / [Exports](../modules.md) / Config/store/sagaInjectors

# Module: Config/store/sagaInjectors

## Table of contents

### Functions

- [default](Config_store_sagaInjectors.md#default)
- [ejectSagaFactory](Config_store_sagaInjectors.md#ejectsagafactory)
- [injectSagaFactory](Config_store_sagaInjectors.md#injectsagafactory)

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
| `ejectSaga` | (`key`: `any`) => `void` |
| `injectSaga` | (`key`: `any`, `descriptor`: `any`, `args?`: `any`) => `void` |

#### Defined in

src/Config/store/sagaInjectors.ts:90

___

### ejectSagaFactory

▸ **ejectSagaFactory**(`store`, `isValid`): (`key`: `any`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | `any` |
| `isValid` | `boolean` |

#### Returns

`fn`

▸ (`key`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

##### Returns

`void`

#### Defined in

src/Config/store/sagaInjectors.ts:69

___

### injectSagaFactory

▸ **injectSagaFactory**(`store`, `isValid`): (`key`: `any`, `descriptor`: `any`, `args?`: `any`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | `any` |
| `isValid` | `boolean` |

#### Returns

`fn`

▸ (`key`, `descriptor?`, `args?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |
| `descriptor` | `any` |
| `args?` | `any` |

##### Returns

`void`

#### Defined in

src/Config/store/sagaInjectors.ts:30
