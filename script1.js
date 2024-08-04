document.body.style.backgroundImage = "url('logo.png')"; 
document.addEventListener("mousemove", function(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const bg = document.body.style.backgroundImage;

    const posX = mouseX / window.innerWidth * 100;
    const posY = mouseY / window.innerHeight * 100;

    const invertedPosX = 100 - posX;
    const invertedPosY = 100 - posY;

    document.body.style.backgroundImage = bg;
    document.body.style.backgroundPosition = `${invertedPosX}% ${invertedPosY}%`;
});