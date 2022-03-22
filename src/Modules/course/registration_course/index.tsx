/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { Menu } from 'antd'

import { Table, Title } from '@components'
import { COURSE_ICON } from '@assets'
import { useAuth, useRegistrationCourses } from '@hooks'
import { Wrapper } from '@themes/facit'
import tableColumns from './column'
import ConfirmDeleteModal from './components/ConfirmDeleteModal'
import FilterBlock from './components/FilterBlock'
import { RoutesName } from '../routes'

const RegistrationCourseScreen = () => {
  const { t } = useTranslation(['course'])
  const history = useHistory()
  const {
    courses,
    pagination,
    filter,
    loadCoursesAction,
    deleteCoursesAction,
    isLoading
  } = useRegistrationCourses()
  const { profile } = useAuth()
  const { total, limit: pageSize, page: currentPage } = pagination
  const { id: userId, role } = profile

  const [rowSelected, setRowSelected] = useState({
    selectedRowKeys: [],
    selectedRows: []
  })

  const [visibleConfirmDelete, setVisibleConfirmDelete] = useState(false)

  const onSelectChange = (selectedRowKeys: any, selectedRows: any) => setRowSelected({
    selectedRowKeys,
    selectedRows
  })

  const handleTableChange = (tablePaging: any) => {
    loadCoursesAction({
      userId,
      params: {
        page: tablePaging.current,
        limit: tablePaging.pageSize,
        filter
      }
    })
  }

  const handleConfirmDelete = () => {
    deleteCoursesAction({
      courseId: rowSelected.selectedRowKeys[0],
      params: {
        pageSize,
        currentPage,
      },
      callback: {
        done: () => {
          setRowSelected({
            selectedRowKeys: [],
            selectedRows: []
          })
        }
      }
    })
    setVisibleConfirmDelete(false)
  }

  const columns = useMemo(
    () => tableColumns({ t, history, pagination }).filter((col) => col.rules.includes(role)),
    [t, history, pagination, role]
  )

  const menu = useMemo(() => (
    <Menu>
      <FilterBlock
        t={t}
        loadCoursesAction={loadCoursesAction}
        setRowSelected={setRowSelected}
      />
    </Menu>
  ), [loadCoursesAction, t])

  useEffect(() => {
    loadCoursesAction({ params: { page: 1, limit: 20 } })
  }, [])

  return (
    <Wrapper>
      <Title
        icon={COURSE_ICON}
        title={t('registration_course.management.title')}
        filter={menu}
        currentFilter={filter}
      />
      <Table
        locale={{ emptyText: t('common:empty_data') }}
        rowSelection={{
          selectedRowKeys: rowSelected.selectedRowKeys,
          onChange: onSelectChange,
          preserveSelectedRowKeys: true
        }}
        rowKey={(record: any) => record.id}
        dataSource={courses}
        columns={columns}
        total={total}
        currentPage={currentPage}
        pageSize={pageSize}
        selected={rowSelected.selectedRowKeys.length}
        createText={t('registration_course.management.create_button')}
        onChange={handleTableChange}
        onCreate={() => history.push(RoutesName.CREATE_COURSE)}
        onDelete={() => setVisibleConfirmDelete(true)}
        loading={isLoading}
      />
      <ConfirmDeleteModal
        t={t}
        isVisible={visibleConfirmDelete}
        onSubmit={handleConfirmDelete}
        setIsVisble={setVisibleConfirmDelete}
        numberOfSelectedRecord={rowSelected.selectedRows.length}
        disabledSubmit={false}
      />
    </Wrapper>
  )
}

export default RegistrationCourseScreen
