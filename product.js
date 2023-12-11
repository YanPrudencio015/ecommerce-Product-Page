// a logic to chose how many products Does user wants

    const minusBtn = document.getElementById("minus");
    const plusBtn = document.getElementById("plus");
    var result = document.getElementById("resultNumber");
    let quanti = 0;

document.addEventListener("click", btn=>{
    if(btn.target == minusBtn){
        if(quanti > 0){
            quanti -= 1;
            result.value = quanti; 
        }
    } else if(btn.target == plusBtn){
        quanti += 1;
        result.value = quanti
    }
})




// enlarge the images 

    var imgArray = [
        "./images/image-product-1.jpg",
        "./images/image-product-2.jpg",
        "./images/image-product-3.jpg",
        "./images/image-product-4.jpg",
    ];

    var images = document.getElementsByClassName("image-product");
    const mainImage = document.getElementById("mainImage");

    function ImgSelected(){

        for(var image of images){
            image.addEventListener("click", (src)=>{

                for(var imageCard of images){
                    let card = imageCard.parentNode
                    card.classList.remove("cardEfect")
                }

                if(src.target == images[0]){
                    mainImage.setAttribute("src", "./images/image-product-1.jpg");
                } else if(src.target == images[1]){
                    mainImage.setAttribute("src", "./images/image-product-2.jpg");
                } else if(src.target == images[2]){
                    mainImage.setAttribute("src", "./images/image-product-3.jpg");
                } else if(src.target == images[3]){
                    mainImage.setAttribute("src", "./images/image-product-4.jpg");
                }
             
                let card = src.target.parentNode;
                    card.classList.add("cardEfect")
            })
        }



    }
    ImgSelected()





    window.addEventListener("DOMContentLoaded", ()=>{
        const currentWidthViewport = Window.innerWidth || document.documentElement.clientWidth;

        // if viewport is largerst than 690px call the function enlargeImage.
        if(currentWidthViewport > 690){
            enlargeImage()
        } 
    })


    function enlargeImage(){
        const mainImage = document.getElementById("mainImage");
        var container = document.getElementsByClassName("container_img_Product")[0];
        let close = document.getElementById("close_Container")
        mainImage.addEventListener("click", ()=>{
            // console.log(mainImage)
            container.classList.add("container_img_Product_active");
        })
        
        document.addEventListener("click",(e)=>{
            
            if(e.target == container){
                
                return container.classList.remove("container_img_Product_active");   
            }
            
            
        });
        
        close.addEventListener("click",()=>{
            return container.classList.remove("container_img_Product_active");   
        })



    } 



    // vewport Image controls

    function ViewportImgControl(){

        const Images = [
            "./images/image-product-1.jpg",
            "./images/image-product-2.jpg",
            "./images/image-product-3.jpg",
            "./images/image-product-4.jpg",
        ]
        const displayedImage = document.getElementById("displayed_image");
        const next = document.getElementsByClassName("next-btn")[0];
        const previous = document.getElementsByClassName("previous-btn")[0];
        const imageContainer = document.getElementsByClassName("imgCategories")[1]
        // const images = document.querySelectorAll(".image-product-large");

  
        var currentIndex = 0;

        function UpdateDisplayedImage(){
            displayedImage.src = Images[currentIndex]
        }

        next.addEventListener("click", () =>{
            currentIndex ++;
            if(currentIndex >= Images.length){
                currentIndex = 0;
            }


            UpdateDisplayedImage();
        })

        previous.addEventListener("click",()=>{
            currentIndex --;
            if(currentIndex < 0){
                currentIndex = Images.length - 1;
            }
            UpdateDisplayedImage()
        })

        UpdateDisplayedImage()

    }

    ViewportImgControl();


    function ViewportImgControlMobile(){
        const Images = [
            "./images/image-product-1.jpg",
            "./images/image-product-2.jpg",
            "./images/image-product-3.jpg",
            "./images/image-product-4.jpg",
        ]

        const imageviewport = document.getElementById("mainImage")
        const btnNext = document.getElementById("mobilebtnNext");
        const btnPrevious = document.getElementById("mobilebtnPrevious");
        
        var currentIndex = 0;

        function UpdateDisplayedImage(){
            imageviewport.src = Images[currentIndex]
        }
        
    
        btnNext.addEventListener("click",()=>{
            currentIndex ++;

            if(currentIndex >= Images.length ){
                currentIndex = 0;
            }

            UpdateDisplayedImage()
            
        });

        btnPrevious.addEventListener("click",()=>{
            currentIndex --;
            if(currentIndex < 0){
                currentIndex = Images.length - 1;
            }
            UpdateDisplayedImage()
        })
    }
    ViewportImgControlMobile()


    // function to calculate the number of the products and multiplay with product's price and find a new Price.

    function calculateQuanti(){
       let quant = document.getElementById("resultNumber").value;
         let result = quant * 125;
         if(quant > 0){
             createContainer(quant, result)
             counterProduc();
         }

         

    }

    // ///////////////////////////////////


    // function to create a container in the list of the cart

    function createContainer(quant, newPrice){

        var container = document.getElementById("cardProductinfo");

        var cardHTML = `<div id="info">
                            <div id="imgProd">
                                <img src="./images/image-product-1-thumbnail.jpg" alt="">
                            </div>
                            <div id="textInfo">
                                <p id="prodTitle">Fall Limited Edition Sneakers</p>
                                    <div id="infoPrices">
                                    <p id="prodPrice">$125.00</p>
                                    <p id="quantities">x ${quant}</p>
                                    <p id="newProdPice">$${newPrice}.00</p>
                                    <svg class="delete" width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
                                </div>
                            </div>
                        </div>
    <button type="button" id="checkoutBtn">Checkout</button>`


   
        // A string writed: "Your cart is empty".
    var cartTitle = document.getElementById("string");
        cartTitle.style.display = "none";

    var cardcontainer = document.createElement("div");
        cardcontainer.innerHTML = cardHTML;
    

    
        var container_Div = document.createElement("div");

        container_Div.appendChild(cardcontainer);

        // appen the container_div to main container.
        container.appendChild(container_Div);

        let deletebtn = container_Div.querySelector(".delete");

        deletebtn.addEventListener("click", () => {
            container.removeChild(container_Div);
            // Check if the main container is empty and show the "Your cart is empty" message if needed
            if (!container.hasChildNodes(container_Div)) {
                cartTitle.style.display = "flex";
            }
      
        })





    }






    // ///////////////////////////////////

    // Event click to active the functions


    function addToCart(){
        calculateQuanti()
     
    }

    // ////////////////////////////////
    



    function Cart(){
        let carticon = document.getElementById("cartIcon")
        
        const viewportWidth = window.innerWidth;
        const viewportheight = window.innerHeight;
        carticon.addEventListener("click", ()=>{
            
            if(viewportWidth <= 1366 && viewportWidth >= 951){
                let cartContainer = document.getElementsByClassName("cartContainer")[0]
                cartContainer.classList.toggle("cartAppers")
                
                
            }else if(viewportWidth <= 950 && viewportWidth >= 691){
                let cartContainer = document.getElementsByClassName("cartContainer")[0]
                cartContainer.classList.toggle("cartAppers")
            }else if(viewportWidth <= 690 && viewportWidth >= 501){
                let cartContainer = document.getElementsByClassName("cartContainer")[0]
                cartContainer.classList.toggle("cartAppers")
                
            }else if(viewportWidth <= 500 && viewportWidth >= 431){
                let cartContainer = document.getElementsByClassName("cartContainer")[0]
                cartContainer.classList.toggle("cartAppers")
                
            }else if(viewportWidth <= 430){
                let cartContainer = document.getElementsByClassName("cartContainer")[0]
                cartContainer.classList.toggle("cartAppers")
                
            }

            const counter = document.getElementById("productCounter");
            counter.style.display = "none"
            const counterValuestring = counter.value;
            let counterValueNumber = parseInt(counterValuestring);
    
            counterValueNumber = 0;
            counter.value = counterValueNumber;
        })



    }

    Cart()


    function counterProduc(){
        
        const counter = document.getElementById("productCounter");
        counter.style.display = "flex"
        const counterValuestring = counter.value;
        let counterValueNumber = parseInt(counterValuestring);

        counterValueNumber ++;
        counter.value = counterValueNumber;

    }





    function Menu_Mobile_Btn(){
       
        var MenuMobile = document.getElementsByClassName("menu_Mobile_Container")[0]
        MenuMobile.classList.add("menu_Mobile_Appears")

        let btn_Close  = document.querySelector("#btn_Close");
        btn_Close.addEventListener("click",()=>{
            MenuMobile.classList.remove("menu_Mobile_Appears");
          
        })


    }


