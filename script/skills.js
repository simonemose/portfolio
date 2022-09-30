

let skills_list = document.querySelectorAll(".skill");
skills_list.forEach(element => {
    element.addEventListener("click", selected)
});

function selected() {
    skills_list.forEach(element => {
        element.classList.remove("selected");
        this.classList.add("selected");
        let text = this.querySelector("span").textContent;
        document.getElementById("text_box_skill").innerHTML = text;
    });
}