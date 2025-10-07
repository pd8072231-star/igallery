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
        <title>Gallery</title>
        <link rel="stylesheet" href="style.css">
        <script src="image.js"></script>
    </head>
    <body>
        <h3>GALLERY - P.Dharshini-25010127</h3>
        <div class="gallery">
            <div class="galleryitem">
                <img class="zoom" src="dharshini.jpg" onmouseover="mousein()" onmouseout="mouseout()" id="image">
            </div>
            <div class="galleryitem">
                <img class="zoom" src="FARMERSAPP.png" onmouseover="mousein()" onmouseout="mouseout()" id="image">
            </div>
            <div class="galleryitem">
                <img class="zoom" src="Screenshot (65).png" onmouseover="mousein()" onmouseout="mouseout()" id="image">
            </div>
            <div class="galleryitem">
                <img class="zoom" src="Screenshot (139).png" onmouseover="mousein()" onmouseout="mouseout()" id="image">
            </div>
            <div class="galleryitem">
                <img class="zoom" src="Screenshot (191).png" onmouseover="mousein()" onmouseout="mouseout()" id="image">
            </div>
        </div>
        <footer class="copyrights">
            &copy;P.Dharshini-25010127
        </footer>
    </body>
</html>

style.css
body {
    background-color: goldenrod;
    text-align: center;
    margin-top: 50px;
}

.gallery {
    display: flex;
    gap: 10px;
    padding-top: 50px;
    justify-content: center;;
}

.galleryitem {
    cursor: pointer;
    text-align: center;
    width: 200px;
    padding: 20px;
}
.galleryitem img {
    width: 230px;
    height: 300px;
}

.copyrights{
    width: 1510px;
    height: 20px;
    background-color:cyan;
    text-align: center;
    top: 130px;
    left: -20px;
    position: relative;
}

image.js
function mousein()
{
    document.getElementById("image").style.width="250";
    document.getElementById("image").style.height="350";
}

function mouseout()
{
    document.getElementById("image").style.width="230";
    document.getElementById("image").style.height="300";
}

```
## OUTPUT:
![alt text](<Screenshot (219).png>)
![alt text](<Screenshot (220).png>)


## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
