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
    "!","@","#","$","%","^","&","*",
    "?"
];

let isGenerated = false;

document.addEventListener("DOMContentLoaded", function() {

    const pswCtn = document.getElementById("psw-ctn");
    pswCtn.addEventListener("click", function() {
        copyPsw();
    })

});
function generatePsw() {
    let password = "";
    const pswCtn = document.getElementById("psw-ctn");
    const length = document.getElementById("length-input").value;

	pswCtn.classList.remove("copied");

    if (length < 3 || length > 30) {
        document.getElementById("error-span").textContent = "Password length must be between 3 and 30.";
    } else {
        document.getElementById("error-span").textContent = "";

        if (!document.getElementById("toggle-letters").checked && !document.getElementById("toggle-numbers").checked && !document.getElementById("toggle-specials").checked) {
            document.getElementById("error-span").textContent = "The password must contain at least one character type.";
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
				for (let i = 0; i < 3; i++) {
                characterPool = characterPool.concat(numbers);
            	}
			}
            if (includeSpecials) {
				for (let i = 0; i < 3; i++) {
                	characterPool = characterPool.concat(specials);
				}
            }

			console.log(characterPool);

            for (let i = 0; i < length; i++) {
                const randomChar = characterPool[Math.floor(Math.random()*characterPool.length)];
                password += randomChar;
			}
        }
		console.log(password);
        pswCtn.innerHTML = `<span id="psw-el">${password}</span>`;
    }
    checkGenerated();
}

function clearPsw() {
    const pswCtn = document.getElementById("psw-ctn");

    pswCtn.innerHTML = ``;

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
		pswCtn.classList.remove("copied");
    }
}

function copyPsw() {
    const pswCtn = document.getElementById("psw-ctn");
    const pswEl = document.getElementById("psw-el");
    const tempInput = document.createElement("input");
    tempInput.value = pswEl.textContent;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
	pswCtn.classList.add("copied");
	var sheet = window.document.styleSheets[0];
	sheet.insertRule(
		`.password-container.copied span:hover::before {
			transform: scale(1.1) translateY(-60px);
		}`,
		sheet.cssRules.length
	);
	setTimeout(() => {
		sheet.deleteRule(sheet.cssRules.length - 1);
	}, 200);
}
