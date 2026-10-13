function changeHeading() {

    const header = document.querySelector("h1");
    header.textContent = "Welcome to Echoes of Elarion!";
   
}
const button = document.querySelector("#change-heading-btn");
 button.addEventListener("click", changeHeading);