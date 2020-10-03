// This function get a number input and first: check its factorial result and then, 
// transform the result in a array of ditigs to add all the digits in the result 
// using reduce
export const factorialHash = (value: number): string => {
    const factorialNumber = extraLongFactorials(value);
    const digitsArray = factorialNumber.toString().split('').map(item => BigInt(item));
    const result = digitsArray.reduce((accumulator, currentValue) => accumulator + currentValue);

    return result.toString();

}

// The method "add" will add two string numbers using the old fashion way
// It add the last digit of the first number with the last digit of the second number
// putting the left number (if the add is bigger than 9) up the left digit to 
// add with the second left most digit of the second number and so on
const add = (str1: string, str2: string):string =>  {

    let sum = "";  

    let str1Length = str1.length;
    let str2Length = str2.length;

    if(str2Length > str1Length ){
        let temp = str2;
        str2 = str1;
        str1 = temp;
    }

    let carry = 0;  
    let a;
    let b;
    let temp;
    let digitSum;
    for (let i = 0; i < str1.length; i++) {
        a = parseInt(str1.charAt(str1.length - 1 - i));
        b = parseInt(str2.charAt(str2.length - 1 - i)); 
        b = (b) ? b : 0;                                    
        temp = (carry + a + b).toString();                 
        digitSum = temp.charAt(temp.length - 1);           
        carry = parseInt(temp.substr(0, temp.length - 1));  
        carry = (carry) ? carry : 0; 

        sum = (i === str1.length - 1) ? temp + sum : digitSum + sum;

    }

    return sum; 

}


// This method calculate the factorial making sure the multiply data between 
// the numbers results in a number accepted by the language
// if the result is not a safe integer, the multiplication will be made using string 
// calling the method "add" n times
const extraLongFactorials = (n: number):string => {
    let fact = BigInt(1);

    for (let i = BigInt(2); i <= n; i++){

        if(Number.isSafeInteger(fact*i)){
            fact = fact * i;
        }
        else {
            let factxi = "0";  
            for(let j = 0; j < i; j++){
                factxi = add(factxi,fact.toString());  
            }
            fact = BigInt(factxi); 
        }
    }

    return fact.toString();
}