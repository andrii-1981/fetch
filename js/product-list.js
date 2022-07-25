(function() {

    const products = [
        {
            id: "1",
            title: "Baby Yoda",
            description: "Baby Yoda Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro fuga autem possimus eveniet facere, non minus magnam obcaecati, tenetur recusandae, corporis itaque suscipit. Vero illo nulla asperiores laudantium tempore porro!",
            image: "img/baby-yoda.svg",
            price: 10.99
        },
        {
            id: "2",
            title: "Banana",
            description: "Banana Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro fuga autem possimus eveniet facere, non minus magnam obcaecati, tenetur recusandae, corporis itaque suscipit. Vero illo nulla asperiores laudantium tempore porro!",
            image: "img/banana.svg",
            price: 11.99
        },
        {
            id: "3",
            title: "Girl",
            description: "Girl Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro fuga autem possimus eveniet facere, non minus magnam obcaecati, tenetur recusandae, corporis itaque suscipit. Vero illo nulla asperiores laudantium tempore porro!",
            image: "img/girl.svg",
            price: 12.99
        },
        {
            id: "4",
            title: "Viking",
            description: "Viking Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro fuga autem possimus eveniet facere, non minus magnam obcaecati, tenetur recusandae, corporis itaque suscipit. Vero illo nulla asperiores laudantium tempore porro!",
            image: "img/viking.svg",
            price: 11.99
        }
    ];

    function renderProducts(products) {
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
                  Buy - ${product.price}
                </button>
              </div>
            </article>`;
        }
    }

    renderProducts(products);


})();