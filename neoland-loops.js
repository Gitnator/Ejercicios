


const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

for (i = 0; i<products.length; i++) {
    if (products[i].includes("Camiseta")) {
        console.log(products[i])
    }
}


//Iteración #2: Condicionales avanzados
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for (i = 0; i<alumns.length; i++) {
    if (alumns[i].includes("Pepe")) {
       console.log(alumns)
    }
    
}