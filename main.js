const contactform = document.getElementById('contact_emailForm')
const returnMessage = document.getElementById('return-message')
const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_4pjss4m', 'template_rppdhno', '#contact_emailForm', 'oEHmEnnF4ONdRGN02')
        .then(() => {
            returnMessage.textContent = 'Message sent successfully! ✔'
            setTimeout(()=>{
                returnMessage.textContent = ''
            },5000)
            contactform.reset()
        }, () => {
            returnMessage.textContent = 'Message not sent (service error)! ❌'
        })
}
contactform.addEventListener('submit', sendEmail)