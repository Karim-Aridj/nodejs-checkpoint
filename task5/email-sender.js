const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    auth: {
        user: 'your@email.com',
        pass: 'password'
    },
    tls: {
        rejectUnauthorized: false
    }
});

async function sendMessage(subject, content) {
    let info = await transporter.sendMail({
        from: 'your@email.com',
        to: 'receiver@email.com',
        subject: subject,
        text: content,
        html: '<h1>'+content+'</h1>'
    })
}

sendMessage('A message', 'This is a message sent.').catch(console.error);
