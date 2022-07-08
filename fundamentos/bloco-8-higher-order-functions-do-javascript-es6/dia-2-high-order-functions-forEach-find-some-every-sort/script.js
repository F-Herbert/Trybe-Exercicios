// // const emailListInData = [
// //     'roberta@email.com',
// //     'paulo@email.com',
// //     'anaroberta@email.com',
// //     'fabiano@email.com',
// //   ];

// //   const showEmailList = (email) => {
// //     console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
// //   };


// // emailListInData.forEach((index) => showEmailList(index))


// // const numbers = [19, 21, 30, 3, 45, 22, 15];

// // const findDivisibleBy3And5 = () => {
// //     return numbers.find((number) => number % 3 === 0 && number % 5 === 0);
// // }

// // console.log(findDivisibleBy3And5())

// // const names = ['João', 'Irene', 'Fernando', 'Maria'];

// // const findNameWithFiveLetters = () => {
// //    return names.find((item) => item.length === 5)
// // }

// // console.log(findNameWithFiveLetters());


// // const musicas = [
// //     { id: '31031685', title: 'Partita in C moll BWV 997' },
// //     { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
// //     { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
// // ]

// // function findMusic(id) {
// //   return  musicas.find((musicas) => musicas.id === id).title;
// // }

// // console.log(findMusic('31031686'))


// // const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// // const hasName = (arr, name) => {
// //   return names.some((nome) => nome === name);
// // }

// // console.log(hasName(names, 'Ana'))

// // const people = [
// //     { name: 'Mateus', age: 18 },
// //     { name: 'José', age: 16 },
// //     { name: 'Ana', age: 23 },
// //     { name: 'Cláudia', age: 20 },
// //     { name: 'Bruna', age: 19 },
// // ];

// // const verifyAges = (arr, minimumAge) => {
// //     return people.every((person) => person.age >= minimumAge)
// // }

// // console.log(verifyAges(people, 18));

// const estudantes = [
//     {
//         nome: 'Jorge',
//         sobrenome: 'Silva',
//         idade: 14,
//         turno: 'Manhã',
//         materias: [
//             { name: 'Matemática', nota: 67 },
//             { name: 'Português', nota: 79 },
//             { name: 'Química', nota: 70 },
//             { name: 'Biologia', nota: 65 },
//         ],
//     },
//     {
//         nome: 'Mario',
//         sobrenome: 'Ferreira',
//         idade: 15,
//         turno: 'Tarde',
//         materias: [
//             { name: 'Matemática', nota: 59 },
//             { name: 'Português', nota: 80 },
//             { name: 'Química', nota: 78 },
//             { name: 'Biologia', nota: 92 },
//         ],
//     },
//     {
//         nome: 'Jorge',
//         sobrenome: 'Santos',
//         idade: 15,
//         turno: 'Manhã',
//         materias: [
//             { name: 'Matemática', nota: 76 },
//             { name: 'Português', nota: 90 },
//             { name: 'Química', nota: 70 },
//             { name: 'Biologia', nota: 80 },
//         ],
//     },
//     {
//         nome: 'Maria',
//         sobrenome: 'Silveira',
//         idade: 14,
//         turno: 'Manhã',
//         materias: [
//             { name: 'Matemática', nota: 91 },
//             { name: 'Português', nota: 85 },
//             { name: 'Química', nota: 92 },
//             { name: 'Biologia', nota: 90 },
//         ],
//     },
//     {
//         nome: 'Natalia',
//         sobrenome: 'Castro',
//         idade: 14,
//         turno: 'Manhã',
//         materias: [
//             { name: 'Matemática', nota: 70 },
//             { name: 'Português', nota: 70 },
//             { name: 'Química', nota: 60 },
//             { name: 'Biologia', nota: 50 },
//         ],
//     },
//     {
//         nome: 'Wilson',
//         sobrenome: 'Martins',
//         idade: 14,
//         turno: 'Manhã',
//         materias: [
//             { name: 'Matemática', nota: 80 },
//             { name: 'Português', nota: 82 },
//             { name: 'Química', nota: 79 },
//             { name: 'Biologia', nota: 75 },
//         ],
//     },
// ];

// const getBestClass = (acc, materia) => {
//     if (acc.nota > materia.nota) return acc;
//     return materia;
// };

// const reportBetter = (students) => students.map((student) => ({
//     name: student.nome,
//     materia: student.materias.reduce(getBestClass).name
// }));

// console.log(reportBetter(estudantes));


// const meusDados =  [{nome: 'Felipe Herbert', email: 'felipe_herbert@hotmail.com.br'}]

// const exibeMeusDadosModificados = (dados) => {
//     return dados.reduce((acc,value) => {
//         return acc[nome:]
//     })
// }

// console.log(exibeMeusDadosModificados(meusDados));

// // Faça uma lista com as suas frutas favoritas
// const specialFruit = ['abacaxi', 'melancia', 'melão'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['açucar', 'leite', 'leite-condesado'];

// const fruitSalad = (fruit, additional) => [...fruit,...additional];

// console.log(fruitSalad(specialFruit, additionalItens));

// const sum = (array) => array.reduce((accumulator, current) => accumulator + current, 0);
// console.log(sum(4, 7, 8, 9, 60)); // 88


// const user = {
//     name: 'Maria',
//     age: 21,
//     nationality: 'Brazilian',
// };

// const jobInfos = {
//     profession: 'Software engineer',
//     squad: 'Rocket Landing Logic',
//     squadInitials: 'RLL',
// };

// const dadosAtualizados = {...user,...jobInfos}

// const retornaObjetoAtualizado = ({ name, age, nationality,profession,squad,squadInitials }) => {
//     return `Olá meu nome é ${name},tenho ${age} anos,minha nacionalidade é ${nationality},minha profissão é ${profession},eu jogo na ${squad} e meu time é ${squadInitials}`
// }

// console.log(retornaObjetoAtualizado(dadosAtualizados));

const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada

console.log(arrayCountries);