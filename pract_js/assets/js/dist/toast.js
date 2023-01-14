// document.body.insertAdjacentHTML("beforebegin", <div></div>);

function myToast(text) {
    const html = `<div id="my-toast" class="${type}">
    <div>${text}</div>
    </div>`;
    document.body.insertAdjacentHTML("afterbegin", html);
    setTimeout((function) {
        document.getElementById("my-toast").remove();
    }, 3000);
    }
