function nameCheck() {
    const nameInput = document.getElementById("userName");
    const inputValue = nameInput.value;
    const formattedName = inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase();

    const outputOptionConsole = document.getElementById("outputOptionConsole");
    const outputOptionAlert = document.getElementById("outputOptionAlert");

    let outputOption;
    if (outputOptionConsole.checked) {
        outputOption = 0;
    } else if (outputOptionAlert.checked) {
        outputOption = 1;
    }

    greeting(formattedName, outputOption);

    const form = document.querySelector("form");
    form.reset();
}

function greeting(formattedName, outputOption) {
    if (outputOption === 0) {
        console.log("Приветствую Вас, " + formattedName + "!");
    }

    else {
        alert("Приветствую Вас, " + formattedName + "!");
    }
    
}