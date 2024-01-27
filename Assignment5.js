
    // Function Calling

function greetUser(greeting){
    let username = prompt('Enter Your Name: ')
    console.log(greeting);
    console.log(username);

}
greetUser('Assalam O Alaikom')


    // Fuction Calling

function isprime(n){
if(n==2){
    console.log('2 is a prim Number');
}
let res;
for (let i=2; i<n; i++)
{
    if(n%i==0){
        res= ('It is a Prime Number: ' +n)
        break;}
    else{
        res = ('It is not Prime Number: ' +n);
    }
}
return res
}
let p = isprime(11)
console.log(p)
