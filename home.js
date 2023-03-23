// Tostify
function toastifyInfo(msg, clr = sucessColr) {
    Toastify({
        text: msg,
        duration: 2000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: false, // Prevents dismissing of toast on hover
        style: {
            background: clr,
        },
        onClick: function () { } // Callback after click
    }).showToast();
}



// Cities
let cities = ["faisalabad", "lahore", "karachi", "mamukanjan", 'pirmahal']

// Add City

function addNewCity() {
    let getCity = prompt("Enter City Name ..!");
    let cityFound = false;
    if (getCity == "" || getCity==null) {
        toastifyInfo("Please insert Value !",errorColr)
        return
    }
    else {
        let cityinLower = getCity.toLowerCase();
        if (getCity.length > 3) {

            for (let i = 0; i < cities.length; i++) {
                if (cityinLower == cities[i]) {
                    cityFound = true;
                }
            }

            if (cityFound) {
                let firstChar = cityinLower.charAt(0).toUpperCase()
                let copy = cityinLower.slice(1)
                let fullCity = firstChar + copy;
                toastifyInfo(`${fullCity} is Already Exist `,errorColr)

            }

            else{
                cities.push(cityinLower);
                let firstChar = cityinLower.charAt(0).toUpperCase() 
                let copy = cityinLower.slice(1)
                let fullCity = firstChar + copy;
                console.log(cities);
                toastifyInfo(`${fullCity} SucessFully Added `)
            }
        }

        else {
            toastifyInfo("City Name is Greater than 4 Character !",errorColr)
        }
    }
}

// Show City List


function printAllCities() {
    let showCity = document.getElementById("showCity")
    showCity.style.display="block";
    showCity.innerHTML = ""
    for (let i = 0; i < cities.length; i++) {
        showCity.innerHTML += "<h3 style='text-transform: capitalize;'>"  + cities[i] + "</h3>"
    }
}

