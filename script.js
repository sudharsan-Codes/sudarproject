// Get the DOM elements
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const backBtn = document.getElementById("back");
const carousel = document.querySelector(".carousel .list");

// Slide forward
nextBtn.onclick = function () {
    const items = document.querySelectorAll(".carousel .list .item");
    carousel.appendChild(items[0]); // move first item to the end
    updateItems();
};

// Slide backward
prevBtn.onclick = function () {
    const items = document.querySelectorAll(".carousel .list .item");
    carousel.prepend(items[items.length - 1]); // move last item to the beginning
    updateItems();
};

// Back to full view (optional behavior)
backBtn.onclick = function () {
    alert("You clicked 'See All'. You can customize this to open a full catalog page!");
};

// Function to update classes and animations
function updateItems() {
    const items = document.querySelectorAll(".carousel .list .item");
    items.forEach((item, index) => {
        item.style = ""; // clear old inline styles
        switch (index) {
            case 0:
                item.style.transform = getComputedStyle(document.documentElement).getPropertyValue('--item1-transform');
                item.style.filter = getComputedStyle(document.documentElement).getPropertyValue('--item1-filter');
                item.style.zIndex = getComputedStyle(document.documentElement).getPropertyValue('--item1-zIndex');
                item.style.opacity = getComputedStyle(document.documentElement).getPropertyValue('--item1-opacity');
                item.style.pointerEvents = "none";
                break;
            case 1:
                item.style.transform = getComputedStyle(document.documentElement).getPropertyValue('--item2-transform');
                item.style.filter = getComputedStyle(document.documentElement).getPropertyValue('--item2-filter');
                item.style.zIndex = getComputedStyle(document.documentElement).getPropertyValue('--item2-zIndex');
                item.style.opacity = getComputedStyle(document.documentElement).getPropertyValue('--item2-opacity');
                item.style.pointerEvents = "auto";
                break;
            case 2:
                item.style.transform = getComputedStyle(document.documentElement).getPropertyValue('--item3-transform');
                item.style.filter = getComputedStyle(document.documentElement).getPropertyValue('--item3-filter');
                item.style.zIndex = getComputedStyle(document.documentElement).getPropertyValue('--item3-zIndex');
                break;
            case 3:
                item.style.transform = getComputedStyle(document.documentElement).getPropertyValue('--item4-transform');
                item.style.filter = getComputedStyle(document.documentElement).getPropertyValue('--item4-filter');
                item.style.zIndex = getComputedStyle(document.documentElement).getPropertyValue('--item4-zIndex');
                break;
            case 4:
                item.style.transform = getComputedStyle(document.documentElement).getPropertyValue('--item5-transform');
                item.style.filter = getComputedStyle(document.documentElement).getPropertyValue('--item5-filter');
                item.style.opacity = getComputedStyle(document.documentElement).getPropertyValue('--item5-opacity');
                item.style.pointerEvents = "none";
                break;
            default:
                item.style.opacity = 0;
                item.style.pointerEvents = "none";
        }
    });
}

// Initial call to position items
updateItems();