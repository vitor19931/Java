// Exercicio

// Crie um vetor com nome de seus familiares.
// Com seis nomes.

// Use todos os comandos vistos em vetores após criar a lista.

const listaDeFamiliares = ["Patricia", "Eneida", "Carlos", "João", "Rafael", "Cosme"]

console.log("\nExibindo todos os familiares: ")
console.log(listaDeFamiliares)

console.log("\nExibindo apenas o primeiro familiar: ")
console.log(listaDeFamiliares[0])

console.log("\nExibindo apenas o segundo familiar: ")
console.log(listaDeFamiliares[1])

console.log("\nExibindo apenas o terceiro familiar: ")
console.log(listaDeFamiliares[2])

console.log("\nExibindo apenas o quarto familiar: ")

console.log(listaDeFamiliares[3])

console.log("\nExibindo apenas o quinto familiar: ")
console.log(listaDeFamiliares[4])

console.log("\nExibindo apenas o sexto familiar: ")
console.log(listaDeFamiliares[5])

console.log("\nAdicionando um familiar: ")
listaDeFamiliares.push("Ivna")
console.log(listaDeFamiliares)

console.log("\nRemovendo o terceiro familiar: ")
listaDeFamiliares.splice(2, 1)
console.log(listaDeFamiliares)

console.log("\nRemovendo o segundo familiar: ")
listaDeFamiliares.splice(1, 1)
console.log(listaDeFamiliares)

console.log("\nRemovendo o ultimo familiar: ")
listaDeFamiliares.pop()
console.log(listaDeFamiliares)