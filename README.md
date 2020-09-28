# API Node.Js eProntuario

Tem por função intermediar a comunicação entre a aplicação eProntuario e o SGBD MySQL.
Utiliza framework Express 4.17.1 e dependencia mysql 2.18.1.
A ordem execução dos arquivos .js e respectivas funções estão descritas a seguir:

```
index.js
Inicializador da API. 
Cria listener para: http://localhost:9001/pacientes
Evoca controller-pacientes.js para assumir o controle a partir daí.
```

Uma vez na página, vá no menu abaixo:

```
Informações
```