x=1;
console.log(x); //1

x;
console.log(x); //1

{let x=2};
console.log(x); //undefined

x;
console.log(x); //1

{var x=3};
console.log(x);//undefined

x;
console.log(x);//3

{x=4};
console.log(x);//4

with( {x:5}) {x};
console.log(x);//5

x;
console.log(x);//4
