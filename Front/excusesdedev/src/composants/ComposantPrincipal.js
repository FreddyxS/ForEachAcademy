import { useState } from 'react';
import SousComposant from "./SousComposant.js"

export default function ComposantPrincipal() {

  const [excuse,setExcuse] = useState("");
  const [previousExcuse, setPreviousExcuse] = useState("");

  const updateExcuse = (newExcuse) => { // Passage des fonctions en tant que prop au composant enfant afin de pouvoir récupérer ses données (lift state up)
    setExcuse(newExcuse);
    setPreviousExcuse(newExcuse)
  }

  return(
    <>
      <div className="container">
        <header>Excuses De Dev</header>
        <div className="center">
          <div className="excuse">{excuse}</div>
          <SousComposant previousExcuse={previousExcuse} updateExcuse={updateExcuse}/>
        </div>
      </div>
    </>
  )
}