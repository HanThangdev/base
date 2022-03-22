/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useParams } from 'react-router-dom'
import { EditOutlined } from '@ant-design/icons'
import { Popconfirm, Button } from 'antd'

import {
  FormInput,
  FormPassword,
  Title,
  FormLabel
} from '@components'
import { useUpdateCourse } from '@hooks/course'
import { Wrapper, Divider, Right, Row } from './styled'
import EditCourseScheme from './scheme'

const EditCourseModal = () => {
  const { id: courseId }: any = useParams()
  const { t } = useTranslation(['course'])
  const {
    course,
    loadCourseAction,
    editCourseAction
  } = useUpdateCourse()

  const form = useForm({
    resolver: yupResolver(EditCourseScheme()),
  })
  const { handleSubmit, setValue }: any = form

  const onSubmit = useCallback((data) => {
    editCourseAction({ courseId, data })
  }, [courseId])

  useEffect(() => {
    if (course) {
      setValue('name', course.name)
      setValue('email', course.email)
      setValue('password', course.password)
    }
  }, [course])

  useEffect(() => {
    loadCourseAction({ courseId })
  }, [courseId])

  return (
    <Wrapper>
      <Title icon={EditOutlined} title={t('registration_course.edit.title')} />
      <div className="form-wrapper">
        <FormProvider {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <FormLabel title={t('registration_course.create.course_name')} description="Required" />
              <Right>
                <FormInput name="name" />
              </Right>
            </Row>
            <Divider />
            <Row>
              <FormLabel title={t('registration_course.create.course_name')} description="Required" />
              <Right>
                <FormInput name="email" />
              </Right>
            </Row>
            <Divider />
            <Row>
              <FormLabel title={t('registration_course.create.course_name')} description="Required" />
              <Right>
                <FormPassword name="password" />
              </Right>
            </Row>
            <Divider />

            <div className="form-action-group">
              <Popconfirm
                title={t('registration_course.create.warning_submit_message')}
                onConfirm={handleSubmit(onSubmit)}
              >
                <Button type="primary" htmlType="submit">
                  {t('registration_course.create.create_submit')}
                </Button>
              </Popconfirm>
            </div>
          </form>
        </FormProvider>
      </div>
    </Wrapper>
  )
}

export default EditCourseModal
