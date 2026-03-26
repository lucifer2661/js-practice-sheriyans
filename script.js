function createbiscuits(name, price, qty, company, category){
  this.name=name;
  this.price=price;
  this.qty=qty;
  this.company=company;
  this.category=category;
}
createbiscuits.prototype.display=function(){  
  console.log("Name: " + this.name);
  console.log("Price: " + this.price);
  console.log("Quantity: " + this.qty);
  console.log("Company: " + this.company);
  console.log("Category: " + this.category);
}

let biscuit1 = new createbiscuits("parleg", 10, 100, "parleg", "cream");

class Createpencil{
  constructor(name, price, qty, company, category,color){
    this.name=name;
    this.price=price;
    this.qty=qty;
    this.company=company;
    this.category=category;
    this.color=color;
    
  }
  write(text){
    let h1=document.createElement("h1");
    h1.textContent=text;
    h1.style.color= this.color;
    document.body.appendChild(h1);
  }
}

let p1 = new Createpencil("natraj", 5, 50, "natraj", "color pencil", "red");

