// tipo AssentoOnibus
class AssentoOnibus {
  numero: number;
  fila: number;
  reservado: boolean;
  tipo: string;

  constructor(numero: number, fila: number, tipo: string) {
    this.numero = numero;
    this.fila = fila;
    this.reservado = false;
    this.tipo = tipo;
  }
}

// operação do tipo AssentoOnibus
function marcarReservado(assento: AssentoOnibus): void {
  assento.reservado = true;
}

// tipo onibus
class Onibus {
  placa: string;
  linha: string;
  listaDeAssentos: AssentoOnibus[];

  constructor(placa: string, linha: string) {
    this.placa = placa;
    this.linha = linha;
    this.listaDeAssentos = [];
  }
}

// operações do tipo Onibus

function adicionarAssento(onibus: Onibus, assento: AssentoOnibus): void {
  onibus.listaDeAssentos.push(assento);
}

function contarAssentosReservados(onibus: Onibus): number {
  let contador: number = 0;
  for (let assento of onibus.listaDeAssentos) {
    if (assento.reservado) {
      contador++;
    }
  }
  return contador;
}

let onibus1 = new Onibus("ABC-1234", "Linha 10");

let assento1 = new AssentoOnibus(1, 1, "janela");
let assento2 = new AssentoOnibus(2, 1, "corredor");

adicionarAssento(onibus1, assento1);
adicionarAssento(onibus1, assento2);

marcarReservado(assento2);
marcarReservado(assento1);

console.log(contarAssentosReservados(onibus1));
