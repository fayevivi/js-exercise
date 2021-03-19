let isPrime = true;
for (let dividend = 2; dividend <= 100; dividend++) {

    for (let divisor = 2; divisor < dividend; divisor++) {
        if (dividend % divisor == 0) {
            isPrime = false;
        }
    }

    if (isPrime !== true) {
        console.log(`${dividend}不是質數`);
        document.write(`${dividend}不是質數<br/>`)

        isPrime = true;
    }
    else {
        console.log(`${dividend}是質數`);
        document.write(`${dividend}是質數<br/>`);
    }
}

// for (let i = 2; i <= 4; i++) {
//     let isPrime = true;
//     for (let j = 2; j < 4; j++) {
//         if (i % j == 0) {
//             isPrime = false;
//         }
//     }
//     if (isPrime == false) {
//         console.log(`${i}不是質數`);
//     }
//     else {
//         console.log(`${i}是質數`);
//     }
// }