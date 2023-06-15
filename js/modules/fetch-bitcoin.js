export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((btc) => {
      const btcPreco = document.querySelector(target);

      btcPreco.innerText = (100 / btc.BRL.sell).toFixed(4);
    });
}
