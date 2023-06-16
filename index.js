// Code your solutions in this file 
const names=["Guadalupe","Ollie", "Aki"]
const event="wordeful suprise";
function writeCards(name,event) {
    const thankYouMssages=[];
    for(let i = 0;i< names.length;i++){
        thankYouMssages.push("Thank you,${names[i]}, for the ${event}gift!");
  
    }
    return thankYouMssages;
    
}
function countDown(number) {
    while (number>=0){
        console.log(number);
        number--;
    }
    
}