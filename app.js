
color = "red"
text = "Sample Text"
total_amount = 0;

document.getElementById("div-lists").innerHTML = "No Shirts Added"; 


document.getElementById("red").addEventListener('click', () => {
   context.fillStyle = 'red';
    context.fill();
    color = "red"
})
document.getElementById("blue").addEventListener('click', () => {
    context.fillStyle = 'blue';
    context.fill();
    color = "blue"
})
document.getElementById("yellow").addEventListener('click', () => {
    context.fillStyle = 'yellow';
    context.fill();
    color = "yellow"
})
document.getElementById("green").addEventListener('click', () => {
    context.fillStyle = 'green';
    context.fill();
    color = "green"
})


document.getElementById('shirt-text-button').addEventListener('click', (e) => {
    document.getElementById('tshirt-text').innerHTML = document.getElementById('shirt-text').value
    text = document.getElementById('shirt-text').value

})

document.getElementById("Cal_price").addEventListener('click' , ()=>{
    document.getElementById("price").innerHTML = document.getElementById('number').value * 4 + '£';
});
document.getElementById('submit').addEventListener('click', () => {
    if (document.getElementById('number').value == 0) {
        document.getElementById('error-message').innerHTML = "At least 1 shirt must be ordered!"
    }
    else {
        document.getElementById('error-message').innerHTML = ""
        alert('Order Submitted Successfully!!\nSelected Color : ' + color + "\nShirt Text : " + text + "\nNumber of shirts : " + document.getElementById('number').value + "\nTotal Amount : £ " + document.getElementById('number').value * 4)
        document.getElementById("div-lists").innerHTML = "<h2>List of shirts</h2>" ;
        appendListItem();
        total_amount += document.getElementById('number').value * 4;
        document.getElementById('total-cost').innerHTML = "Total Cost  = " + total_amount;

    }

})


function appendListItem() {

    var div_cost = document.createElement("div");
    var div_value = document.createElement("div");
    var div_txt = document.createElement("div");
    var div_color = document.createElement("div");
    var div_list_details = document.createElement("div");

    div_color.appendChild(document.createTextNode('color: ' + color));
    div_txt.appendChild(document.createTextNode('slang text : ' + text));
    div_value.appendChild(document.createTextNode('amount : ' + document.getElementById('number').value));
    div_cost.appendChild(document.createTextNode('cost : ' + document.getElementById('number').value * 4));

    div_list_details.classList.add("li-details");
    div_list_details.appendChild(div_color);
    div_list_details.appendChild(div_txt);
    div_list_details.appendChild(div_value);
    div_list_details.appendChild(div_cost);

    var strong_text = document.createElement("strong");
    var div_li_txt = document.createElement("div");
    var small_txt = document.createElement("small");


    div_li_txt.classList.add("li-text");
    small_txt.appendChild(document.createTextNode(text));
    div_li_txt.appendChild(small_txt);
    strong_text.appendChild(div_li_txt);

    var li_img = document.createElement("img");
    li_img.setAttribute('src', 'Tshirt.png');
    li_img.setAttribute('width', '100px');
    li_img.setAttribute('height', '100px');
    li_img.setAttribute('style', 'background-color: ' + color);
    li_img.classList.add('li-img');


    var node = document.createElement("li");
    node.classList.add("li-item");
    node.appendChild(li_img);
    node.appendChild(strong_text);
    node.appendChild(div_list_details);

    document.getElementById("lists").appendChild(node);
    document.getElementById("lists").appendChild(document.createElement("hr"));
}