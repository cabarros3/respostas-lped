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
 * Questão 2: Reescreva corretamente o programa abaixo para que ele possa computar e retornar a soma de todos os números entre x e 0  (intervalo inclusivo). Para cada alteração feita no código escreva uma frase justificando a mesma como comentário no código-fonte.
 * 
 */

function f(x : number) : number { // funcion -> function
	let resultado : number = 0
	let y : number = 0 // inicialização do y

	while (y <= x) { // correção da condição do laço
		resultado = resultado + y // incremento correto
		y++ // incremento do y
	}

	return resultado // retorno do resultado
}

console.log(f(3)) // console..log() -> console.log