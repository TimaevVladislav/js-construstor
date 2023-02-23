import {model} from "./store/model"
import {templates} from "./store/templates"
import "./css/main.css"

const $site = document.querySelector("#site")

model.forEach(block => {
    const toHTML = templates[block.type]

    if (toHTML) {
        $site.insertAdjacentHTML("beforeend", toHTML(block))
    }
})


