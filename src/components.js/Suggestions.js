export default function Suggestions() {

    const suggestionList = objList.map(item =>
        < div class="sugestao" >
            <div class="usuario">
                <img src={item.imagem} alt={item.titulo} />
                <div class="texto">
                    <div class="nome">{item.texto.nome}</div>
                    <div class="razao">{item.texto.status}</div>
                </div>
            </div>
    
            <div class="seguir">Seguir</div>
        </div >)

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {suggestionList}
        </div>
    )
}


const objList = [
    {
        imagem: "assets/img/bad.vibes.memes.svg",
        titulo: "bad.vibes.memes.svg",
        texto: {
            nome: "bad.vibes.memes",
            status: "Segue você"
        }

    },
    {
        imagem: "assets/img/chibirdart.svg",
        titulo: "chibirdart",
        texto: {
            nome: "chibirdart",
            status: "Segue você"
        }

    },
    {
        imagem: "assets/img/razoesparaacreditar.svg",
        titulo: "razoesparaacreditar",
        texto: {
            nome: "razoesparaacreditar",
            status: "Novo no Instagram"
        }

    },
    {
        imagem: "assets/img/adorable_animals.svg",
        titulo: "adorable_animals",
        texto: {
            nome: "adorable_animals",
            status: "Segue você"
        }

    },
    {
        imagem: "assets/img/smallcutecats.svg",
        titulo: "smallcutecats",
        texto: {
            nome: "smallcutecats",
            status: "Segue você"
        }
    }
]



