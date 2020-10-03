import * as readline from 'readline';
import { factorialHash } from './fatorialHash';
import { isConsistent } from './nameBook';


const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  read.question('What you want to check (1: factorialHash, 2: Name Book)?\n', (answer) => {
      if(answer === '1') {
        read.question('Please insert a natural number of 1 to 10000\n', (answerFactorial) => {
            console.log(answerFactorial);
            const numberInput = parseInt(answerFactorial);
            const result = factorialHash(numberInput);
            console.log('The result is: ', result);
            read.close();
          });
      } else if(answer === '2') {
        read.question('Please insert book names separated by comma (ex.: John,Bob,Claire)\n', (answerNames) => {
            const result = isConsistent(answerNames);
            console.log('Your list is consistent? ', result);
            read.close();
          });
      } else {
          console.log('Wrong option');
          read.close();
      }
      
  });

