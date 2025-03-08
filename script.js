const letters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
    "P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d",
    "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
    "t","u","v","w","x","y","z"
];
const numbers = [
    "0", "1", "2", "3", "4", "5", 
    "6", "7", "8", "9"
];
const specials = [
    "~","`","!","@","#","$","%","^","&","*",
    "(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",
    ">",".","?","/"
];

let isGenerated = false;

const pswCtn = document.getElementById("psw-ctn");

document.addEventListener("DOMContentLoaded", function() {

    const pswEl = document.getElementById("psw-el");
    pswEl.addEventListener("click", function() {
        copyPsw();
    })

});
function generatePsw() {
    let password = "";

    const pswEl = document.getElementById("psw-el");

    const length = document.getElementById("length-input").value;

    if (length < 3 || length > 30) {
        document.getElementById("error-span").textContent = "The password length must be between 3 and 30";
    } else {
        document.getElementById("error-span").textContent = "";

        // for (let i = 0; i < length; i++) {
        //     const randomChar = characters[ Math.floor( Math.random()*characters.length ) ];
        //     password1 += randomChar;
        // }
        // for (let i = 0; i < length; i++) {
        //     const randomChar = characters[ Math.floor( Math.random()*characters.length ) ];
        //     password2 += randomChar;
        // }

        if (!document.getElementById("toggle-letters").checked && !document.getElementById("toggle-numbers").checked && !document.getElementById("toggle-specials").checked) {
            document.getElementById("error-span").textContent = "The password must contain at least one type of character.";
            isGenerated = false;
        } else {
            isGenerated = true;

            let includeLetters = document.getElementById("toggle-letters").checked;
            let includeNumbers = document.getElementById("toggle-numbers").checked;
            let includeSpecials = document.getElementById("toggle-specials").checked;

            let characterPool = [];
            if (includeLetters) {
                characterPool = characterPool.concat(letters);
            }
            if (includeNumbers) {
                characterPool = characterPool.concat(numbers);
            }
            if (includeSpecials) {
                characterPool = characterPool.concat(specials);
            }

            for (let i = 0; i < length; i++) {
                const randomChar = characterPool[Math.floor(Math.random()*characterPool.length)];
                password += randomChar;
            }
        }
        pswEl.textContent = password;
    }
    checkGenerated();
}

function clearPsw() {
    const pswEl = document.getElementById("psw-el");

    pswEl.textContent = "";

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

function copyPsw() {
    console.log("Copying");
    const pswEl = document.getElementById("psw-el");
    const tempInput = document.createElement("input");
    tempInput.value = pswEl.textContent;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert("Password copied to clipboard!");

    // Tooltip code
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
}
