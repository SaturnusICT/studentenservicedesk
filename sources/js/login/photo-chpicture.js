function container_login_photo_chpicture() 
{
    var yourImages = [
        "main.png",
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
        "7.jpg",
        "8.jpg"
    ];
    var img = document.getElementById("container-login-photo-img");
    img.addEventListener("click", function() {
        console.log(this.src = "sources/afb/pictures/login/" + yourImages[Math.floor(Math.random() * yourImages.length)]);
    }); 
}

