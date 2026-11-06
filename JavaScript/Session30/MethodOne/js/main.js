fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((item) => {
    let data = item.products;
    let basket = "";
    for (let i = 0; i < data.length; i++) {
      let cartoona = ` <div class="md:col-4 text-center mb-10">
          <img src=${data[i].images[0]} class="w-100" alt="picture" style="height: 350px " />
          <h4>${data[i].title}</h4>
          <h6>${data[i].brand}</h6>
          <h6>${data[i].category}</h6>
          <h6>${data[i].rating}</h6>
          <h6>${data[i].price}</h6>
          <h6>${data[i].id}</h6>
        </div>`;

      basket += cartoona;
    }
    document.querySelector(".test").innerHTML = basket;
  });
