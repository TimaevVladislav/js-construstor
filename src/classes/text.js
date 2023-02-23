import {Block} from "./blocks"
import {col, css, row} from "../store/utills"

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHtml() {
        return row(col(`<p>${this.value}</p>`), css(this.options.styles))
    }
}