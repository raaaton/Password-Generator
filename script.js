const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
    "P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d",
    "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
    "t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", 
    "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*",
    "(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",
    ">",".","?","/"
];

let isGenerated = false;

const psw1Ctn = document.getElementById("psw1-ctn");
const psw2Ctn = document.getElementById("psw2-ctn");

document.addEventListener("DOMContentLoaded", function() {

    const psw1El = document.getElementById("psw1-el");
    psw1El.addEventListener("click", function() {
        copyPsw1();
    })

    const psw2El = document.getElementById("psw2-el");
    psw2El.addEventListener("click", function() {
        copyPsw2();
    })

});
function generatePsw() {
    let password1 = "";
    let password2 = "";

    const psw1El = document.getElementById("psw1-el");
    const psw2El = document.getElementById("psw2-el");

    const length = document.getElementById("length-input").value;

    if (length < 3 || length > 20) {
        document.getElementById("error-span").textContent = "The password length must be between 3 and 20 characters.";
    } else {
        isGenerated = true;
        document.getElementById("error-span").textContent = "";

        for (let i = 0; i < length; i++) {
            const randomChar = characters[ Math.floor( Math.random()*characters.length ) ];
            password1 += randomChar;
        }
        for (let i = 0; i < length; i++) {
            const randomChar = characters[ Math.floor( Math.random()*characters.length ) ];
            password2 += randomChar;
        }
        
        psw1El.textContent = password1;
        psw2El.textContent = password2;
    }

    checkGenerated();
}

function clearPsw() {
    const psw1El = document.getElementById("psw1-el");
    const psw2El = document.getElementById("psw2-el");

    psw1El.textContent = "";
    psw2El.textContent = "";

    isGenerated = false;

    checkGenerated();
}

function checkGenerated() {
    
    const generatePswBtn = document.getElementById("generate-psw-btn");
    const clearPswBtn = document.getElementById("clear-psw-btn");

    if (isGenerated) {
        generatePswBtn.textContent = "Regenerate password";
        clearPswBtn.classList.add("visible");
    } else {
        generatePswBtn.textContent = "Generate password";
        clearPswBtn.classList.remove("visible");
    }
}



function copyPsw1() {
    console.log("Copying");
    const psw1El = document.getElementById("psw1-el");
    const tempInput = document.createElement("input");
    tempInput.value = psw1El.textContent;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert("Password copied to clipboard!");

    // Tooltip code
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
}
function copyPsw2() {
    console.log("Copying");
    const psw1El = document.getElementById("psw2-el");
    const tempInput = document.createElement("input");
    tempInput.value = psw1El.textContent;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert("Password copied to clipboard!");
}

// Tooltip code

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}
