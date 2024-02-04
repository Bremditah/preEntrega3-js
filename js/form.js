const btnIniciar = document.getElementById("iniciar"),
      btnRegistrarse = document.getElementById("registrarse"),
       formRegister = document.querySelector(".register"),
       formLogin = document.querySelector(".login");

       btnIniciar.addEventListener("click", e =>{
        formRegister.classList.add("hide");
        formLogin.classList.remove("hide")
       })

       btnRegistrarse.addEventListener("click", e =>{
        formLogin.classList.add("hide");
        formRegister.classList.remove("hide")
       })
