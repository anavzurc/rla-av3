function estadoValido(estado) {
    return estado === "AC" || estado === "AL" || estado === "AP" ||
           estado === "AM" || estado === "BA" || estado === "CE" ||
           estado === "DF" || estado === "ES" || estado === "GO" ||
           estado === "MA" || estado === "MT" || estado === "MS" ||
           estado === "MG" || estado === "PA" || estado === "PB" ||
           estado === "PR" || estado === "PE" || estado === "PI" ||
           estado === "RJ" || estado === "RN" || estado === "RS" ||
           estado === "RO" || estado === "RR" || estado === "SC" ||
           estado === "SP" || estado === "SE" || estado === "TO";
}

function zonaFiscal(estado) {
    if (estado === "DF" || estado === "GO" || estado === "MT" || estado === "MS" || estado === "TO") return 1;
    if (estado === "AC" || estado === "AM" || estado === "AP" || estado === "PA" || estado === "RO" || estado === "RR") return 2;
    if (estado === "CE" || estado === "MA" || estado === "PI") return 3;
    if (estado === "AL" || estado === "PB" || estado === "PE" || estado === "RN") return 4;
    if (estado === "BA" || estado === "SE") return 5;
    if (estado === "MG") return 6;
    if (estado === "ES" || estado === "RJ") return 7;
    if (estado === "SP") return 8;
    if (estado === "PR" || estado === "SC") return 9;
    if (estado === "RS") return 0;
}

function gerarCPF(estado) {
    let digitos = [];

    for (let i = 0; i < 9; i++) {
        digitos[i] = Math.floor(Math.random() * 10);
    }

    if (estado !== "") {
        digitos[8] = zonaFiscal(estado);
    }

    let soma1 = 0;
    for (let i = 0; i < 9; i++) {
        soma1 += digitos[i] * (10 - i);
    }

    let resto1 = soma1 % 11;
    let v1 = resto1 < 2 ? 0 : 11 - resto1;

    let soma2 = 0;
    for (let i = 0; i < 9; i++) {
        soma2 += digitos[i] * (11 - i);
    }

    soma2 += v1 * 2;

    let resto2 = soma2 % 11;
    let v2 = resto2 < 2 ? 0 : 11 - resto2;

    return digitos[0] + "" + digitos[1] + "" + digitos[2] + "." +
           digitos[3] + "" + digitos[4] + "" + digitos[5] + "." +
           digitos[6] + "" + digitos[7] + "" + digitos[8] + "-" +
           v1 + "" + v2;
}

function gerarRG() {
    let digitos = []
    let soma = 0;
    let RG;

    for (let i = 0; i < 8; i++) {
        digitos[i] = Math.floor(Math.random() * 10);
    }
    let pesos1 = [2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < 8; i++) {
        soma += digitos[i] * pesos1[i];
    }

    let resto1 = soma % 11;
    let v1 = resto1 < 2 ? 0 : 11 - resto1;

   return RG = digitos[0] + "" + digitos[1] + "." + digitos[2] + "" + digitos[3] + "" + digitos[4] + "." + digitos[5] + "" + digitos[6] + "" + digitos[7] + "-" + v1
}

function gerarCNPJ() {
    let digitos = [];

    for (let i = 0; i < 8; i++) {
        digitos[i] = Math.floor(Math.random() * 10);
    }

    digitos[8] = 0;
    digitos[9] = 0;
    digitos[10] = 0;
    digitos[11] = 1;

    let pesos1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    let soma1 = 0;
    for (let i = 0; i < 12; i++) {
        soma1 += digitos[i] * pesos1[i];
    }

    let resto1 = soma1 % 11;
    let v1 = resto1 < 2 ? 0 : 11 - resto1;

    let pesos2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    let soma2 = 0;
    for (let i = 0; i < 12; i++) {
        soma2 += digitos[i] * pesos2[i];
    }

    soma2 += v1 * 2;

    let resto2 = soma2 % 11;
    let v2 = resto2 < 2 ? 0 : 11 - resto2;

    return digitos[0] + "" + digitos[1] + "." +
           digitos[2] + "" + digitos[3] + "" + digitos[4] + "." +
           digitos[5] + "" + digitos[6] + "" + digitos[7] + "/" +
           digitos[8] + "" + digitos[9] + "" + digitos[10] + "" + digitos[11] + "-" +
           v1 + "" + v2;
}

function cadastroCPF() {
    let nomeCompleto = prompt("Digite seu nome completo: ");
    let nomePai = prompt("Digite o nome completo do pai: ");
    let nomeMae = prompt("Digite o nome completo da mãe: ");

    let estado = "";
    let escolherEstado = prompt("Deseja escolher um estado? (sim/não): ").toLowerCase();

    if (escolherEstado === "sim") {
        while (true) {
            estado = prompt("Digite a sigla do estado: ").toUpperCase();

            if (estadoValido(estado)) {
                break;
            }

            alert("Estado inválido!");
        }
    }

    let cpf = gerarCPF(estado);

    console.log("=== CADASTRO DE PESSOA FÍSICA ===");
    console.log("Registro geral:", gerarRG())
    console.log("Nome completo: ", nomeCompleto);
    console.log("Nome do pai: ", nomePai);
    console.log("Nome da mãe: ", nomeMae);

    if (estado !== "") {
        console.log("Estado: ", estado);
    }

    console.log("CPF gerado: ", cpf);
}

function cadastroCNPJ() {
    let razaoSocial = prompt("Digite a razão social da empresa: ");
    let nomeFantasia = prompt("Digite o nome fantasia da empresa: ");
    let endereco = prompt("Digite o endereço da empresa: ");
    let cidade = prompt("Digite a cidade da empresa: ");

    let estado = "";

    while (true) {
        estado = prompt("Digite a sigla do estado da empresa: ").toUpperCase();

        if (estadoValido(estado)) {
            break;
        }

        alert("Estado inválido!");
    }

    let telefone = prompt("Digite o telefone da empresa: ");
    let email = prompt("Digite o e-mail da empresa: ");

    let cnpj = gerarCNPJ();

    console.log("=== CADASTRO DE PESSOA JURÍDICA ===");
    console.log("Razão social: ", razaoSocial);
    console.log("Nome fantasia: ", nomeFantasia);
    console.log("Endereço: ", endereco);
    console.log("Cidade: ", cidade);
    console.log("Estado: ", estado);
    console.log("Telefone: ", telefone);
    console.log("E-mail: ", email);
    console.log("CNPJ gerado: ", cnpj);
}

let tipo = prompt("Gostaria de criar um CPF ou CNPJ? ").toLowerCase();

switch (tipo) {
    case "cpf":
        cadastroCPF();
        break;

    case "cnpj":
        cadastroCNPJ();
        break;
    
    default:
        alert("Opção inválida.");
}
