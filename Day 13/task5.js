function bmical(Weight,hight){
    //write your code here
    var bmi= Weight/(hight*hight);
    return Math.round(bmi);
}

var bmi = bmical(65,1.8);
console.log(bmi);

// Calculate the bmi 
// Output is 20