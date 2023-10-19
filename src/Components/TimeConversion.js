export function sunrise(data){
    const sunriseDate = new Date(data * 1000); // Multiply by 1000 to convert to milliseconds

// Get hours and minutes
const sunriseHours = sunriseDate.getHours();
const sunriseMinutes = sunriseDate.getMinutes();


// Convert to 12-hour time format
const sunriseAmPm = sunriseHours >= 12 ? "PM" : "AM";
const sunrise12hr = ((sunriseHours + 11) % 12 + 1) + ":" + sunriseMinutes + " " + sunriseAmPm;
return sunrise12hr
}

export function sunset(data){
const sunsetDate = new Date(data * 1000);

// Get hours and minutes
const sunsetHours = sunsetDate.getHours();
const sunsetMinutes = sunsetDate.getMinutes();

// Convert to 12-hour time format
const sunsetAmPm = sunsetHours >= 12 ? "PM" : "AM";
const sunset12hr = ((sunsetHours + 11) % 12 + 1) + ":" + sunsetMinutes + " " + sunsetAmPm;
return sunset12hr
}


//Get the Current Date
const date = new Date();
const options = { weekday: "short", day: "numeric", month: "short" };
export const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);