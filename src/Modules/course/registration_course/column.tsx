import React from 'react'
import { EditOutlined } from '@ant-design/icons'
import { Tooltip, Button } from 'antd'

import { USER_ROLE } from '@constants/auth'
import { formatMoney, formatOption } from '@utils'
import { PAID_COURSE_OPTION_TEXT } from '@constants/course'
import { Action } from '@themes/facit'
import { RoutesName } from '../routes'

const column = ({ t, history, pagination }: any) => [
  {
    title: 'No.',
    dataIndex: 'courseId',
    key: 'courseId',
    render: (_text: any, _record: any, index: number) => (
      <div>{(pagination.page - 1) * pagination.limit + index + 1}</div>
    ),
    rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
  },
  {
    title: t('registration_course.management.course_name'),
    dataIndex: 'courseName',
    key: 'courseName',
    rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
  },
  {
    title: t('registration_course.management.course_category_name'),
    dataIndex: 'courseCategoryName',
    key: 'courseCategoryName',
    rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
  },
  {
    title: t('registration_course.management.course_type'),
    dataIndex: 'typeCourse',
    key: 'typeCourse',
    width: 100,
    render: (text: any) => t(formatOption(text, PAID_COURSE_OPTION_TEXT)),
    rules: [USER_ROLE.NISSHOKEN_ADMIN]
  },
  {
    title: t('registration_course.management.price'),
    dataIndex: 'price',
    key: 'price',
    align: 'right',
    render: (text: any) => formatMoney(text),
    rules: [USER_ROLE.NISSHOKEN_ADMIN]
  },
  {
    title: t('registration_course.management.owner'),
    dataIndex: 'owner',
    key: 'owner',
    rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN]
  },
  {
    title: t('registration_course.management.action'),
    key: '',
    dataIndex: '',
    width: 100,
    render: (record: any) => (
      <Action>
        <Tooltip title={t('common:tooltip:edit')}>
          <Button
            className="action-button"
            icon={<EditOutlined />}
            onClick={() => history.push(`${RoutesName.EDIT_COURSE}/${record.courseId}`)}
          />
        </Tooltip>
      </Action>
    ),
    rules: [USER_ROLE.NISSHOKEN_SUPER_ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
  }
]

export default column