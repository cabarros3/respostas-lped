class Filme {
  titulo: string;
  diretor: string;

  constructor(titulo: string, diretor: string) {
    this.titulo = titulo;
    this.diretor = diretor;
  }
}

function mesmoDiretor(diretor: string, filme: string[][]): string[][] {
  let resultado: string[][] = [];

  for (let i = 0; i < filme.length; i++) {
    if (filme[i][1] == diretor) {
      resultado.push(filme[i]);
    }
  }

  return resultado;
}

const filmes: string[][] = [
  ["A Origem", "Christopher Nolan", "2010"],
  ["Pulp Fiction", "Quentin Tarantino", "1994"],
  ["Interestelar", "Christopher Nolan", "2014"],
  ["O Fabuloso Destino de Amélie Poulain", "Jean-Pierre Jeunet", "2001"],
];

console.log(mesmoDiretor("Christopher Nolan", filmes));
