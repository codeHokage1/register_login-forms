const regForm = document.getElementById('reg-form')
const regEmail = document.getElementById('email').value;
const regPassword = document.getElementById('password').value;

const loginForm = document.getElementById('login-form')
const loginEmail = document.getElementById('login-email').value;
const loginPassword = document.getElementById('login-password').value;

regForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newPerson = {
        email: regEmail,
        password: regPassword
    }
    localStorage.setItem("users", JSON.stringify(newPerson));
})


loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("users"));
    if (!user) window.alert("No record found. Please register first.")
    
    if (user.regEmail === loginEmail && user.regPassword === loginPassword) window.alert("Login Succesful!")
    
    if(user.regEmail !== loginEmail || user.regPassword !== loginPassword) window.alert("Login details do not match! Try again")
})
