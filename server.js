const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers/index');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 3001;
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
    secret: 'secret secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
        checkExpirationInterval: 15 * 60 * 1000,
        expiration: 24 * 60 * 60 * 1000
    })
};

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);
// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('now listening'));
});