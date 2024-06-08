# Counter Program

This project is a simple web-based counter application. It allows users to increase, decrease, or reset a numerical counter displayed on the webpage. The project consists of three primary files: `index.html`, `style.css`, and `script.js`.

## Table of Contents
1. [Getting Started](#getting-started)
2. [Usage](#usage)
3. [Files](#files)
4. [Customization](#customization)

## Getting Started

To use this application, you only need a web browser. Simply open the `index.html` file in your browser to see and use the counter.

## Usage

- **Increase**: Click the "Increase" button to increment the counter by 1.
- **Decrease**: Click the "Decrease" button to decrement the counter by 1.
- **Reset**: Click the "Reset" button to set the counter back to 0.

## Files

1. **index.html**
    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      <title>Counter Program</title>
      <link href="style.css" rel="stylesheet" type="text/css" />
    </head>
    <body>
    <label id="counterLbl">0</label>
    <div class="containerBtn">
      <button class="buttons" id="decreaseBtn">Decrease</button>
      <button class="buttons" id="resetBtn">Reset</button>
      <button class="buttons" id="increaseBtn">Increase</button>
    </div>
    <script src="script.js"></script>
    </body>
    </html>
    ```

2. **style.css**
    ```css
    html {
        height: 100%;
        width: 100%;
    }
    
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    #counterLbl {
        display: block;
        text-align: center;
        font-size: 8em;
        font-family: Helvetica;
        margin-top: 20px;
    }
    
    .containerBtn {
        text-align: center;
    }
    
    .buttons {
        font-size: 2.5em;
        padding: 10px;
        margin-top: 40px;
        margin-left: 10px;
        color: white;
        background-color: #265f82;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        transition: background-color 0.25s;
    }
    
    .buttons:hover {
        background-color: #063451;
    }
    ```

3. **script.js**
    ```javascript
    // COUNTER PROGRAM
    
    const counterLbl = document.getElementById("counterLbl");
    const decreaseBtn = document.getElementById("decreaseBtn");
    const resetBtn = document.getElementById("resetBtn");
    const increaseBtn = document.getElementById("increaseBtn");
    let counter = 0;
    
    document.getElementById("decreaseBtn").onclick = function() {
      counter--;
      document.getElementById("counterLbl").textContent = counter;
    }
    
    document.getElementById("resetBtn").onclick = function() {
      counter = 0;
      document.getElementById("counterLbl").textContent = counter;
    }
    
    document.getElementById("increaseBtn").onclick = function() {
      counter++;
      document.getElementById("counterLbl").textContent = counter;
    }
    ```

## Customization

To customize the counter application, you can modify the following:

- **Appearance**: Edit the `style.css` file to change the look and feel of the counter and buttons.
- **Functionality**: Edit the `script.js` file to add more features or change the behavior of the existing buttons. For example, you could add a new button that doubles the current counter value.
