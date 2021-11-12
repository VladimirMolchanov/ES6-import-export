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
    #state
    constructor() {
        this.#$el = document.createElement('div')
        this.#$el.id = `App`
        this.#state = {
            donates: [],
            totalAmount: 0
        }
        this.#components = [
            new DonateForm(this.#state.totalAmount, this.createNewDonate.bind(this)), 
            new DonateList(this.#state.donates)
        ]
        
    }

    createNewDonate(newDonate) {
        this.#state.donates.push(newDonate)
        this.#state.totalAmount += newDonate.amount
        this.#components[0].updateTotalAmount(this.#state.totalAmount)
        this.#components[1].updateDonates(this.#state.donates)
    }

    run() {
        this.#components.forEach(component => {
            this.#$el.append(component.render())
        })

        document.body.append(this.#$el)

        this.#components.forEach(component => {
            component.initEventListeners()
        })
    }
}