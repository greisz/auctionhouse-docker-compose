'use strict';

const loadData = () => {

  fetch('http://localhost:80/api/items')
    .then(response => response.json())
    .then(myJson => {
      for (let i = 0; myJson.length > i; i++) {
        const node = document.createElement("LI");
        const textnode = document.createTextNode(`${myJson[i].title} (highest bid: ${myJson[i].highestBid}, ${myJson[i].highestBidderName})`);
        node.appendChild(textnode);
        document.querySelector("ul").appendChild(node);

        const option = document.createElement("option");
        option.text = `${myJson[i].title}`;
        option.value = `${myJson[i].item_ID}`;
        const select = document.querySelector("select");
        select.appendChild(option);
      }

    })
}

window.onload = loadData;

const button = document.querySelector("button");
button.addEventListener('click', (event) => {
  const selectvalue = document.querySelector("select").value
  const p = document.querySelector("p");
  event.preventDefault();
  fetch(`http://localhost:80/api/items/${selectvalue}/bids`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: document.querySelectorAll("input")[0].value,
      amount: document.querySelectorAll("input")[1].value
    }),
  })
    .then(response => response.json())
    .then(data => {
      p.innerHTML = data.message;
      if (data.message == "Successful!") {
        document.querySelector("form").reset();
        document.querySelector("ul").innerHTML = "";
        loadData();
      }
    });

})
