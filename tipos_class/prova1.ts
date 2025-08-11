class Episodio {
  titulo: string;
  numero: number;
  elenco: string[];
  duracao: number;

  constructor(
    titulo: string,
    numero: number,
    elenco: string[],
    duracao: number
  ) {
    this.titulo = titulo;
    this.numero = numero;
    this.elenco = elenco;
    this.duracao = duracao;
  }
}

class Serie {
  titulo: string;
  episodios: Episodio[];

  constructor(titulo: string) {
    this.titulo = titulo;
    this.episodios = [];
  }
}

// para adicionar eposódios
function adicionaEpisodio(serie: Serie, episodio: Episodio): Serie {
  serie.episodios.push(episodio);
  return serie;
}

// para somar a duração dos episódios
function somaDuracao(serie: Serie): number {
  let total: number = 0;

  for (let episodio of serie.episodios) {
    total += episodio.duracao;
  }

  return total;
}

// para imprimir o elenco
function imprimeElenco(elenco: string[]): string {
  if (elenco.length == 0) {
    return "não foi possível pegar as informações de elenco";
  }

  let resultado: string = "";

  for (let i = 0; i < elenco.length; i++) {
    resultado += elenco[i] + ", ";
  }

  return resultado;
}

let e1 = new Episodio(
  "Half Loop",
  2,
  ["Adam Scott", "Zach Cherry", "Britt Lower"],
  56
);

let e2 = new Episodio(
  "In Perpetuity",
  3,
  ["Patricia Arquette", "John Turturro"],
  53
);

let e3 = new Episodio(
  "The You You Are",
  4,
  ["Timoté Chalamet", "Ana Maria Braga"],
  46
);

let serie = new Serie("Severance");

adicionaEpisodio(serie, e1);
adicionaEpisodio(serie, e2);
adicionaEpisodio(serie, e3);

console.log(somaDuracao(serie));

// console.log(imprimeElenco(e1.elenco));
// console.log(imprimeElenco(e2.elenco));
