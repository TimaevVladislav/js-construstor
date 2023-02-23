import {Block} from "./blocks"
import {css, row} from "../store/utills"

export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHtml() {
        const {imageStyles: is, styles, alt} = this.options
        return row(`<img style="${css(is)}" src="${this.value}" alt="${alt}" />`, css(styles))
    }
}