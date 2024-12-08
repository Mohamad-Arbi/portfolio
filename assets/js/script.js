// element toggle function
const elementToggleFunc = function(elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function() { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function() {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

    testimonialsItem[i].addEventListener("click", function() {

        modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
        modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

        testimonialsModalFunc();

    });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function() { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function() {

        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);

    });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function(selectedValue) {

    for (let i = 0; i < filterItems.length; i++) {

        if (selectedValue === "all") {
            filterItems[i].classList.add("active");
        } else if (selectedValue === filterItems[i].dataset.category) {
            filterItems[i].classList.add("active");
        } else {
            filterItems[i].classList.remove("active");
        }

    }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

    filterBtn[i].addEventListener("click", function() {

        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);

        lastClickedBtn.classList.remove("active");
        this.classList.add("active");
        lastClickedBtn = this;

    });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function() {

        // check form validation
        if (form.checkValidity()) {
            formBtn.removeAttribute("disabled");
        } else {
            formBtn.setAttribute("disabled", "");
        }

    });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function() {

        for (let i = 0; i < pages.length; i++) {
            if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
                pages[i].classList.add("active");
                navigationLinks[i].classList.add("active");
                window.scrollTo(0, 0);
            } else {
                pages[i].classList.remove("active");
                navigationLinks[i].classList.remove("active");
            }
        }

    });
}

// Questions sur HTML, CSS, et JavaScript
const questions = [
    // HTML
    {
        question: "Que signifie HTML ?",
        options: [
            "Hyper Text Markup Language",
            "Hyperlinks and Text Marking Language",
            "Home Tool Markup Language",
            "Hyper Tool Markup Language"
        ],
        answer: 0
    },
    {
        question: "Quel élément HTML est utilisé pour insérer une image ?",
        options: ["<img>", "<image>", "<picture>", "<photo>"],
        answer: 0
    },
    {
        question: "Quel élément HTML représente le titre principal d'une page ?",
        options: ["<h1>", "<title>", "<head>", "<header>"],
        answer: 0
    },
    {
        question: "Quelle balise est utilisée pour créer un lien hypertexte ?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: 1
    },
    // CSS
    {
        question: "Que signifie CSS ?",
        options: [
            "Cascading Style Sheets",
            "Creative Style System",
            "Cascading Script Sheets",
            "Custom Style Sheets"
        ],
        answer: 0
    },
    {
        question: "Quelle propriété CSS est utilisée pour changer la couleur de fond ?",
        options: ["background-color", "color", "bg-color", "back-color"],
        answer: 0
    },
    {
        question: "Quel sélecteur CSS est utilisé pour cibler un élément avec l'ID 'header' ?",
        options: ["#header", ".header", "header", "*header"],
        answer: 0
    },
    {
        question: "Quelle unité est relative à la taille de la police par défaut du navigateur ?",
        options: ["px", "em", "rem", "%"],
        answer: 1
    },
    // JavaScript
    {
        question: "Comment affiche-t-on un message dans la console en JavaScript ?",
        options: ["print()", "console.log()", "alert()", "write()"],
        answer: 1
    },
    {
        question: "Quelle méthode est utilisée pour sélectionner un élément par son ID en JavaScript ?",
        options: [
            "getElementByTagName()",
            "getElementById()",
            "querySelector()",
            "getElementsByClassName()"
        ],
        answer: 1
    },
    {
        question: "Quel est le résultat de 2 + '2' en JavaScript ?",
        options: ["4", "'22'", "NaN", "Erreur"],
        answer: 1
    },
    {
        question: "Quel mot-clé est utilisé pour déclarer une variable en JavaScript ?",
        options: ["var", "let", "const", "Toutes les réponses"],
        answer: 3
    }
];

// Références au DOM
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result");

// Générer les questions dynamiquement
function generateQuiz() {
    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");

        // Styliser la question
        const questionText = document.createElement("p");
        questionText.textContent = `${index + 1}. ${q.question}`;
        questionText.className = "quiz-question"; // Ajout de la classe
        questionDiv.appendChild(questionText);

        const optionsList = document.createElement("ul");

        q.options.forEach((option, i) => {
            const optionItem = document.createElement("li");

            const radioInput = document.createElement("input");
            radioInput.type = "radio";
            radioInput.name = `question-${index}`;
            radioInput.value = i;
            radioInput.id = `q${index}-o${i}`;

            const label = document.createElement("label");
            label.htmlFor = `q${index}-o${i}`;
            label.textContent = option;
            label.className = "quiz-option"; // Ajout de la classe

            optionItem.appendChild(radioInput);
            optionItem.appendChild(label);
            optionsList.appendChild(optionItem);
        });

        questionDiv.appendChild(optionsList);
        quizContainer.appendChild(questionDiv);
    });

    // Ajouter le bouton de soumission avec classe
    const submitButton = document.createElement("button");
    submitButton.textContent = "Soumettre";
    submitButton.className = "form-btn"; // Classe pour le design
    submitButton.addEventListener("click", submitQuiz);
    quizContainer.appendChild(submitButton);
}


// Calculer le score et afficher les résultats
function submitQuiz() {
    let score = 0;
    const results = [];

    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === q.answer) {
            score++;
            results.push(`Question ${index + 1}: Correct`);
        } else {
            results.push(`Question ${index + 1}: Faux`);
        }
    });

    // Afficher les résultats
    resultContainer.innerHTML = `
        <p>Votre score : ${score} / ${questions.length}</p>
        <ul>${results.map(r => `<li>${r}</li>`).join("")}</ul>
    `;
}

// Initialiser le quiz
generateQuiz();