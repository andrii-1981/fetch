(async function() {
  
  let rate = 1; 
  let currencies;
  const response = await fetch('api/products.json');
  const products = await response.json();
  renderProducts(products);

    // fetch('api/products.json')
    //   .then( response => response.json() )
    //   .then( products => renderProducts(products) );

    function renderProducts() {
        const productContainer = document.querySelector('.main-products__list');
        productContainer.innerHTML = '';
        for (const product of products) {
            productContainer.innerHTML += `
            <article class="product-card">
              <img
                class="product-card__image"
                src="${product.image}"
                alt="${product.title}"
              />
              <h3 class="product-card__h3">${product.title}</h3>
              <p class="product-card__description">${product.description}</p>
              <div class="product-card__buttons">
                <button class="product-card__buttons-info button button-card">
                  Info
                </button>
                <button class="product-card__buttons-buy button button-card">
                  Buy - ${(product.price * rate).toFixed(2)}
                </button>
              </div>
            </article>`;
        }
    }

    async function convertCurrency() {
      const convertTo = document.querySelector('.currency').value;
      if (!currencies) {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        currencies = await response.json();
      }
      rate = currencies.rates[convertTo];
      renderProducts();
    }

    document.querySelector('.convert-currency').addEventListener('click', convertCurrency);

})();