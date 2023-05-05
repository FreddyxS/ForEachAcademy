import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'

export default function SingleExcuseComposant() {

    const [excuse,setExcuse] = useState("");

    let { httpcode } = useParams(); // Prend les paramètres d'URL

    function getExcuse() {
        console.log(httpcode)
        const xhr = new XMLHttpRequest(); // Envoie une requête GET vers le backend pour récupérer les excuses
        xhr.open("GET","http://localhost:4000/")
        xhr.send();
        xhr.responseType="json";
        xhr.onload = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
              for (let i in xhr.response) { // Itère à travers la liste
                if (xhr.response[i].http_code == httpcode) { // vérifie si le paramètre d'URL correspond au bon code
                    setExcuse(xhr.response[i].message)
                } else {
                    i++
                }
              }
            } else {
              console.log(`Error: ${xhr.status}`);
            }     
            
          }
          
    }

    useEffect(() => {
        getExcuse();
    },);
    
    return(
        <>
        <div className="container">
            <header>Excuses De Dev</header>
            <div className="center">
            <div className="excuse">{excuse}</div>
            </div>
        </div>
    </>
    )
}