let root1 , root2;

//quadratic equation input (ax^2 + bX + c)
let a = 1;
let b = -3;
let c = 10;

let discriminant = (b ** 2) - (4 * a * c);

if(discriminant > 0){              //roots are real and different
    root1 = (-b + Math.sqrt(discriminant))/(2 * a);
    root2 = (-b - Math.sqrt(discriminant))/(2 * a);

    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

else if(discriminant === 0){        //roots are real and same
    root1 = root2 = -b / (2 * a);

    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

else{                               //roots are complex and different
    let realRoot = (-b / (2 * a)).toFixed(2);
    let imaginaryRoot = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    console.log(`The roots of quadratic equation are ${realRoot} + ${imaginaryRoot}i and ${realRoot} - ${imaginaryRoot}i`);
}
