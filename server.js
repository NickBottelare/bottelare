// server.js
const basicAuth = require('basic-auth');
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/app', express.static(path.join(__dirname, 'app')));
app.use('/data', express.static(path.join(__dirname, 'data')));
app.use(express.static(__dirname)); // serve root files like index.html, styles/, images/, pages/

// Save endpoint for news.json
app.post('/data/news.json', (req, res) => {
  fs.writeFile(path.join(__dirname, 'data', 'news.json'), JSON.stringify(req.body, null, 2), (err) => {
    if (err) {
      console.error('Fout bij schrijven van bestand (news):', err);
      res.status(500).send('Fout bij schrijven van news.json.');
    } else {
      res.send('news.json succesvol opgeslagen.');
    }
  });
});

// Save endpoint for events.json
app.post('/data/events.json', (req, res) => {
  fs.writeFile(path.join(__dirname, 'data', 'events.json'), JSON.stringify(req.body, null, 2), (err) => {
    if (err) {
      console.error('Fout bij schrijven van bestand (events):', err);
      res.status(500).send('Fout bij schrijven van events.json.');
    } else {
      res.send('events.json succesvol opgeslagen.');
    }
  });
});

// Save endpoint for commerce.json
app.post('/data/commerce.json', (req, res) => {
  fs.writeFile(path.join(__dirname, 'data', 'commerce.json'), JSON.stringify(req.body, null, 2), (err) => {
    if (err) {
      console.error('Fout bij schrijven van bestand (commerce):', err);
      res.status(500).send('Fout bij schrijven van commerce.json.');
    } else {
      res.send('commerce.json succesvol opgeslagen.');
    }
  });
});

const auth = function (req, res, next) {
  const user = basicAuth(req);
  const username = 'admin';
  const password = 'geheim'; // ✨ Verander dit naar je gewenste wachtwoord

  if (!user || user.name !== username || user.pass !== password) {
    res.set('WWW-Authenticate', 'Basic realm="Bottelare Editor"');
    return res.status(401).send('Toegang geweigerd');
  }
  next();
};

// Route for unified editor
app.get('/editor', auth, (req, res) => {
  res.sendFile(path.join(__dirname, 'app', 'editor.html'));
});

app.listen(PORT, () => {
  console.log(`Server draait op http://localhost:${PORT}/ of /editor`);
});
