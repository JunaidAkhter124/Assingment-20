Q4


function changeImage() {
    const imgElement = document.getElementById('image');
    imgElement.src = 'image2.jpg';  
}


function resetImage() {
    const imgElement = document.getElementById('image');
    imgElement.src = 'image1.jpg';  
}


const imgElement = document.getElementById('image');
imgElement.addEventListener('mouseover', changeImage);
imgElement.addEventListener('mouseout', resetImage);


Q5
let counter = 0;


function updateCounter() {
    document.getElementById('counter').textContent = counter;
}


function increaseCounter() {
    counter++;
    updateCounter();
}


function decreaseCounter() {
    counter--;
    updateCounter();
}

document.getElementById('increaseBtn').addEventListener('click', increaseCounter);
document.getElementById('decreaseBtn').addEventListener('click', decreaseCounter);


Q1
function power(a, b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}


console.log(power(2, 3)); 
console.log(power(5, 4)); 


Q2
function power(a, b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}


console.log(power(2, 3)); 
console.log(power(5, 4)); 

Q6
function removeVowels(sentence) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let result = '';
    
    for (let i = 0; i < sentence.length; i++) {
        if (!vowels.includes(sentence[i])) {
            result += sentence[i];
        }
    }

    return result;
}


const sentence = "Hello World!";
const result = removeVowels(sentence);
console.log(result); 

