const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Welcome to the Band Name Generator\n");
rl.question("What is the name of the city you grew up in? ", function(cityName) {
    rl.question("What is the name of your pet? ", function(petName) {
        console.log(`Your band name could be: ${cityName} ${petName}`);
        rl.close();
    });
});

rl.on("close", function() {
    console.log("\nClosing App...");
    process.exit(0);
});