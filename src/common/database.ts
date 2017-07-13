import Orm = require("typeorm")

export let connection : Orm.Connection

export async function init() {

    let conn = await Orm.createConnection({
        type: "mysql",
        host: process.env.DB_HOST || 'localhost',
        port: Number(process.env.DB_PORT) || 3306,
        username: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'drug-crawl',
        entities: [
            __dirname + '/../entities/e-*.js'
        ],
        autoSchemaSync : true
    })

    connection = conn

}

