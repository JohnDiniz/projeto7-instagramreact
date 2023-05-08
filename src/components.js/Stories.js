

export default function Stories() {

    const storieList = objList.map((item) =>
    <div class="story">
        <div class="imagem">
            <img src={item.imagem} alt={item.titulo} />
        </div>
        <div class="usuario">
            {item.texto}
        </div>
    </div>
)
    return (
        <div class="stories">
            {storieList}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

const objList = [
    {
        imagem: "assets/img/9gag.svg",
        titulo:"9gag",
        texto: "9gag"
    },
    {
        imagem: "assets/img/meowed.svg",
        titulo:"meowed",
        texto: "meowed"
    },
    {
        imagem: "assets/img/barked.svg",
        titulo:"barked",
        texto: "barked"
    },
    {
        imagem: "assets/img/nathanwpylestrangeplanet.svg",
        titulo:"nathanwpylestrangeplanet",
        texto: "nathanwpylestrangeplanet"
    },
    {
        imagem: "assets/img/wawawicomics.svg",
        titulo:"wawawicomics",
        texto: "wawawicomics"
    },
    {
        imagem: "assets/img/respondeai.svg",
        titulo:"respondeai",
        texto: "respondeai"
    },
    {
        imagem: "assets/img/filomoderna.svg",
        titulo:"filomoderna",
        texto: "filomoderna"
    },
    {
        imagem: "assets/img/memeriagourmet.svg",
        titulo:"memeriagourmet",
        texto: "memeriagourmet"
    }
]

