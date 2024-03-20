//After setting the firestore to collect data. Set a function from the DOM
//to connect the guide

const guideList = document.querySelector('.guides')

//setup guides
const setupGuides = (data) => {

  if (data.length) {


    let html = "";
    data.forEach(doc => {
      const guide = doc.data();

      const li = `
      <li>
        <div class="collapsible-header grey lighten">${guide.title}</div>
        <div class="collapsible-body white">${guide.content}</div>
        </li>
    `;
      html += li;
    });

    guideList.innerHTML = html;
  } else {
    guideList.innerHTML = '<h5 class="center-align">Login to view catalogues</h5>'
  }
}



//DOM 
// setup materialize components
document.addEventListener('DOMContentLoaded', function () {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});