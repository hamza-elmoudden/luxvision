function selectService(element, serviceId) {
    document.querySelectorAll('.service-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    element.classList.add('selected');
    document.getElementById(serviceId).checked = true;
}

document.getElementById('appointmentForm').addEventListener('submit', function (e) {
    e.preventDefault();

    document.getElementById('appointmentForm').style.display = 'none';
    document.getElementById('confirmationMessage').classList.add('show');

    setTimeout(() => {
        window.scrollTo({
            top: document.getElementById('book').offsetTop - 100,
            behavior: 'smooth'
        });
    }, 100);
});

const today = new Date().toISOString().split('T')[0];
document.getElementById('date').setAttribute('min', today);