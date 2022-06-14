"use strict"

function calcVaues(a, b) {
    return [
        a + b,
        undefined,
        a * b,
        a / b
    ]
}
// const result = calcVaues(55, 22)
// // const sum = result[0]
// // const sub = result[1]

// // Деструктиризация

// const [sum, sub, mult] = result

// // Так будет еще более деструктиризованнее
// // const [sum, sub] = calcVaues(55, 22)

// console.log(sum, mult)


// По новому напишем все что сверху

const [sum, sub = 'Вычитания нет', mult, ...other] = calcVaues(55, 22)

// console.log(sum, mult, other, sub)

// Objects

const person = {
    name: 'Nikita',
    age: 22,
    adress: {
        country: 'Belarus',
        city: 'Minsk'
    }
}

// const {
//     name: firstName,
//     age,
//     car = 'Touran',
//     adress: { city: homeTown, country }
// } = person
// console.log(firstName, age, car, homeTown, country)


// const { name, ...info } = person
// console.log(name, info)

function logPerson({ name: firstName, age, car = 'Нема' }) {
    console.log(firstName + ' ' + age + ' ' + car)
}

logPerson(person)