# Zadanie nr. 1

# PKT. 1

![image](https://github.com/TheRockefelleR/zadanie1/assets/84729968/40b222b1-532e-49ce-90fd-8eaeb3bf3a28)

# PKT. 2

![image](https://github.com/TheRockefelleR/zadanie1/assets/84729968/b061d0c3-6d2e-45df-9ee1-9ce4f028ffc9)


# PKT. 3
<h2>Polecenia niezbędne do:</h2>

<h4>a. zbudowania opracowanego obrazu kontenera</h4>

Polecenie: docker build -t `nazwa` .
![image](https://github.com/TheRockefelleR/zadanie1/assets/84729968/f60add9a-7193-49a1-8a4f-413a004b6d08)

<h4>b. uruchomienia kontenera na podstawie zbudowanego obrazu</h4>

Polecenie: docker run -d -p `port_zewentrzny`:`port_wewnetrzny` --name `nazwa_kontenera` `nazwa_obrazu`
![image](https://github.com/TheRockefelleR/zadanie1/assets/84729968/c88171c3-d1da-4454-9e66-85c712b62205)


<h4>c. sposobu uzyskania informacji, które wygenerował serwer w trakcie uruchamiana kontenera</h4>

Sprawdzenie poprawności wygenerowanych logów:

1. Przy pomocy polecenia docker logs `nazwa_kontenera`
![image](https://github.com/TheRockefelleR/zadanie1/assets/84729968/72f89033-90bd-464a-9ae2-6da61b4814fe)
2. Przy pomocy docker desktor
![image](https://github.com/TheRockefelleR/zadanie1/assets/84729968/8fd9b9e8-9336-425b-bb2d-0f7501723455)


Sprawdzenie poprawności wyświetlanych informacji na stronie:
1. Przy pomocy polecenia curl 127.0.0.1:`PORT`
![image](https://github.com/TheRockefelleR/zadanie1/assets/84729968/683f9e5f-3b60-4e12-b663-472e611de972)
2. Przy pomocy przeglądarki
![image](https://github.com/TheRockefelleR/zadanie1/assets/84729968/5d8b86a3-4ecb-4c4d-ae94-4b6af47dd610)

<h4>d. sprawdzenia, ile warstw posiada zbudowany obraz</h4>

Polecenie: docker inspect `nazwa_obrazu` | jq '.[].RootFS'

Odpowiedz: 4

![image](https://github.com/TheRockefelleR/zadanie1/assets/84729968/b7a35da8-816d-4a3a-83ca-d6aaa6dadd63)

# Punkty dodatkowe (Konkurs)

<h4>Wynik skanu przy użyciu docker scout<h4>

![image](https://github.com/TheRockefelleR/zadanie1/assets/84729968/16edb866-a38a-453a-8b0f-198177a1fc03)

<h4>Wielkość stworzonego obrazu</h4>

![image](https://github.com/TheRockefelleR/zadanie1/assets/84729968/cab8adf4-a361-48ea-8fed-cf6a0bff11cf)
![image](https://github.com/TheRockefelleR/zadanie1/assets/84729968/f32984ff-bbc0-40b3-860e-5b074fdbde5a)




