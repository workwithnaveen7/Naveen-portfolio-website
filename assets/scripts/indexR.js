// const { AutoPlay } = require("@egjs/flicking-plugins");


(function(window, document, undefined){
    function showText(id,delay){
        var elem=document.getElementById(id);
        setTimeout(function(){elem.style.visibility='visible';},delay*1000)
    }
    
    function animateElement(element, delay, duration) {
        element.style.visibility = "hidden";
        setTimeout(function() {
            element.style.visibility= "visible";
            element.animate([
                {transform: `translateX(-100%)`,
                 opacity: 0},
                {opacity: 1}
            ], {
                // delay: delay*1000,
                duration: duration*1000,
                iterations: 1,
                easing : "cubic-bezier(0.2, 0, 0.190, 1)",
                fill: "forwards"
            })
        }, delay*1000);
    };

    function animateMainBody(element, distance, duration) {
        element.style.visibility = "hidden";
        setTimeout(function() {
            element.style.visibility= "visible";
            element.animate([
                {top: distance + "px", opacity: 0},
                {top: "-100%", opacity: 1}
            ], {
                // delay: delay*1000,
                duration: duration*1000,
                iterations: 1,
                easing : "cubic-bezier(0.2, 0, 0.190, 1)"
            })
        }, delay*1000);
    }

    function animateImage(element, delay, duration) {
        element.style.visibility = "hidden";
        setTimeout(function() {
            element.style.visibility= "visible";
            element.animate([
                {transform: `translateY(-100%)`, opacity: 0},
                {opacity: 1}
            ], {
                // delay: delay*1000,
                duration: duration*1000,
                iterations: 1,
                easing : "cubic-bezier(0.2, 0, 0.190, 1)",
                fill: "forwards"
            })
        }, delay*1000);
    };

    function animateNavArrow(element, delay, duration) {
        element.style.visibility = "hidden";
        setTimeout(function() {
            element.style.visibility= "visible";
            element.animate([
                {opacity: 0},
                {opacity: 1}
            ], {
                // delay: delay*1000,
                duration: duration*1000,
                iterations: 1,
                easing : "cubic-bezier(0.2, 0, 0.190, 1)",
                fill: "forwards"
            })
        }, delay*1000);
    };

    function makeNewPosition(){
        var h = window.screen.height - 50;
        var w = window.screen.width - 50;
        
        var nh = Math.floor(Math.random() * h);
        var nw = Math.floor(Math.random() * w);
       
        return [nh,nw];
            
    }
    
    window.onload = init;
    
    function init(){
        var lightMode = false;
        var darkMode = true;
        var spotBlur = document.getElementById("spot-blur");
        var heading = document.getElementById("heading-text");
        var subHeading = document.getElementById("sub-heading-text");
        var bio = document.getElementById("bio");
        var socialLogo = document.getElementById('social-logo');
        var socialLogo2 = document.getElementById('social-logo2');
        var socialLogo3 = document.getElementById('social-logo3');
        var divider = document.getElementById("divider");
        var divider2 = document.getElementById("divider2");
        var socialLogoContainer = document.getElementById("social-logo-container");
        var lightThemeIcon =  document.getElementById("light-mode-icon");
        var darkThemeIcon =  document.getElementById("dark-mode-icon");
        var sunIcon = document.getElementById("sun-icon");
        var bioRect = bio.getBoundingClientRect();
        var bioWidth = bioRect.width * 0.5;
        var bioWidthPercentage = (bioWidth / screen.width) * 100;
        var wave = document.getElementById("wave");
        var text = document.getElementsByClassName("text");
        var image = document.getElementById("my-image");
        var navArrowContainer = document.getElementById("nav-arrow-container");
        var navArrow = document.getElementById("nav-arrow");
        var aboutMe = document.getElementById("about-me");
        var aboutMeText = document.getElementById("about-me-text");
        var skillsText = document.getElementById("skills-text");
        var skillHeadings = document.getElementsByClassName("skill-heading");
        // divider.style.width = `${bioWidthPercentage}%`;
        // divider2.style.width = `${bioWidthPercentage}%`;
        lightThemeIcon.style.backgroundImage = "none";
        var x = bio.getBoundingClientRect();
        var y = [x.bottom, x.left]
        var mainContainer = document.getElementById("main-container");
        var backgroundWrapper = document.getElementById("background-wrapper");
        var elements = [heading, subHeading, divider, bio, divider2, socialLogoContainer];
        // elements.forEach(e => {
        //     elem.style.visibility = "hidden";
        // });
        var loadingScreen = document.getElementById('loading-screen');
        loadingScreen.animate([
            {opacity:1},
            {opacity:0}
          ],
           {
            duration: 1000,
            easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            fill: "forwards"
           });
           setTimeout(function() {
            loadingScreen.style.display='none';
           }, 1100);
        var boxes = document.getElementsByClassName("box");
        var backArrow = document.getElementById("back-arrow-img");
        var headingss = document.getElementsByClassName("skill-heading");
        var gfxWorkContainer = document.querySelector(".gfx-flickity");
        var subSkillsTexts = document.getElementsByClassName("sub-skills-text");
        var skillIcons = document.getElementsByClassName("skill-icon");
        const gfxFlicking = new Flicking("#gfx-flickity", {
            align: "center",
            circular: true,
            bound: true,
            renderOnlyVisible: true,
            bounce: "50%",
            inputType: ["touch", "mouse", "pointer"],
          });
        gfxFlicking.addPlugins(new Flicking.Plugins.AutoPlay({
            autoplay: true,
            duration: 1500,
            animationDuration: 800,
            stopOnHover: true
        }));
        gfxFlicking.addPlugins(new Flicking.Plugins.Arrow());

        const vfxFlicking = new Flicking("#vfx-flickity", {
            align: "center",
            circular: true,
            bound: true,
            renderOnlyVisible: true,
            bounce: "50%",
            inputType: ["touch", "mouse", "pointer"],
          });
        vfxFlicking.addPlugins(new Flicking.Plugins.Arrow());

        // const webdevFlicking = new Flicking("#web-dev-flickity", {
        //     align: "center",
        //     circular: true,
        //     bound: true,
        //     renderOnlyVisible: true,
        //     bounce: "50%",
        //     inputType: ["touch", "mouse", "pointer"],
        //   });
        // webdevFlicking.addPlugins(new Flicking.Plugins.AutoPlay({
        //     autoplay: true,
        //     duration: 1500,
        //     animationDuration: 800,
        //     stopOnHover: true
        // }));
        // webdevFlicking.addPlugins(new Flicking.Plugins.Arrow());

        // const musicprodFlicking = new Flicking("#music-prod-flickity", {
        //     align: "center",
        //     circular: true,
        //     bound: true,
        //     renderOnlyVisible: true,
        //     bounce: "50%",
        //     inputType: ["touch", "mouse", "pointer"],
        //   });
        //   musicprodFlicking.addPlugins(new Flicking.Plugins.AutoPlay({
        //     autoplay: true,
        //     duration: 1500,
        //     animationDuration: 800,
        //     stopOnHover: true
        // }));
        // musicprodFlicking.addPlugins(new Flicking.Plugins.Arrow());

        

        var subWorkContainers = document.getElementsByClassName("sub-work-container");
          
        

        const pages = document.querySelectorAll('.page');
        let currentPageIndex = 0;
        var currentBigBoxes = document.getElementsByClassName("big-box");

        for (let i = 0; i < boxes.length; i++) {
            boxes[i].addEventListener('click', () => {
                
              if (currentBigBoxes.length === 0) {
                for (let j = 0; j < boxes.length; j++) {
                  if (!(boxes[i].isEqualNode(boxes[j]))) {
                    boxes[j].style.display = "none";
                  } else {
                    // console.log(headingss[i].textContent)
                    skillsText.innerHTML = `${headingss[i].textContent.toString().trim().split(' ')[0]} <span class='color-theme'>${headingss[i].textContent.toString().trim().split(' ')[1]}</span>`;
                  }
                }
                for (let k = 0; k < headingss.length; k++) {
                  headingss[k].style.display = "none";
                }
                for (let l = 0; l < subWorkContainers.length; l++) {
                  subWorkContainers[l].style.display = "flex";
                }
                if ( boxes[i].firstChild.innerHTML ) {

                }
                
                boxes[i].classList.add("big-box");
                boxes[i].classList.remove("box");
                backArrow.style.display = "block";
              };
            });
          };
        

        window.dispatchEvent(new Event('resize'));
        gfxWorkContainer.style.height = gfxWorkContainer.clientHeight + "px";
        

        backArrow.addEventListener('click', () => {
            var currentBigBoxes = document.getElementsByClassName("big-box");

            skillsText.innerHTML = "My<span class='color-theme'> Work</span>";
            for (let i = 0; i < currentBigBoxes.length; i++) {
                currentBigBoxes.item(i).classList.add("box");
                currentBigBoxes.item(i).classList.remove("big-box");
            };
            for (let i = 0; i < boxes.length; i++) {
                boxes[i].style.display = "flex";
                boxes[i].classList.add("box");
                boxes[i].classList.remove("big-box");
            };
            for (let k = 0; k < headingss.length; k++) {
                headingss[k].style.display = "block";
            };
            for (let l = 0; l < subWorkContainers.length; l++) {
                subWorkContainers[l].style.display = "none";
            };
            // gfxWorkContainer.style.display = "none";
            backArrow.style.display = "none";

        });

        navArrow.addEventListener('click', () => {

            navArrow.style.animation = 'fade-out 1s cubic-bezier(0.2, 0, 0.190, 1) forwards';
            navArrow.style.pointerEvents = 'none';

            for (let i = currentPageIndex; i >= 0; i--) {
              pages[i].style.animation = 'slide-up 2s cubic-bezier(0.2, 0, 0.190, 1) forwards';
              
            }
            // navArrow.style.opacity = "0";
            
            setTimeout(() => {
              navArrow.style.display = 'none';

              for (let i = currentPageIndex; i >= 0; i--) {
                pages[i].classList.remove('active');
              }

              currentPageIndex = (currentPageIndex + 1) % pages.length;
              pages[currentPageIndex].classList.add('active');
              for (let i = currentPageIndex; i >= 0; i--) {
                // if (pages[i].id.localeCompare("page1")) {
                //     navArrowContainer.style.marginTop = "-180px";
                //     mainContainer.style.top = "0px";
                // }
                // else {
                //     if (pages[i].id.localeCompare("page2")) {
                //         navArrowContainer.style.marginTop = "200px";
                //     };
                //     if (pages[i].id.localeCompare("page3")) {
                //         navArrowContainer.style.marginTop = "100px";
                //     };
                // };
                // console.log(pages[i].id);
                
                pages[i].style.animation = 'slide-up2 2s cubic-bezier(0.2, 0, 0.190, 1) forwards';
              };
              setTimeout(() => {
                navArrow.style.display = 'flex';
                navArrow.style.animation = 'fade-in 1s cubic-bezier(0.2, 0, 0.190, 1) forwards';
                navArrow.style.pointerEvents = 'all';
                // navArrow.style.opacity = '1';
                
              }, 1000);
            }, 800);
          });

        lightThemeIcon.style.visibility = "hidden";
        setTimeout( function() {
            lightThemeIcon.style.visibility = "visible";
            lightThemeIcon.animate([
                {opacity: "0"},
                {opacity: "1"}
            ], {
                duration: 1700,
                iterations: 1,
                easing : "cubic-bezier(0.2, 0, 0.190, 1)",
                fill: "forwards"
            })
        }, 2000);
        
        // go here
        animateElement(heading, 0, 1.7)
        animateElement(subHeading, 1.7, 1.7)
        animateElement(divider, 3.6, 1.7)
        animateElement(bio, 5, 2)
        animateElement(divider2, 6.8, 1.7)
        animateElement(socialLogoContainer, 7.8, 1.5)
        // animateImage(image, 2, 2)
        animateNavArrow(navArrow, 8, 1)

        // mainContainer.style.maxWidth = window.screen.width;
        // mainContainer.style.maxHeight = window.screen.height;

        lightThemeIcon.onclick = function(e) {
            
            if (lightMode === true) {
                return
            }
            var duration = 1500;
            var elementsToAnimate = [text, heading, subHeading, bio, divider, divider2, aboutMe, aboutMeText, skillsText, subSkillsTexts, skillIcons];
            lightThemeIcon.animate([
                {opacity: "1"},
                {opacity: "0"}
            ],{
                duration: 1000,
                iterations: 1,
                easing: "cubic-bezier(0.2, 0, 0.190, 1)",
                fill: "forwards"
            })
            setTimeout( function () {
                lightThemeIcon.style.visibility = "hidden";
                darkThemeIcon.style.visibility = "visible";
                darkThemeIcon.animate([
                    {opacity: "0"},
                    {opacity: "1"}
                ],{
                    duration: 1000,
                    iterations: 1,
                    easing: "cubic-bezier(0.2, 0, 0.190, 1)",
                    fill: "forwards"
                })
            }, 1200);
            
            wave.animate([
                {mixBlendMode: "add",
                opacity: "80%"},
                {mixBlendMode: "multiply",
            opacity: "40%"}
            ], {
                duration: duration,
                iterations: 1,
                easing : "cubic-bezier(0.2, 0, 0.190, 1)"
            })
            wave.style.mixBlendMode = "multiply";
            wave.style.opacity = "40%";
            spotBlur.animate([
                {backgroundColor: "rgb(45, 115, 255)",
                opacity: "50%"    
            },
                {backgroundColor: "rgb(2, 149, 255)",
                opacity: "15%"
            },
            ],{
                duration: duration,
                iterations: 1,
                easing : "cubic-bezier(0.2, 0, 0.190, 1)"
            })
            
            spotBlur.style.backgroundColor = "rgb(2, 149, 255)";
            spotBlur.style.opacity = "15%";

            // text.animate([
            //     {
            //         color: "#e5e3e0",
            //         color: "rgb(34, 34, 34)"
            //     }
            // ], {
            //     duration: duration,
            //     iterations: 1,
            //     easing : "cubic-bezier(0.2, 0, 0.190, 1)"
            // });
            // text.style.color = "rgb(34, 34, 34)";

            elementsToAnimate.forEach( function(element) {
                if (element === skillIcons) {
                    for (let i = 0; i < skillIcons.length; i++) {
                        skillIcons[i].animate([ 
                            {filter: "brightness(1)"},
                            {filter: "brightness(0.13)"}
                        ], {
                            duration: duration,
                            iterations: 1,
                            easing : "cubic-bezier(0.2, 0, 0.190, 1)"
                        });
                        skillIcons[i].style.filter = "brightness(0.13)";
                    };
                }
                else if (element === text) {
                    for (let i = 0; i < text.length; i++) {
                        text[i].animate([ 
                            {color: "#e5e3e0"},
                            {color: "rgb(34, 34, 34)"}
                        ], {
                            duration: duration,
                            iterations: 1,
                            easing : "cubic-bezier(0.2, 0, 0.190, 1)"
                        });
                        text[i].style.color = "rgb(34, 34, 34)";
                    };
                }
                else if (element === divider || element === divider2) {
                    element.animate([
                        {borderTop: "0.3vh solid rgb(218, 218, 218)"},
                        {color: "0.3vh solid rgb(34, 34, 34)"}
                    ], {
                        duration: duration,
                        iterations: 1,
                        easing : "cubic-bezier(0.2, 0, 0.190, 1)"
                    });
                    element.style.borderTop = "0.3vh solid rgb(34, 34, 34)";
                    
                }
                else if (element === skillHeadings) {
                    for (let i = 0; i < skillHeadings.length; i++) {
                        skillHeadings[i].animate([ 
                            {color: "#e5e3e0"},
                            {color: "rgb(34, 34, 34)"}
                        ], {
                            duration: duration,
                            iterations: 1,
                            easing : "cubic-bezier(0.2, 0, 0.190, 1)"
                        });
                        skillHeadings[i].style.color = "rgb(34, 34, 34)";
                    };
                }
                else if (element === subSkillsTexts) {
                    for (let i = 0; i < subSkillsTexts.length; i++) {
                        subSkillsTexts[i].animate([ 
                            {color: "#e5e3e0"},
                            {color: "rgb(34, 34, 34)"}
                        ], {
                            duration: duration,
                            iterations: 1,
                            easing : "cubic-bezier(0.2, 0, 0.190, 1)"
                        });
                        subSkillsTexts[i].style.color = "rgb(34, 34, 34)";
                    };
                }        
            });
            
            document.body.animate([
                {backgroundColor: "rgb(34, 34, 34)"},
                {backgroundColor: "#fefffc"}
            ], {
                duration: duration,
                iterations: 1,
                easing : "cubic-bezier(0.2, 0, 0.190, 1)"
            });
            setTimeout(function() {
                document.body.style.backgroundColor = "#fefffc"
            }, duration);
            lightMode = true;
            darkMode = false;
        };

        darkThemeIcon.onclick = function(e) {
            
            if (darkMode === true) {
                return
            }
            var duration = 1500;
            var elementsToAnimate = [text, heading, subHeading, bio, divider, divider2, aboutMe, aboutMeText, skillsText, subSkillsTexts, skillIcons];
            darkThemeIcon.animate([
                {opacity: "100%"},
                {opacity: "0%"}
            ],{
                duration: 1000,
                iterations: 1,
                easing: "cubic-bezier(0.2, 0, 0.190, 1)",
                fill: "forwards"
            });
            setTimeout( function () {
                darkThemeIcon.style.visibility = "hidden";
                lightThemeIcon.style.visibility = "visible";
                lightThemeIcon.animate([
                    {opacity: "0%"},
                    {opacity: "100%"}
                ],{
                    duration: 1000,
                    iterations: 1,
                    easing: "cubic-bezier(0.2, 0, 0.190, 1)",
                    fill: "forwards"
                })
            }, 1200);
            
            wave.animate([
                {mixBlendMode: "multiply",
                opacity: "40%"},
                {mixBlendMode: "add",
                opacity: "80%"}
            ], {
                duration: duration,
                iterations: 1,
                easing : "cubic-bezier(0.2, 0, 0.190, 1)"
            })
            wave.style.mixBlendMode = "add";
            wave.style.opacity = "80%";
            spotBlur.animate([
                {backgroundColor: "rgb(2, 149, 255)",
                opacity: "15%"    
            },
                {backgroundColor: "rgb(45, 115, 255)",
                opacity: "50%"
            },
            ],{
                duration: duration,
                iterations: 1,
                easing : "cubic-bezier(0.2, 0, 0.190, 1)"
            })
            
            spotBlur.style.backgroundColor = "rgb(45, 115, 255)";
            spotBlur.style.opacity = "50%";

            // text.animate([
            //     {
            //         color: "rgb(34, 34, 34)",
            //         color: "#e5e3e0"
            //     }
            // ], {
            //     duration: duration,
            //     iterations: 1,
            //     easing : "cubic-bezier(0.2, 0, 0.190, 1)"
            // });
            // text.style.color = "#e5e3e0";

            elementsToAnimate.forEach( function(element) {
                if (element === skillIcons) {
                    for (let i = 0; i < skillIcons.length; i++) {
                        skillIcons[i].animate([ 
                            {filter: "brightness(0.13)"},
                            {filter: "brightness(1)"}
                        ], {
                            duration: duration,
                            iterations: 1,
                            easing : "cubic-bezier(0.2, 0, 0.190, 1)"
                        });
                        skillIcons[i].style.filter = "brightness(1)";
                    };
                }
                else if (element === divider || element === divider2) {
                    element.animate([
                        {borderTop: "0.3vh solid rgb(34, 34, 34)"},
                        {color: "0.3vh solid rgb(218, 218, 218)"}
                    ], {
                        duration: duration,
                        iterations: 1,
                        easing : "cubic-bezier(0.2, 0, 0.190, 1)"
                    });
                    element.style.borderTop = "0.3vh solid rgb(218, 218, 218)";
                    
                }
                else if (element === text) {
                    for (let i = 0; i < text.length; i++) {
                        text[i].animate([ 
                            {color: "rgb(34, 34, 34)"},
                            {color: "#e5e3e0"}
                        ], {
                            duration: duration,
                            iterations: 1,
                            easing : "cubic-bezier(0.2, 0, 0.190, 1)"
                        });
                        text[i].style.color = "#e5e3e0";
                    };
                }
                else if (element === skillHeadings) {
                    for (let i = 0; i < skillHeadings.length; i++) {
                        skillHeadings[i].animate([ 
                            {color: "rgb(34, 34, 34)"},
                            {color: "#e5e3e0"}
                        ], {
                            duration: duration,
                            iterations: 1,
                            easing : "cubic-bezier(0.2, 0, 0.190, 1)"
                        });
                        skillHeadings[i].style.color = "#e5e3e0";
                    };
                }
                else if (element === subSkillsTexts) {
                    for (let i = 0; i < subSkillsTexts.length; i++) {
                        subSkillsTexts[i].animate([ 
                            {color: "rgb(34, 34, 34)"},
                            {color: "#e5e3e0"}
                        ], {
                            duration: duration,
                            iterations: 1,
                            easing : "cubic-bezier(0.2, 0, 0.190, 1)"
                        });
                        subSkillsTexts[i].style.color = "#e5e3e0";
                    };
                };
                
            })
            
            document.body.animate([
                {backgroundColor: "#fefffc"},
                {backgroundColor: "rgb(34, 34, 34)"}
            ], {
                duration: duration,
                iterations: 1,
                easing : "cubic-bezier(0.2, 0, 0.190, 1)"
            });
            setTimeout(function() {
                document.body.style.backgroundColor = "rgb(34, 34, 34)"
            }, duration);
            lightMode = false;
            darkMode = true;
        };


        document.body.onmousemove = function(e) {
            var x = e.clientX;
            var y = e.clientY;
            // console.log[x,y];

            // setTimeout()
            
            document.getElementById("wave").animate(
                [
                    {
                        top: x,
                        left: y
                    }
                    ,
                    { top: (y-750).toString() + "px",
                      left: (x-800).toString() + "px",
                    }
                ], {
                    duration: 10000,
                    iterations: 1,
                    delay: 100,
                    easing: "cubic-bezier(0.49, 0.47, 0.63, 0.85)",
                } 
            )
            setTimeout(function() {
                try {
                    document.getElementById("wave").style.top = (y-750).toString() + "px";
                    document.getElementById("wave").style.left = (x-800).toString() + "px";
                }
               catch (error) {}
            }, 10000)
            
        }
      }
    
    })(window, document, undefined);