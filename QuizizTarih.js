const questions = [
{
    q: "Қазақ АКСР астанасы Қызылордадан Алматыға қашан ауысты?",
    a: ["1925","1929","1927","1930"],
    correct: 1
},
{
    q: "О.Сүлейменов шығармасы?",
    a: ["Жер мен Ай","Арғымақтар","Сталинге хат","Манас жыры"],
    correct: 1
},
{
    q: "«Қырғыз қайсақтардың қысы жазы тұра беретін бір баспанасы – Киіз үй» деп жазған кім?",
    a: ["Ф. фон Шварц","Залесский","Потанин","Аткинсон"],
    correct: 0
},
{
    q: "1786 жылы Игелстром реформасы бойынша құрылған әкімшілік билік?",
    a: ["Билер соты","Хандық билік","Шекаралық сот","Расправалар"],
    correct: 2
},
{
    q: "Санкт-Петербург университетінің заң факультетін бітірген?",
    a: ["М.Тынышбаев","М.Дулатов","Ә.Бөкейханов","Б.Қаратаев"],
    correct: 3
},
{
    q: "Шайбанилер Елбарыс пен Белбарыс Хиуа хандығын құрды?",
    a: ["Хорезмді жаулап алған соң", "Бұхар қаласын жаулап алғансоң", "Қазақ хандарын жеңген соң", "Әмір Темір ұрпақтары әлсіреген соң"],
    correct: 0
},
{
    q: "VI ғасырда Иран шахымен одақтасқан Түрік билеушісі?",
    a: ["Бумын", "Мұқан", "Иштеми", "Шегу"],
    correct: 2
},
{
    q: "Алаш әнұраны неде жарияланды",
    a: ["Қазақ газеті", "Айқап журналы", "Абай журналы", "Серке газеті"],
    correct: 2
},
{
    q: "Сұлтан Кенесары Қасымұлының тарихына байланысты деректер атты жинақ кімнің редакциясымен шыққан?",
    a: ["Х.Досмұхаммедов","Ә.Бөкейханов","О.Сүлейменов","А.Байтұрсынұлы"],
    correct:0
},
{
    q: "Қалмаққырылған шайқасы қай өзен бойында өтті?",
    a: ["Алакөл","Сырддария","Қарасиыр","Кекілік-Сеңгір"],
    correct: 2
},
{
    q: "Ұлы жүз аумағын басқару үшін бекітілген лауазым?",
    a: ["Расправа","Округ","Пристав","Реформа"],
    correct: 2
},
{
    q: "Адайлардан 1869 жылдың түтін салығын дереу төлеуді талап еткен кім?",
    a: ["Дутов","Малов","Долгов","Рукин"],
    correct: 3
},
{
    q: "Кенесары қайда қаза болды?",
    a: ["Маңғыстау","Атбасар уезі","Қырғыз жері","Торғау маңы"],
    correct: 2
},
{
    q: "Үгедей ұлысының аумағы?",
    a: ["Ш.Қ.-Алтай-Тарбағатай","С.Қ-Ресей маңы","Орталық Азия көп бөлігі","Жетісу мен Сырдарияның төменгі ағысы"],
    correct: 0
},
{
    q: "Жас Тұлпар ұйымы қайда құрылды?",
    a: ["Жаңаөзен","Екатеринбург","Астана","Мәскеу"],
    correct: 3
},
{
    q: "О.Сүлейменовтың АЗиЯ кітабы қашан жарық көрді?",
    a: ["1987ж","1975ж","1964ж","1992ж"],
    correct: 1
},
{
    q: "Өз атынан теңге соқтырған Алтын Орда ханы?",
    a: ["Кебек","Тұрсын","Мөңке-Темір","Ұрыс хан"],
    correct: 2
},
{
    q: "Қимақтардың ордасы қай өзен бойында орналасты?",
    a: ["Есіл","Ертіс","Жайық","Тобыл"],
    correct: 1
},
{
    q: "Барақ хан өзінің иеліктерін қолға алу мақсатында қолға алған өңір?",
    a: ["Сырдария","Жетісу","Сарыарқа","Алтай"],
    correct: 0
},
{
    q: "1943ж шыққан Қазақ КСР тарихы еңбегінің авторы?",
    a: ["І.Есенберлин","Ә.Бөкейханов","М.Шоқай","Е.Бекмаханов"],
    correct: 3
}
];

let current = 0;
let score = 0;

function loadQuestion(){
    document.getElementById("question").textContent =
        questions[current].q;

    document.getElementById("btn0").textContent =
        questions[current].a[0];

    document.getElementById("btn1").textContent =
        questions[current].a[1];

    document.getElementById("btn2").textContent =
        questions[current].a[2];

    document.getElementById("btn3").textContent =
        questions[current].a[3];
}

function check(answer){
    const buttons = document.querySelectorAll("button");

    buttons.forEach(btn => {
        btn.disabled = true;
        if(btn.textContent == questions[current].a[questions[current].correct]){
            btn.style.backgroundColor = "#22c55e";
        }
        if(btn.textContent == questions[current].a[answer] && answer !== questions[current].correct){
            btn.style.backgroundColor = "#ef4444";
        }
    });

    if(answer === questions[current].correct){
        document.getElementById("result").textContent = "✅ Дұрыс!";
        score++;
    }else{
        document.getElementById("result").textContent = "❌ Қате!";
    }

    setTimeout(() => {
        buttons.forEach(btn => {
            btn.style.backgroundColor = "";
            btn.disabled = false;
        });

        current++;

        if(current < questions.length){
            loadQuestion();
            document.getElementById("result").textContent = "";
        }else{
            document.querySelector(".container").innerHTML =
            `<h2>🎉 Тест аяқталды!</h2>
            <p>Сен ${score}/${questions.length} балл жинадың.</p>`;
        }

    }, 1000);
}

loadQuestion();
