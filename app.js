// function isPrime(num) {
//   for (let i = 2, max = Math.sqrt(num); i <= num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }

// console.log('2', isPrime(2));


function isPrime(num) {
  for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

function getPrimesFor(num) {
  const primes = [];

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
}

console.log(getPrimesFor(120));