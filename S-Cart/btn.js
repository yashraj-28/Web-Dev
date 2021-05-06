// show cart-overlay
(function(){
  const cart = document.getElementById("cart");
  const cartInfo = document.getElementById("cart-info");

  cartInfo.addEventListener('click',function(){
    cart.classList.toggle('show-cart');
    console.log(cart);
  });

})();

(function addCart(){
    const cartBtn = document.querySelectorAll('.store-item-icon');
    cartBtn.forEach(function(btn){
      btn.addEventListener('click',function(event){
       event.target.disabled = true;
        //console.log(event.target);
  
        if(event.target.parentElement.classList.contains('store-item-icon')){
          let fullPath = event.target.parentElement.parentElement.parentElement.parentElement.previousElementSibling.children[0].src; // image src path
  
          let pos = fullPath.indexOf("img") + 3;
          //console.log(pos);
          let partPath = fullPath.slice(pos);
          //console.log(partPath);
  
          const item = {};
          item.img = `img-cart${partPath}`;
          //console.log(item);
          let name = event.target.parentElement.previousElementSibling.textContent; // item name
          //console.log(name);
          item.name = name;
  
          let price =  event.target.parentElement.parentElement.nextElementSibling.children[0].textContent;// item price
          
          let finalPrice = price.slice(0).trim();
          //console.log(finalPrice);
          item.price = finalPrice;
  
          console.log(item);
  
          // create cart item mini
  
          const cartItem = document.createElement('div');
          cartItem.classList.add('cart-item','d-flex','justify-content-between','my-3');
          cartItem.innerHTML =`
          <img src="${item.img}" alt="" class="img-fluid rounded-circle" id="item-img">
          <div class="item-text">
            <p id="cart-item-title" class="mb-0">${item.name}</p>
            <span> <i class="fas fa-rupee-sign    "></i></span>
            <span id="cart-item-price" class="cart-item-price mb-0">${item.price}</span>
            
          </div>
          
          <a href="#" id="cart-item-remove" class="cart-item-remove">
            <i class="fa fa-trash" aria-hidden="true"></i></a>
        </div>`;
  
        // select cart
  
          const cart = document.getElementById('cart');
          const total = document.querySelector('.cart-total-container');
  
          cart.insertBefore(cartItem,total);
          alert('item added to cart');  
          showTotals();
          removeCart(); // remove cart element
          clearCart();
          
        }
      });
    });
    function showTotals(){
        //console.log('hi');
        const total = [];
        const items = document.querySelectorAll('.cart-item-price');
        items.forEach(function(item){
          total.push(parseInt(item.textContent));
        });
        //console.log(total);
    
        const totalMoney = total.reduce(function(total,item){
          total += item;
          return total;
        },0)
    
        //console.log(totalMoney);
    
        document.getElementById('cart-item-total').innerHTML = totalMoney; // total price
        document.querySelector('.item-count').innerHTML = total.length; // total no of items in cart
      }
    
      function removeCart(){
        const trashBtn = document.querySelectorAll('.cart-item-remove');
        trashBtn.forEach(function(tbtn){
          tbtn.addEventListener('click',function(tevent){
            //console.log('hey');
            tevent.target.parentElement.parentElement.remove();
            alert('item removed from cart');
            showTotals().totalMoney -= tevent.target.parentElement.children[1].children[2].textContent;
            //console.log(exp);
            
          })
        })
      };
    
      function clearCart(){
        const clearBtn = document.getElementById('clear-cart');
        item = document.querySelectorAll('.cart-item');
        clearBtn.addEventListener('click',function(){
          item.forEach(function(cevent){
            
            cevent.remove();
            document.getElementById('cart-item-total').innerHTML = 0;
        document.querySelector('.item-count').innerHTML = 0;
        // document.getElementById('cart').innerText= "Your Cart is Empty!"
          })
          
        })
        
        //alert('all items removed');
      };
    
      (function(){
        checkOut = document.getElementById('checkout-cart');
        //while(document.querySelector('.item-count').innerHTML=0){
        checkOut.addEventListener('click',function(){
          alert('Thanks for buying!');
          location.reload();
        });
      //}
      })();
    
     
    
    })();
    
   