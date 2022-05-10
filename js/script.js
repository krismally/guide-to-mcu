// VARIABLES
const URL = "https://www.superheroapi.com/api.php/338148107599656/search/";

// ELEMENT REFERENCES
const $charCard = $(".get-char");
const $name = $(".name");
const $species = $(".species");
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
        },
        (error) => {
            console.log("bad request", error);
    });
}

function render(data) {
    $name.text(`Name: ${data.results[0].name}`)
    $species.text(`Species: ${data.results[0].appearance.race}`)
}
