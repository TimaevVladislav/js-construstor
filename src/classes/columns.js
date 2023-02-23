import {Block} from "./blocks"
import {col, css, row} from "../store/utills"

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHtml() {
        const html = this.value.map(col).join("")
        return row(`${html}`, css(this.options.styles))
    }
}