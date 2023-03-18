const values = document.getElementById('values');
const sum = document.getElementById('sum');
const buttons = document.querySelector('.buttons');

function clearAll() {
    document.getElementById('clear').addEventListener('click', () => {
        values.innerText = 0;
        sum.innerText = '';
    });
};

clearAll();

buttons.addEventListener('click', () => {
    // Если было совершено действие не по кнопке;
    if ( !event.target.classList.contains('btn')) return;
    // Была нажата кнопка clearAll;
    if ( event.target.classList.contains('ac')) return;

    const target = event.target;

});