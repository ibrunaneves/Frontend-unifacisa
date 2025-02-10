document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("TRvgsbVMwhL54FMHy");

    // Mostra a seção "Sobre" inicialmente
    document.getElementById("about").classList.add("active");

    // Função para trocar as seções visíveis
    window.showSection = function(sectionId) {
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
    };

    // Seleciona o formulário de contato
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();

            const formData = {
                from_name: contactForm.name.value,
                from_email: contactForm.email.value,
                message: contactForm.message.value
            };

            emailjs.send("service_vs1z1yk", "template_kfg50c9", formData)
                .then(() => {
                    alert("Mensagem enviada com sucesso!");
                    contactForm.reset();
                })
                .catch((err) => {
                    alert("Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.");
                    console.error("Erro:", err);
                });
        });
    }
});
