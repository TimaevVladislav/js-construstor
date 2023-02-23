import {row, col} from "./utills"

function title(block) {
    return row(col(`<h1>${block.value}</h1>`))
}

function text(block) {
    return row(col(`<h1>${block.value}</h1>`))
}

function columns(block) {
    const html = block.value.map(item => col(`<p>${item}</p>`))

    return row(`${html.join("")}`)
}

function image(block) {
    return row(`<img src="${block.value}" alt="banner" />`)
}

export const templates = { title, text, columns, image }