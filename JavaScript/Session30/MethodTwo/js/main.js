async function getData() {
  let res = await fetch(
    "https://forkify-api.jonas.io/api/v2/recipes?search=pizza",
  );
  let data = await res.json();
  let shop = data.data.recipes;
  console.log(data);

  let basket = "";
  for (let i = 0; i < shop.length; i++) {
    let cartoona = ` <div class="md:col-4 text-center mb-10">
          <img src=${shop[i].image_url} class="w-100" alt="picture" style="height: 350px " />
          <h4>${shop[i].title}</h4>
          <h6>${shop[i].publisher}</h6>
        </div>`;

    basket += cartoona;
  }
  document.querySelector(".test").innerHTML = basket;
}

getData();
