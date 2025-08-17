let btn = document.querySelector('button')
btn.addEventListener('click', () => {
    Swal.fire({
        title: 'this is library sweet alert2 in js!!!',
        icon: 'success',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        position: 'center',
    });
});
