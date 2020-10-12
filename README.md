# Google Cloud Function

> Joãozinho está fazendo uma coleção de dados de todos os carros que ele já viu. Para guardar esses dados ele quer salvar no datastore/firestore os carros com seus atributos placa, cor, preço, modelo e marca para isso você deverá implementar uma google cloud function, em qualquer linguagem que seja possível, que receba uma requisição http com os atributos mencionados e salve no datastore. Faça uma outra function que seja capaz de mostrar os dados de um veículo recebendo a placa como parâmetro. O trabalho deve ser comitado no git (github, gitlab) deve ter um readme.md mostrando o endpoint que deve ser usado para enviar os dados e para ler os dados, bem como um print do resultado da chamada da function, um mostrando o dado persistido no DataStore e outro print demonstrando a function que busca os dados.

# End-Point
### Create vehicle
##### POST
[Create Vehicle](https://us-central1-atomic-graph-281200.cloudfunctions.net/function-1)
##### Image
<img src="http://i.imgur.com/82BFbhd.png?raw=true" width="700"/>

### Firestore
<img src="http://i.imgur.com/nFipL7A.png?raw=true" width="700"/>

### Find vehicle by plaque
##### GET
[Get Vehicle](https://us-central1-atomic-graph-281200.cloudfunctions.net/get-vehicle?plaque=hgw4865)
- Para buscar um veículo é necessário informar o parâmetro "plaque" na query-string
<img src="http://i.imgur.com/6SQAq3W.png?raw=true" width="700"/>




### Group
- [Uillian Henrique Amaral](https://github.com/uillianamaral)
- [Victor Assis](https://github.com/victorassisr)
