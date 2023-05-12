const http = require('http');
// Moduł pozwalający pobrać strefe czasową klienta
const moment = require('moment-timezone');

// Dane autora
const autorImie = 'Konrad';
const autorNazwisko = 'Skolimowski';

// Port na którym serwer będzie nasłuchiwał
const port = 3000;

// Funkcja wyświetlająca informacje o adresie IP klienta i czasie
function handleRequest(req, res) {
  // Adres IP
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  // Strefa czasowa
  const currentTime = moment().tz(moment.tz.guess()).format('YYYY-MM-DD HH:mm:ss');

  // Wyswietlenie IP i strefy czasowej
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`<h1>Adres IP klienta: ${ip}</h1>`);
  res.write(`<h1>Czas w strefie czasowej klienta: ${currentTime}</h1>`);
  res.end();
}

// Tworzenie serwera
const server = http.createServer(handleRequest);

// Nasłuchiwanie na porcie i zapisanie w logach informacji o serwerze
server.listen(port, () => {
  const dataUruchomienia = moment().format('YYYY-MM-DD HH:mm:ss');
  console.log(`Serwer uruchomiony został na porcie ${port} w dniu ${dataUruchomienia}, autorem strony jest student: ${autorImie} ${autorNazwisko}.`);
});