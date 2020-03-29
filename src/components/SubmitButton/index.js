import React from 'react'
import { StyledButton } from './styles'

export const Button = ({ children, disabled, onClick }) => (
  <StyledButton disabled={disabled} onClick={onClick}>{children}</StyledButton>
)
