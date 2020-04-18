const app = document.getElementById("articles");
const img = document.getElementById("image");

let articles = [{
    id: 1,
    titre: "lorem 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, animi doloremque! Maxime sunt aliquid animi distinctio cupiditate impedit, vel quos, quam molestias quibusdam, mollitia ab dolorum voluptatem quia numquam amet.",
    article: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, animi doloremque! Maxime sunt aliquid animi distinctio cupiditate impedit, vel quos, quam molestias quibusdam, mollitia ab dolorum voluptatem quia numquam amet.",
    img: "img/cartoon-doctor-5022797_640.jpg"
}, {
    id: 2,
    titre: "lorem 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, animi doloremque! Maxime sunt aliquid animi distinctio cupiditate impedit, vel quos, quam molestias quibusdam, mollitia ab dolorum voluptatem quia numquam amet.",
    article: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, animi doloremque! Maxime sunt aliquid animi distinctio cupiditate impedit, vel quos, quam molestias quibusdam, mollitia ab dolorum voluptatem quia numquam amet.",
    img: "img/javascript-4523100_640.jpg"
}]


window.onload = () => {
    const search = window.location.search;
    let id = extractId(search);
    output(id);
}

function output(id) {
    let article = articles[id - 1];
    let view = `
    <div class="txt-zonne">
        <h3>${article.titre}</h3>
        <p>
           ${article.article}
        </p>
    </div>

    <div id="commentaire">
        <textarea name="" id="" cols="30" rows="10">

        </textarea>
        <button>Repondre</button>
    </div>
`

    img.src = article.img;
    app.innerHTML = view;
}

function extractId(search) {
    let param = search.substring(search.indexOf('?') + 1, search.length);
    param = parseInt(param.split("=")[1]);
    return param;
}