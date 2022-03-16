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
            <span className='nav-top'>
                <a href="#" className='nav-link'>Work</a>
                <a href="#" className='nav-link'>About</a>
            </span>
            {/* <span className='nav-bottom'>
                <a href="#" className='nav-link'>©2022</a>
                <a href="#" className='nav-link'>Contact</a>
            </span> */}
        </header>
    )
}