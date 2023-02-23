import {form} from "../store/utills"
import {TextBlock} from "./text"
import {TitleBlock} from "./title"

export class Sidebar {
    constructor(selector, updateCallback) {
        this.update = updateCallback
        this.$el = document.querySelector(selector)
        this.init()
    }

    init() {
       this.$el.insertAdjacentHTML("afterbegin", this.template)
       this.$el.addEventListener("submit", this.add.bind(this))
    }

    get template() {
       return [
           form("text"),
           form("text")
       ].join("")
    }

    add(event) {
       event.preventDefault()

       const type = event.target.name
       const value = event.target.value.value
       const styles = event.target.styles.value

       const newBlock = type === "text"
        ? new TextBlock(value, {styles})
        : new TitleBlock(value, {styles})

       this.update(newBlock)

       event.target.value.value = ''
       event.target.styles.value = ''
    }
}

