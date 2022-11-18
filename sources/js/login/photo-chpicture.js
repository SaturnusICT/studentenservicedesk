function container_login_photo_chpicture() 
{
    var yourImages = [
        "main.png",
        "1.png",
        "2.png",
        "3.png",
        "4.png",
	"htiler.png"
    ];
    var img = document.getElementById("container-login-photo-img");
    img.addEventListener("click", function() {
        console.log(this.src = "sources/afb/pictures/login/" + yourImages[Math.floor(Math.random() * yourImages.length)]);
    }); 
}

