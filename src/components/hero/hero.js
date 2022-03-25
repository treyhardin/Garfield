import { Canvas, useFrame, useThree } from '@react-three/fiber'
import React, {Suspense, useEffect, useRef} from 'react'
import Garfield from '../models/garfield'
import { Environment, OrbitControls, useGLTF, Effects, PerspectiveCamera } from '@react-three/drei'
import { EffectComposer, Noise, Bloom } from '@react-three/postprocessing'
import './hero.css'
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, Tween } from "gsap/all";
import { useLocomotiveScroll } from 'react-locomotive-scroll'


export default function Hero() {



    const cameraGroup = useRef()
    const camera = useRef()
    let cameraMovementSpeedX = 0.85;
    let cameraMovementSpeedY = 0.25;
    let cameraOffsetY = - Math.PI / 0.95


    let currentScroll = 0
    const scroll = useLocomotiveScroll()

    document.addEventListener('scroll', (e) => {
        if (scroll.isReady) {
          currentScroll = scroll.scroll.scroll.instance.scroll.y

          // Move Camera with Scroll
          if(cameraGroup.current) {
            cameraGroup.current.position.y = 0.75 - currentScroll * 0.0015
          }
        }
    })




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
        // <div data-scroll id="hero-wrapper">
        <section data-scroll-section className='hero-section'>
            <video data-scroll id="lofi-video" playsInline webkit-playsinline="true" muted loop autoPlay width="320" height="240" src="textures/lofi.mp4"></video>
            <Canvas data-scroll>

                <group ref={cameraGroup} position={[0,0.75,1.5]} rotation={[0, -Math.PI, 0]}>  
                    <PerspectiveCamera ref={camera} makeDefault position={[0,0.5,2]} rotation={[-Math.PI * 0, 0, 0]} fov={60} />
                </group>  

                <EffectComposer>
                    <Bloom luminanceThreshold={0} luminanceSmoothing={0.5} intensity={0.6} height={300} />
                    <Noise opacity={0.03} />
                </EffectComposer>

                <Suspense fallback={null}>
                    <Garfield position={[0,0,0]} scrollObject={scroll} />
                </Suspense>


            </Canvas>
        </section>
        // </div>
    )
}