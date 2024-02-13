// function calculateParallelogramArea(){
//     // console.log('parallel');

//     // const parallelogramBaseInput = document.getElementById('Parallelogram-base');
//     // const parallelogramBaseText = parallelogramBaseInput.value;
//     // const base = parseFloat(parallelogramBaseText);
//     // console.log(base);

//     const base = getParallelogramBase();
//     console.log(base);
// }



// function getParallelogramBase(){
//     const parallelogramBaseInput = document.getElementById('Parallelogram-base');
//     const parallelogramBaseText = parallelogramBaseInput.value;
//     const base = parseFloat(parallelogramBaseText);
//     return base; 
// }


function calculateParallelogramArea(){
    
    const base = getInputValueById('Parallelogram-base');
    // console.log('base value', base);

    const height = getInputValueById('Parallelogram-height');
    // console.log('height value', height);

    const area = base * height;
    console.log('area of the parallelogram', area);

    setInnerTextById('parallelogram-area', area);
}


function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    // console.log(inputField);
    return inputValue;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}