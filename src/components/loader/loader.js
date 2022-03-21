import * as THREE from 'three'
import { Html, useProgress } from "@react-three/drei"
import { useEffect, useRef, useState } from "react"
import './loader.css'

export default function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress()

    const [loadProgress, setLoadProgress] = useState(null)

    const loaderRef = useRef(null)

    let loadPercentage = loaded / total

    const hideLoader = () => {

        loaderRef.current.classList.remove("active")
    }

    useEffect(() => {

        setLoadProgress(loaded / total)
        if (loadProgress >= 1) {
            hideLoader()
        }   
            
    }, [loaded]);

    return (
        <div className='loader active' ref={loaderRef}>
            <p>Loaded: {loaded}</p>
            <p>Total: {total}</p>

        </div>
    )
}