// // let color = ['#E67E22', '#196F3D', '#2980B9', '#CB4335']
// // let field = {
// //     section: document.getElementsByClassName('field__section'),
// //     self: ''
// // };
// // function Field (colors, columns = 6, rows = 5){
// //     // column = new Array(columns);
// //     this.columnCount = columns;
// //     this.rowsCount = rows;
// //     // row = new Array(rows);
// //     this.render = function (){
// //         this.field = document.createElement("section");
// //         this.field.classList.add('field');
// //         document.body.append(this.field);
// //         console.log(this.field)
// //         for (let i = 0; i < columns; i++) {
// //             this.col = document.createElement("div");
// //             this.col.classList.add('field__row');
// //             this.field.append(this.col);
// //             for(let j = 0; j < rows; j++){
// //                 this.sec = document.createElement('button');
// //                 this.sec.classList.add('field__section')
// //                 this.col.append(this.sec)
// //             }
// //         }
// //     }
// //
// // }
// //
// // // import {fieldParams from '../../bin/www'
// // // console.log(fieldParams)
// // // import all from '../../bin/www'
// // let CreateField = (colors, columns = 6, rows = 3) => {
// //     let place = new Field(colors, columns, rows);
// //     place.render()
// // }
// // CreateField()
// // field.self = document.querySelector('.field')
// // console.log(field.self)
// // field.self.addEventListener('click', function  name (event) {
// //     if (event.target.classList.contains("field__section")){
// //         console.log("click");
// //     }
// //
// // })
// let color = ['#E67E22', '#196F3D', '#2980B9', '#CB4335']
// let field = {
//     section: document.getElementsByClassName('field__section'),
//     self: ''
// };
// function Field ( columns = 6, rows = 5){
//     // column = new Array(columns);
//     this.columnCount = columns
//     this.rowsCount = rows;}
// this.render = function (){
//     this.field = document.createElement("section");
//     this.field.classList.add('field');
//     document.body.append(this.field);
//     console.log(this.field)
//     for (let i = 0; i < columns; i++) {
//         this.col = document.createElement("div");
//         this.col.classList.add('field__row');
//         this.field.append(this.col);
//         for(let j = 0; j < rows; j++){
//             this.sec = document.createElement('button');
//             this.sec.classList.add('field__section')
//             this.col.append(this.sec)
//         }
//     }
// }
//
//
// // import {fieldParams from '../../bin/www'
// // console.log(fieldParams)
// // import all from '../../bin/www'
// let CreateField = ( columns = 6, rows = 3) => {
//     let place = new Field( columns, rows);
//     place.render()
// }
// CreateField( ${colCount}, ${rowCount})
// field.self = document.querySelector('.field')
// colorizeSection = (${colorCount}){
//     for(let i = 0; i < arguments.length - 1; i++){
//         let secColors = arguments[i].split('')
//         console.log(secColors)
//     }
// }
// colorizeSection()
// console.log(field.self)
// field.self.addEventListener('click', function  name (event) {
//     if (event.target.classList.contains("field__section")){
//         console.log("click");
//     }
//
// })
// console.log("hello World")

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
CreateField(${colCount}, ${rowCount})
field.self = document.querySelector('.field')
colorizeSection = () => {
    for(let i = 0; i < arguments.length - 1; i++){
        let secColors = arguments[i].split('')
        console.log(secColors)
    }
}

colorizeSection(${colorCount});
console.log(field.self)
field.self.addEventListener('click', function  name (event) {
    if (event.target.classList.contains("field__section")){
        console.log("click");
    }

})
console.log("hello World")
