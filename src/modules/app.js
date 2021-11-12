import { DonateForm } from './donate-form'

export default class App {
    #$el
    #components
    constructor() {
        this.#$el = document.createElement('div')
        this.#$el.id = `App`
        this.#components = [new DonateForm()]
    }

    run() {
        this.#components.forEach(component => {
            this.#$el.append(component.render())
        })

        document.body.append(this.#$el)
    }
}