const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((btn) => {
    btn.addEventListener("click", () => {
        const answer = btn.nextElementSibling;

        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

