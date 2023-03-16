(function () {

    const elements = [
        '<div>EASY TO USE</div>',
        '<div>4K VIDEO</div>',
        '<div>OBJECT TRACKING</div>',

    ];

    let currentElements = 0;

    function renderElements(elements) {
        const slidesContainer = document.querySelector('.advantages-header');
        slidesContainer.innerHTML = elements[currentElements];
    }

    function nextElements() {
        currentElements ++;
        if (currentElements >= elements.length) {
            currentElements = 0;
        }
        renderElements(elements);
    }
    setInterval(nextElements, 2000);

    renderElements(elements);
})();