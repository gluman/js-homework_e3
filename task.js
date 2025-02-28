document.addEventListener('DOMContentLoaded', function() {
    const cartProducts = document.querySelector('.cart__products');
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const quantityValue = product.querySelector('.product__quantity-value');
        const decButton = product.querySelector('.product__quantity-control_dec');
        const incButton = product.querySelector('.product__quantity-control_inc');
        const addButton = product.querySelector('.product__add');
        const productId = product.getAttribute('data-id');
        const productImage = product.querySelector('.product__image').src;

        decButton.addEventListener('click', () => {
            let value = parseInt(quantityValue.textContent);
            if (value > 1) {
                value--;
                quantityValue.textContent = value;
            }
        });

        incButton.addEventListener('click', () => {
            let value = parseInt(quantityValue.textContent);
            value++;
            quantityValue.textContent = value;
        });

        addButton.addEventListener('click', () => {
            const quantity = parseInt(quantityValue.textContent);
            const existingCartProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);

            if (existingCartProduct) {
                const cartProductCount = existingCartProduct.querySelector('.cart__product-count');
                const currentCount = parseInt(cartProductCount.textContent);
                cartProductCount.textContent = currentCount + quantity;
            } else {
                const cartProduct = document.createElement('div');
                cartProduct.classList.add('cart__product');
                cartProduct.setAttribute('data-id', productId);

                const cartProductImage = document.createElement('img');
                cartProductImage.classList.add('cart__product-image');
                cartProductImage.src = productImage;

                const cartProductCount = document.createElement('div');
                cartProductCount.classList.add('cart__product-count');
                cartProductCount.textContent = quantity;

                cartProduct.appendChild(cartProductImage);
                cartProduct.appendChild(cartProductCount);
                cartProducts.appendChild(cartProduct);
            }
        });
    });
});