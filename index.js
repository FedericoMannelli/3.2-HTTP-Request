// Importa il modulo Express per creare un server web.
import express from "express";

// Crea un'istanza di Express e assegna la variabile 'app'.
const app = express();

// Definisce la porta su cui il server ascolterà le richieste.
const port = 3000;

// Definisce la gestione della richiesta GET all'URL di root ('/').
app.get('/', (req, res) => {
  // Risponde alla richiesta con un messaggio HTML contenente un titolo "Hello".
  res.send('<h1>Hello</h1>');
});

// Definisce la gestione della richiesta GET all'URL '/about'.
app.get('/about', (req, res) => {
  // Risponde alla richiesta con un messaggio HTML contenente un titolo "About me".
  res.send('<h1>About me</h1>');
});

// Definisce la gestione della richiesta GET all'URL '/Contact'.
app.get('/Contact', (req, res) => {
  // Risponde alla richiesta con un messaggio HTML contenente un titolo "Contact".
  res.send('<h1>Contact</h1>');
});

// Avvia il server e inizia ad ascoltare le richieste in arrivo sulla porta specificata.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/*
In sintesi, questo codice crea un server web utilizzando Express e definisce tre diverse rotte per gestire le richieste GET a tre URL specifici ('/', '/about', e '/Contact'). 
Quando il server viene avviato, risponderà a ciascuna di queste rotte con un messaggio HTML contenente un titolo diverso.
*/


/*
import  express  from "express";

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Hello<h1>')
})

app.get('/about', (req, res) => {
  res.send('<h1>About me<h1>')
})

app.get('/Contact', (req, res) => {
  res.send('<h1>Contact<h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
*/