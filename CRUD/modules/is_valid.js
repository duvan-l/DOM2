export const is_valid = (event, form) => {
    event.preventDefault();

    const elements = document.querySelectorAll(form);

    elements.forEach(element => {
        if (element.value == "") {
            console.log(element);
            element.classList.add("error")
        }
    })
    alert("llene los campos")
};