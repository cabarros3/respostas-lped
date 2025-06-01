/* 
 * 
 * Instituto Federal de Educação, Ciência e Tecnologia – IFPE, Campus Igarassu 
 * Cursos: IPI - Informática para Internet  
 *         TSI – Sistema para Internet 
 *  
 * Professor: Allan Diego Silva Lima  
 * Aula 05 – Laços 
 * Licença: Creative Commons CC BY -
 * https://creativecommons.org/licenses/by/4.0/deed.pt_BR 
 *
 * Questão 1, letra a: Dadas duas datas (apenas mês e ano para cada data) como parâmetro, retornar quantos meses há entre as ambas
 * 
 */

function dataParaMeses(ano : number, mes : number) : number {
	return (ano * 12) + mes
}

function diferencaDatas(d1m : number, d1a : number, d2m : number, d2a : number) : number {
	let mesesD1 : number = dataParaMeses(d1a, d1m)
	let mesesD2 : number = dataParaMeses(d2a, d2m)

	let diferenca : number = mesesD1 - mesesD2

	if (diferenca < 0) {
		diferenca = -diferenca
	}

	return diferenca
}

let resultado : number = diferencaDatas(10, 25, 8, 15)

console.log(resultado)