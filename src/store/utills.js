
export function row(content, styles = "") {
    return `<div class="row" style="${styles}" >${content}</div>`
}

export function col(content) {
    return `<div class="col-sm">${content}</div>`
}

export function css(styles = {}) {
    if (typeof styles === "string") return styles

    const toString = key => `${key}: ${styles[key]}`
    return Object.keys(styles).map(toString).join(";")
}

export function form(type) {
    return `
   <form name="${type}" class="mt-2">
     <h5>${type}</h5>
    <div class="form-group">
       <input class="form-control form-control-sm" name="value" placeholder="value">
    </div>
    <div class="form-group">
       <input class="form-control form-control-sm mt-2" name="styles" placeholder="styles">
    </div>
    <button type="submit" class="btn btn-primary btn-sm mt-2">Добавить</button>
   </form>
    `
}