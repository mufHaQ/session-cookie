module.exports = {
    get: (req, res) => {
        if (Object.values(req.cookies).length > 0)
            res.send(req.cookies)
        else
            res.send("Cookie not found")
    },
    unset: (req, res) => {
        if (req.cookies[req.body.cookie_name]) {
            res.cookie(req.body.cookie_name, '', {
                maxAge: -1
            })
            res.send(`Unset cookie "${req.body.cookie_name}"`)
        }
        else
            res.send("Cookie not found")
    },
    set: (req, res) => {
        res.cookie(req.body.cookie_name, req.body.cookie_value)
        res.send(`Set cookie "${req.body.cookie_name}"`)
    }
}