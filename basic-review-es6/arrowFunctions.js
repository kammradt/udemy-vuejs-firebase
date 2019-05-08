const greetName = function (name) {
    console.log(`Hi ${name}!`)
}

const greetArrow = name => {
    console.log(`Hi ${name}!`)
}

const greetFriend = () => {
    console.log('Hello friend!')
}

const greet = () => console.log('Hi')

greetName('Vini')
greetArrow('Kamm')
greetFriend()
greet()