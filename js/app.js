/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 * 
 */
const pageHeaderSections = Array.from(document.querySelectorAll('section'));
const navBarMenu = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

function createHeaderSections() {
    for (sectionsCounter = 0; sectionsCounter < pageHeaderSections.length; sectionsCounter++) {
        secName = pageHeaderSections[sectionsCounter].getAttribute('data-nav');
        secLocation = pageHeaderSections[sectionsCounter].getAttribute('id');
        // creating the item (li)
        sectionItem = document.createElement('li');
        // adding the link of section position by it's class
        sectionItem.innerHTML = `<a class='menu__link' href='#${secLocation}'>${secName}</a>`;

        // append li child
        navBarMenu.appendChild(sectionItem);
    }
}

// check selected section if it is exists in viewport
function checkSelectedSectionIsExist(selectedElement) {
    let sectionPosition = selectedElement.getBoundingClientRect();
    return (sectionPosition.top >= 0);
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav


// adding toggle to the selected section
function scrollToSelectedSection() {
    for (sectionsCounter = 0; sectionsCounter < pageHeaderSections.length; sectionsCounter++) {
        // If the section is in view port
        if (checkSelectedSectionIsExist(pageHeaderSections[sectionsCounter]) && !pageHeaderSections[sectionsCounter].classList.contains('your-active-class')) {
            // then add it
            pageHeaderSections[sectionsCounter].classList.add('your-active-class');
        }
        // if it's out of the viewport then remove "your-active-class"
        else {
            pageHeaderSections[sectionsCounter].classList.remove('your-active-class');
        }
    }

}
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 
createHeaderSections();
// Scroll to section on link click

// Setting sections as active when scrolling
document.addEventListener('scroll', scrollToSelectedSection);