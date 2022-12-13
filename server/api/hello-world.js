module.exports = async (router) => {
    router.get('/', async function (req, res) {
        try {
            res.status(200).json({ message: "Hello World", data: [] });
        } catch (err) {
            console.log(err)
            res.status(500).json({ message: "Whats wrongs on server", data: err })
        }
    })
}