
// Input label Transition
const input = Array.from(document.querySelectorAll(".input"));

input.forEach((e) => {
    e.addEventListener('focus', () => {
        e.parentElement.classList.add("up-label");
        e.style.borderColor = "#fff";
    })

    e.addEventListener('blur', () => {
        if (e.value === '') {
            e.parentElement.classList.remove("up-label");
            e.style.borderColor = "";
        }
    });

    if (e.value !== '') {
        e.parentElement.classList.add("up-label");
    }
})

// accordion code for Question

const que = Array.from(document.querySelectorAll('.show'));
que.forEach((item) => {
    item.addEventListener("click", () => {
        let icon = item.children[1];
        let hiddenEl = item.nextElementSibling;

        hiddenEl.classList.toggle("active");

        if (hiddenEl.className === "hidden active") {
            icon.className = "fa-solid fa-xmark";
        } else {
            icon.className = "fa-solid fa-plus";
        }
    })
})
console.log(que);