function gerar_CNPJ() {
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

function atualizarNaTelaCNPJ(cnpj, razaoSocial, nomeFantasia, endereco, cidade, estado, telefone, email){
    const divCNPJ = document.getElementById('SAIDA_CNPJ');
    divCNPJ.innerHTML = cnpj;
    const divRazaoSocial = document.getElementById('SAIDA_RAZAO_SOCIAL');
    divRazaoSocial.innerHTML = razaoSocial;
    const divNomeFantasia = document.getElementById('SAIDA_NOME_FANTASIA');
    divNomeFantasia.innerHTML = nomeFantasia;
    const divEndereco = document.getElementById('SAIDA_ENDERECO');
    divEndereco.innerHTML = endereco;
    const divCidade = document.getElementById('SAIDA_CIDADE');
    divCidade.innerHTML = cidade;
    const divEstado = document.getElementById('SAIDA_ESTADO');
    divEstado.innerHTML = estado;
    const divTelefone = document.getElementById('SAIDA_TELEFONE');
    divTelefone.innerHTML = telefone;
    const divEmail = document.getElementById('SAIDA_EMAIL');
    divEmail.innerHTML = email;
}

const formularioCNPJ = document.forms.formulario_cnpj;

if(formularioCNPJ) {
    formularioCNPJ.gerarCNPJ.addEventListener('click', function (event) {
        const cnpj = gerar_CNPJ()
        const razaoSocial = formularioCNPJ.razao_social.value;
        const nomeFantasia = formularioCNPJ.nome_fantasia.value;
        const endereco = formularioCNPJ.endereco.value;
        const cidade = formularioCNPJ.cidade.value;
        const estado = formularioCNPJ.estados.value;
        const telefone = formularioCNPJ.telefone.value;
        const email = formularioCNPJ.email.value;

        atualizarNaTelaCNPJ(cnpj, razaoSocial, nomeFantasia, endereco, cidade, estado, telefone, email);
    })
    formularioCNPJ.copiar_cnpj.addEventListener('click', function (event) {
        event.preventDefault();
        const divCNPJ = document.getElementById('SAIDA_CNPJ');

        window.navigator.clipboard.write([new ClipboardItem({
            'text/plain': new Blob([divCNPJ.innerText], {type: 'text/plain'}),
            'text/html': new Blob([divCNPJ.innerHTML], {type: 'text/html'})
        })])
    })
} else console.log("Formulário CNPJ não encontrado");
