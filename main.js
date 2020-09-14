const counters = document.querySelectorAll('.counter');

counters.forEach(function (e) {
    e.innerText = '0';

    function updateCounter() {
        const target = +e.getAttribute('data-target');
        const number = +e.innerText;

        const increament = target / 100;

        if (number < target) {
            e.innerText = number + increament;
            setTimeout(updateCounter, 1);
        } else {
            e.innerText = target;
        }
    };

    updateCounter();
});