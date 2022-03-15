import { Canvas, useFrame, useThree } from '@react-three/fiber'
import React, {Suspense, useEffect, useRef} from 'react'
import Garfield from '../models/garfield'
import { Environment, OrbitControls, useGLTF, Effects, PerspectiveCamera } from '@react-three/drei'
import { EffectComposer, Noise, Bloom } from '@react-three/postprocessing'
import './hero.css'
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, Tween } from "gsap/all";


export default function Hero() {

    console.log(gsap)

    const cameraGroup = useRef()
    const camera = useRef()
    let cameraMovementSpeedX = 0.85;
    let cameraMovementSpeedY = 0.25;
    let cameraOffsetY = - Math.PI / 0.95


    document.addEventListener('mousemove', (e) => {
        
        if(cameraGroup.current) {

            let mousePositionX = (e.clientX / window.innerWidth) * 2 - 1
            let mousePositionY = (e.clientY / window.innerHeight) * 2 - 1

            gsap.to(cameraGroup.current.rotation, {
                duration: 1,
                y: mousePositionX * cameraMovementSpeedX + cameraOffsetY,
                ease: "power3.easeOut"
            })

            if(camera.current) {
                gsap.to(camera.current.rotation, {
                    duration: 1,
                    x: mousePositionY * cameraMovementSpeedY,
                    ease: "power3.easeOut"
                })
            }

            cameraGroup.current.rotation.z = 0 //this is important to keep the camera level..

        }
        
    })

    return (
        <section data-scroll-section className='hero-section'>
            <Canvas data-scroll>
            <group ref={cameraGroup} position={[0,0.75,1.5]} rotation={[0, Math.PI, 0]}>  
                <PerspectiveCamera ref={camera} makeDefault position={[0,0.5,2]} rotation={[-Math.PI * 0, 0, 0]} fov={60} />
            </group>  
            <EffectComposer>
                <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} intensity={1} height={300} />
                <Noise opacity={0.03} />
            </EffectComposer>

                    {/* <OrbitControls enableZoom={false} target={[0, .5, 2]} /> */}

                    <Suspense fallback={null}>
                            
                        <Garfield 
                            position={[0,0,0]}
                        />


                    </Suspense>


            </Canvas>
        </section>
    )
}