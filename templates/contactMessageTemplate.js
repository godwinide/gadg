module.exports = (email, name, phone, body) => {
    return `
    <div class="msg">
    <h1>Message from ${name}</h1>
    <h2>email: ${email}</h2>
    <h2>phone: ${phone}</h2>
    <h2>Message:</h2>
    <p>
        ${body}
    </p>
    </div>
    `
}