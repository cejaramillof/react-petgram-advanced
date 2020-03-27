import { css, keyframes } from 'styled-components'

const fadeInKeyFrames = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${fadeInKeyFrames} ${type}`

const fadeOutKeyFrames = keyframes`
from {
  filter: blur(0);
  opacity: 1;
}

to {
  filter: blur(5px);
  opacity: 0;
}
`

export const fadeOut = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${fadeOutKeyFrames} ${type}`

const scaleKreyFrames = keyframes`
  from {
    transform:scale(1);
  }
  to {
    transform:scale(0.5);
  }
`

export const scale = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${scaleKreyFrames} ${type}`

const slideInKeyFrames = keyframes`
  from {
    transform: translate3d(0, -100px, 0) scale(.5);
  }

  to {
    transform: translate3d(0, 0, 0) scale(.5);
  }
`

export const slideIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${slideInKeyFrames} ${type}`
