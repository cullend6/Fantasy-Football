const sendPriceChangeEmail = (changes, to) => {
    let html = ''
    changes.forEach((change) => {
        html += `<div>${change}</div>`
    })

    sendEmail(to, 'DansFantasyFootball@gmail.com', 'FPL Price Changes', html)
}

const sendEmail = (to, from, subject, html) => {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
    to,
    from,
    subject,
    text: 'and easy to do anywhere, even with Node.js',
    html,
    };
    sgMail.send(msg);
}

module.exports = sendPriceChangeEmail