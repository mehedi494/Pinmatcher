document.getElementById("generateBtn").addEventListener("click", function(){
    // console.log("worked")
    generateNumberFc()
})
function generateNumberFc() {
    let generateNumber = Math.ceil(Math.random() * 10000)
    let generateNumberSting = generateNumber+""
    if (generateNumberSting.length == 4) {
      const newGenerateNumber = parseInt(generateNumberSting)
        console.log(newGenerateNumber)
        const inputString = document.getElementById("generateInputField")
         return inputString.value = newGenerateNumber;
    }
    else {
   return generateNumberFc()
    }

    

}
function pinMatch() {
    
    

}