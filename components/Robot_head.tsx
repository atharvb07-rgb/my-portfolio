import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props: any) {
    const { scene } = useGLTF('/robot_head.glb')
    return <primitive object={scene} {...props} />
}

useGLTF.preload('/robot_head.glb')
