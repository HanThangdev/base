import {
  MANAGEMENT_ICON
} from '@assets'

const menu = {
  course: [
    {
      name: 'registration_course_categories',
      Icon: MANAGEMENT_ICON,
      path: '/course-management/lesson-cate',
      fill: 'text_hight_light',
      stroke: 'none'
    },
    {
      name: 'registration_courses',
      Icon: MANAGEMENT_ICON,
      path: '/course-management/lesson-course',
      fill: 'text_hight_light',
      stroke: 'none'
    },
    {
      name: 'unit_settings',
      Icon: MANAGEMENT_ICON,
      path: '/course-management/unit-settings',
      fill: 'text_hight_light',
      stroke: 'none'
    },
    {
      name: 'upload_file',
      Icon: MANAGEMENT_ICON,
      path: '/course-management/upload-file',
      fill: 'text_hight_light',
      stroke: 'none'
    },
    {
      name: 'auto_assignment',
      Icon: MANAGEMENT_ICON,
      path: '/course-management/auto-assignment',
      fill: 'text_hight_light',
      stroke: 'none'
    },
  ],
  attendance_permissions: [
    {
      name: 'issus_permission',
      Icon: MANAGEMENT_ICON,
      path: '/course-management/user-learning-lesson/create',
      fill: 'text_hight_light',
      stroke: 'none'
    },
    {
      name: 'issue_status_permissions',
      Icon: MANAGEMENT_ICON,
      path: '/course-management/user-learning-lesson',
      fill: 'text_hight_light',
      stroke: 'none'
    }
  ]
}

export default menu
