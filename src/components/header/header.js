import { Canvas, useFrame, useThree } from '@react-three/fiber'
import React, {Suspense, useEffect} from 'react'
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