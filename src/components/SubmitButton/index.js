import React from 'react'
import { StyledButton } from './styles'
import PropTypes from 'prop-types'

export const Button = ({ children, disabled, onClick }) => (
  <StyledButton disabled={disabled} onClick={onClick}>{children}</StyledButton>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}