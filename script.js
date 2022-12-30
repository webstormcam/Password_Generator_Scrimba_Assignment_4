const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")
let output1="";
let output2="";

function generate(){
   let password=""
    for(let i=0;i<15;i++){
    password+=characters[Math.floor(Math.random()*characters.length)]
    }
    return password
}
function createpass(){
    output1=generate()
    output2=generate()

password1.textContent=output1
password2.textContent=output2

}


