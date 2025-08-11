// tipo AssentoOnibus
var AssentoOnibus = /** @class */ (function () {
    function AssentoOnibus(numero, fila, tipo) {
        this.numero = numero;
        this.fila = fila;
        this.reservado = false;
        this.tipo = tipo;
    }
    return AssentoOnibus;
}());
// operação do tipo AssentoOnibus
function marcarReservado(assento) {
    assento.reservado = true;
}
// tipo onibus
var Onibus = /** @class */ (function () {
    function Onibus(placa, linha) {
        this.placa = placa;
        this.linha = linha;
        this.listaDeAssentos = [];
    }
    return Onibus;
}());
// operações do tipo Onibus
function adicionarAssento(onibus, assento) {
    onibus.listaDeAssentos.push(assento);
}
function contarAssentosReservados(onibus) {
    var contador = 0;
    for (var _i = 0, _a = onibus.listaDeAssentos; _i < _a.length; _i++) {
        var assento = _a[_i];
        if (assento.reservado) {
            contador++;
        }
    }
    return contador;
}
var onibus1 = new Onibus("ABC-1234", "Linha 10");
var assento1 = new AssentoOnibus(1, 1, "janela");
var assento2 = new AssentoOnibus(2, 1, "corredor");
adicionarAssento(onibus1, assento1);
adicionarAssento(onibus1, assento2);
marcarReservado(assento2);
marcarReservado(assento1);
console.log(contarAssentosReservados(onibus1));
