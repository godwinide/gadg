const path = require("path");
module.exports = app => {
    // GET
    app.use("/api/courses", require("./routes/api/course/course"))
    app.use("/api/faculties", require("./routes/api/course/faculty"))
    // POST
    app.use("/api/users/register", require("./routes/api/users/register"))
    app.use("/api/users/auth", require("./routes/api/users/auth"));
    app.use("/api/users/courses", require("./routes/api/users/courses"));
    app.use("/api/users/purchase", require("./routes/api/course/purchase"));
    app.use("/api/users/sendcode", require("./routes/api/mail/sendVerification"));
    app.use("/api/messages/sendMessage", require("./routes/api/mail/sendMessage"));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });


}