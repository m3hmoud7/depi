function getData() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let result = this.responseText;
      let data = JSON.parse(result);
      console.log(data);

      let basket = "";
      for (let i = 0; i < data.length; i++) {
        let cartoona = ` <div class="md:col-4">
          <img src=${data[i].url} class="w-100" alt="picture" />
          <h4>${data[i].title}</h4>
          <h6>${data[i].id}</h6>
        </div>`;

        basket += cartoona;
      }
      document.querySelector(".test").innerHTML = basket;
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/photos", true);
  xhttp.send();
}

getData();
