menu_list_array = ["Veg Margherita Pizza",
                   "Chicken Tandoori Pizza",
                   "Veg Supreme Ultra cheese Pizza",
                   "Paneer Tikka Pizza",
                   "Sausage Topping Cheese Corn Pizza",
                   "Ultra Deluxe Coding Java script Pizza",];

function getmenu(){
var htmldata;
htmldata = "<ol class ='menulist'>"
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;i++){
   htmldata = htmldata + '<li>' + menu_list_array[i] + '</li>'
}
htmldata = htmldata +"</ol>"
document.getElementById("display_addedmenu").innerHTML =  htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
add_item();

}

function add_top(){
var item = document.getElementById("add_item").value;
menu_list_array.push(item);
add_item();
}