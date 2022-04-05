import React from "react";
import logoVerde from "../imagens/logo-verde.png";
import avatar from "../imagens/avatar.png";

function Menu() {
    return (
        <>
            <nav>
                <div class="container">
                    <img src={logoVerde} alt="Logo" class="logo" />
                    <img src={avatar} alt="Avatar" class="avatar" />
                </div>
            </nav>
        </>
    )
}

export default Menu;