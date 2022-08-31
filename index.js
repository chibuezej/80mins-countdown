const person = {
    firstName: 'johnhenry',
    lastName: 'Nmeregini',
    age: 23,

}
function personInfo(person){
    person.age = 27
    person.firstName = 'chibueze';
    const {firstName,lastName,age} = person
    console.log(`my name is ${firstName} and i am ${age} old`);
    
}
personInfo(person);
