const inputBill = document.querySelector('#input-bill')
const tipsButtons = document.querySelector('.data-wrapper  ul')
const inputPeople = document.querySelector('#input-people')
const customTip = document.querySelector('#custom-percentage-button')
const tipAmount = document.querySelector('#tip-amount')
const total = document.querySelector('#total')
const resetButton = document.querySelector('#reset-button')

let people = 1
let tip = 0
let bill = 0


function getResults() {
    bill = parseFloat(inputBill.value)
    people = parseInt(inputPeople.value)
    if (tip !== 0 && people !== 0 && bill !== 0) {
        const rs__tip = (bill * (tip / 100)) / people
        tipAmount.textContent = rs__tip.toFixed(2)
        const rs_total = (bill / people) + rs__tip
        total.textContent = rs_total.toFixed(2)
        enableResetButton()
    }
}

function getTip(e) {
    const target = e.target

    if (target.tagName === "BUTTON" || e.type === "input") {
        tip = parseFloat(target.value)
        setAtive(e.target)
        getResults()
    }
}
// tipsButtons.forEach(element => {
//     if (element.type === "button") {
//         element.addEventListener('click', getTip)
//     } else {
//         element.addEventListener('input', getTip)
//     }
// });
function setAtive(element) {
    removeActive()
    if (element.type === "button") {

        element.classList.add('active')
    }
}
function removeActive() {
    const activeElement = document.querySelector('.active')
    activeElement?.classList.remove('active')
}
function reset() {
    people = 1
    tip = 0
    bill = 0
    inputBill.value = 0
    inputPeople.value = 1
    tipAmount.textContent = 0
    total.textContent = 0
    removeActive()
    disableResetButton()
}
function disableResetButton() {
    resetButton.classList.add('disabled')
    resetButton.disabled = true
}
function enableResetButton() {
    resetButton.classList.remove('disabled')
    resetButton.disabled = false
}
resetButton.addEventListener('click', reset)
inputBill.addEventListener('input', getResults)
tipsButtons.addEventListener('click', getTip)
customTip.addEventListener('input', getTip)
inputPeople.addEventListener('input', getResults)