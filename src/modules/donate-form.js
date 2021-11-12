class DonateForm {
    #$el
    #totalAmount
    #createNewDonate
    constructor(totalAmount, createNewDonate) {
        this.#$el = document.createElement('div')
        this.#$el.id = `DonateForm-${Date.now()}`
        this.#totalAmount = totalAmount
        this.#createNewDonate = createNewDonate
    }

    #_tempalate() {
        return `
        <form class="donate-form">
            <h1 id="total-amount">${this.#totalAmount}$</h1>
            <label class="donate-form__input-label"> 
                    Введите сумму в $
                    <input class="donate-form__donate-input" name="amount" type="number" max="100" min="0" required="">
            </label>
            <button class="donate-form__submit-button" type="submit"> 
                Задонатить 
            </button> 
        </form>`
    }

    updateTotalAmount(newAmount) {
        const $totalAmount = document.querySelector('#total-amount')
        $totalAmount.innerHTML = newAmount + '$'
    }

    render() {
        this.#$el.innerHTML = this.#_tempalate()
        return this.#$el
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