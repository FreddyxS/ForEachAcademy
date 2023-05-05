import gif from '../media/john-travolta-where-am-i.gif'
import { useEffect } from 'react'

export default function LostComposant() {

    function redirection() { // redirige vers l'URL de base
        window.location.replace("http://localhost:3000/")
    }

    useEffect(() => { // Active la fonction de redirection après 5 secondes
        setTimeout(redirection,5000);
    }, []);

    return(
        <>
            <div className="container">
                <header>I'm lost</header>
                <div className="center">
                    <img src={gif} alt="gif"></img>
                </div>
            </div>
        </>
    )
}