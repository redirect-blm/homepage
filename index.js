const express = require('express');
const chalk = require('chalk');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, './', 'dist')));

app.get('*', (req, res) => {
    console.log(chalk.yellow(`received request at ${req.path}`));
    if (req.path === '/') return res.status(200).send(path.join(__dirname, './', 'dist/index.html'));
    return res.status(404).send('Page Not Found');
});

app.listen(PORT, () => console.log(chalk.green(`Express Server is listening at ${PORT}`)));