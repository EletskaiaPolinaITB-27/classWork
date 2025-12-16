const { createElement } = require("react")

const btn = document.getElementById('button')

const customAlert = (message) => {
    const overlay = document.createElement('div')
    overlay.className = 'overlay';

    document.body.append(overlay);
}
btn.addEventListener('click', () => {
    customAlert('learn alert')
})