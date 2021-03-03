const data = [
    {
        name : "apple",
        url : "./img/apple.jpg",
        score : 52
    },
    {
        name : "avocado",
        url : "./img/avocado.jpeg",
        score : 160
    },
    {
        name : "banana",
        url : "./img/banana.jpg",
        score : 89
    },
    {
        name : "fig",
        url : "./img/fig.jpg",
        score : 30
    },
    {
        name : "pear",
        url : "./img/pear.jpeg",
        score : 57
    },
    {
        name : "pineapple",
        url : "./img/pineapple.jpg",
        score : 50
    },
    {
        name : "strawberry",
        url : "./img/strawberry.jpeg",
        score : 33
    }
]

function render() {
    const container = document.getElementById("container")
    for (let i = 0; i < 2; i++) {
        const fruit = data[Math.floor(data.length * Math.random())];
        const choseTempalte = document.createElement("div")
        choseTempalte.className = "chose"
        choseTempalte.style.backgroundImage = `url(${fruit.url})` 
        choseTempalte.setAttribute("data-score", fruit.score.toString())
        choseTempalte.setAttribute("data-name", fruit.name)
        container.append(choseTempalte)
    }
}

function resulte(bool) {
    const resulte = document.createElement("div")
    resulte.className = bool
    resulte.textContent = bool
    document.body.append(resulte)
}

render()

const choses = document.querySelectorAll(".chose")
choses.forEach( chose => {
    chose.addEventListener("click", e => {
        if (choses[0].dataset.score > choses[1].dataset.score 
            || choses[0].dataset.score == choses[1].dataset.score) {
            if (choses[0].dataset.name == chose.dataset.name){
                resulte("true")
            }
            else{
                resulte("false")
            }
        } else {
            if (choses[1].dataset.name == chose.dataset.name){
                document.body.append(`<div class="true" >True</div>`)
                resulte("true")
            }
            else{
                resulte("false")
            }
        }
    })
})

