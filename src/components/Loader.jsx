import React from 'react'
import { Html, useProgress} from '@react-three/drei'

const Loader = () => {

  const { progress } = useProgress()

  return (
    <Html>
        <span className='canvas-load' ></span>
        <p
            style={{
                fontSize: 20,
                color: '#f1f1f1',
                fontWeight: 800,
                textAlign: 'center',
                marginTop: 40,
            }}
        >{progress.toFixed(0)}%</p>
    </Html>
  )
}

export default Loader