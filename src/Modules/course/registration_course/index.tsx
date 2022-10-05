/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import useNavigate from '@hooks/useNavigate'

import { Table } from '@components'
import { useAuth, useRegistrationCourses } from '@hooks'
import { Wrapper } from '@themes/goemon'
import tableColumns from './column'
import ConfirmDeleteModal from './components/ConfirmDeleteModal'
import NAVIGATION from '@routes/navigation'

const RegistrationCourseScreen = () => {
  const { t } = useTranslation(['course'])
  const navigate = useNavigate()
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
    () => tableColumns({ t, navigate, pagination }).filter((col) => col.rules.includes(role)),
    [t, navigate, pagination, role]
  )

  useEffect(() => {
    loadCoursesAction({ params: { page: 1, limit: 20 } })
  }, [])

  return (
    <Wrapper>
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
        onCreate={() => navigate(NAVIGATION.CREATE_COURSE)}
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
