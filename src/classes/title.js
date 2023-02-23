import {Block} from "./blocks"
import {col, css, row} from "../store/utills"

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHtml() {
        const {tag = "h1", styles} = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}