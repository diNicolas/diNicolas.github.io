const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li'); 
    
    
    burger.addEventListener('click', () =>{
        //Toggle Nav
        nav.classList.toggle('nav-active'); 
        
        //Animate Links
        navLinks.forEach((link,index) =>{
            if(link.style.animation){
                link.style.animation = ''; 
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+0.5}s`; //delay for each item
            }
        
        });
        burger.classList.toggle('toggle'); 

    }); 

    
}


navSlide(); 


//Sections Movement

$("#services").click(function() {

    $("#s_servicios").velocity({ translateX: "100vw" }, { duration: 2000, visibility: "visible" }, "ease-in-out");
    $("#s_exploraiones").velocity({ translateY: "-100vh" }, { duration: 2000, visibility: "hidden" }, [100, 80]);
    $("#s_tienda").velocity({ translateY: "100vh" }, { duration: 2000, visibility: "hidden" }, [100, 80]);
    $("#s_contacto").velocity({ translateX: "100vw" }, { duration: 2000, visibility: "hidden" }, [100, 80]);
});


$("#home").click(function() {

    $("#s_servicios").velocity({ translateX: "-100vw" }, { duration: 2000, visibility: "visible" }, [100, 80]);
    $("#s_exploraiones").velocity({ translateY: "-100vh" }, { duration: 2000, visibility: "hidden" }, [100, 80]);
    $("#s_tienda").velocity({ translateY: "100vh" }, { duration: 2000, visibility: "hidden" }, [100, 80]);
    $("#s_contacto").velocity({ translateX: "100vw" }, { duration: 2000, visibility: "hidden" }, [100, 80]);
});

$("#exploraciones").click(function() {

    $("#s_exploraiones").velocity({ translateY: "100vh" }, { duration: 2000, visibility: "Visible" }, [100, 80]);
    $("#s_servicios").velocity({ translateX: "-100vw" }, { duration: 2000, visibility: "hidden" }, [100, 80]);
    $("#s_tienda").velocity({ translateY: "100vh" }, { duration: 2000, visibility: "hidden" }, [100, 80]);
    $("#s_contacto").velocity({ translateX: "100vw" }, { duration: 2000, visibility: "hidden" }, [100, 80]);
});


$("#tienda").click(function() {

    $("#s_tienda").velocity({ translateY: "-100vh" }, { duration: 2000, visibility: "visible" }, [100, 80]);
    $("#s_exploraiones").velocity({ translateY: "-100vh" }, { duration: 2000, visibility: "hidden" }, [100, 80]);
    $("#s_servicios").velocity({ translateX: "-100vw" }, { duration: 2000, visibility: "hidden" }, [100, 80]);
    $("#s_contacto").velocity({ translateX: "100vw" }, { duration: 2000, visibility: "hidden" }, [100, 80]);


});

$("#contacto").click(function() {

    $("#s_contacto").velocity({ translateX: "-100vw" }, { duration: 2000, visibility: "visible" }, [100, 80]);
    $("#s_tienda").velocity({ translateY: "100vh" }, { duration: 2000, visibility: "hidden" }, [100, 80]);
    $("#s_exploraiones").velocity({ translateY: "-100vh" }, { duration: 2000, visibility: "hidden" }, [100, 80]);
    $("#s_servicios").velocity({ translateX: "-100vw" }, { duration: 2000, visibility: "hidden" }, [100, 80]);


});