// VARIABLES
const URL = "https://www.superheroapi.com/api.php/338148107599656/search/";

// ELEMENT REFERENCES
const $getChar = $(".get-character");
const $infGauntlet = $(".random-character")
const $charCard = $(".char-card");
const $img = $(".char-picture");
const $close = $(".close");
const $name = $(".name");
const $species = $(".species");
const $powers = $(".powers");
const $group = $(".group");
const $relatives = $(".relatives");
const $input = $("input[type='text']");

// EVENT LISTENERS
$("document").ready(function(){
    $($charCard).hide();
    $($infGauntlet).click(randomChar)
    $("form").on("submit", handleGetData);
    $($close).click(removeCard);
})

// FUNCTIONS
function handleGetData(event) {
    event.preventDefault();
    userInput = $input.val()
    // get data from API based on user input
    $.ajax(URL + userInput).then((data) => {
        render(data);
        card();
        },
        (error) => {
            console.log("bad request", error);
    });
}

function randomChar() {
    const chars = [30, 489, 313, 346, 414, 655, 659, 470, 226, 620, 566, 579, 587, 107, 149, 157, 379, 714];
    const randomChar = Math.floor(Math.random() * chars.length)
    const allChar = `https://www.superheroapi.com/api.php/338148107599656/${chars[randomChar]}`
    $.ajax(allChar).then((data) => {
        console.log(data);
        $img.attr("src", `${data.image.url}`)
        $name.text(`Name: ${data.name}`)
        $species.text(`Species: ${data.appearance.race}`)
        $powers.text(`Power Stats: 
        Intelligence - ${data.powerstats.intelligence},
        Strength - ${data.powerstats.strength},
        Speed - ${data.powerstats.speed},
        Durability - ${data.powerstats.durability},
        Power - ${data.powerstats.power},
        Combat - ${data.powerstats.combat}`)
        $relatives.text(`Relatives: ${data.connections.relatives}`)
        card()
        },
        (error) => {
            console.log("bad request", error);
    });
}

function render(data) {
    if (data.results[0].id == 405) {
        $img.attr("src", `${data.results[1].image.url}`)
        $name.text(`Name: ${data.results[1].name}`)
        $species.text(`Species: ${data.results[1].appearance.race}`)
        $powers.text(`Power Stats: 
        Intelligence - ${data.results[1].powerstats.intelligence},
        Strength - ${data.results[1].powerstats.strength},
        Speed - ${data.results[1].powerstats.speed},
        Durability - ${data.results[1].powerstats.durability},
        Power - ${data.results[1].powerstats.power},
        Combat - ${data.results[1].powerstats.combat}`)
        $relatives.text(`Relatives: ${data.results[1].connections.relatives}`)
    } else {
        $img.attr("src", `${data.results[0].image.url}`)
        $name.text(`Name: ${data.results[0].name}`)
        $species.text(`Species: ${data.results[0].appearance.race}`)
        $powers.text(`Power Stats: 
        Intelligence - ${data.results[0].powerstats.intelligence},
        Strength - ${data.results[0].powerstats.strength},
        Speed - ${data.results[0].powerstats.speed},
        Durability - ${data.results[0].powerstats.durability},
        Power - ${data.results[0].powerstats.power},
        Combat - ${data.results[0].powerstats.combat}`)
        $relatives.text(`Relatives: ${data.results[0].connections.relatives}`)
    }
}

function card() {
    // hides the getChar box and shows the charCard box after user search
    $($getChar).hide("slow");
    $($charCard).show("slow");
}

function removeCard() {
    // close character card and show get character box
    $($input).val("");
    $($charCard).hide("slow");
    $($getChar).show("slow");
}

