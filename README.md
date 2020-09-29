# API Node.Js eProntuario

Tem por função intermediar a comunicação entre a aplicação eProntuario e o SGBD MySQL.
Utiliza framework Express 4.17.1 e dependencia mysql 2.18.1.
A ordem execução dos arquivos .js e respectivas funções estão descritas a seguir:

## /src/index.js
```
Inicializador da API. 
Cria listener para: http://localhost:9001/pacientes
Evoca controller-pacientes.js para assumir o controle a partir daí.
```

## /pacientes/controller-pacientes.js
```
Direciona a rota (verbo + destino) para a função correspondente escrita em service-pacientes.js.
Ao receber o retorno da função envia HTTP response para o requisitante.
```

## /pacientes/service-pacientes.js
```
Trata a regra de negócio e quando necessário adapta o body do request para interagir com o SGBD MySQL.
Quando a regra de negócio é violada retorna imediatamente ao controller-pacientes.js. 
Do contrário, chama a função correspondente escrita em dao-pacientes.js.
```

## /pacientes/dao-pacientes.js
```
Estabelece a conexão com o SGBD MySQL evocando o arquivo /src/database.js a cada chamada de função.
A função interage com o BD e retorna com o solicitado.
```
