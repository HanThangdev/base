import { useCallback } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { Row, Col } from 'antd'

import { FormInput, HeaderSearch } from '@components'
import { Wrapper } from './styled'

const FilterBlock = ({ t, loadCoursesAction, setRowSelected }: any) => {
  const form = useForm()
  const { handleSubmit, reset } = form

  const onSubmit = useCallback((data) => {
    const { name } = data
    loadCoursesAction({
      params: {
        filter: {
          name: name.trim(),
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
      name: '',
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
                name="name"
                label={t('registration_course.management.course_name')}
                wrapperProps={{
                  colon: false
                }}
              />
            </Col>
          </Row>
        </HeaderSearch>
      </Wrapper>
    </FormProvider>
  )
}

export default FilterBlock
