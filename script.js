const button = document.querySelector("button");
const inputElement = document.querySelector(".js-cost-input");
const costTotal = document.querySelector(".js-total-cost");

button.addEventListener("click", handleCostCalculation);

function handleCostCalculation() {
  if (inputElement.value === "") {
    alert("Please enter a value.");
    return;
  }

  const regex = /^[0-9]+$/;
  if (!regex.test(inputElement.value)) {
    alert("Please enter numbers only.");
    inputElement.value = "";
    return;
  }

  let cost = Number(inputElement.value);
  if (cost < 40) {
    cost += 10;
  }
  costTotal.innerHTML = `Total cost: $${cost}`;
}

inputElement.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    handleCostCalculation();
  }
});
