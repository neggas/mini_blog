window.onload = () => {

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

    for (let article of articles) {
        let cardDiv = ` <div class="card">

        <div class="img-zonne">
        <img src="${article.img}" alt="javascript picture">
        </div>
                
        <div class="txt-zonne">
        <h3>${article.titre}</h3></h3>
        <p>${article.description}</p>
        <a href="view.html?id=${article.id}">Repondre</a>
        </div>

        </div>`

        document.getElementById("articles").innerHTML += cardDiv;



    }
}