[treact-base](../README.md) / [Exports](../modules.md) / Hooks/injectStore/auth

# Module: Hooks/injectStore/auth

## Table of contents

### Functions

- [useAuth](Hooks_injectStore_auth.md#useauth)
- [useRoles](Hooks_injectStore_auth.md#useroles)

## Functions

### useAuth

▸ **useAuth**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `authenticated` | `any` |
| `error` | `any` |
| `isLoading` | `any` |
| `loadProfileAction` | (`payload?`: `any`) => { `payload`: [`Payload`](Types_Store.md#payload) ; `type`: `string`  } |
| `loginAction` | (`payload?`: `any`) => { `payload`: [`Payload`](Types_Store.md#payload) ; `type`: `string`  } |
| `profile` | `any` |

#### Defined in

src/Hooks/injectStore/auth.ts:11

___

### useRoles

▸ **useRoles**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `isAdmin` | `boolean` |
| `isCompany` | `boolean` |
| `isSuperAdmin` | `boolean` |

#### Defined in

src/Hooks/injectStore/auth.ts:33
