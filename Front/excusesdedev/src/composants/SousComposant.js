import { useState } from 'react';
import { Comment } from 'react-loader-spinner'

export default function SousComposant(props) {

     const [loading, setLoading] = useState(false);

     function loader() {
      const randomTimeout = Math.floor(Math.random()*5000)+1000; // choisis entre 1 et 5 secondes
      setLoading(true); // Changement de state pour contrôler l'affichage du loader
      setTimeout(generateExcuse,randomTimeout); // la fonction de génération d'excuse se lance une fois le timeout fini

     }
     function generateExcuse() {
        const xhr = new XMLHttpRequest(); // Envoie une requête GET vers le backend pour récupérer les excuses
        xhr.open("GET","http://localhost:4000/")
        xhr.send();
        xhr.responseType="json";
        xhr.onload = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
              const randomKey = Math.floor(Math.random()*xhr.response.length) // Opération afin d'obtenir un nombre aléatoire entre 0 et la dernière clé de la liste
              const newExcuse = xhr.response[randomKey].message // Choisis l'excuse parmis la liste à l'aide de la clé obtenue 
              if (newExcuse === props.previousExcuse) { // Vérifie que l'excuse choisie ne sois pas déjà affiché , sinon recommence le procéssus de sélection 
                generateExcuse();
              } else {
                props.updateExcuse(newExcuse); // Met à jour le composant parent avec l'excuse choisie
                setLoading(false) 
              }
            } else {
              console.log(`Error: ${xhr.status}`);
            }     
            
          }
          
    }

    return(
        <>
            {loading ? <><Comment // Rendering conditionel pour le loader
              visible={true}
              height="100"
              width="100"
              backgroundColor="white"
              color="black"
              wrapperClass="loader"
            />
            <button className="generer" type="button" onClick={() => loader()}>Générer une excuse</button></> :
            <button className="generer" type="button" onClick={() => loader()}>Générer une excuse</button> }
        </>
    )
}