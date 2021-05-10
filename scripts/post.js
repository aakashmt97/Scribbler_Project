window.onload = function() {
    var getObj = sessionStorage.getItem('ObjSession');
    var obj = JSON.parse(getObj);
    document.getElementById('postTitle').innerHTML = obj["title"];
    document.getElementById('authorName').innerHTML = obj["author"];
    document.getElementById('postText').innerHTML = obj["content"];
}

// funtion for Edit button on Post page
function editPost() {
    var getObj = sessionStorage.getItem('ObjSession');
    var obj = JSON.parse(getObj);

    var author = obj["author"];
    document.getElementsByClassName('authName')[0].innerHTML = '<p id="authorName">'+ author +'</p>' + 
    '<button type="button" id="saveBtn"  onclick="savePost()">Save <i class="fa fa-save"></i></button>';

    document.getElementById('postTitle').contentEditable = "true";
    document.getElementById('postTitle').style.border = "2px solid #ff66a3";

    document.getElementById('postText').contentEditable = "true";
    document.getElementById('postText').style.border = "2px solid #ff66a3";
}

// funtion for Save button on Post page
function savePost(){
    var getObj = sessionStorage.getItem('ObjSession');
    var obj = JSON.parse(getObj);
    
    var author = obj["author"];
    document.getElementsByClassName('authName')[0].innerHTML = '<p id="authorName">'+ author +'</p>' + 
    '<button type="button" id="editBtn" onclick="editPost()">Edit  <i class="fas fa-edit"></i></button>'

    document.getElementById('postTitle').contentEditable = "false";
    document.getElementById('postTitle').style.border = "none";

    document.getElementById('postText').contentEditable = "false";
    document.getElementById('postText').style.border = "none";
}

// function for Comment button
function addComment(comment) {
    if (comment !== '') {
        var template = '<p class="singleComment">' + comment.value + '</p>';
        document.getElementById('allComments').innerHTML += template;
        var a = document.getElementById('inputComment');
        a.value=a.defaultValue;
    }
}

// function for Like button
var numberOfClicks=0;
function postLiked(){
    document.getElementById("likeBtn").innerHTML = '<i class="fas fa-thumbs-up"></i>  Liked!';
    numberOfClicks++;
    if(numberOfClicks!=0){
        if (numberOfClicks==1){
            document.getElementById('likeMsg').innerHTML = numberOfClicks + " person likes this!";
        }
        else {
            document.getElementById('likeMsg').innerHTML = numberOfClicks + " people have liked this!";
        }
    }
}
