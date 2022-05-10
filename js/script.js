// VARIABLES
const URL = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/1.json"

// ELEMENT REFERENCES

// EVENT LISTENERS
$("document").ready(function(){
    console.log("Success!");
    dataReady();
})

// FUNCTIONS
function dataReady(){
    $.ajax(URL).then((data) => {
        console.log(data)
    },
    (error) => {
        console.log("bad request", error)
    }
    )
}