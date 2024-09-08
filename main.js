const form = document.querySelector('#form')
const submitBtn = document.querySelector('#submit-btn')


form.addEventListener('submit', function(e) {
    e.preventDefault()

    form.classList.add('submitted')

    const fields = document.querySelectorAll('label')
    fields.forEach(field => {
        const input = field.querySelector('input, textarea')
        input.setAttribute('aria-invalid', 'false')
        input.removeAttribute('aria-describedby')
        field.querySelectorAll('.error-message').forEach(errorMsg => 
            errorMsg.classList.remove('show')
        )
        if (!input.checkValidity()) {
            input.setAttribute('aria-invalid', 'true')

            const validity = input.validity;
    
            if (validity.valueMissing) {
                const errorMsg = field.querySelector('#value-missing-error')
                errorMsg?.classList?.add('show')
                input.setAttribute('aria-describedby', 'value-missing-error')
            } else if (validity.typeMismatch) {
                const errorMsg = field.querySelector('#invalid-email-error')
                errorMsg?.classList?.add('show')
                input.setAttribute('aria-describedby', 'invalid-email-error')
            }
        }
    })

    if (form.checkValidity()) {
        notificate()
        // form.reset()
        // form.classList.remove('submitted')
    }

})

function notificate() {
    const successNotification = document.querySelector('#success-notification')
    successNotification.style.display = 'block';
    setTimeout(() => {
        successNotification.style.display = 'none';
    }, 5000);
}