console.log("External Javascript works.");
const choices = ["rock","paper","scissors"];

function GetComputerChoice() {
    let x = Math.random() * 2;
    console.log(x);
    return choices[Math.round(x)];
}