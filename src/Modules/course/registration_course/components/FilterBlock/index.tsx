import { useCallback } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { Row, Col } from 'antd'

import { FormSelect, FormInput, HeaderSearch } from '@components'
import { OWNER_OPTION } from '@constants/course'
import { useRoles } from '@hooks/auth'
import { Wrapper } from './styled'

const FilterBlock = ({ t, loadCoursesAction, setRowSelected }: any) => {
  const form = useForm()
  const { handleSubmit, reset } = form
  const { isSuperAdmin } = useRoles()

  const onSubmit = useCallback((data) => {
    const { courseName, owner } = data
    loadCoursesAction({
      params: {
        filter: {
          courseName: courseName.trim(),
          owner: owner?.value
        },
        page: 1,
        limit: 20
      }
    })
    setRowSelected({
      selectedRowKeys: [],
      selectedRows: []
    })
  }, [loadCoursesAction, setRowSelected])

  const handleCancel = useCallback(() => {
    reset({
      courseName: '',
      owner: null
    })
    loadCoursesAction({})
  }, [loadCoursesAction, reset])

  return (
    <FormProvider {...form}>
      <Wrapper>
        <HeaderSearch onCancel={handleCancel} onSubmit={handleSubmit(onSubmit)}>
          <Row className="form-group" gutter={24}>
            <Col span={24}>
              <FormInput
                name="courseName"
                label={t('registration_course.management.course_name')}
                wrapperProps={{
                  colon: false
                }}
              />
            </Col>
            {isSuperAdmin && (
            <Col span={24}>
              <FormSelect
                t={t}
                name="owner"
                options={OWNER_OPTION}
                label={t('registration_course.management.owner')}
                wrapperProps={{
                  colon: false
                }}
              />
            </Col>
            )}
          </Row>
        </HeaderSearch>
      </Wrapper>
    </FormProvider>
  )
}

export default FilterBlock
