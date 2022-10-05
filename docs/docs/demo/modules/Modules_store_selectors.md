[treact-base](../README.md) / [Exports](../modules.md) / Modules/store/selectors

# Module: Modules/store/selectors

## Table of contents

### Functions

- [makeSelectGlobal](Modules_store_selectors.md#makeselectglobal)
- [selectGlobal](Modules_store_selectors.md#selectglobal)

## Functions

### makeSelectGlobal

▸ **makeSelectGlobal**(): (`state`: { `auth`: [`AuthState`](Types_Store_auth.md#authstate) ; `global`: [`GlobalState`](Types_Store_global.md#globalstate) ; `registrationCourses`: [`CourseState`](Types_Store_course.md#coursestate)  }, ...`params`: []) => [`GlobalState`](Types_Store_global.md#globalstate) & `OutputSelectorFields`<(...`args`: [[`GlobalState`](Types_Store_global.md#globalstate)]) => [`GlobalState`](Types_Store_global.md#globalstate) & { `clearCache`: () => `void`  }\> & { `clearCache`: () => `void`  }

#### Returns

(`state`: { `auth`: [`AuthState`](Types_Store_auth.md#authstate) ; `global`: [`GlobalState`](Types_Store_global.md#globalstate) ; `registrationCourses`: [`CourseState`](Types_Store_course.md#coursestate)  }, ...`params`: []) => [`GlobalState`](Types_Store_global.md#globalstate) & `OutputSelectorFields`<(...`args`: [[`GlobalState`](Types_Store_global.md#globalstate)]) => [`GlobalState`](Types_Store_global.md#globalstate) & { `clearCache`: () => `void`  }\> & { `clearCache`: () => `void`  }

#### Defined in

src/Modules/store/selectors.ts:15

___

### selectGlobal

▸ **selectGlobal**(`store`): [`GlobalState`](Types_Store_global.md#globalstate)

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | [`Store`](Types_Store.md#store) |

#### Returns

[`GlobalState`](Types_Store_global.md#globalstate)

#### Defined in

src/Modules/store/selectors.ts:13
