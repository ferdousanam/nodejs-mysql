import {createConnection} from "mysql";


const connection = createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "do_commerce_pos"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

export default connection
