const express = require('express');
const Vigenere = require("caesar-salad/vigenere");

const app = express();
const port = 8000;

app.get('/:echo', (req, res) => {
    const echo = req.params.echo
    res.send(echo);
});

app.get('/encode/:text', (req, res) => {
    const text = req.params.text;
    const encodedText = Vigenere.Cipher('password').crypt(text);
    res.send(`<h1>Encoded Text: ${encodedText}</h1>`);
});
app.get('/decode/:text', (req, res) => {
    const text = req.params.text;
    const decodedText = Vigenere.Decipher('password').crypt(text);
    res.send(`<h1>Decoded Text: ${decodedText}</h1>`);
});

app.listen(port, () => {
    console.log(`Server is running on port: http://localhost:${port}/`);
});