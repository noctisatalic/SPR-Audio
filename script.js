async function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = document.getElementById('submitBtn');
    
    const originalBtnText = submitBtn.innerText;
    submitBtn.innerText = "Sending...";
    submitBtn.disabled = true;

    const formData = new FormData(form);

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            // Perhatikan teks alert-nya yang baru ini
            alert("Thank you! Your submission has been sent to our email.");
            form.reset();
            closeModal();
        } else {
            alert("Something went wrong. Please try again.");
        }
    } catch (error) {
        alert("Error sending request. Please check your internet connection.");
    } finally {
        submitBtn.innerText = originalBtnText;
        submitBtn.disabled = false;
    }
}
