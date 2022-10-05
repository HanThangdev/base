[treact-base](../README.md) / [Exports](../modules.md) / Modules/course/registration\_course/store/saga

# Module: Modules/course/registration\_course/store/saga

## Table of contents

### Functions

- [createCourseAction](Modules_course_registration_course_store_saga.md#createcourseaction)
- [default](Modules_course_registration_course_store_saga.md#default)
- [deleteCoursesAction](Modules_course_registration_course_store_saga.md#deletecoursesaction)
- [editCourseAction](Modules_course_registration_course_store_saga.md#editcourseaction)
- [loadCourseAction](Modules_course_registration_course_store_saga.md#loadcourseaction)
- [loadCoursesAction](Modules_course_registration_course_store_saga.md#loadcoursesaction)

## Functions

### createCourseAction

▸ **createCourseAction**(`__namedParameters`): `Generator`<`Promise`<`any`\> \| `PutEffect`<{ `type`: `string`  }\>, `void`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`Action`](Types_Store.md#action) |

#### Returns

`Generator`<`Promise`<`any`\> \| `PutEffect`<{ `type`: `string`  }\>, `void`, `unknown`\>

#### Defined in

src/Modules/course/registration_course/store/saga.ts:48

___

### default

▸ **default**(): `Generator`<`ForkEffect`<`never`\>, `void`, `unknown`\>

#### Returns

`Generator`<`ForkEffect`<`never`\>, `void`, `unknown`\>

#### Defined in

src/Modules/course/registration_course/store/saga.ts:149

___

### deleteCoursesAction

▸ **deleteCoursesAction**(`__namedParameters`): `Generator`<`Promise`<`any`\> \| `PutEffect`<{ `type`: `string`  }\> \| `SelectEffect`, `void`, `Object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`Action`](Types_Store.md#action) |

#### Returns

`Generator`<`Promise`<`any`\> \| `PutEffect`<{ `type`: `string`  }\> \| `SelectEffect`, `void`, `Object`\>

#### Defined in

src/Modules/course/registration_course/store/saga.ts:115

___

### editCourseAction

▸ **editCourseAction**(`__namedParameters`): `Generator`<`Promise`<`any`\> \| `PutEffect`<{ `type`: `string`  }\>, `void`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`Action`](Types_Store.md#action) |

#### Returns

`Generator`<`Promise`<`any`\> \| `PutEffect`<{ `type`: `string`  }\>, `void`, `unknown`\>

#### Defined in

src/Modules/course/registration_course/store/saga.ts:74

___

### loadCourseAction

▸ **loadCourseAction**(`__namedParameters`): `Generator`<`Promise`<`any`\> \| `PutEffect`<{ `payload`: { `course`: [`default`](../interfaces/Types_Response_UserResponse.default.md)  } ; `type`: `string`  }\> \| `PutEffect`<{ `error`: `unknown` ; `type`: `string`  }\>, `void`, [`default`](../interfaces/Types_Response_UserResponse.default.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`Action`](Types_Store.md#action) |

#### Returns

`Generator`<`Promise`<`any`\> \| `PutEffect`<{ `payload`: { `course`: [`default`](../interfaces/Types_Response_UserResponse.default.md)  } ; `type`: `string`  }\> \| `PutEffect`<{ `error`: `unknown` ; `type`: `string`  }\>, `void`, [`default`](../interfaces/Types_Response_UserResponse.default.md)\>

#### Defined in

src/Modules/course/registration_course/store/saga.ts:100

___

### loadCoursesAction

▸ **loadCoursesAction**(`__namedParameters`): `Generator`<`Promise`<`any`\> \| `PutEffect`<{ `payload`: { `courses`: `any` = results; `filter`: `any` = payload.params.filter; `pagination`: `any`  } ; `type`: `string`  }\> \| `PutEffect`<{ `error`: `unknown` ; `type`: `string`  }\>, `void`, `Object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`Action`](Types_Store.md#action) |

#### Returns

`Generator`<`Promise`<`any`\> \| `PutEffect`<{ `payload`: { `courses`: `any` = results; `filter`: `any` = payload.params.filter; `pagination`: `any`  } ; `type`: `string`  }\> \| `PutEffect`<{ `error`: `unknown` ; `type`: `string`  }\>, `void`, `Object`\>

#### Defined in

src/Modules/course/registration_course/store/saga.ts:29
