[treact-base](../README.md) / [Exports](../modules.md) / Modules/auth/store/selectors

# Module: Modules/auth/store/selectors

## Table of contents

### Functions

- [makeSelectAuthentication](Modules_auth_store_selectors.md#makeselectauthentication)
- [selectAuthentication](Modules_auth_store_selectors.md#selectauthentication)

## Functions

### makeSelectAuthentication

▸ **makeSelectAuthentication**(): (`state`: { `auth`: [`AuthState`](Types_Store_auth.md#authstate) ; `global`: [`GlobalState`](Types_Store_global.md#globalstate) ; `registrationCourses`: [`CourseState`](Types_Store_course.md#coursestate)  }, ...`params`: []) => [`AuthState`](Types_Store_auth.md#authstate) & `OutputSelectorFields`<(...`args`: [[`AuthState`](Types_Store_auth.md#authstate)]) => [`AuthState`](Types_Store_auth.md#authstate) & { `clearCache`: () => `void`  }\> & { `clearCache`: () => `void`  }

#### Returns

(`state`: { `auth`: [`AuthState`](Types_Store_auth.md#authstate) ; `global`: [`GlobalState`](Types_Store_global.md#globalstate) ; `registrationCourses`: [`CourseState`](Types_Store_course.md#coursestate)  }, ...`params`: []) => [`AuthState`](Types_Store_auth.md#authstate) & `OutputSelectorFields`<(...`args`: [[`AuthState`](Types_Store_auth.md#authstate)]) => [`AuthState`](Types_Store_auth.md#authstate) & { `clearCache`: () => `void`  }\> & { `clearCache`: () => `void`  }

#### Defined in

src/Modules/auth/store/selectors.ts:15

___

### selectAuthentication

▸ **selectAuthentication**(`store`): [`AuthState`](Types_Store_auth.md#authstate)

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | [`Store`](Types_Store.md#store) |

#### Returns

[`AuthState`](Types_Store_auth.md#authstate)

#### Defined in

src/Modules/auth/store/selectors.ts:13
