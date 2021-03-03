const data = [
    {
        name : "apple",
        url : "./img/apple.jpg",
        score : 52
    },
    {
        name : "avocado",
        url : "./img/avocado.jpg",
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
        url : "./img/pear.jpg",
        score : 57
    },
    {
        name : "pineapple",
        url : "./img/pineapple.jpg",
        score : 50
    },
    {
        name : "strawberry",
        url : "./img/strawberry.jpg",
        score : 33
    }
]

const displayResult = (bool) => {
    const resulteScreen = document.createElement("div")
    resulteScreen.className = bool
    resulteScreen.textContent = bool
    document.body.append(resulteScreen)
    document.querySelector(`.${bool}`).addEventListener("click", renderChoices)
}

const renderChoices = () => {
    document.body.innerHTML = `<div id="container"></div>`
    const container = document.getElementById("container")

    let firstFruit = null;
    for (let i = 0; i < 2; i++) {
        const fruit = data[Math.floor(data.length * Math.random())];
        (fruit == firstFruit) && renderChoices()
        firstFruit = fruit

        const chosenTempalte = document.createElement("div")
        chosenTempalte.className = "chose"
        chosenTempalte.style.backgroundImage = `url(${fruit.url})` 
        chosenTempalte.setAttribute("data-score", fruit.score.toString())
        chosenTempalte.setAttribute("data-name", fruit.name)
        container.append(chosenTempalte)
    }

    const choices = document.querySelectorAll(".chose")
    choices.forEach( chosen => {
        chosen.addEventListener("click", e => {
            const correctAnswer = () => {
                if (choices[0].dataset.score > choices[1].dataset.score) {
                    return choices[0];
                }
                else if (choices[0].dataset.score < choices[1].dataset.score) {
                    return choices[1]
                }
                else {
                    throw new Error("Error, please reload the page !")
                }
            }
            if (correctAnswer().dataset.name == chosen.dataset.name) {
                displayResult("true")
            }
            else {
                displayResult("false")
            }
        })
    })
}


try {
    renderChoices()
} catch (err) {
    document.body.innerHTML = `<h1>${err}</h1>`
}