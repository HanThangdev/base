[treact-base](../README.md) / [Exports](../modules.md) / Types/Store

# Module: Types/Store

## Table of contents

### Type Aliases

- [Action](Types_Store.md#action)
- [ActionCallback](Types_Store.md#actioncallback)
- [Payload](Types_Store.md#payload)
- [Store](Types_Store.md#store)

## Type Aliases

### Action

Ƭ **Action**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `error?` | `any` |
| `payload` | `any` |
| `type` | `string` |

#### Defined in

src/Types/Store/index.ts:17

___

### ActionCallback

Ƭ **ActionCallback**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `done?` | () => {} |
| `error?` | () => {} |

#### Defined in

src/Types/Store/index.ts:5

___

### Payload

Ƭ **Payload**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `callback?` | [`ActionCallback`](Types_Store.md#actioncallback) |
| `data?` | `any` |
| `id?` | `string` \| `number` |
| `params?` | `any` |

#### Defined in

src/Types/Store/index.ts:10

___

### Store

Ƭ **Store**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `auth` | [`AuthState`](Types_Store_auth.md#authstate) |
| `global` | [`GlobalState`](Types_Store_global.md#globalstate) |
| `registrationCourses` | [`CourseState`](Types_Store_course.md#coursestate) |

#### Defined in

src/Types/Store/index.ts:23
