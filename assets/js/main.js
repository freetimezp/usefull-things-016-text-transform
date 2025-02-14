document.addEventListener("DOMContentLoaded", function () {
    let randomNbrs = document.querySelectorAll(".nbr");
    let timer = 30;
    let data = 0;
    let letters = ["u", "k", "r", "a", "i", "n", "e", '<i class="fa-solid fa-heart"></i>'];

    randomNbrs.forEach(el => {
        el.dataset.change = Math.round(Math.random() * 100);
    });

    function random() {
        return Math.round(Math.random() * 9);
    }

    function select() {
        return Math.floor(Math.random() * randomNbrs.length);
    }

    function value() {
        let index = select();
        let selected = randomNbrs[index];

        if (selected) {
            selected.innerHTML = random();
            selected.dataset.number = data;
            data++;

            randomNbrs.forEach((el, i) => {
                if (parseInt(el.dataset.number) > parseInt(el.dataset.change)) {
                    el.innerHTML = letters[i];
                    el.classList.remove("nbr");
                }
            });
        }
    }

    setInterval(value, timer);
});
