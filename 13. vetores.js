// Vetores.

const listaDeNomes = ["Marta, José, Maria"]

console.log("Exibindo todos os elementos:")
console.log(listaDeNomes)
    
console.log("\nExibindo apenas o primeiro elemento: ")
console.log(listaDeNomes[0])

console.log("\nAdicionando um elemento: ")
listaDeNomes.push("Marilia")
console.log(listaDeNomes)

// Sua vez, adicone mais um nome na lista

console.log("\nRemovendo um elemento: ")
// No indice 2, remover 1 apenas elemento
listaDeNomes.splice(2, 1)
console.log(listaDeNomes)


// Sua vez, Remova apenas o segundo elemento da lista

console.log("\nRemovendo o segundo elemento: ")
listaDeNomes.splice(1, 1)
console.log(listaDeNomes)

console.log("\nRemovendo o ultimo elemento: ")
listaDeNomes.pop()
console.log(listaDeNomes)

console.log("\nRemovendo apenas o primeiro elemento: ")
listaDeNomes.shift()
console.log(listaDeNomes)