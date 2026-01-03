const users=[ 
    {
        role: "admin" , email: "admin@gmail.com	" , password: "admin1234"
    },
    {
        role: "customer" , email: "customer@gmail.com	" , password: "customer1234"
       
    }
];
document.getElementById("loginForm").addEventListener("submit", function (e) {e.preventDefault();
    const email=email.value;
    const password=document.getElementById("password").value;
    const user = users.find( u => u.email ===email && u.password === password );
    if (!user){
        alert("invalid email or password");
        return
    }
    localStorage.setItem("loggedUser",JSON.stringify(user));
    if (user.role === "admin"){
        window.location.href="admin.html";
    }
    else{
        window.location.href="customer/dashboard.html";
    }
});