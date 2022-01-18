import React, {useState, useRef, useEffect} from 'react'
import './Accord.css'
import Chevron from './chevron.svg'

export default function Accord() {


    const [toggle, setToggle] = useState(false)
    const [heightEl, setHeightEl] = useState()


    const toggleState = () => {
        console.log("coucou")
        setToggle(!toggle)
    }

    const refHeight = useRef() 
    console.log(heightEl)
    
    useEffect(() => {

        setHeightEl(`${refHeight.current.scrollHeight}px`)
        // scrollHeight : hauteur minimale pour que le contenu ne dépasse pas. clientHeight : hauteur actuelle

    }, [])


    return (
        <div className="accord">

            {/* Partie visible : */}
           <div 
           onClick={toggleState}
           className="accord-visible">
               <h2>Lorem ipsum dolor sit amet.</h2>
               <img src={Chevron} alt="chevron down" />
           </div>

            {/* Partie à faire apparaître : */}
            <div ref={refHeight} 
            className={toggle ? 'accord-toggle animated' : 'accord-toggle'}
            style={{height: toggle ? `${heightEl}` : "0px"}}
            >
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nisi iure quis eius in. Eligendi quam rerum, porro excepturi ratione maxime beatae iure voluptate eum eius ad saepe aperiam accusantium?
                </p>
            </div>
        

        </div>
    )
}
