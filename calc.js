 var rs = require('readline-sync');

var operator = rs.question('Please enter Operator( +, -, *, /)', {
    limit:['/', '*', '+', '-'],
    limitMessage: 'Invalid Operation. Please enter valid operator'
})

var num1 = rs.questionInt('Enter first number')
var num2 = rs.questionInt('Enter second number')
let  functions = {
    '+': (a,b) => a+b,
    '-': (a,b) => a-b,
    '*': (a,b) => a*b,
    '/': (a,b) => a/b,
}

console.log(functions[operator](num1,num2));

const skaterDude = {
    name: 'Brayden',
    stance: 'Goofy',
    favTrick: '360 flips',
    doTrick() {
        console.log('Droppin some hammers with some '+ this.favTrick)
        const forDayzz = () =>  {
            console.log('I could do ' + this.favTrick + ' for dayzzz!')
        }
        forDayzz();
    }

}



