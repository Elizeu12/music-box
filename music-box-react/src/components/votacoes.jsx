import React, { useState } from "react";
function votar() {
    setNumero(numero + 1)
}
function Votacao(props) {
    const [numero, setNumero] = useState(0);
    return(
        <>
            <h1>{props.Titulo}</h1>
            <button onClick={votar}>votar</button>
            <h1>Quantidade de votos: {numero}</h1>
        </>
    )
}

export default Votacao;