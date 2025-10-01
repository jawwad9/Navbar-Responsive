// const listMnue = document.querySelector('.mnue');
// const mnueIcon = document.querySelector('#mnueIcon');
// const closeIcon = document.querySelector('#closeIcon');

// // Open menu
// function openMnue() {
//     listMnue.classList.add('showData');   // add CSS class
//     closeIcon.style.display = 'block';
//     mnueIcon.style.display = 'none';
// }

// // Close menu
// function closeMnue() {
//     listMnue.classList.remove('showData'); // remove CSS class
//     closeIcon.style.display = 'none';
//     mnueIcon.style.display = 'block';
// }



const listMnue = document.querySelector('.mnue');
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
