const express = require('express');
const config = require('./config/config');
const {sequelize} = require('./models');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());


app.use(require('./routes/auth'));
app.use(require('./routes/quiz'));
app.use('/admin', require('./routes/admin'));


sequelize
.sync()
.then(() => {
    app.listen(config.port, () => console.log(`Listening on port ${config.port}`));
})
