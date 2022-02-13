/* Puerto */

process.env.PORT = process.env.PORT || 3000;

/* DB */

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb+srv://enacato:asd123@rest-server.s0jm3.mongodb.net/test';
} else {
    urlDB = 'mongodb+srv://enacato:asd123@rest-server.s0jm3.mongodb.net/coffe';
}

process.env.URLDB = urlDB;