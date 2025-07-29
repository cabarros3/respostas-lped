// lista de filmes

class Filmes {
  id: string;
  titulo: string;
  diretor: string;
  duracao: string;
  sinopse: string;

  constructor(
    id: string,
    titulo: string,
    diretor: string,
    duracao: string,
    sinopse: string
  ) {
    this.id = id;
    this.titulo = titulo;
    this.diretor = diretor;
    this.duracao = duracao;
    this.sinopse = sinopse;
  }
}

let listaFilmes: string[][] = [
  [
    "001",
    "Crepúsculo",
    "Fulano de Tal",
    "120min",
    "Um vampiro imortal no ensino médio apronta poucas e boas",
  ],
  [
    "002",
    "Entrevista com o vampiro",
    "Ciclano de tal",
    "110min",
    "Um vampiro muito drogado acho que é de boa fazer uma entrevista",
  ],
  [
    "003",
    "Elf",
    "Um querido de tal",
    "96min",
    "Um homem de mais de 30 anos acha que é filho de elfos e apronta muito em NY no natal",
  ],
];

function buscaFilme(titulo: string): string[] | undefined {
  for (let i: number = 0; i < listaFilmes.length; i++) {
    for (let j: number = 0; j < listaFilmes[i].length; j++) {
      if (listaFilmes[i][1] === titulo) {
        return listaFilmes[i];
      }
    }
  }

  return undefined;
}

let busca = buscaFilme("Elf");

if (busca) {
  console.log("filme encontrado", busca);
} else {
  console.log("Filme não encontrado");
}
