const arr= ["apple","banana","cherry","papaya","mango"];
console.log(arr[2]);

console.log(arr.push("Kiwi"));

console.log(arr.shift(0));

console.log(arr.length);

for(let i=0;i<arr.length;i++){
    console.log(arr[i]+" ");
}


for(let i=arr.length-1;i>=-0;i--){
    console.log(arr[i]+" ");
}

let n=10;
let sum=0;
for(let i=1;i<=n;i++){
    sum+=i;
}
console.log(sum);