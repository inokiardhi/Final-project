    function fadein(){
        document.getElementById().style.opacity='1';
    }



    function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
    }

    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }
    function myFunction() {
        const menuIcon =document.getElementById("menu-icon");
        const darkHead = document.getElementById("header");
        const darkFooter = document.getElementById("footer");
        const button = document.getElementById("btn-dark");
        
        const logo = document.getElementById("logo");
        const rightHead = document.getElementById("header-right");
        const sideNav = document.getElementById("mySidenav");
        const darkClass = ["intro-wrapper","heading","message-wrapper","contact-wrapper" ];
        const topWrapp = document.getElementById("1");
        const text1Wrapp = document.getElementById("text1");
        const text2Wrapp = document.getElementById("text2");
        const eduClass = document.getElementById("4");
        const eduText = document.getElementById("text");
        const checkBox = document.getElementById("myCheck");
        const aRight = rightHead.getElementsByTagName("a");
        const aSide = sideNav.getElementsByTagName("a");
        const flogo = document.getElementById("flogo");
        
       
      console.log(checkBox.checked);
      if (checkBox.checked === true){
        /* header darker*/
        menuIcon.style.color ="rgb(247, 247, 247)";
        topWrapp.style.backgroundColor = "rgb(53, 54, 54)";
        text1Wrapp.style.color = "grey";
        text2Wrapp.style.color = "grey";
        eduClass.style.backgroundColor = "rgb(53, 54, 54)";
        eduText.style.color = "white";
        button.style.color="white";
        flogo.style.color ="white";
        sideNav.style.backgroundColor = "rgb(41, 43, 49)";
        darkHead.style.backgroundColor = "rgb(41, 43, 49)";
        darkFooter.style.backgroundColor = "rgb(41, 43, 49)";
        
        /*header-right and left darker*/
        
        for(let i=0; i<aRight.length; i++){
            aRight[i].style.color = "rgb(247, 247, 247)";
           
           
        }
        
        for(let i=0; i<aSide.length; i++){
            aSide[i].style.color = "rgb(247, 247, 247)";
           
        }

        /* Body darker*/
       for(let j=0; j<darkClass.length; j++){

        let darkMode = document.getElementsByClassName(darkClass[j]);
        for(let i=0; i<darkMode.length; i++){
       
         darkMode[i].style.color = "rgb(247, 247, 247)";
         
            if(darkClass[j]!== "heading" ) {
                darkMode[i].style.backgroundColor = "rgb(53, 54, 54)";
            } else{
                darkMode[i].style.backgroundColor = "none";
            }
        }
        
        }
       
        
    } else if (checkBox.checked === false){
       menuIcon.style.color ="black";
       sideNav.style.backgroundColor = "rgb(235, 235, 235)";
       darkHead.style.backgroundColor = "rgb(255,255,255)";
       topWrapp.style.backgroundColor = "rgb(183, 216, 241)";
       text1Wrapp.style.color = "black";
       text2Wrapp.style.color = "black";
       darkFooter.style.backgroundColor = "rgb(231, 231, 231,0.3)";
       eduClass.style.backgroundColor ="white";
       eduText.style.color = "black";
       flogo.style.color ="black"; 
       button.style.color="black";
       logo.style.color ="none";
       for(let i=0; i<aRight.length; i++){
        
            aRight[i].style.color = "rgb(69, 76, 83)";  
            
        }
       
        for(let i=0; i<aSide.length; i++){
            aSide[i].style.color = "rgb(69, 76, 83)";
           
        }
        /*header-right and left darker*/
        for(let j=0; j<darkClass.length; j++){

            let darkMode = document.getElementsByClassName(darkClass[j]);
            for(let i=0; i<darkMode.length; i++){
                if(darkClass[j]!== "heading") {
                    darkMode[i].style.backgroundColor = "white";
                } else{
                    darkMode[i].style.backgroundColor = "none";
                }
                    darkMode[i].style.color = "rgb(67, 72, 78)";
            }

        }
    }
}
