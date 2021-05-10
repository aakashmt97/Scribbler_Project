var postId;

// function for Delete Icon on post Cards
function deleteCard(id) {
    postId = id;
    return id
}

// function for Delete Modal
function deletePost() {
    var cardId;
    for (var i=1; i<=20; i++) {
        if (i == deleteCard(postId)) {
            cardId = "post" + i;
            document.getElementById(cardId).style.display = 'none';
        }
    }
}

// function for Ellipsis Icon of post Cards
function postDetails(id) {
    var authName = document.getElementById("name"+id).textContent;
    var heading = document.getElementById("cardHeading"+id).textContent;
    var cardText = document.getElementById("cardPara" + id).textContent;

    var obj  = {"author": authName, "title": heading, "content": cardText};

    sessionStorage.setItem("ObjSession", JSON.stringify(obj));
    window.location.href = 'post.html';
}
