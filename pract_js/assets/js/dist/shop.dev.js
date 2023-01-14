"use strict";

// const CART = [
//   {
//     title: 'Bread',
//     qty: 3,
//     price: 12.30,
//     isBuy: false
//   },
//   {
//     title: 'Milk',
//     qty: 2,
//     price: 31.20,
//     isBuy: true
//   },
//   {
//     title: 'Beer',
//     qty: 10,
//     price: 34.50,
//     isBuy: true
//   },
//   {
//     title: 'Potato',
//     qty: 4,
//     price: 8.00,
//     isBuy: false
//   }
// ];
// // const cartActions = {
// //   add: function(){
// //     const title = document.getElementById("prodTitle").value.trim();
// //     const qty = parseInt(document.getElementById("prodQty").value);
// //     const price = parseFloat(document.getElementById("prodPrice").value);
// //     let isValid = true;
// //     if(title === ''){
// //       isValid = false;
// //       alert("Enter product title");
// //     }
// //     if(isNaN(qty) || qty <= 0){
// //       isValid = false;
// //       alert("Enter correct quantity value");
// //     }
// //     if(isNaN(price) || price <= 0){
// //       isValid = false;
// //       alert("Enter correct price value");
// //     }
// //     if(isValid){
// //       const findIndex = CART.findIndex((el)=>el.title === title);
// //       if(findIndex !== -1){
// //         const newQty = CART[findIndex].qty + qty;
// //         CART[findIndex].qty = newQty;
// //       } else {
// //         CART.push({
// //           title,
// //           qty,
// //           price,
// //           isBuy: false
// //         });
// //       }
// //       this.list();
// //       alert("Product successfully added");
// //       document.getElementById("prodTitle").value = '';
// //       document.getElementById("prodQty").value = '1';
// //       document.getElementById("prodPrice").value = '';
// //     }
// //   },
// //   delete: function(index){
// //     CART.splice(index, 1);
// //     this.list();
// //   },
// //   list: function (){
// //     let list = '';
// //     CART.forEach((prod, index)=>{
// //       const status = prod.isBuy
// //         ? '<span class="badge rounded-pill text-bg-success">yes</span>'
// //         : '<span class="badge rounded-pill text-bg-danger">no</span>'
// //       list += `
// //       <tr>
// //         <td>${index + 1}.</td>
// //         <td>${prod.title}</td>
// //         <td>${status}</td>
// //         <td>${prod.qty}</td>
// //         <td>${prod.price.toFixed(2)}</td>
// //         <td>${(prod.qty * prod.price).toFixed(2)}</td>
// //         <td>`;
// //         if(!prod.isBuy){
// //           list += `<button type="button" class="btn btn-info btn-sm" onclick="buyProduct(${index})">buy</button>
// //           <button type="button" class="btn btn-danger btn-sm" onclick="removeProduct(${index})">remove</button>`;
// //         }
// //         list += `</td>
// //       </tr>`;
// //     });
// //     document.getElementById("productTbody").innerHTML = list;
// //     this.total();
// //   },
// //   total: function(){
// //     total = CART.reduce((acc, el)=>{
// //       return acc + el.qty * el.price
// //     }, 0);
// //     document.getElementById("cartTotal").innerText = total.toFixed(2);
// //   },
// //   buy: function(index){
// //     CART[index].isBuy = true;
// //     this.list();
// //   }
// // }
// function addToCart(){
//   const title = document.getElementById("prodTitle").value.trim();
//   const qty = parseInt(document.getElementById("prodQty").value);
//   const price = parseFloat(document.getElementById("prodPrice").value);
//   let isValid = true;
//   if(title === ''){
//     isValid = false;
//     alert("Enter product title");
//   }
//   if(isNaN(qty) || qty <= 0){
//     isValid = false;
//     alert("Enter correct quantity value");
//   }
//   if(isNaN(price) || price <= 0){
//     isValid = false;
//     alert("Enter correct price value");
//   }
//   if(isValid){
//     const findIndex = CART.findIndex((el)=>el.title === title);
//     if(findIndex !== -1){
//       const newQty = CART[findIndex].qty + qty;
//       CART[findIndex].qty = newQty;
//     } else {
//       CART.push({
//         title,
//         qty,
//         price,
//         isBuy: false
//       });
//     }
//     viewProducts();
//     alert("Product successfully added");
//     document.getElementById("prodTitle").value = '';
//     document.getElementById("prodQty").value = '1';
//     document.getElementById("prodPrice").value = '';
//   }
// }
// function viewProducts(){
//   let list = '';
//   // CART.forEach((prod, index)=>{
//   //   const status = prod.isBuy
//   //     ? '<span class="badge rounded-pill text-bg-success">yes</span>'
//   //     : '<span class="badge rounded-pill text-bg-danger">no</span>'
//   //   list += `
//   //   <tr>
//   //     <td>${index + 1}.</td>
//   //     <td>${prod.title}</td>
//   //     <td>${status}</td>
//   //     <td>${prod.qty}</td>
//   //     <td>${prod.price.toFixed(2)}</td>
//   //     <td>${(prod.qty * prod.price).toFixed(2)}</td>
//   //     <td>`;
//   //     if(!prod.isBuy){
//   //       list += `<button type="button" class="btn btn-info btn-sm" onclick="buyProduct(${index})">buy</button>
//   //       <button type="button" class="btn btn-danger btn-sm" onclick="removeProduct(${index})">remove</button>`;
//   //     }
//   //     list += `</td>
//   //   </tr>`;
//   // });
//   for(let i=0;i<CART.length;i++){
//     if(!CART[i].isBuy)
//     const prod = CART[i];
//     list += `
//   //   <tr>
//   //     <td>${index + 1}.</td>
//   //     <td>${prod.title}</td>
//   //     <td>${status}</td>
//   //     <td>${prod.qty}</td>
//   //     <td>${prod.price.toFixed(2)}</td>
//   //     <td>${(prod.qty * prod.price).toFixed(2)}</td>
//   //     <td>`;
//        if(!prod.isBuy){
//          list += `<button type="button" class="btn btn-info btn-sm" onclick="buyProduct(${index})">buy</button>
//          <button type="button" class="btn btn-danger btn-sm" onclick="removeProduct(${index})">remove</button>`;
//        }
//        list += `</td>
//      </tr>`;
//   }
//   document.getElementById("productTbody").innerHTML = list;
//   calcTotal();
// }
// function buyProduct(index){
//   CART[index].isBuy = true;
//   viewProducts();
// }
// function removeProduct(index){
//   CART.splice(index, 1);
//   viewProducts();
// }
// function calcTotal(){
//   // let total = 0;
//   // for(let i=0;i<CART.length;i++){
//   //   total += CART[i].qty * CART[i].price;
//   // }
//   const total = CART.reduce((acc, el)=>{
//     return acc + el.qty * el.price
//   }, 0);
//   document.getElementById("cartTotal").innerText = total.toFixed(2);
// }
// viewProducts();
// function singleNumber() {
//   let num1 = parseInt(prompt("Enter you first number, '' "));
//   let num2 = parseInt(prompt("Enter you second number, '' "));
//   let  num3 = parseInt(prompt("Enter you third number, '' "));
//   const result = (num1 * 100) + (num2 * 10) + num3 ;
//   alert (`Число: ${result}`);
// }
// singleNumber();
// function singleNumber() {
//   let num1 = parseInt(prompt("Enter you first number: ")),
//     num2 = parseInt(prompt("Enter you second number: ")),
//     num3 = parseInt(prompt("Enter you third number: "));
//   const result = (num1 * 100) + (num2 * 10) + num3;
//   alert(`Трьохзначне число: ${result}`);
// }
// singleNumber();
var ob = {
  name: 'тест',
  go: function go() {
    return '"+this.name+"';
  }
};
alert(ob.go()); // function converter () {
//   const euro = 0.94;
//   const dollar = parseInt(prompt('Введіть долар:'));
//   const result = dollar * euro;
//   alert (`€: ${result}`);
// }
// function twoNumbers (number1, number2) {
//   debugger
//   number1 = parseInt(+document.getElementById('twoNumbers_number_1').value);
//   number2 = parseInt(+document.getElementById('twoNumbers_number_2').value);
//   let rez = 0;
//   rez = checkTwoNumbers (number1, number2);
//   document.getElementById('twoNumbers_rez').innerText = rez;
// }