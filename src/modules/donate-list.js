import { Settings as settings } from '../core/constants/settings'
import * as utils from '../core/utils'

class DonateList {
    #donates
    constructor(donates) {
        this.#donates = donates
    }

    #_createListDonates(donates = this.#donates) {
        return donates.map(donate => {
            return `
                <div class="donate-item">
                    ${utils.getFormattedTime(donate.date)} - <b>${donate.amount}${settings.currency}</b>
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
        return this.#_tempalate()
    }
}

export {
    DonateList
}