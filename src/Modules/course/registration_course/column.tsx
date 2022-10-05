import { EditOutlined } from '@ant-design/icons'
import { Tooltip, Button } from 'antd'

import { USER_ROLE } from '@modules/auth/constant'
import { Action } from '@themes/goemon'
import NAVIGATION from '@routes/navigation'

const column = ({ t, history, pagination }: any) => [
  {
    title: 'No.',
    dataIndex: 'courseId',
    key: 'courseId',
    render: (_text: any, _record: any, index: number) => (
      <div>{(pagination.page - 1) * pagination.limit + index + 1}</div>
    ),
    rules: [USER_ROLE.ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
  },
  {
    title: t('registration_course.management.course_name'),
    dataIndex: 'name',
    key: 'name',
    rules: [USER_ROLE.ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
  },
  {
    title: t('registration_course.management.course_category_name'),
    dataIndex: 'email',
    key: 'email',
    rules: [USER_ROLE.ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
  },
  {
    title: t('registration_course.management.course_category_name'),
    dataIndex: 'role',
    key: 'role',
    rules: [USER_ROLE.ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
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
            onClick={() => history.push(`${NAVIGATION.EDIT_COURSE}/${record.id}`)}
          />
        </Tooltip>
      </Action>
    ),
    rules: [USER_ROLE.ADMIN, USER_ROLE.NISSHOKEN_ADMIN, USER_ROLE.COMPANY_ADMIN]
  }
]

export default column