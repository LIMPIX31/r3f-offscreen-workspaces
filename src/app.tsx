import type { FC } from 'react'
import { Canvas } from '@react-three/offscreen'
import Worker from './worker?worker'

export const App: FC = () => {
  return <Canvas worker={new Worker()} />
}
