# Ex.08 Design of Interactive Image Gallery
## Date:07.10.2025

## AIM:
To design a web application for an inteactive image gallery with minimum five images.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM :
```
gallery.html

<html>
<head>
  
  
  <title>Interactive Image Gallery</title>

  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #e0e0e0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      flex-direction: column;
    }

    #gallery {
      display: flex;
      gap: 15px;
    }

    #gallery img {
      width: 180px;
      height: 180px;
      object-fit: cover;
      border-radius: 8px;
      cursor: pointer;
      transition: transform 0.3s ease;
    }

    #gallery img:hover {
      transform: scale(1.05);
    }

    
    #overlay {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      justify-content: center;
      align-items: center;
      z-index: 999;
      flex-direction: column;
    }

    #overlay img {
      max-width: 80%;
      max-height: 80%;
      border-radius: 10px;
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
    }

    #closeBtn {
      position: absolute;
      top: 20px;
      right: 30px;
      font-size: 40px;
      color: white;
      cursor: pointer;
    }

    .arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      font-size: 50px;
      color: white;
      cursor: pointer;
      user-select: none;
    }

    #leftArrow {
      left: 50px;
    }

    #rightArrow {
      right: 50px;
    }

    footer {
      position: absolute;
      right: 20px;
      bottom: 20px;
      font-size: 14px;
    }
  </style>
</head>

<body>

  <div id="gallery">
    <img src="dharshini.jpg" alt="Image 1">
    <img src="Screenshot (65).png" alt="Image 2">
    <img src="Screenshot (139).png" alt="Image 3">
    <img src="Screenshot (191).png" alt="Image 4">
    <img src="Screenshot (139).png" alt="Image 5">
  </div>

  <div id="overlay">
    <span id="closeBtn">&times;</span>
    <span id="leftArrow" class="arrow">&#10094;</span>
    <img id="overlayImg" src="" alt="Large view">
    <span id="rightArrow" class="arrow">&#10095;</span>
  </div>

  <footer>
    © Image Gallery | Designed by: <b>DHARSHINI .P</b>
  </footer>

  <script src="script.js"></script>
</body>
</html>

image.js
const images = document.querySelectorAll("#gallery img");
const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlayImg");
const closeBtn = document.getElementById("closeBtn");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showImage(currentIndex);
  });
});

function showImage(index) {
  overlayImg.src = images[index].src;
  overlay.style.display = "flex";
}


closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});


leftArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});


rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});


overlay.addEventListener("click", e => {
  if (e.target === overlay) {
    overlay.style.display = "none";
  }
});


document.addEventListener("keydown", e => {
  if (overlay.style.display === "flex") {
    if (e.key === "ArrowRight") rightArrow.click();
    if (e.key === "ArrowLeft") leftArrow.click();
    if (e.key === "Escape") overlay.style.display = "none";
  }
});
```
## OUTPUT:
![alt text](<Screenshot (265).png>)
![alt text](<Screenshot (264).png>)


## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
