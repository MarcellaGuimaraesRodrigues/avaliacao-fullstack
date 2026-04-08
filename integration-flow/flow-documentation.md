# Fluxo de Integração

## Visão Geral

O fluxo foi pensado para buscar pedidos confirmados no banco de dados, tratar essas informações e enviar os dados para uma API.

---

## 1. Nó de Entrada (Banco de Dados)

Esse nó é responsável por buscar os dados no banco utilizando uma query SQL.

São retornadas informações de:
- pedidos
- clientes
- itens do pedido
- produtos

A consulta utiliza JOIN entre as tabelas para trazer tudo já relacionado.

---

## 2. Nó de Filtro

Aqui são removidos os registros que não atendem o que a gente precisa.

Exemplos:
- pedidos que não estão com status "confirmado"
- pedidos sem itens
- pedidos sem cliente

---

## 3. Nó de Transformação

Nesse passo os dados são reorganizados para o formato esperado pela API.

Antes os dados vêm separados em várias colunas, e depois são agrupados no formato correto.

Exemplo:

Entrada (banco):
- cliente, produto e quantidade separados

Saída (API):

```json
{
  "cliente_id": 10,
  "itens": [
    { "produto_id": 2, "quantidade": 3 }
  ],
  "data_entrega": "2024-01-25"
}

---
### 4. Nó de Validação

Aqui é feita uma checagem antes de enviar os dados.

Regras consideradas:
- cliente precisa existir
- quantidade maior que zero
- produto válido

Se algo estiver errado, o registro não segue no fluxo.

---

### 5. Nó de Saída (API)

Depois de tratado, o dado é enviado para a API.

Endpoint utilizado:
POST /pedidos

---

### 6. Nó de Log

Esse nó registra o que aconteceu no processamento.

São guardadas informações como:
- envios com sucesso
- erros
- dados descartados

---

## Exemplos

### Entrada (Banco de Dados)

```json
{
  "pedido_id": 1,
  "cliente_id": 10,
  "produto_id": 2,
  "quantidade": 3
}

### Saida(API)

{
  "cliente_id": 10,
  "itens": [
    { "produto_id": 2, "quantidade": 3 }
  ],
  "data_entrega": "2024-01-25"
}

