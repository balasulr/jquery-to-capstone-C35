let users = []; // Empty array of users

$().ready( () => {
    
    console.log("jQuery is ready!");
    
    let url = "http://localhost:3918/api/users" // Opened up & ran the prs-server-C35.sln from prs-server-C35 in Github
    
    $.getJSON(url)
        .then(
            (res) => { // Anonymous function & res stands for response
                console.debug(res);
                users = res;
                display(users); // Only place that makes sense to put this function is in res block since only time know with certainty that got data back
            }
        )
        .fail(
            (err) => { console.error(err); } // Anonymous function & err stands for error
        );
    } );

    
    const display = (users) => {
        var tbody = $("#users");
        for(let user of users) {
            let tr = $("<tr></tr>"); // <tr></td>
            let tdId = $(`<td>${user.id}</td>`); // <td>1</td>
            tr.append(tdId); // <tr><td>1</td></tr>
            let tdName = $(`<td>${user.firstname} ${user.lastname}</td>`) // <td>FirstName LastName</td>
            tr.append(tdName);
            let tdUsername = $(`<td>${user.username}</td>`);
            tr.append(tdUsername);
            let tdPhone = $(`<td>${user.phone}</td>`);
            tr.append(tdPhone);
            let tdEmail = $(`<td>${user.email}</td>`);
            tr.append(tdEmail);
            let tdReviewer = $(`<td>${(user.isReviewer ? "Yes" : "No")}</td>`); // Returns Yes if true & No if false
            tr.append(tdReviewer);
            let tdAdmin = $(`<td>${(user.isAdmin ? "Yes" : "No")}</td>`); // Returns Yes if true & No if false
            tr.append(tdAdmin);
            tbody.append(tr);
        }
    }