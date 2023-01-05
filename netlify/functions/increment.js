const mysql = require("mysql2");

exports.handler = async function (event, context) {

    const connection = mysql.createConnection(process.env.DATABASE_URL)

    console.log('Connected to PlanetScale!')


    const body = JSON.parse(event.body);
    var value = body.value;
    value = value + 1;

    // update database
    const sql = 'UPDATE counter SET value = ? WHERE id = 1';
    connection.query(sql, [value], function(error, results, fields) {
        if (error) throw error;
        console.log('Changed ' + results.changedRows + ' rows');
    })

    return {
        statusCode: 200,
        body: JSON.stringify({ value: value }),
    };
};
