// FAQ accordion
const items = document.querySelectorAll(".faq-item");

items.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");

        let ans = item.querySelector(".faq-answer");
        ans.style.display = ans.style.display === "block" ? "none" : "block";
    });
});
