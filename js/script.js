// VARIABLES
const URL = "https://www.superheroapi.com/api.php/338148107599656/search/";

// ELEMENT REFERENCES
const $charCard = $(".get-char");
const $img = $("img")
const $name = $(".name");
const $species = $(".species");
const $powers = $(".powers");
const $group = $(".group");
const $relatives = $(".relatives")
const $input = $("input[type='text']");

// EVENT LISTENERS
$("document").ready(function(){
    $("form").on("submit", handleGetData);
})

// FUNCTIONS
function handleGetData(event) {
    event.preventDefault();
    userInput = $input.val()
    $.ajax(URL + userInput).then((data) => {
        console.log(data)
        render(data);
        $(".get-character:hidden").show("fast")
        },
        (error) => {
            console.log("bad request", error);
    });
}

function render(data) {
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
