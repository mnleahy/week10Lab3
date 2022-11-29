/*
N Leahy
29 Nov 22

Question 3
Create an application that generates an array of 5 random numbers 1-10. 
The user should then guess a number and the app will tell them how many 
times that number exists within the array.

*/

function randomNums() {
    const arrayLength = 5;
    let randomArray = [];
    let count=0;
    console.log(randomArray);

    for(let i = 0; i<arrayLength; i++) {
        randomArray.push(Math.floor(Math.random() * 10)+1);
        alert("Number "+[i+1]+" chosen by the computer is: "+randomArray[i]);
    }
    

    //initialise the array - TRY IF OTHER DOESNT WORK
    //for(int i=0;i<randomNum.length;i++){
     //   randomNum[i]=(int) (Math.random()*10)+1;
    //}

    number=parseInt(prompt("Please input a number from 1-10"));

    for(let i=0;i<arrayLength;i++){
        if(randomArray[i]==number){
            count++;
        }
    }
    alert(number+" exists "+count+" times in the list of computer-generated numbers");
    
  }