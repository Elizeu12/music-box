import React from "react";
import ItemMusica from "../components/itemMusica";
import Menu from "../components/Menu";

function Musicas() {
    return (
        <>
            <Menu />

            <div className="container">
                <div className="filter">
                    <button className="btn">Adicionar</button>
                </div>
            </div>

            <div className="container">
                <div className="music-boxes">

                    <ItemMusica
                        musica="Baião de dois"
                        artista="Ti'ada Co-z inha"
                        genero="Musca Cowmi"
                        ano={2022}
                        id="1"
                    />
                    <ItemMusica
                        musica="Garra affa"
                        artista="Prast ico"
                        genero="Musica Pote"
                        ano={1988}
                        id="1"
                    />
                    <ItemMusica 
                        musica="Celefone"
                        artista="Sam Sung"
                        genero="Pêra"
                        ano={2015}
                        id="1"
                    />

                </div>
            </div>
        </>
    );
}

export default Musicas;