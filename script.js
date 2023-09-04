document.addEventListener("DOMContentLoaded", function () {
    function openPopup(targetId) {
        var popup = document.getElementById(targetId);
        if (popup) {
            popup.style.display = "block";
        }
    }
    
    // JavaScript function to close the pop-up for a specific element
    function closePopup(targetId) {
        var popup = document.getElementById(targetId);
        if (popup) {
            popup.style.display = "none";
        }
    }
    
    // Add click event listeners to all buttons
    var buttons = document.querySelectorAll(".viewdetails");
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            var targetId = this.getAttribute("data-target");
            openPopup(targetId);
        });
    });
    
    // Add click event listeners to close buttons (if available)
    var closeButtons = document.querySelectorAll(".close");
    closeButtons.forEach(function (closeButton) {
        closeButton.addEventListener("click", function () {
            var targetId = this.getAttribute("data-target");
            closePopup(targetId);
        });
    });
});
