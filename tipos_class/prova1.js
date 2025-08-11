var Episodio = /** @class */ (function () {
    function Episodio(titulo, numero, elenco, duracao) {
        this.titulo = titulo;
        this.numero = numero;
        this.elenco = elenco;
        this.duracao = duracao;
    }
    return Episodio;
}());
var Serie = /** @class */ (function () {
    function Serie(titulo) {
        this.titulo = titulo;
        this.episodios = [];
    }
    return Serie;
}());
// para adicionar eposódios
function adicionaEpisodio(serie, episodio) {
    serie.episodios.push(episodio);
    return serie;
}
// para somar a duração dos episódios
function somaDuracao(serie) {
    var total = 0;
    for (var _i = 0, _a = serie.episodios; _i < _a.length; _i++) {
        var episodio = _a[_i];
        total += episodio.duracao;
    }
    return total;
}
// para imprimir o elenco
function imprimeElenco(elenco) {
    if (elenco.length == 0) {
        return "não foi possível pegar as informações de elenco";
    }
    var resultado = "";
    for (var i = 0; i < elenco.length; i++) {
        resultado += elenco[i] + ", ";
    }
    return resultado;
}
var e1 = new Episodio("Half Loop", 2, ["Adam Scott", "Zach Cherry", "Britt Lower"], 56);
var e2 = new Episodio("In Perpetuity", 3, ["Patricia Arquette", "John Turturro"], 53);
var e3 = new Episodio("The You You Are", 4, ["Timoté Chalamet", "Ana Maria Braga"], 46);
var serie = new Serie("Severance");
adicionaEpisodio(serie, e1);
adicionaEpisodio(serie, e2);
adicionaEpisodio(serie, e3);
console.log(somaDuracao(serie));
// console.log(imprimeElenco(e1.elenco));
// console.log(imprimeElenco(e2.elenco));
