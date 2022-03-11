import { Canvas, useFrame, useThree } from '@react-three/fiber'
import React, {Suspense, useEffect} from 'react'
import Loader from '../loader/loader'
import Garfield from '../models/garfield'
import Mug from '../models/mug'
import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import './hero.css'

export default function Hero() {

    return (
        <section className='hero-section'>
            <Canvas>
   
                <OrbitControls enableZoom={false} target={[0, .5, 2]} />

                <Suspense fallback={<Loader />}>
                        
                    <Garfield 
                        position={[0,0,0]}
                    />
                    <Environment preset="sunset" background />
                </Suspense>

            </Canvas>
        </section>
    )
}