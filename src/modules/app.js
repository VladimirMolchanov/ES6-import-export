import { DonateForm } from './donate-form'
import { DonateList } from './donate-list'

const mockDonates = [
    { amount: 4, date: new Date() },
    { amount: 20, date: new Date() },
    { amount: 3, date: new Date() },
    { amount: 1, date: new Date() },
];

export default class App {
    #$el
    #components
    constructor() {
        this.#$el = document.createElement('div')
        this.#$el.id = `App`
        this.#components = [new DonateForm(), new DonateList(mockDonates)]
    }

    run() {
        this.#components.forEach(component => {
            this.#$el.append(component.render())
        })

        document.body.append(this.#$el)
    }
}