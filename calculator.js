let display = document.getElementById("display-value");

function clearFunction() {
    display.value = "";
}

function addValue(value) {
    display.value += value;
}

function calculation() {
    display.value = eval(display.value);
}
const toggle = document.querySelector(".switch input");

toggle.addEventListener("change", () => {
    if (toggle.checked) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
});

const flipBtn = document.getElementById("flip-btn");
const card = document.querySelector(".calculator-card");

flipBtn.addEventListener("click", () => {
    if (card.classList.contains("flipped")) {
        card.classList.remove("flipped");
    } else {
        card.classList.add("flipped");
    }
});

const bmiBtn = document.getElementById("bmi-btn");
const bmiOutput = document.getElementById("bmi-output");

bmiBtn.addEventListener("click", () => {
    const weight = parseFloat(document.getElementById("weight").value);
    const heightCm = parseFloat(document.getElementById("height").value);

    if (!weight || !heightCm) {
        bmiOutput.value = "Enter values!";
        return;
    }

    const heightM = heightCm / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(1);

    let category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obese";

    bmiOutput.value = `${bmi} (${category})`;
});