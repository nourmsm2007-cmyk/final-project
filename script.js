let games = [
    {
        name: "Minecraft",
        type: "Adventure",
        Rate: 9
    },
    {
        name: "GTA",
        type: "Action",
        Rate: 8.5
    },
    {
        name: "PUBG",
        type: "battle royal",
        Rate: 9.4
    },
    {
        name: "Stumble Guys",
        type: "Challenge",
        Rate: 8.9
    },
    {
        name: "Valorant",
        type: "FPS",
        Rate: 9.6
    },
    {
        name: "Roblox",
        type: "gaming platform",
        Rate: 7.8
    }
    
];

let buttons = document.querySelectorAll("#games button");
for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function() {
        let game = games[i];
        alert(
            "Game: " + game.name + 
            "\nType: " + game.type +
            "\nRate " + game.Rate + "/10"
        );
    });

}

let search = document.querySelector("#search");
let cards = document.querySelectorAll("#games > div");
search.addEventListener("input", function() {
    let searchValue = search.value.toLowerCase();
    for (let i = 0; i < games.length; i++) {
        if (games[i].name.toLowerCase().includes(searchValue)) {
            cards[i].style.display = "block";
        }
        else {
            cards[i].style.display = "none";
        }
    }
});

let filter = document.querySelector("#filter");

filter.addEventListener("change", function(){
    let selectedType = filter.value;
    for (let i = 0; i < games.length; i++) {
        if (selectedType == "all" || games[i].type == selectedType) {
            cards[i].style.display = "block";
        }
        else{
            cards[i].style.display = "none";
        }
    }
});


let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let message = document.querySelector("#message").value;
    if (name == "" || email == "" || message == "") {
        alert("please fill in all fields.");
    } 
    else{
        alert("Thank you " + name + ", your message has been sent.");
        form.reset();
    }

});