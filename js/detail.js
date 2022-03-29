let parms;

$().ready( () => {

    parms = getUrlParms();
    console.debug("Parms:", parms);

    $("#refresh").on("click", () => {
        refresh();
    })

    $("#delete").on("click", () => {
        remove();
    });

    refresh();

});

const remove = () => {
    let id = parms.id;
    $.ajax({
        method: "DELETE",
        url: `http://localhost:3918/api/users/${id}`,  // In address bar, add ?id=1 so have http://127.0.0.1:5500/detail.html?id=1 to see the first user.
        contentType: "application/json"
    })
        .then((res) => { // then & fail are part of asychronous
            console.debug("Delete response:", res);
            document.location.href = "index.html";
        })
        .fail((err) => {
            console.error("ERROR:",err);
        });
}

const refresh = () => {
    let id = parms.id;
    $.getJSON(`http://localhost:3918/api/users/${id}`) // In address bar, to see first user, link should be http://127.0.0.1:5500/detail.html?id=1
        .then((res) => {
            console.debug(res);
            display(res);
        })
        .fail( (err) => {
            console.error(err);
        });
}

const display = (user) => {
    $("#dId").text(user.id);
    $("#dName").text(`${user.firstname} ${user.lastname}`);
    $("#dUsername").text(user.username);
    $("#dPhone").text(user.phone);
    $("#dEmail").text(user.email);
    $("#dReviewer").text(user.IsReviewer ? "Yes" : "No");
    $("#dAdmin").text(user.IsAdmin ? "Yes" : "No");
}