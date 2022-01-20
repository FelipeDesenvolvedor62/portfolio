document.body.addEventListener('keydown', function (event) {
    if (event.key.toLocaleUpperCase() == 'ESCAPE') {
        document.getElementById("modal").style.display = "none";
    }
});

var modal = document.getElementById('modal');
modal.addEventListener('click', function (e) {
    if (e.target == this) fecharModal();
});

function buscarConhecimentos(linguagem) {
    var conhecimentos = { JAVA: ['Spring Boot', 'Mavem', 'JPA'] }

    return conhecimentos[linguagem]
}

function abrirConhecimentos(linguagem) {
    adicionarTituloModal('Conhecimentos');
    adicionarElemento(buscarConhecimentos(linguagem));
    abrirModal();
}

function abrirCertificados(linguagem) {
    adicionarTituloModal('Certificados');
    adicionarElemento(buscarCertificado(linguagem), linguagem, true);
    abrirModal();
}

function adicionarTituloModal(titulo) {
    document.getElementById('modal').querySelector('H1').innerText = titulo
}

function abrirModal() {
    document.querySelector('html').style = 'overflow: hidden'
    document.getElementById("modal").style.display = "block";
}

function fecharModal() {
    document.querySelector('html').style = 'overflow: none'
    document.getElementById('modal').style.display = 'none'
}
function adicionarElemento(conhecimentos, linguagem, baixar = false) {
    let lista = document.getElementById("conhecimentos");

    lista.querySelectorAll("p").forEach((x) => x.remove());

    conhecimentos.forEach((x, index) => {
        let el = document.createElement("p");
        let opcoes = ''

        if (baixar) {
            opcoes = '(Baixar) - '
            el.onclick = function () {
                arquivosCertificados(linguagem, index)
            }
        }

        el.className = "modal-paragrafo";
        el.appendChild(document.createTextNode(opcoes + x));
        lista.appendChild(el);
    });
}

function arquivosCertificados(linguagem, index) {
    window.open('./assets/certificados/' + linguagem.toLocaleLowerCase() + index + '.png')
}

function buscarCertificado(linguagem) {
    var centificados = { JAVA: ['Java 2020 COMPLETO: Do Zero ao Profissional + Projetos! - 77 horas'] }

    return centificados[linguagem]
}