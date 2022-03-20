import { useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Popconfirm } from 'antd'
import { EditOutlined } from '@ant-design/icons'

import {
  FormRadio,
  FormInput,
  FormUploadImage,
  FormInputNumber,
  Title,
  FormLabel
} from '@components'
import { PUBLISH_COURSE_OPTION, PAID_COURSE_OPTION } from '@constants/course'
import { useCreateCourse } from '@hooks/course'
import { useRoles } from '@hooks'
import { getText } from '@utils'
import { Wrapper, Divider, Right } from '@themes/facit'
import { Row } from './styled'
import CreateCourseScheme from './scheme'

const CreateCourseScreen = () => {
  const { t, i18n: { language } } = useTranslation(['course'])
  const form = useForm({
    resolver: yupResolver(CreateCourseScheme(t)),
    defaultValues: {
      price: 0,
      coursePaidSetting: 0,
      coursePublicSetting: 'PUBLIC'
    }
  })
  const { handleSubmit, watch, setValue, clearErrors } = form
  const { coursePaidSetting } = watch()
  const { createCourseAction } = useCreateCourse()
  const { isAdmin } = useRoles()

  const onSubmit = useCallback((formData) => {
    const { courseCategory, ...data } = formData
    delete data.coursePaidSetting
    delete data.file
    if (courseCategory) {
      data.courseCategoryId = courseCategory.value
      data.courseCategoryName = courseCategory.label
    }
    data.descriptionText = getText(data.overview)
    createCourseAction({ data })
  }, [createCourseAction])

  useEffect(() => {
    if (!coursePaidSetting) {
      setValue('price', 0)
    }
  }, [coursePaidSetting, setValue])

  useEffect(() => {
    clearErrors()
  }, [clearErrors, language])

  return (
    <Wrapper>
      <Title
        icon={EditOutlined}
        title={t('registration_course.create.title')}
      />
      <div className="form-wrapper">
        <FormProvider {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <FormLabel title={t('registration_course.create.course_name')} description="Required" />
              <Right>
                <FormInput name="courseName" />
              </Right>
            </Row>
            <Divider />
            <Row>
              <FormLabel title={t('registration_course.create.course_image')} description="Optional" />
              <Right>
                <FormUploadImage t={t} name="imagePath" />
                <p>
                  {t('common:require_image_size_and_type', {
                    imgSize: '10MB',
                    imgType: '(jpg, gif, png)'
                  })}
                  <br />
                  {t('common:require_image_resolution', {
                    imgWidth: '300px',
                    imgHeight: '200px'
                  })}
                </p>
              </Right>
            </Row>
            <Divider />
            <Row>
              <FormLabel title={t('registration_course.create.public_setting')} description="Required" />
              <Right>
                <FormRadio
                  t={t}
                  name="coursePublicSetting"
                  options={PUBLISH_COURSE_OPTION}
                />
              </Right>
            </Row>
            <Divider />
            {isAdmin && (
            <>
              <Row>
                <FormLabel title={t('registration_course.create.course_type')} description="Required" />
                <Right>
                  <FormRadio
                    t={t}
                    name="coursePaidSetting"
                    options={PAID_COURSE_OPTION}
                  />
                </Right>
              </Row>
              <Divider />
              <Row>
                <FormLabel title={t('registration_course.create.price')} description="Required" />
                <Right>
                  <FormInputNumber
                    name="price"
                    min={0}
                    max={9999999}
                    disabled={!coursePaidSetting}
                    style={{ width: '100%' }}
                  />
                </Right>
              </Row>
              <Divider />
            </>
            )}

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
