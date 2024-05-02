var counterElement = document.getElementById("counter");
var addButton = document.getElementById("addButton");
var subtractButton = document.getElementById("subtractButton");
var resetButton = document.getElementById("resetButton");
var count = 0;



addButton.addEventListener("click", function () {
    count++;
    counterElement.textContent = count;
});

subtractButton.addEventListener("click", function () {
    count--;
    counterElement.textContent = count;
});

resetButton.addEventListener("click", function () {
    if (count > 10) {
        swal({
            text: "Are you sure you want to reset? Your count is more than 10 and this action will clear your data!",
            buttons: ["Cancel", "Reset"],
        }).then((confirmReset) => {
            if (confirmReset) {
                count = 0;
                counterElement.textContent = count;
            }
        });
    } else {
        count = 0;
        counterElement.textContent = count;
    }
});
