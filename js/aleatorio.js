// Lista de nomes para o sorteio (Aula 6)
const nomes = ["Ana", "Fernanda", "Maria Eduarda", "Marcelo", "Amanda", "Gustavo", "Gabriel", "Giuliana"];

// Função que escolhe um item aleatório de qualquer lista (Aula 2)
export function aleatorio (lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

// Exporta um nome sorteado desta lista (Aula 6)
export const nome = aleatorio(nomes);
