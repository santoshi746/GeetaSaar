
function sendMail(){
    let parms={
        fname: document.getElementById("fname").value,
        email : document.getElementById("lname").value,
        email:document.getElementById("email").value,
        mobile:document.getElementById("mobile").value,
        comment: document.getElementById("comment").value
    }
    emailjs.send("service_vxs7swh","template_5iiuz88",parms).then(alert("Email sent !!!"))
    preventDefault()
}

