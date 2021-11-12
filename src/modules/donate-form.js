import { Settings as settings } from '../core/constants/settings'

class DonateForm {
    #totalAmount
    #createNewDonate
    constructor(totalAmount, createNewDonate) {
        this.#totalAmount = totalAmount
        this.#createNewDonate = createNewDonate
    }

    #_tempalate() {
        return `
        <form class="donate-form">
            <h1 id="total-amount">${this.#totalAmount}${settings.currency}</h1>
            <label class="donate-form__input-label"> 
                    Введите сумму в ${settings.currency}
                    <input class="donate-form__donate-input" name="amount" type="number" max="100" min="0" required="">
            </label>
            <button class="donate-form__submit-button" type="submit"> 
                Задонатить 
            </button> 
        </form>`
    }

    updateTotalAmount(newAmount) {
        const $totalAmount = document.querySelector('#total-amount')
        $totalAmount.innerHTML = newAmount + settings.currency
    }

    render() {
        return this.#_tempalate()
    }

    initEventListeners() {
        const form = document.querySelector('.donate-form')
        form.addEventListener('submit', this.onSubmit)
    }

    onSubmit = (event) => {
        event.preventDefault()
        const { target } = event
        const { value } = target.amount

        const newDonate = {
            amount: +value,
            date: new Date()
        }

        this.#createNewDonate(newDonate)
    }
}

export {
    DonateForm
}