class DonateList {
    #donates
    #$el
    constructor(donates) {
        this.#$el = document.createElement('div')
        this.#$el.id = `DonateList-${Date.now()}`
        this.#donates = donates
    }

    #_createListDonates(donates = this.#donates) {
        return donates.map(donate => {
            return `
                <div class="donate-item">
                    ${donate.date} - <b>${donate.amount}$</b>
                </div>`
        }).join('')
    }

    #_tempalate() {
        return `
        <div class="donates-container"> 
            <h2 class="donates-container__title">Список донатов</h2> 
            <div class="donates-container__donates"> 
                 ${this.#_createListDonates()}
            </div>
        </div>`
    }

    updateDonates(updatedDonates) {
        const $list = document.querySelector('.donates-container__donates')
        $list.innerHTML = this.#_createListDonates(updatedDonates)
    }

    initEventListeners() {

    }

    render() {
        this.#$el.innerHTML = this.#_tempalate()
        return this.#$el
    }
}

export {
    DonateList
}