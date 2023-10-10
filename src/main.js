function exibirDados() {
    fetch('people.json') // Substitua 'dados.json' pelo caminho real do seu arquivo JSON
        .then(response => response.json())
        .then(data => {
            const tabela = document.getElementById('corpo-tabela');
            tabela.innerHTML = ''; // Limpa qualquer conteúdo anterior na tabela

            data.results.forEach(personagem => {
                const nome = personagem.name;
                const altura = personagem.height;
                const peso = personagem.mass;
                const imagemUrl = personagem.image_url; // Substitua 'image_url' pelo nome correto do campo no seu JSON

                const linha = document.createElement('tr');
                linha.innerHTML = `
                    <td>${nome}</td>
                    <td>${altura} cm</td>
                    <td>${peso} kg</td>
                    <td><img src="${imagemUrl}" alt="${nome}" width="100"></td> <!-- Inclui a imagem -->
                `;
                tabela.appendChild(linha);
            });
        });
}