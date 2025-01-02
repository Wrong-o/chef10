// Function to show the popup
function showPopup(item) {
    document.getElementById('modalMessage').innerText = 'You clicked ' + item;
    document.getElementById('popupModal').style.display = 'block';
}

// Get the modal and close button
var modal = document.getElementById('popupModal');
var closeButton = document.getElementsByClassName('close')[0];

closeButton.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Day categories HTML
const dayCategoriesHTML = `
    <div class="category">
        <h3>Day Category 1</h3>
        <ul>
            <li><button onclick="showPopup('Day Category 1 - Item 1')">Item 1</button></li>
            <li><button onclick="showPopup('Day Category 1 - Item 2')">Item 2</button></li>
            <li><button onclick="showPopup('Day Category 1 - Item 3')">Item 3</button></li>
        </ul>
    </div>
    <div class="category">
        <h3>Day Category 2</h3>
        <ul>
            <li><button onclick="showPopup('Day Category 2 - Item 1')">Item 1</button></li>
            <li><button onclick="showPopup('Day Category 2 - Item 2')">Item 2</button></li>
            <li><button onclick="showPopup('Day Category 2 - Item 3')">Item 3</button></li>
        </ul>
    </div>
`;

// Night categories HTML
const nightCategoriesHTML = `
    <div class="category">
        <h3>Night Category 1</h3>
        <ul>
            <li><button onclick="showPopup('Night Category 1 - Item 1')">Item 1</button></li>
            <li><button onclick="showPopup('Night Category 1 - Item 2')">Item 2</button></li>
            <li><button onclick="showPopup('Night Category 1 - Item 3')">Item 3</button></li>
        </ul>
    </div>
    <div class="category">
        <h3>Night Category 2</h3>
        <ul>
            <li><button onclick="showPopup('Night Category 2 - Item 1')">Item 1</button></li>
            <li><button onclick="showPopup('Night Category 2 - Item 2')">Item 2</button></li>
            <li><button onclick="showPopup('Night Category 2 - Item 3')">Item 3</button></li>
        </ul>
    </div>
`;

// Function to switch between categories
function toggleCategories() {
    var panel = document.getElementById('panel');
    var switchBtn = document.querySelector('.switch-btn');
    
    if (panel.innerHTML === dayCategoriesHTML) {
        // Switch to night categories
        panel.innerHTML = nightCategoriesHTML;
        switchBtn.textContent = 'Switch to Day Categories'; // Update button text
    } else {
        // Switch to day categories
        panel.innerHTML = dayCategoriesHTML;
        switchBtn.textContent = 'Switch to Night Categories'; // Update button text
    }
}

// Initialize with day categories
document.getElementById('panel').innerHTML = dayCategoriesHTML;
