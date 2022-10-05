[treact-base](../README.md) / [Exports](../modules.md) / Modules/course/registration\_course/store/selectors

# Module: Modules/course/registration\_course/store/selectors

## Table of contents

### Functions

- [makeSelectRegistrationCourses](Modules_course_registration_course_store_selectors.md#makeselectregistrationcourses)
- [selectRegistrationCourses](Modules_course_registration_course_store_selectors.md#selectregistrationcourses)

## Functions

### makeSelectRegistrationCourses

▸ **makeSelectRegistrationCourses**(): (`state`: { `auth`: [`AuthState`](Types_Store_auth.md#authstate) ; `global`: [`GlobalState`](Types_Store_global.md#globalstate) ; `registrationCourses`: [`CourseState`](Types_Store_course.md#coursestate)  }, ...`params`: []) => [`CourseState`](Types_Store_course.md#coursestate) & `OutputSelectorFields`<(...`args`: [[`CourseState`](Types_Store_course.md#coursestate)]) => [`CourseState`](Types_Store_course.md#coursestate) & { `clearCache`: () => `void`  }\> & { `clearCache`: () => `void`  }

#### Returns

(`state`: { `auth`: [`AuthState`](Types_Store_auth.md#authstate) ; `global`: [`GlobalState`](Types_Store_global.md#globalstate) ; `registrationCourses`: [`CourseState`](Types_Store_course.md#coursestate)  }, ...`params`: []) => [`CourseState`](Types_Store_course.md#coursestate) & `OutputSelectorFields`<(...`args`: [[`CourseState`](Types_Store_course.md#coursestate)]) => [`CourseState`](Types_Store_course.md#coursestate) & { `clearCache`: () => `void`  }\> & { `clearCache`: () => `void`  }

#### Defined in

src/Modules/course/registration_course/store/selectors.ts:16

___

### selectRegistrationCourses

▸ **selectRegistrationCourses**(`store`): [`CourseState`](Types_Store_course.md#coursestate)

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | [`Store`](Types_Store.md#store) |

#### Returns

[`CourseState`](Types_Store_course.md#coursestate)

#### Defined in

src/Modules/course/registration_course/store/selectors.ts:13
