function primeNumberChecker(num) {
    let isPrime = true
    if (num >= 1 && num <= 3) {
        isPrime = false;

    } if (num % 2 === 0 || num % 3 === 0) {
        isPrime = false;

    }
    console.log(isPrime);
}
primeNumberChecker(7);
//primeNumberChecker(8);
//primeNumberChecker(81);
