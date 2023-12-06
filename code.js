// Social Logos
const socialLogosContainer = document.querySelectorAll(".social-logos-containers");
const socialLogos = document.querySelectorAll(".social-logos");

socialLogosContainer.forEach(function (container, index) 
{
    container.addEventListener("mouseenter" , function () 
    {
        socialLogos[index].src = socialLogos[index].src.replace(".svg", "-white.svg");
    })

    container.addEventListener("mouseleave" , function () 
    {
        socialLogos[index].src = socialLogos[index].src.replace("-white.svg", ".svg");
    })
});
// Social Logos

// Form Input Validation
const emailInput = document.getElementById("email-input");
const validationMessage = document.getElementById("email-validation-message");

emailInput.addEventListener("input", function () 
{
    const email = emailInput.value;

    validationMessage.style.display = "block";

    if (isValidEmail(email)) 
    {
        emailInput.style.border = "1px solid #28cd28"; // Set the border color to green.
        validationMessage.textContent = "Valid email";
        validationMessage.style.color = "#28cd28";
    } else {
        emailInput.style.border = "1px solid var(--Light-Red)"; // Set the border color to red.
        validationMessage.textContent = "Please check your email";
        validationMessage.style.color = "var(--Light-Red)";
    }
});

emailInput.addEventListener("blur", function () 
{
    emailInput.style.border = "1px solid var(--Pale-Blue)"; // Resets the border color when leaving the field.
    validationMessage.style.display = "none";
});

function isValidEmail(email) 
{
    // Use a regular expression to validate the email format.
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}
// Form Input Validation