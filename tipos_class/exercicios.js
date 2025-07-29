// // lista de filmes
// class Filmes {
//   id: string;
//   titulo: string;
//   diretor: string;
//   duracao: string;
//   sinopse: string;
//   constructor(
//     id: string,
//     titulo: string,
//     diretor: string,
//     duracao: string,
//     sinopse: string
//   ) {
//     this.id = id;
//     this.titulo = titulo;
//     this.diretor = diretor;
//     this.duracao = duracao;
//     this.sinopse = sinopse;
//   }
// }
// let listaFilmes: string[][] = [
//   [
//     "001",
//     "Crepúsculo",
//     "Fulano de Tal",
//     "120min",
//     "Um vampiro imortal no ensino médio apronta poucas e boas",
//   ],
//   [
//     "002",
//     "Entrevista com o vampiro",
//     "Ciclano de tal",
//     "110min",
//     "Um vampiro muito drogado acho que é de boa fazer uma entrevista",
//   ],
//   [
//     "003",
//     "Elf",
//     "Um querido de tal",
//     "96min",
//     "Um homem de mais de 30 anos acha que é filho de elfos e apronta muito em NY no natal",
//   ],
// ];
// function buscaFilme(titulo: string): string[] | undefined {
//   for (let i: number = 0; i < listaFilmes.length; i++) {
//     for (let j: number = 0; j < listaFilmes[i].length; j++) {
//       if (listaFilmes[i][1] === titulo) {
//         return listaFilmes[i];
//       }
//     }
//   }
//   return undefined;
// }
// let busca = buscaFilme("Elf");
// if (busca) {
//   console.log("filme encontrado", busca);
// } else {
//   console.log("Filme não encontrado");
// }
var QuadradoDeNumero = /** @class */ (function () {
    function QuadradoDeNumero(base) {
        this.base = base;
        this.resultado = Math.pow(base, 2);
    }
    return QuadradoDeNumero;
}());
var listaBases = [
    [1, 2, 3],
    [4, 5, 6],
];
function gerarQuadrados(bases) {
    var resultado = [];
    for (var i = 0; i < bases.length; i++) {
        for (var j = 0; j < bases[i].length; j++) {
            var base = bases[i][j];
            resultado.push(new QuadradoDeNumero(base));
        }
    }
    return resultado;
}
var quadrados = gerarQuadrados(listaBases);
console.log(quadrados);
// for (let i = 0; i < quadrados.length; i++) {
//   console.log(`${quadrados[i].base}² = ${quadrados[i].resultado}`);
// }
// correcao
var Sacola = /** @class */ (function () {
    function Sacola(fabricante, volume, biodegradavel) {
        this.fabricante = fabricante;
        this.volume = volume;
        this.biodegradavel = biodegradavel;
    }
    return Sacola;
}());
function ehBiodegradavel(s1, s2) {
    return s1.biodegradavel && s2.biodegradavel;
}
var sacola1 = new Sacola("ABC", 10, true);
var sacola2 = new Sacola("XYZ", 8, true);
console.log(ehBiodegradavel(sacola1, sacola2));
