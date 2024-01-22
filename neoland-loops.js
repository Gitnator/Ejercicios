




//* ITERACION 2
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

alumnitos = alumns.forEach(
    function (alumnitos) {
        const trimestresAprobados = [alumnitos.T1, alumnitos.T2, alumnitos.T3].filter(Boolean).length
        if (trimestresAprobados >= 2) {
            alumnitos.isApprove = true
        }
    }
)
console.log(alumns)




//* ITERACIÓN 3
const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar', "Africa"];
for (ciudades of placesToTravel) {
    console.log(ciudades)
}



//* ITERACIÓN 4
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for(propiedad in alien) {
    console.log("El alien tiene " + propiedad + "con valor: " + alien[propiedad])
}


//* ITERACIÓN 5
filteredplaces = []
const placesToTravel2 = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]
for(i=0; i<placesToTravel2.length; i++) {
    if (placesToTravel2[i].id !== 11 && placesToTravel2[i].id !== 40) {
        filteredplaces.push(placesToTravel2[i]);
    }
}

console.log(filteredplaces)


//* ITERACIÓN 5 (OTRA FORMA)
const placesToTravel3 = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]
constfiltered = placesToTravel3.filter(lugares => lugares.id !== 11 && lugares.id !== 40)



//* ITERACIÓN 6
const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]

    juguetes = []

    for (toy of toys) {
        if(!toy.name.includes("gato")) {
           juguetes.push(toy)
        }
        }
    
console.log(juguetes)

//ITERACIÓN 7
const popularToys = [];
const toys2 = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]
for(toy2 of toys2) {
    if(toy2.sellCount >= 15) {
        popularToys.push(toy2)
    }
}
console.log(popularToys)







const alien4 = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for(alienigena in alien4) {
    console.log("El alien con propiedad: " + alienigena + "tiene valor: " + alien4[propiedad])
    
}