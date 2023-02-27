(function () {

    const infoHeader = document.querySelector(".drones__needs-infoheader");
    const colors = ["red", "blue", "green"];
    let i = 0;
    function changeColor() {
        infoHeader.style.color = colors[i];
        i++;
        if (i >= colors.length) {
            i = 0;
        }
    }
    setInterval(changeColor, 1000);
})();