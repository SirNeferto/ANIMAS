// === ESPERA A QUE EL DOM ESTÉ COMPLETAMENTE CARGADO ===
document.addEventListener('DOMContentLoaded', function() {
    
    // === 1. FUNCIÓN PARA SCROLL SUAVE (para enlaces internos) ===
    function setupSmoothScroll() {
        // Selecciona todos los enlaces que apuntan a una sección interna (los del menú)
        const internalLinks = document.querySelectorAll('a[href^="#"]');
        
        internalLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault(); // Evita el comportamiento por defecto del enlace
                
                const targetId = this.getAttribute('href'); // Obtiene el id al que apunta (ej: #inicio)
                if (targetId === '#') return; // Si es solo '#', no hace nada
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // === 2. FUNCIÓN PARA BOTONES DE WHATSAPP ===
    function setupWhatsAppButtons() {
        // Número de teléfono (COLOCA AQUÍ TU NÚMERO CON CÓDIGO DE PAÍS)
        const phoneNumber = '521234567890'; // Ejemplo: 52 para México, 34 para España, etc.
        
        // Selecciona TODOS los botones que tengan la clase 'btn-whatsapp'
        const whatsappButtons = document.querySelectorAll('.btn-whatsapp');
        
        whatsappButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Obtiene el mensaje personalizado del atributo 'data-message'
                // Si no tiene, usa un mensaje por defecto
                const customMessage = this.getAttribute('data-message') || 'Hola, me interesan sus servicios de páginas web.';
                
                // Codifica el mensaje para que sea válido en una URL
                const encodedMessage = encodeURIComponent(customMessage);
                
                // Crea la URL de WhatsApp
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                
                // Abre WhatsApp en una nueva pestaña
                window.open(whatsappUrl, '_blank');
            });
        });
    }

    // === 3. FUNCIÓN PARA BOTONES DE CORREO (mailto) ===
    function setupEmailButtons() {
        const emailButton = document.getElementById('contactarHeader');
        if (emailButton) {
            emailButton.addEventListener('click', function() {
                // Dirección de correo (CAMBIA ESTO POR TU CORREO)
                const email = 'info@puntonexo.com';
                const subject = encodeURIComponent('Solicitud de información - PuntoNexo');
                const body = encodeURIComponent('Hola, me gustaría recibir más información sobre sus servicios.');
                
                window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
            });
        }
    }

    // === 4. FUNCIÓN PARA BOTONES QUE LLEVAN A SECCIONES (como "Nuestros Servicios") ===
    function setupSectionButtons() {
        // Botón "Nuestros Servicios" en el Hero
        const serviciosBtn = document.getElementById('verServicios');
        if (serviciosBtn) {
            serviciosBtn.addEventListener('click', function() {
                const serviciosSection = document.getElementById('servicios');
                if (serviciosSection) {
                    serviciosSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }

        // Botón "Contactar servicio" en el Hero (si quieres que también haga scroll a contacto)
        const contactarHeroBtn = document.getElementById('contactarHero');
        if (contactarHeroBtn) {
            contactarHeroBtn.addEventListener('click', function() {
                const contactoSection = document.getElementById('contacto');
                if (contactoSection) {
                    contactoSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
    }

    // === 5. INICIALIZAR TODAS LAS FUNCIONES ===
    setupSmoothScroll();
    setupWhatsAppButtons();
    setupEmailButtons();
    setupSectionButtons();

}); // Fin del DOMContentLoaded