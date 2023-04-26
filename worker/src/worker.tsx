import { render } from '@react-three/offscreen'
import { useThree } from '@react-three/fiber'
import { Fragment } from 'react'

function Scene() {
  const three = useThree()

  console.log(three)

  return <Fragment />
}

render(<Scene />)
