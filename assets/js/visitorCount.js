const countEl = document.getElementById('count');

updateVisitorCount();

function updateVisitorCount() {
  fetch('https://api.countapi.xyz/update/onnilukkarila.com/onni/?amount=1')
    .then((res) => res.json())
    .then((res) => {
      countEl.innerHTML = 'Website visits: ' + res.value;
    });
}
