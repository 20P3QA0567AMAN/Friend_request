var stranger = document.querySelector("h2")
var friendsreq = document.getElementById("friends")
var check = 0

friendsreq.addEventListener("click",function() {
    if(check == 0) {
        stranger.innerHTML = "Friends"
        stranger.style.color = "green"
        friendsreq.innerHTML = "Remove Friends"
        check = 1;
    }
    else {
        stranger.innerHTML = "Stranger"
        stranger.style.color = "maroon"
        friendsreq.innerHTML = "Add Friends"
        check = 0;
    }
    

})



