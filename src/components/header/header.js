import { Canvas, useFrame, useThree } from '@react-three/fiber'
import React, {Suspense, useEffect} from 'react'
import './header.css'

export default function Header() {

    return (
        <header className=''>
            <span className='nav-top'>
                <a href="https://github.com/treyhardin/Garfield" className='nav-link' target='_blank'>Github</a>
                <a href="https://www.youtube.com/watch?v=5qap5aO4i9A&ab_channel=LofiGirl" className='nav-link' target='_blank'>Listen</a>
            </span>
            {/* <span className='nav-bottom'>
                <a href="#" className='nav-link'>©2022</a>
                <a href="#" className='nav-link'>Contact</a>
            </span> */}
        </header>
    )
}