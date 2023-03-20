
var form = document.querySelector("form");
var search = document.querySelector(".search");
var typeSelect = document.querySelector("#type");
var weirdnessSelect = document.querySelector("#weirdness");
var giphy = document.querySelector(".giphy img");
var giphyLink = document.querySelector(".giphy a");

// Attach an event listener to the form's submit event
form.addEventListener("submit", function(e) {
    // Prevent the default form submission behavior
    e.preventDefault();

    goGiphy();
});

function goGiphy() {
    var input = search.value;
    var typeValue = typeSelect.value;
    var weirdness = weirdnessSelect.value;
    var url = `https://api.giphy.com/v1/${typeValue}/translate?api_key=bb2006d9d3454578be1a99cfad65913d&s=${input}&weirdness=${weirdness}`
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        var imgSrc = data.data.images.original.url;
  
        // fadeout
        giphy.style.opacity = 0;
        giphy.style.transition = "opacity 1s ease-out";

        setTimeout(function() {
          giphy.setAttribute("src", imgSrc);
          giphyLink.setAttribute("href", imgSrc);
          giphyLink.style.visibility = "visible";
          setTimeout(function() {
            giphy.classList.add("gif");
            
            // fade in
            giphy.style.opacity = 0;
            giphy.style.transition = "opacity 1000ms ease-in-out";
            setTimeout(function() {
              giphy.style.opacity = 1;
            }, 100);

          }, 800);
        }, 800);
      })
      .catch(error => console.error(error));
}
