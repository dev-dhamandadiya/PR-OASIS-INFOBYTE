const calcBtn = document.getElementById("calcBtn");
const degInput = document.getElementById("degInput");
const unitSel = document.getElementById("unitSel");
const err = document.getElementById("err");
const resBox = document.getElementById("resBox");

calcBtn.addEventListener("click", () => {

    const value = degInput.value.trim();
    const unit = unitSel.value;

    // Validation
    if (value === "" || isNaN(value)) {
        err.classList.remove("d-none");
        resBox.classList.add("d-none");
        return;
    }

    err.classList.add("d-none");

    const temp = parseFloat(value);

    let result = "";

    switch (unit) {

        case "C":
            result = `
                ${((temp * 9 / 5) + 32).toFixed(2)} °F
                <br>
                ${(temp + 273.15).toFixed(2)} K
            `;
            break;

        case "F":
            result = `
                ${((temp - 32) * 5 / 9).toFixed(2)} °C
                <br>
                ${(((temp - 32) * 5 / 9) + 273.15).toFixed(2)} K
            `;
            break;

        case "K":
            result = `
                ${(temp - 273.15).toFixed(2)} °C
                <br>
                ${((temp - 273.15) * 9 / 5 + 32).toFixed(2)} °F
            `;
            break;

        default:
            result = "Invalid Unit";
    }

    resBox.innerHTML = result;
    resBox.classList.remove("d-none");
});