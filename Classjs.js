class Person{
    constructor (name, age){
        this.name = name;
        this.age = age;
    }

    getshow(){
        return [this.name, this.age];
    }
}

class SubPerson extends Person{
    
    constructor(name, age, habbit, food="rich"){
        super(name, age);
        this.habbit = habbit;
        this.food = food;
    }
}
// const ranjit = new Person("ranjit", 25);
// const [name, age ] = ranjit.getshow();
// console.log(`Your name is: ${name}. Your age is ${age}`);

const subperson = new SubPerson("name", 12, ["football", "swinging", "Coding"]);
const [firstHobby, secondHobby] = subperson.habbit;
const [name1, age ] = subperson.getshow();


console.log(`${name1} ${age}, ${subperson.habbit}, ${subperson.food}`);

