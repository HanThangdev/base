[treact-base](../README.md) / [Exports](../modules.md) / Config/store/injectSaga

# Module: Config/store/injectSaga

## Table of contents

### Functions

- [default](Config_store_injectSaga.md#default)
- [useInjectSaga](Config_store_injectSaga.md#useinjectsaga)

## Functions

### default

▸ **default**(`__namedParameters`): (`WrappedComponent`: `any`) => typeof `InjectSaga` & `NonReactStatics`<`any`, {}\>

Dynamically injects a saga, passes component's props as saga arguments

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `any` |

#### Returns

`fn`

▸ (`WrappedComponent`): typeof `InjectSaga` & `NonReactStatics`<`any`, {}\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `WrappedComponent` | `any` |

##### Returns

typeof `InjectSaga` & `NonReactStatics`<`any`, {}\>

#### Defined in

src/Config/store/injectSaga.tsx:22

___

### useInjectSaga

▸ **useInjectSaga**(`__namedParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `any` |

#### Returns

`void`

#### Defined in

src/Config/store/injectSaga.tsx:55
