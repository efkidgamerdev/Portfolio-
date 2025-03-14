const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('Public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'index.html'));
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
// Frankkaumbadevinc🧑‍💻
