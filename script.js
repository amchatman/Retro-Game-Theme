//Modified the date on last update
let text = document.lastModified;
let dateOnly = text.split(" ")[0]; // Splits the string and takes only the date part
document.getElementById("update").innerHTML += " " + dateOnly;
