let number =9;
let totalAmount =300;
function calculatePercentage(number, totalAmount) {
    return (number / totalAmount) * 100;
}

console.log(calculatePercentage(number,totalAmount));

const persons = [
    {
        id: 1,
        personName: "Fahad",
        personAge: "23",
        personIncome: "2000000"
    },
    {
        id: 2,
        personName: "Zoya",
        personAge: "23",
        personIncome: "3000000"
    }
];

persons.forEach(person => {
    console.log(`Person ${person.id} name is ${person.personName} having salary ${person.personIncome}`);
});



const sampleObject = {
    id: 1,
    personName: "Fahad",
    personAge: "23",
    personIncome: "2000000"
};

function printProperties(obj) {
    console.log("Properties are below:");
    for (let property in obj) {
        console.log(property);
    }
}

printProperties(sampleObject);