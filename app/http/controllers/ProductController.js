import connection from "../../../config/database";

export default {
    index(req, res) {
        connection.query("SELECT * FROM products", (error, result) => {
            if (error) throw error;
            res.json(result);
        })
    },
    show(req, res) {
        const id = req.params.id;

        connection.query(`SELECT * FROM products WHERE id = ${id}`, (error, result) => {
            if (error) throw error;
            if (result.length) {
                return res.json(result[0]);
            }
            return res.send("No Data Found!")
        })
    }
}
