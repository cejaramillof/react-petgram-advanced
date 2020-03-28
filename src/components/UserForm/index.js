import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title, Error } from './styles'

export const UserForm = ({ title, onSubmit, disabled, error }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <Form disabled={disabled} onSubmit={handleSubmit}>
      <Title>{title}</Title>
      <Input disabled={disabled} placeholder='Email' value={email.value} onChange={email.onChange} />
      <Input disabled={disabled} placeholder='Password' type='password' {...password} />
      <Button disabled={disabled}>{title}</Button>
      {error && <Error>{error}</Error>}
    </Form>
  )
}
