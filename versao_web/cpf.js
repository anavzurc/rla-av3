function gerarCPF(estado, formatacao) {
    let digitos = [];

    for (let i = 0; i < 9; i++) {
        digitos[i] = Math.floor(Math.random() * 10);
    }

    if (estado !== "") {
        digitos[8] = estado;
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

    if (formatacao === "sim") {
        return digitos[0] + "" + digitos[1] + "" + digitos[2] + "." +
            digitos[3] + "" + digitos[4] + "" + digitos[5] + "." +
            digitos[6] + "" + digitos[7] + "" + digitos[8] + "-" +
            v1 + "" + v2;
    }
    return digitos[0] + "" + digitos[1] + "" + digitos[2] + "" +
        digitos[3] + "" + digitos[4] + "" + digitos[5] + "" +
        digitos[6] + "" + digitos[7] + "" + digitos[8] + "" +
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
        console.log(soma)
    }

    let resto1 = soma % 11;
    let v1 = resto1 < 2 ? 0 : 11 - resto1;

   return RG = digitos[0] + "" + digitos[1] + "." + digitos[2] + "" + digitos[3] + "" + digitos[4] + "." + digitos[5] + "" + digitos[6] + "" + digitos[7] + "-" + v1
}

function atualizarNaTelaCPF(cpf, nome, filiacao, rg) {
    const divCPF = document.getElementById('SAIDA_CPF');
    divCPF.innerHTML = cpf;
    const divRG = document.getElementById('SAIDA_RG');
    divRG.innerHTML = rg;
    const divFiliacao = document.getElementById('SAIDA_FILIACAO');
    divFiliacao.innerHTML = filiacao;
    const divNome = document.getElementById('SAIDA_NOME');
    divNome.innerHTML = nome;
}

const formulario = document.forms.formulario_cpf;

if (formulario) {
    formulario.gerar.addEventListener('click', function (event) {
        event.preventDefault();
        const nonoDigito = formulario.estados.value;
        const formatacao = formulario.decisao.value;

        const cpf = gerarCPF(nonoDigito, formatacao);
        const nome = formulario.nome.value;
        const filiciao = formulario.pai.value + "<br>" + formulario.mae.value;
        const rg = gerarRG(nonoDigito);

        atualizarNaTelaCPF(cpf, nome, filiciao, rg);
    })
    formulario.copiar_cpf.addEventListener('click', function (event) {
        event.preventDefault();
        const divCPF = document.getElementById('SAIDA_CPF');

        window.navigator.clipboard.write([new ClipboardItem({
            'text/plain': new Blob([divCPF.innerText], {type: 'text/plain'}),
            'text/html': new Blob([divCPF.innerHTML], {type: 'text/html'})
        })])

    })
} else console.log("Formulário CPF não encontrado");
