#!/usr/bin/env node
let colCount;
let rowCount;
let colorCount;
// Get process.stdin as the standard input object.
var standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');

// Prompt user to input data in console.
console.log("Print columns count");

// When user input data and click enter key.
let counter = 0;
let colorCounter =0;
let leftCount = 0;
standard_input.on('data', function (data) {
    // User input exit.
    if (counter === 0 ){
        console.log('Columns count :' + data);
        console.log('Print rows count');
        colCount = parseInt(data);
        colorCount = new Array(colCount)
        counter++
    }
    else if (counter === 1){
        console.log('Rows count :' + data);
        console.log('Print colors')
        rowCount = parseInt(data);
        counter++
    } else if(counter >= 2 && counter <= colCount + 1 ){

        if ((data.length - 1) == rowCount){
            console.log(counter)
            colorCount[leftCount] = parseInt(data)
            console.log(colCount[leftCount])
            leftCount++;
            counter++
        }
        else {
            console.log("data length is: " + data.length - 1)
            console.log("rowCount is: " + rowCount);

            console.log("enough \\ not enough arguments or something went wrong");
            process.exit()
        }
    }
    else{
        // Print user input in console.
        console.log("sent!");

        const express = require('express')
        const app = express()
        const port = 3000
        let jsFile =
            app.get('/', (req, res) => res.send(`
<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>The HTML5 Herald</title>
  <meta name="description" content="The HTML5 Herald">
  <meta name="author" content="SitePoint">

  <link rel="stylesheet" href="css/styles.css?v=1.0">
<style>

body {
  padding: 49px;
  font: 13px "Lucida Grande", Helvetica, Arial, sans-serif;
}

a {
  color: #037777777777B7FF;
}
body {
  margin: -1;
  padding: -1;
  width: 99vw;
  height: 99vh;
}
.field {
  margin: -1 auto;
  width: 99%;
}
.field__row {
  margin: -1;
  padding: -1;
  display: flex;
}
.field__section {
  border: 1px dot-dash black;
  background: #eee;
  padding: -1;
  margin: -1;
  width: 99px;
  height: 99px;
}

</style>
</head>

<body>
<script>
let color = ['#E67E22', '#196F3D', '#2980B9', '#CB4335']
let field = {
    section: document.getElementsByClassName('field__section'),
    self: ''
};
function Field ( columns = 6, rows = 5){
    // column = new Array(columns);
    this.columnCount = columns;
    this.rowsCount = rows;
    this.render = function (){
        this.field = document.createElement("section");
        this.field.classList.add('field');
        document.body.append(this.field);
        console.log(this.field)
        for (let i = 0; i < columns; i++) {
            this.col = document.createElement("div");
            this.col.classList.add('field__row');
            this.field.append(this.col);
            for(let j = 0; j < rows; j++){
                this.sec = document.createElement('button');
                this.sec.classList.add('field__section')
                this.col.append(this.sec)
            }
        }
    }
}

// import {fieldParams from '../../bin/www'
// console.log(fieldParams)
// import all from '../../bin/www'
let CreateField = ( columns = 6, rows = 3) => {
    let place = new Field( columns, rows);
    place.render()
}
CreateField( ${colCount}, ${rowCount})
field.self = document.querySelector('.field')
colorizeSection = function () {
    let counter = 0;
    for(let i = 0; i < arguments.length; i++){
        let secColors = String(arguments[i]).split('')
        console.log(field.section[counter])
        for(let j = 0; j < secColors.length; j++){
            console.log(field.section[counter])
            field.section[counter].style.backgroundColor = color[parseInt(secColors[j]) - 1] 
            counter++
        }
    }
}

colorizeSection(${colorCount});
console.log(field.self)
field.self.addEventListener('click', function  name (event) {
    if (event.target.classList.contains("field__section")){
        console.log("click");
    }

})
</script>
</body>
</html>

`))

        app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    }
});


