module.exports = (email, name, phone, body) => {
    return `
    <div class="msg">
    <h1>Message from ${name}</h1>
    <h2>email: ${email}</h2>
    <h2>phone: ${phone}</h2>
    <p>Message:</p>
    <h1>
        ${body}
    </h1>
    </div>
    `
}