createSlider("slider-left-poupees", "slider-right-poupees", "slider-elements-poupees");
createSlider("slider-left-vetements", "slider-right-vetements", "slider-elements-vetements");

function createSlider(left, right, containId) {
    let id = 1;
    const container = document.getElementById(containId);
    let items = Array.from(container.children);
    const nextBtn = document.getElementById(right);
    const prevBtn = document.getElementById(left);
    let next = () => {
        items.forEach((item) => {
            item.classList.remove('move_right' + (id%2), 'move_left' + (id%2));
            void item.offsetWidth;
            item.classList.add('move_right' + (id%2));
        });
        container.appendChild(items[0]);
        items = Array.from(container.children);
    };
    nextBtn.addEventListener('click', next);


    prevBtn.addEventListener('click', () => {
        items.forEach((item) => {
            item.classList.remove('move_right' + (id%2), 'move_left' + (id%2));
            void item.offsetWidth;
            item.classList.add('move_left' + (id%2));
        });
        container.insertBefore(items[items.length - 1], items[0]);
        items = Array.from(container.children);
    });
}