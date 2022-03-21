import * as THREE from 'three'
import { Html, useProgress } from "@react-three/drei"
import { useEffect, useRef, useState } from "react"
import './loader.css'

export default function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress()

    const [loadProgress, setLoadProgress] = useState(null)


    const loaderRef = useRef(null)

    const hideLoader = () => {
        loaderRef.current.classList.remove("active")
    }

    THREE.DefaultLoadingManager.onLoad = () => {
        console.log('loaded')
    }

    // THREE.DefaultLoadingManager.onProgress = (e) => {
    //     console.log(`${e.itemsLoaded} of ${e.itemsTotal} loaded`)
    // }

    useEffect(() => {

        // setLoadProgress(loaded / total)
        // console.log(total)
        if (loaded >= total) {
            hideLoader()
        }   
            
    }, [loaded]);

    return (
        <div className='loader active' ref={loaderRef}>
            <p>Loaded {loaded} of {total}</p>
        </div>
    )
}