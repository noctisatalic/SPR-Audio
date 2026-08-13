function openApplyModal(jobTitle) {
    modalTitle.innerText = `Apply: ${jobTitle}`;
    modalDesc.innerText = `Send us your portfolio link for the ${jobTitle} position.`;
    document.getElementById('emailSubject').value = `New Application: ${jobTitle} - SPR Audio`;
    modal.classList.add('active');
}

function openContactModal() {
    modalTitle.innerText = `Contact SPR Audio`;
    modalDesc.innerText = `Have a general question or custom project proposal? Drop us a message.`;
    document.getElementById('emailSubject').value = `General Inquiry - SPR Audio`;
    modal.classList.add('active');
}

async function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = document.getElementById('submitBtn');
    
    // Ubah teks tombol saat proses pengiriman
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
            alert("Thank you! Your submission has been sent to our email.");
            form.reset(); // Kosongkan isi form
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

