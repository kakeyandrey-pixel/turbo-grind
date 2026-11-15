const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/status', (req, res) => {
    res.json({
        status: 'online',
        project: 'TURBO GRIND',
        target: 150
    });
});

app.listen(PORT, () => {
    console.log('TURBO GRIND IS ONLINE!');
    console.log('http://localhost:' + PORT);
});