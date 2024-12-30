cart = {}

menu_items = document.querySelectorAll('.menu-item');
menu_items.forEach(item => {
    cart_buttoms = document.createElement('div');
    cart_buttoms.classList.add('cart-buttons');
    add_button = document.createElement('button');
    add_button.classList.add('add-to-cart');
    add_button.innerHTML = '+';
    remove_button = document.createElement('button');
    remove_button.classList.add('remove-from-cart');
    remove_button.innerHTML = '-';
    counter_button = document.createElement('button');
    counter_button.classList.add('.item-counter');
    counter_button.innerHTML = '0';
    counter_button.style.backgroundColor = 'white';
    counter_button.style.border = 'none';

    item.appendChild(cart_buttoms);
    cart_buttoms.appendChild(add_button);
    cart_buttoms.appendChild(counter_button);
    cart_buttoms.appendChild(remove_button);

    add_button.addEventListener('click', add_to_cart);
    remove_button.addEventListener('click', remove_from_cart);

});

function add_to_cart(e){
    // item = e.target.parentElement.parentElement;
    // item_name = item.querySelector('.menu-item .item-title').innerHTML;
    const menu_item = e.target.parentElement.parentElement;
    item_title = menu_item.querySelector(':scope .item-title').innerHTML;
    if (!cart[item_title]){
        cart[item_title] = 1;
        menu_item.classList.add('in-cart');
        
    } else {
        cart[item_title] += 1;
    }

    menu_item.querySelector(':scope .cart-buttons button:nth-child(2)').innerHTML = cart[item_title];
    
    // update_cart();
} 
function remove_from_cart(e){
    const menu_item = e.target.parentElement.parentElement;
    item_title = menu_item.querySelector(':scope .item-title').innerHTML;
    if (!cart[item_title]){
        return
    }

    cart[item_title] -= 1;
    if (cart[item_title] == 0){
        menu_item.classList.remove('in-cart');
    }
    menu_item.querySelector(':scope .cart-buttons button:nth-child(2)').innerHTML = cart[item_title];
    // update_cart();
}
function update_cart(){
    cart_list = Array.from(document.querySelectorAll('.in-cart'));
    
    // cart = Array.from(document.querySelector('.in-cart')).map(item => item.querySelector('.item-title').innerHTML);

    // cart_div = document.querySelector('.cart');
    // cart_div.innerHTML = '';
    // for (item in cart){
    //     item_div = document.createElement('div');
    //     item_div.classList.add('cart-item');
    //     item_div.innerHTML = item + ' x' + cart[item];
    //     cart_div.appendChild(item_div);
    // }
}