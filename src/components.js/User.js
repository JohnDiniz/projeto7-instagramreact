import { useState } from "react";

export default function User() {

    /* let nome = "Brendo"; */
    let [nome, setNome] = useState('Catanacomics')

    function trocarNome() {
        let novoNome = prompt("Digite seu nome:");
        if (novoNome === "" || novoNome === null || novoNome === undefined) {
            alert("Você não digitou seu nome. Tente novamente.")
        } else {
            setNome(novoNome)
        }
    }

    let [imagem, setImagem] = useState("assets/img/catanacomics.svg")

    function trocarImagem() {
        let novaImagem = prompt("Digite o link da nova imagem:")
        let urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
        if (!urlRegex.test(novaImagem)) {
            alert("O link inserido não é válido. Tente novamente.")
        } else {
            setImagem(novaImagem)
        }
    }


    return (
        <div class="usuario">
            <img data-test="profile-image" onClick={trocarImagem} src={imagem} alt="imagem de perfil" />
            <div class="texto">
                <span>
                    <strong data-test="name" >{nome}</strong>
                    <ion-icon data-test="edit-name" onClick={trocarNome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}
