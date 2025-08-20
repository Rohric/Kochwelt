function sendMail(event){﻿
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://formspree.io/f/mnnzkgak", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        window.location.href = "./send_mail.html";
    }).catch((error) => {
        console.log(error);
    });
}

function popupWindow () {
  var kontaktFenster = window.open("contactform.html", "Kontaktformular", "width=800,height=800,right=300,top=500");
  kontaktFenster.focus();
}