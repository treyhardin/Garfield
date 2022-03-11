import { Canvas, useFrame, useThree } from '@react-three/fiber'
import React, {Suspense, useEffect} from 'react'
import Loader from '../loader/loader'
import Garfield from '../models/garfield'
import Mug from '../models/mug'
import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import './header.css'

export default function Header() {

    return (
        <header className=''>
            <h1>Header</h1>
        </header>
    )
}