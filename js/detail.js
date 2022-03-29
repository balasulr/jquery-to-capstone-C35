
$().ready( () => {

    $("#refresh").on("click", () => {
        refresh();
    })

    refresh();

});

const refresh = () => {
    $.getJSON("http://localhost:3918/api/users/1") // this line changes which id is returned
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