# Gerador de CPF e CNPJ

## Alunas: 

Ana Carolina Aleixo Correa, Ana Valéria Cruz de Sousa e Taís Moreira Barros Souto

## Disciplina:

Raciocínio Lógico Algorítmico, 1º semestre.

---

### Descrição

Este projeto foi desenvolvido em JavaScript (além de utilizar HTML para estruturação e CSS para estilização) com o objetivo de gerar números válidos de CPF e CNPJ utilizando os algoritmos oficiais de cálculo dos dígitos verificadores.
O sistema realiza um cadastro simples de pessoas físicas e jurídicas, armazenando informações fornecidas pelo usuário durante a execução.

---

### Funcionalidades

### Pessoa Física (CPF)

Cadastro:
- Nome completo
- Nome do pai
- Nome da mãe
- Estado (opcional)
- Geração automática de CPF válido
- Associação do nono dígito do CPF à região fiscal correspondente ao estado informado

### Pessoa Jurídica (CNPJ)

Cadastro:
- Razão Social
- Nome Fantasia
- Endereço
- Cidade
- Estado
- Telefone
- E-mail
- Geração automática de CNPJ válido
- Criação de CNPJ matriz (0001)

---

### Pipeline de Execução


INÍCIO
 |
Usuário escolhe CPF ou CNPJ
 |
 |_ CPF
 |     |
 |  Cadastro de Pessoa Física
 |     |
 |  Validação do Estado
 |     |
 |  Geração do CPF
 |     |
 |  Exibição dos Dados
 |
 |_ CNPJ
       |
    Cadastro da Empresa
       |
    Validação do Estado
       |
    Geração do CNPJ
       |
    Exibição dos Dados


---

### Estrutura do Código

`estadoValido()`

- Valida se a sigla informada corresponde a um estado brasileiro.

`zonaFiscal()`

- Retorna o código da região fiscal utilizado no nono dígito do CPF.

`gerarCPF()`

- Gera 9 dígitos base
- Define a região fiscal
- Calcula os dois dígitos verificadores
- Retorna o CPF formatado

`gerarCNPJ()`

- Gera os 8 dígitos iniciais
- Adiciona a sequência 0001
- Calcula os dois dígitos verificadores
- Retorna o CNPJ formatado

`cadastroCPF()`

- Gerencia o fluxo de cadastro de pessoa física.

`cadastroCNPJ()`

- Gerencia o fluxo de cadastro de pessoa jurídica.

---

### Tecnologias Utilizadas

- JavaScript
- HTML
- CSS

---

### Como Executar

1. Abrir o código em um ambiente JavaScript
2. Executar o programa
3. Escolher entre CPF ou CNPJ
4. Informar os dados solicitados
5. Visualizar os resultados gerados no console.

---

> Observação: 
> Como funcionalidade adicional, foi iniciada a implementação de um **gerador de RG**. Mesmo não fazendo parte dos objetivos definidos para o projeto, sua inclusão serviu como estudo complementar sobre validação e geração de documentos. A funcionalidade permanece em desenvolvimento e não impacta o funcionamento dos módulos de CPF e CNPJ.
