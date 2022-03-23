import { useEffect, useRef } from 'react'
import Hand from '../../icons / hand';
import './ticker.css'

export default function Ticker(props) {

    const tickerText = useRef(null)

    useEffect(() => {
        
        for (let i = 0; i < 10; i++) {
            let newTickerText = tickerText.current.cloneNode(true)
            tickerText.current.parentNode.appendChild(newTickerText)
        }
        
    })

    const animate = () => { window.requestAnimationFrame( () => {
        

    })};

    animate();



    return (
        <section data-scroll-section data-scroll-speed="1" className='ticker-section'>
            <span className='ticker-icon'>
                <Hand />
            </span>
            <span className='ticker-text-wrapper utility'>
                <p data-scroll data-scroll-speed="8" data-scroll-direction="horizontal" ref={tickerText} data-scroll className='ticker-text'>{props.text}</p>       
            </span>
        </section>
    )
}