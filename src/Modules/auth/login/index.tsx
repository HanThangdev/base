/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Wrapper } from './styled'

const LoginScreen = () => {
  const { register, setValue } = useForm()
  useEffect(() => {
    register('termOfUse')
    setValue('termOfUse', false)
  }, [register, setValue])

  return (
    <Wrapper>
      123
    </Wrapper>
  )
}

export default LoginScreen
