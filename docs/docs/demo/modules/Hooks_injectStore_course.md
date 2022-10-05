[treact-base](../README.md) / [Exports](../modules.md) / Hooks/injectStore/course

# Module: Hooks/injectStore/course

## Table of contents

### Functions

- [useCreateCourse](Hooks_injectStore_course.md#usecreatecourse)
- [useLoadCourse](Hooks_injectStore_course.md#useloadcourse)
- [useRegistrationCourses](Hooks_injectStore_course.md#useregistrationcourses)
- [useUpdateCourse](Hooks_injectStore_course.md#useupdatecourse)

## Functions

### useCreateCourse

▸ **useCreateCourse**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createCourseAction` | (`payload?`: `any`) => { `payload`: [`Payload`](Types_Store.md#payload) ; `type`: `string`  } |
| `error` | `any` |
| `isSubmitting` | `any` |

#### Defined in

src/Hooks/injectStore/course.ts:40

___

### useLoadCourse

▸ **useLoadCourse**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `course` | `any` |
| `loadCourseAction` | (`payload?`: `any`) => { `payload`: [`Payload`](Types_Store.md#payload) ; `type`: `string`  } |

#### Defined in

src/Hooks/injectStore/course.ts:79

___

### useRegistrationCourses

▸ **useRegistrationCourses**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `courses` | `any` |
| `deleteCoursesAction` | (`payload?`: `any`) => { `payload`: [`Payload`](Types_Store.md#payload) ; `type`: `string`  } |
| `error` | `any` |
| `filter` | `any` |
| `isLoading` | `any` |
| `loadCoursesAction` | (`payload?`: `any`) => { `payload`: [`Payload`](Types_Store.md#payload) ; `type`: `string`  } |
| `pagination` | `any` |

#### Defined in

src/Hooks/injectStore/course.ts:16

___

### useUpdateCourse

▸ **useUpdateCourse**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `course` | `any` |
| `editCourseAction` | (`payload?`: `any`) => { `payload`: [`Payload`](Types_Store.md#payload) ; `type`: `string`  } |
| `error` | `any` |
| `isSubmitting` | `any` |
| `loadCourseAction` | (`payload?`: `any`) => { `payload`: [`Payload`](Types_Store.md#payload) ; `type`: `string`  } |

#### Defined in

src/Hooks/injectStore/course.ts:58
