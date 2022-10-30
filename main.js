const form = document.querySelector('form')
const display = document.querySelector('.nomatch')
form.addEventListener('submit', e)
function e () {
    let pass =document.getElementById('password')
    let confirmPass = document.getElementById('confirmpassword')
    if (pass !==confirmPass) {
        e.preventDefault()
        display.textContent="no match"
    }
}