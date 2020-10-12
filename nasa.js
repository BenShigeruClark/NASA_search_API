var response = null;
var images = null;

document.getElementsByTagName('button')[0].addEventListener('click', function(r) {
  getImage(document.getElementsByTagName('input')[0].value);
});

function getImage(img) {
  fetch('https://api.nasa.gov/planetary/apod?api_key=hKTS2rKnlMiDnbksjrChjifKbSG3DXiFi9eqdgkg')
  .then(function(r) {
    return r.json();
  })
  .then(function(j) {
    response = j;
    assignValues();
    console.log(j)
  })
}