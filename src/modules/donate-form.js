class DonateForm {
    #$el
    constructor() {
        this.#$el = document.createElement('div')
        this.#$el.id = `DonateForm-${Date.now()}`
    }

    #_tempalate() {
        return `
        <form class="donate-form">
            <h1 id="total-amount">28$</h1>
            <label class="donate-form__input-label"> 
                    Введите сумму в $
                    <input class="donate-form__donate-input" name="amount" type="number" max="100" min="0" required="">
            </label>
            <button class="donate-form__submit-button" type="submit"> 
                Задонатить 
            </button> 
        </form>`
    }
    render() {
        this.#$el.innerHTML = this.#_tempalate()
        return this.#$el
    }
}

export {
    DonateForm
}