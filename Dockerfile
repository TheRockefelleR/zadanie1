# Pierwszy etap budowy

# Obraz bazowy z node na alpine w wersji lite
FROM node:lts-alpine as etapPierwszy
# Ustawienie katalogu roboczego
WORKDIR /app
# Przeniesienie pliku packege json
COPY package*.json ./
# Instalacja zależności z pliku package.json
RUN npm install
# Skopiowanie reszty plików w tym przypadku app.js
COPY . .

# Drugie etap budowy

# Uzycie obrazu alpine w najmniejszego jego wersji
FROM alpine:3.14
# Etykieta z imieniem i nazwiskiem
LABEL author="Konrad Skolimowski"
# Instalacja nodejs, curl oraz usunięcie pamięci podręcznej pakietów
RUN apk add --no-cache nodejs \
  apk add --no-cache curl \
  rm -rf /etc/apk/cache
# Ustawienie katalogu roboczego
WORKDIR /app
# Skopiowanie plików z etapu pierwszego
COPY --from=etapPierwszy /app /app
# Deklaracja portu aplikacji w kontenerze 
EXPOSE 3000
# Monitorowanie dostepnosci serwera 
HEALTHCHECK --interval=10s --timeout=1s \
  CMD curl -f http://localhost:3000/ || exit 1
# Uruchomienia serwera
CMD ["node", "app.js"]
