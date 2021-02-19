function showText() {
    let button = document.getElementById("whole_article_btn");
    let div = document.getElementById("whole_article");
    let button2 = document.getElementById("wrapped_article_btn");
    div.classList.remove("hidden");
    button.classList.add("hidden");
    button2.classList.remove("hidden");
};

function hide_text() {
    let div = document.getElementById("whole_article");
    let button = document.getElementById("whole_article_btn");
    let button2 = document.getElementById("wrapped_article_btn");
    div.classList.add("hidden");
    button.classList.remove("hidden");
    button2.classList.add("hidden");

};