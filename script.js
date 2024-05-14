const dayNumber = "";
if (dayNumber >= 1 && dayNumber <=5 ) {
    console.log("It is the weekday!");
} else if (dayNumber === 0 || dayNumber === 6 ) {
    console.log("It is the weekend!");
} else {
    console.log("Invalid day provided!");
}