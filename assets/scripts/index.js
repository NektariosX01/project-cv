//get the form by its id
const form = document.getElementById("contact-form");

//1.
const formEvent = form.addEventListener("submit", (event) => {
    event.preventDefault();

    //2.
    let mail = new FormData(form);

    //3.
    sendMail(mail);
})
const sendMail = (mail) => {
    //1.
    fetch("http://localhost:63342/JavaScript-Complete-Course/index.html?_ijt=4npf2a75fs0ikmi5dsioonrmtf/send", {
        method: "post", //2.
        body: mail, //3.

    }).then((response) => {
        return response.json();
    });
};
