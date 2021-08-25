module.exports = {
    get: (req, res) => {
        res.send(req.session)
    },
    set: (req, res) => {
        req.session[req.body.session_name] = req.body.session_value
        res.send(`Set session "${req.body.session_name}"`)
    },
    unset: (req, res) => {
        req.session.destroy()
        res.send("destroy session")
    }
}