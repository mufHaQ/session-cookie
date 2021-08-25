const express = require('express')
const cookieParser = require('cookie-parser')
const express_session = require("express-session")

const cookies = require("./module/cookie")
const session = require("./module/session")

const app = express()

require("dotenv").config()

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Start server @ http://localhost:${port}`)
})

// Cookie
app.post("/set-cookie", cookies.set)
app.delete("/unset-cookie", cookies.unset)
app.get("/get-cookie", cookies.get)

// Session
app.use(express_session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
}))

app.post("/set-session", session.set)
app.get("/get-session", session.get)
app.delete("/unset-session", session.unset)
