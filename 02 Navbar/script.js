

const listMnue = document.querySelector('.nav-menu');
const mnueIcon = document.querySelector('#mnueIcon');

mnueIcon.addEventListener("click", () => {
    // Toggle the 'showData' class on menu
    listMnue.classList.toggle("showData");

    console.log(listMnue);

    // Check if 'showData' is active
    if (listMnue.classList.contains("showData")) {
        mnueIcon.className = "fa-solid fa-xmark"; // Show X icon
    } else {
        mnueIcon.className = "fa-solid fa-list";  // Show List icon
    }
});
