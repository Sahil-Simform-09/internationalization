const express = require('express');
const i18next = require('i18next');
const Backend = require('i18next-fs-backend');
const middleware = require('i18next-http-middleware');

i18next
    .use(Backend)
    .use(middleware.LanguageDetector)
    .init({
        fallbackLng: 'en',
        backend: {
            loadPath: './locales/{{lng}}/translation.json'
        }
    });

const app = express();

app.use(middleware.handle(i18next));

app.get('/', (req, res) => {
    res.send(req.t('Hello World'));
});
app.listen(3000, () => console.log('server is running on port 3000'));