import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Popconfirm } from 'antd'

import {
  FormInput,
  FormPassword,
  FormRadio,
  FormLabel
} from '@components'
import { ROLES_OPTION } from '@modules/course/constant'
import { useCreateCourse } from '@hooks'
import { Wrapper, Divider, Right } from '@themes/goemon'
import { Row } from './styled'
import CreateCourseScheme from './scheme'

const CreateCourseScreen = () => {
  const { t } = useTranslation(['course'])
  const form = useForm({
    resolver: yupResolver(CreateCourseScheme()),
    defaultValues: {
      role: 'user'
    }
  })
  const { handleSubmit } = form
  const { createCourseAction } = useCreateCourse()

  const onSubmit = useCallback((data: any) => {
    createCourseAction({ data })
  }, [createCourseAction])


  return (
    <Wrapper>
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
            <Row>
              <FormLabel title={t('registration_course.create.course_type')} description="Required" />
              <Right>
                <FormRadio
                  t={t}
                  name="role"
                  options={ROLES_OPTION}
                />
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

export default CreateCourseScreen
