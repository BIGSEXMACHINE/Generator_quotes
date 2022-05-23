//quotes//

const quotes = [
    [
        "- Я б на ней женился, но она уже замужем",

        "Илья Ивановский"
    ],

    [
        "- Делайте выводы",

        "Любовь Владимировна Пашкина"
    ],

    [
        "- Всё кончено Энакин! Я стою выше тебя!",

        "Оби-ван Кеноби"
    ],

    [
        "- Высшим является тот момент, когда мир погружается в тишину и безграничная глубина купается в лучах утреннего солнца.",

        "Император Хирохито"
    ],

    [
        "- Время пройдет, верно? И мы обязательно что-нибудь изменим. Но как ты думаешь, некоторые чувства " +
        "могут остаться прежними, несмотря ни на что?",

        "Микото Мисака"
    ],
];

document.getElementById("quote").addEventListener("click", function () {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    const phrase = document.querySelector("#phrase");
    const author = document.querySelector("#author");
    phrase.innerHTML = quote[0];
    author.innerHTML = quote[1];
});

//clear phrase//

document.getElementById("clear").addEventListener("click", function () {
    document.getElementById('phrase').innerHTML = "";
    document.getElementById('author').innerHTML = "";
});

//change background//

let colors = ['red', 'purple', 'orange', 'black', 'green'];
document.getElementById("quote").addEventListener("click", function () {
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    let main = document.getElementById('main');
    main.style.backgroundColor = randomColor;
});



