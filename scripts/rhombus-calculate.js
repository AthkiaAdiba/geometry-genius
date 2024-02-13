function calculateRhombusArea(){
    // console.log('Rhombus');
    const firstDiagonal = getInputValueById('rhombus-first-diagonal');
    // console.log(firstDiagonal)

    const secondDiagonal = getInputValueById('rhombus-second-diagonal');

    const area = 0.5 * firstDiagonal * secondDiagonal;

    setInnerTextById('rhombus-area', area);
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputText = parseFloat(inputValueText);
    return inputText;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}