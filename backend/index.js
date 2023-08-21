const server = require('./src/app.js');
const { conn } = require('./src/db.js'); 
const { PORT } = process.env
// Syncing all the models at once.
conn.sync({ alter: true }).then(() => {
    console.log('DB Connected')
    // Agregamos CORS al servidor 

    server.listen(PORT, () => {
        console.log(`Listening on Port: ${PORT} happy Codding (❁◡❁)`); // eslint-disable-line no-console
    });
});