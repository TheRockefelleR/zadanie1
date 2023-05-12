# Zadanie nr. 1

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
![image](https://github.com/TheRockefelleR/zadanie1/assets/84729968/fa52f891-9e9c-4613-8d8a-667715d4ba88)
2. Przy pomocy docker desktor
![image](https://github.com/TheRockefelleR/zadanie1/assets/84729968/c17ed818-88ae-4e41-86aa-efc6286b3a87)


Sprawdzenie poprawności wyświetlanych informacji na stronie:
1. Przy pomocy polecenia curl 127.0.0.1:`PORT`
![image](https://github.com/TheRockefelleR/zadanie1/assets/84729968/683f9e5f-3b60-4e12-b663-472e611de972)
2. Przy pomocy przeglądarki
![image](https://github.com/TheRockefelleR/zadanie1/assets/84729968/5d8b86a3-4ecb-4c4d-ae94-4b6af47dd610)


![image](https://github.com/TheRockefelleR/zadanie1/assets/84729968/e48ed44b-d80a-43c2-8b7d-ead6a09e032a)



