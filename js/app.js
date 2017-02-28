


var items = [{id:1, product: "Finger Toothbrush", description: "A helping hand to a nicer smile.", price: 1.11}, {id:2, product: "Barry Manilow's Greatest Hits Collection Vol 1", description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.", price: 39.57}, {id:3, product: "Ramen Oreos", description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.", price: 8.88}, {id:4, product: "Woof Washer 360", description: "Wash your dirty stinky mutt in minutes! Water and dog not included." , price: 9.29}, {id:5, product: "Sauna Pants", description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.", price: 2.33}, {id:6, product: "Hug Me Pillow", description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.", price: 599.99}];

var cart = [];
		
function getItemsById(id){
	for (var i=0; i<items.length; i++){
		if(items[i].id === id)
			return items[i];
	}
	return null;
}

function display() {
	var cartDisplay = document.getElementById("cart");
	var totalPrice = 0;
				
	if (cart.length === 0){
		cartDisplay.innerHTML = "<tr><td colspan=4>No items added to cart yet.</td></tr>";
		document.getElementById("totalPrice").innerHTML = "&dollar;" + totalPrice.toFixed(2);
		return;
	}
				
	cartDisplay.innerHTML = "";
				
	for(var i = 0; i < cart.length; i++){
		var row = "<td>"+(i + 1)+"</td> <td>"+cart[i].product+"</td> <td>&dollar;"+cart[i].price+"</td> <td><button onclick=\"del("+ i +")\">Delete</button></td>";
		var descHide = "<p>" + cart[i].description; + "</p>";
		cartDisplay.innerHTML += "<tr>" + row + "</tr>" 

					
		totalPrice += cart[i].price;
	}
				
	document.getElementById("totalPrice").innerHTML = "&dollar;" + totalPrice.toFixed(2);
			}
			
			
function add(id) {
	cart.push(getItemsById(id));
				
		display();
	}

			
function del(index){
	cart.splice(index, 1);
				
	display();
	}
			
function init() {
	var itemsDisplay = document.getElementById("items");
				
	itemsDisplay.innerHTML = "";
				
	for(var i = 0; i < items.length; i++){
	// var row = "<td>" + (i + 1) + "</td> <td>" + "<h3 class=\"namePinner\">" + items[i].product + "</h3> <h5 class=\"descInner\">"  + items[i].description + " </h5> <td>&dollar;"+items[i].price+"</td> <td><button onclick=\"add(" + items[i].id + " )\">Add</button></td>";

		var row = "<td>"+(i + 1)+"</td> <td> <h2 class=\"nameP\" onclick=\"showDesc(" + ")\">" +items[i].product + "<p class=\"desc\">" + items[i].description + "</p>" + "</td> <td>&dollar;"+items[i].price+"</td> <td><button onclick=\"add(" + items[i].id + " )\">Add</button></td>";
		itemsDisplay.innerHTML += "<tr>" + row + "</tr>" ;
	 }
	display();
}


var clickName = document.getElementsByClassName("nameP");
for (var i=0; i<clickName.length; i++){
	clickName[i].addEventListener("click", showDesc);
}

function showDesc (){
	var x = document.querySelectorAll(".desc")[0];
	if(x.style.display === "none"){
		x.style.display = "block";
	}else{
		x.style.display = "none";
	}
}





// function showDesc (){
// 	var x = document.getElementsByClassName("desc");
// 		for (var i=0; i<x.length; i++){
// 		if(x[i].style.display === "none"){
// 		x[i].style.display = "block";
// 	}else{
// 		x[i].style.display = "none";
// 	}
// }
// }


