//........................ GENERATE PIN SECTION START.............................
// ..............................................................................................

document.getElementById("generateBtn").addEventListener("click", function(){
   
    getPin()
    
})


function generateNumberFc() {
    let generateNumber = Math.ceil(Math.random() * 10000)
    let generateNumberSting = generateNumber + '';
    if (generateNumberSting.length == 4) {
      
         return generateNumber
    }
    else {
   return generateNumberFc()
    }
}
function getPin() {
    const newPin = generateNumberFc()
    document.getElementById("generateInputField").value = newPin
}
// ..................................................................................................


//.............................. Keyapad START ........................................................
// ....................................................................................................


document.getElementById("bubble").addEventListener("click", function (event) {
    const number = event.target.innerText;
    const display = document.getElementById("displayInput");
    if (!isNaN(number)) {
        const oldNumber = display.value 
        const newNumber = oldNumber + number;
        display.value = newNumber
        
    }
    else  {
        if (number == "C") {
            display.value = '';
        }
        else if (number == "<") {
            console.log("delet")
        }
        
    }
})
document.getElementById("submitBtn").addEventListener("click", function () {
    
})
 
// ..............................SUBMISSION START...................
// .......................................................................................
document.getElementById("submitBtn").addEventListener("click",function () {
    const display = document.getElementById("displayInput").value
    const pinDisplay = document.getElementById("generateInputField").value

    if (pinDisplay == display && pinDisplay != '') {
        document.getElementById("success").style.display="block"
        document.getElementById("failed").style.display = "none"
        console.log("yes")
    }
    else {
        console.log("NO")
        document.getElementById("success").style.display = "none"
        document.getElementById("failed").style.display = "block"
    }
})