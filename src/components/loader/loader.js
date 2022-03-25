import * as THREE from 'three'
import { Html, useProgress } from "@react-three/drei"
import { useEffect, useRef, useState } from "react"
import './loader.css'

export default function Loader() {
    const { active, errors, item, loaded, total } = useProgress()

    const [loadProgress, setLoadProgress] = useState(null)

    const progress = loaded / total * 100


    const loaderRef = useRef(null)

    const hideLoader = () => {
        loaderRef.current.classList.remove("active")
    }

    THREE.DefaultLoadingManager.onLoad = () => {
        // console.log('loaded')
    }

    useEffect(() => {

        if (loaded >= total) {
            setTimeout(() => {
                hideLoader()
            }, 1000);
            
        }   
            
    }, [loaded]);

    return (
        <div className='loader active' ref={loaderRef}>
            <h1>Come On In.</h1>
            <div className='progress-bar'>
                <div className='progress' style={{width: progress + "%"}}></div>
            </div>
        </div>
    )
}