// Check if the device is mobile
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (isMobile) {
  // If mobile, remove the mousemove event listener
  document.removeEventListener("mousemove", handleMouseMove);  

} else {
  // If not mobile, add the mousemove event listener
  document.addEventListener("mousemove", handleMouseMove);
}

document.body.style.backgroundImage = "url('bg.png')"; 
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
document.body.style.backgroundImage = "url('bg.png')";

function handleMouseMove(event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const bg = document.body.style.backgroundImage;

  const posX = mouseX / window.innerWidth * 100;
  const posY = mouseY / window.innerHeight * 100;

  const invertedPosX = 100 - posX;
  const invertedPosY = 100 - posY;

  document.body.style.backgroundImage = bg;
  document.body.style.backgroundPosition = `${invertedPosX}% ${invertedPosY}%`;
}
let mouseX = 0;
let mouseY = 0;