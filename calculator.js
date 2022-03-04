function calculation(){
    console.log("Calculating . . . . ")
    //get the values from the prompt and store them in two vars
    let number1=Number(prompt("Enter a number:"));
    let number2=Number(prompt("Enter a second number:"));

    //do the operations and store the results in vars (you need 4 vars)
    let sum=number1+number2;
    let difference=number1-number2;
    let times=number1*number2;
    let divide=number1/number2;

    //display result in the html
    document.getElementById("results").innerHTML=`
    <p> ${number1}+${number2}= ${sum} </p>
    <p> ${number1}-${number2}= ${difference} </p>
    <p> ${number1}*${number2}= ${times} </p>
    <p> ${number1}/${number2}= ${divide} </p>
    
    `;
}