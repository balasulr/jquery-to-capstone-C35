$().ready(() => {

    $("#save").on("click", () => {
        create();
    })

});

const create = () => {
    let user1 = {
        id: 0,
        username: $("#iUsername").val(),
        password: "Train@MAX", // default password
        firstname: $("#iFirstname").val(),
        lastname: $("#iLastname").val(),
        phone: $("#iPhone").val(),
        email: $("#iEmail").val(),
        isReviewer: $("#iReviewer").prop("checked"), // checks if property is check marked
        isAdmin: $("#iAdmin").prop("checked")
    }
    console.debug(user1);
    $.ajax({
        url: "http://localhost:3918/api/users",
        method: "POST", // What method executing
        data: JSON.stringify(user1), // JSON.stringify puts the string quotes "" around the keys that need. Makes sure is in the right format.
        contentType: "application/json" //the type of data being sent up to be read. Having a json file type sent up.
    })
        .then((res) => { // What to do if successful
            console.debug(res);
        })
        .fail((err) => { // What to do if fails
            console.error(err);
        });
}