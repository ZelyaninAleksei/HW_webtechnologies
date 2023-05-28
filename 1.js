function handleConversion() {
    const numInput = document.getElementById("numInput");
    const numOne = parseFloat(numInput.value);

    
    const selectedElement = document.getElementById("conversionOption"); 
    const conversionOption = parseInt(selectedElement.value); 

    const result = SelectionParameters(numOne, conversionOption);
    alert(result);
}

function SelectionParameters(numOne, conversionOption) {
    let result;
    if (conversionOption === 1) {
        result = numOne * 1.8 + 32; // Из цельсия в фаренгейт
    }
    else if (conversionOption === 2) {
        result = (numOne - 32) / 1.8; // Из фаренгейта в цельсий
    }
    else if (conversionOption === 3) {
        result = numOne + 273.15 ; // Из цельсий в кельвин
    }
    else if (conversionOption === 4) {
        result = numOne - 273.15 ; // Из кельвина в цельсия
    }
    else if (conversionOption === 5) {
        result = (numOne + 459.67)*(5/9) ; // Из фаренгейта в кельвин
    }
    else if (conversionOption === 3) {
        result = (numOne - 273.15)*(5/9)+32 ; // Из кельвин в фаренгейт
    }
    return result.toFixed(2);
}