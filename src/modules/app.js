import { DonateForm } from './donate-form'
import { DonateList } from './donate-list'
import * as utils from '../core/utils';

const mockDonates = [
    { amount: 4, date: new Date() },
    { amount: 20, date: new Date() },
    { amount: 3, date: new Date() },
    { amount: 1, date: new Date() },
];

export default class App {
    #components
    #state
    constructor() {
        this.#state = {
            donates: mockDonates,
            totalAmount: utils.calculateSumOfNumbers(mockDonates.map(el => el.amount))
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
        // this.#components.forEach(component => {
        //     this.#$el.append(component.render())
        // })

        // document.body.append(this.#$el)

        let html = ''
        this.#components.forEach(component => {
            html += component.render()
        })

        document.body.innerHTML = html

        this.#components.forEach(component => {
            component.initEventListeners()
        })
    }
}