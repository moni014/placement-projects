document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submit').addEventListener('click', function(e) {
        e.preventDefault(); 
        const name = document.getElementById('user').value;
        const mail = document.getElementById('mail_id').value;
        const pass = document.getElementById('password').value;
        const message = document.getElementById('result');

        if (name === 'abcde' && mail === 'abcde@gmail.com' && pass === '0987654321') {
            message.textContent = 'Login Successful';
            message.className = 'success';
        } else {
            message.textContent = 'Invalid';
            message.className = 'failed';
        }
    });
});



