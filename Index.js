


(function () {
  // Loads from localstorage
  function getValues() {
    const ul = document.getElementById("list");
    var storedValues = window.localStorage.myitems;
    console.log(storedValues);
    // ul.innerHTML = storedValues;

  }
  getValues();
})();

// Adds list item when button is clicked and appends remove btn to li
function addItem() {
  let value = document.getElementById("textarea").value;
  if (value == "") {
    alert("Empty");
  } else {
    console.log(value);
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(value));

    var button = document.createElement("button");

    button.addEventListener('click', function (e) {
      e.target.parentNode.remove();


    })
    button.setAttribute("id", "close");
    button.innerHTML = ("x")
    li.appendChild(button);
    ul.appendChild(li);
    store();
  }
  // Changes li tag on click. Why does this only work sometimes???!
  var ul = document.querySelector('ul');
  ul.addEventListener('click', (event) => {
    console.log(event.target.tagName);
    if (event.target.tagName === 'LI') {
      event.target.classList.toggle('checked');
      console.log(event.target);

    }
  }, false);

}
// Stores data to localstorage
function store() {
  window.localStorage.myitems = list.innerHTML;
}

