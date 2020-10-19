const dbClient = require('../db/db.client.js');

exports.create = async (params) => {

    let result = false;

    try {
        const dbRes = await dbClient.query(
            `INSERT INTO "user"
                (username, firstName, lastName, email, phone)
                VALUES
                ($1, $2, $3, $4, $5)`,
            [
                params.username, params.firstName,
                params.lastName, params.email, params.phone
            ]
        );

        result = true;
    }
    catch (err) {
        console.error(err);
    }

    return result;
};

exports.findAll = async () => {
    const dbRes = await dbClient.query('SELECT * FROM "user"');
    return dbRes.rows;
};

exports.findOne = async (userId) => {

    let result = null;

    const dbRes = await dbClient.query('SELECT * FROM "user" WHERE id=$1', [userId]);

    if (dbRes.rows && dbRes.rows.length) {
        result = dbRes.rows;
    }

    return result;
};

exports.update = async (userId, params) => {

    let result = false;

    try {
        const dbRes = await dbClient.query(
            `UPDATE "user"
                SET                   
                    firstName=$1, 
                    lastName=$2, 
                    email=$3, 
                    phone=$4
                WHERE 
                    id = $5`,
            [
                params.firstName, params.lastName,
                params.email, params.phone, userId
            ]
        );

        result = true;
    }
    catch (err) {
        console.error(err);
    }

    return result;
};

exports.delete = async (userId) => {
    await dbClient.query('DELETE FROM "user" WHERE id=$1', [userId]);
};