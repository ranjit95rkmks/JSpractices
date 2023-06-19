/* const printFunction = function (a, b, c, d){
//     console.log(`${this.name}, my fist hobbi ${a}, second ${b}, thrid ${c} and fourth ${d}`);
// }

// const ranjit = {
//  name: "name",
//  age: "age"
// }

// const myhobbies = ['swing', 'drive', 'shopping', 'marketing' ]

// //printFunction.call(ranjit("ranjit", 35));
// printFunction.apply(ranjit, myhobbies);

*/
/******************Question No: 1(a)**************************/
const findDay = function (datebyuser) {

    const myDate = new Date(datebyuser);

    const days = ["Sunday", "Monday", "Tuesday", "Wednestday", "Thusday", "Friday", "Saturday"];
    console.log(myDate.getDay());

    let dayName = days[myDate.getDay()];
    return dayName;

}
/******************Question No: 1(b)**************************/
console.log(findDay("2023-06-20"));


/******************2.Math Object:a *******************************/

function sumOfSquareRoot(num) {
    //const number = num.map(element => Math.sqrt(element));
    const sumnumber = num.reduce((summation, element) => summation += Math.sqrt(element), 0);
    console.log(sumnumber);
}
/******************2.Math Object:b *******************************/
const myArray = [1,2,3,4];
sumOfSquareRoot(myArray);


/*******************3.Numbers:a************************/
function isPrimeOrNot(num){
    let isPrime = true;
    if(num>0){
        if(num === 1){
            return "1 is not a prime Number. What's your opinion";
        }
        for(i=2; i<num; i++){
            if(num % i === 0){
                isPrime = false;
                return isPrime;
            } 
        }
        return isPrime;

    }
    else {
        return "Please Enter a positive Number";
    }

}

/*******************3.Numbers:b************************/
console.log(isPrimeOrNot(1));




/*******************4.Window:a************************/
function openNewWindow (myUrl){

    window.open(myUrl, "", "width=800,height=600");  

}

//openNewWindow("https://www.w3schools.com");


