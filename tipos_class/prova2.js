var Filme = /** @class */ (function () {
    function Filme(titulo, diretor) {
        this.titulo = titulo;
        this.diretor = diretor;
    }
    return Filme;
}());
function mesmoDiretor(diretor, filme) {
    var resultado = [];
    for (var i = 0; i < filme.length; i++) {
        if (filme[i][1] == diretor) {
            resultado.push(filme[i]);
        }
    }
    return resultado;
}
var filmes = [
    ["A Origem", "Christopher Nolan", "2010"],
    ["Pulp Fiction", "Quentin Tarantino", "1994"],
    ["Interestelar", "Christopher Nolan", "2014"],
    ["O Fabuloso Destino de Amélie Poulain", "Jean-Pierre Jeunet", "2001"],
];
console.log(mesmoDiretor("Christopher Nolan", filmes));
