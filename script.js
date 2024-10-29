function showSection(section) {
    // Esconder todas as seções
    document.getElementById('csSection').classList.add('d-none');
    document.getElementById('ceSection').classList.add('d-none');
    document.getElementById('seSection').classList.add('d-none');

    // Mostrar a seção selecionada
    document.getElementById(section).classList.remove('d-none');
}
