function calculation(){
    console.log("Calculating . . . . ")
    //get the values from the prompt and store them in two vars
    let number1=Number(prompt("Enter the number1:"));
    let number2=Number(prompt("Enter the number2:"));

    //do the operations and store the results in vars (you need 4 vars)
    let sum=number1+10;

    //display result in the html
    document.getElementById("results").innerHTML=`
    <p>The sum is: ${sum} </p>
    
    `;
}