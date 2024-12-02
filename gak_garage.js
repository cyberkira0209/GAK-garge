let my_name = prompt("Як вас звати?")
let goal = prompt("Що вас цікавить на цьому сайті?")
alert("Вітаю, " + my_name + "! Радий вітати вас на моєму саті! Якщо вас цікавить " + goal + ", то буду вам радий допомогти. Всю необхідну інформацію можете знайти на сайті. А також в моєму Телеграм каналі.")
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("feedback-form");
    const feedbackSection = document.getElementById("feedbacks");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Забороняємо стандартну поведінку форми

        // Отримуємо дані з полів форми
        const name = document.getElementById("name").value;
        const message = document.getElementById("message").value;

        // Створюємо елемент відгуку
        const feedbackDiv = document.createElement("div");
        feedbackDiv.classList.add("feedback");

        const feedbackName = document.createElement("h3");
        feedbackName.textContent = name;

        const feedbackMessage = document.createElement("p");
        feedbackMessage.textContent = message;

        feedbackDiv.appendChild(feedbackName);
        feedbackDiv.appendChild(feedbackMessage);

        // Додаємо новий відгук у секцію відгуків
        feedbackSection.appendChild(feedbackDiv);

        // Очищаємо форму
        form.reset();
    });
});
