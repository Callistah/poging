/* schrijf hier al je JS code */
let thumbNailsSrcArray = [];
let thumbNailsIdArray = [];
let id = 0;

const setup = () => {

    fillArrayThumbnailsSrc();
    fillArrayThumbnailsId();
    initialize();

    // als klikt op thumbnail dan wordt functie  clickThumbnail uitgevoerd-------------------------------
    let thumbNails = document.getElementsByClassName("thumbnail");
    for (let i = 0; i< thumbNails.length ; i++){
        thumbNails[i].addEventListener('click', clickThumbnail);
    }
    //als klikt op nav links of rechts wordt bijhorende actie uitgevoerd---------------------------------
    let volgende = document.getElementById("navRechts");
    volgende.addEventListener('click', goRight);
    let vorige = document.getElementById("navLinks");
    vorige.addEventListener('click', goLeft);
};

const goRight = () => {                                         //naar volgende foto ---------------------
    let main = document.getElementById("mainImage");
    id = parseInt(main.getAttribute("data-id"));
    if (id> thumbNailsSrcArray.length-1) {
        id = 0;
    }
    changeMain();
};

const goLeft = () => {                                          //naar vorige foto ------------------------
    let main = document.getElementById("mainImage");
    id = parseInt(main.getAttribute("data-id"));
    if(--id <= 0) {
        id = thumbNailsSrcArray.length-1;
    }
    else {
        id--;
    }
    changeMain();
};

const changeMain = () => {                                      //pas main aan als navigeert naar links of rechts-----
    let main = document.getElementById("mainImage");
    main.setAttribute("src", thumbNailsSrcArray[id]);
    main.setAttribute("data-id", thumbNailsIdArray[id]);
};

const clickThumbnail = (e) => {                             //pas main aan als klik op thumbnail -------------------
    let img = e.target;
    let src = img.getAttribute("src");
    let id = img.getAttribute("data-id");
    let main = document.getElementById("mainImage");
    main.setAttribute("src", src);
    main.setAttribute("data-id", id);
};

const initialize = () => {                                 //initialiseer main foto----------------------------
    let main = document.getElementById("mainImage");
    main.setAttribute("src", thumbNailsSrcArray[0]);
    main.setAttribute("data-id", "1");
    if (main.getAttribute("src") == null){
        main.style.backgroundColor = "black";
    }
};

const fillArrayThumbnailsSrc = () => {                    //vul array met sources van thumbnails----------------
    let thumbnails = document.getElementsByClassName("thumbnail");
    for (let i = 0 ; i < thumbnails.length ; i++) {
        let src = thumbnails[i].getAttribute("src");
        thumbNailsSrcArray.push(src);
    }
};

const fillArrayThumbnailsId = () => {                   //vul array met id van thumbnails------------------------
    let thumbnails = document.getElementsByClassName("thumbnail");
    for (let i = 0 ; i < thumbnails.length ; i++) {
        let src = thumbnails[i].getAttribute("data-id");
        thumbNailsIdArray.push(src);
    }
};

window.addEventListener('load', setup);