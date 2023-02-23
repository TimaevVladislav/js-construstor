import banner from "../assets/image.png"

import {TitleBlock} from "../classes/title"
import {ImageBlock} from "../classes/image"
import {ColumnsBlock} from "../classes/columns"
import {TextBlock} from "../classes/text"

import {columns} from "./data"


export const model = [
    new TitleBlock( "Конструктор сайтов", { tag: "h2", styles: {background: "linear-gradient(to right, #ff0099, #493240);", color: '#fff', "text-align": "center", padding: "1.5rem" }}),
    new ImageBlock(banner, {styles: { padding: '2rem 0', display: 'flex', 'justify-content': 'center'}, imageStyles: { width: '500px', height: 'auto' }, alt: "banner" }),
    new ColumnsBlock(columns, {styles: { background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)', padding: '2rem', color: '#fff', 'font-weight': 'bold'}}),
    new TextBlock("", { styles: { background: 'linear-gradient(to left, #f2994a, #f2c94c)', padding: '1rem', 'font-weight': 'bold', 'text-align': 'center' }})
]

