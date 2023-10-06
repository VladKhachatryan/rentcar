const cars = [
  {
    name: "Hyundai Elantra ",
    imageSrc: "./img/sedan/hyundai-elantra.jpg",
    price: 25000,
    year: 2011,
    color: "Grey",
    engine: "1.8",
  },
  {
    name: "BMW M5",
    imageSrc: "./img/sedan/bmw-f90.jpg",
    price: 40000,
    year: 2010,
    color: "Black",
    engine: "3.2",
  },
];

function calc(carId) {
  const price = carId.price;
  const day = +carId.card.querySelector(".day").value;
  const sumD = carId.card.querySelector(".sum");
  const sellD = carId.card.querySelector(".sell");
  const resultD = carId.card.querySelector(".result");
  const sum = day * price;
  let sell = 0;
  let result = 0;

  if (day >= 7) {
    sell = (sum / 100) * 10;
  } else if (day >= 3) {
    sell = (sum / 100) * 5;
  }

  result = sum - sell;

  sumD.innerHTML = sum;
  sellD.innerHTML = sell;
  resultD.innerHTML = result;

  return result;
}

function generateCarCard(car, index) {
  const cardHtml = `
      <div class="card">
        <img src="${car.imageSrc}" class="card-img-top" alt="${car.name}" />
        <div class="card-body">
          <h5 class="card-title">${car.name}</h5>
          <span class="text-danger">One day <span class="price">${car.price}</span> ֏</span>
          <ul class="list-group mb-2 mt-2">
            <li class="list-group-item">Year ${car.year}</li>
            <li class="list-group-item">Color - ${car.color}</li>
            <li class="list-group-item">Engine - ${car.engine}</li>
          </ul>
          <div class="input-group mb-3">
            <input
              type="number"
              class="form-control day"
              value="1"
              min="1"
              placeholder="Or"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-success"
                type="button"
                onclick="calc(cars[${index}])"
              >
                Calc
              </button>
            </div>
          </div>
          <hr>
          <div class="result-details">
            <h5>Price List</h5>
            <p class="mb-0">Sum: <span class="sum text-danger">${car.price}</span> ֏</p>
            <p class="mb-0">Sell: <span class="sell text-warning">0</span></p>
            <p class="mb-0">Result: <span class="result text-success">${car.price}</span> ֏</p>
          </div>
        </div>
      </div>
  `;

  return cardHtml;
}

const carContainer = document.getElementById("carContainer");

cars.forEach((car, index) => {
  car.card = document.createElement("div");
  car.card.classList.add("col-6", "col-md-3", "mb-3");
  car.card.innerHTML = generateCarCard(car, index);
  carContainer.appendChild(car.card);
});
