
import React, {useEffect} from 'react'

export default function Scroll(props){

    useEffect(()=>{

        window.scrollTo(0,0);
    },[])

    return(
        <main>
            {props.children}
        </main>
    )
}