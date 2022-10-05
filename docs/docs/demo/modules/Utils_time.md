[treact-base](../README.md) / [Exports](../modules.md) / Utils/time

# Module: Utils/time

## Table of contents

### Functions

- [combineDateAndTime](Utils_time.md#combinedateandtime)
- [combineDateAndTimeV2](Utils_time.md#combinedateandtimev2)
- [convertNumberToTime](Utils_time.md#convertnumbertotime)
- [formatDate](Utils_time.md#formatdate)
- [formatDateShort](Utils_time.md#formatdateshort)

## Functions

### combineDateAndTime

▸ **combineDateAndTime**(`date`, `time`): ``null`` \| `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `any` |
| `time` | `any` |

#### Returns

``null`` \| `Date`

#### Defined in

src/Utils/time.ts:10

___

### combineDateAndTimeV2

▸ **combineDateAndTimeV2**(`date`, `time`): ``null`` \| `Date` \| `Moment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `any` |
| `time` | `any` |

#### Returns

``null`` \| `Date` \| `Moment`

#### Defined in

src/Utils/time.ts:16

___

### convertNumberToTime

▸ **convertNumberToTime**(`time`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `any` |

#### Returns

`string`

#### Defined in

src/Utils/time.ts:28

___

### formatDate

▸ **formatDate**(`date`, `f?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `date` | `any` | `undefined` |
| `f` | `string` | `FORMAT_TIME.DATE_HOUR_MINUTES` |

#### Returns

`string`

#### Defined in

src/Utils/time.ts:4

___

### formatDateShort

▸ **formatDateShort**(`date`, `f?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `date` | `any` | `undefined` |
| `f` | `string` | `FORMAT_TIME.FULL_DATE` |

#### Returns

`string`

#### Defined in

src/Utils/time.ts:7
