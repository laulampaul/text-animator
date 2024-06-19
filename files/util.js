let selectedArt = "art1stCol";
let selectedReal = "real3rdCol";
let selectedRecon = "ReconSelect3";
let selectedMix = "mix3";
let selectedCom = "comm4";
const  captions = [["A bald man with a neatly trimmed beard, showcasing his shiny scalp, eating food","A man with dyed pink and purple hair, styled in a high ponytail"],
["A chef in a white apron, complete with a toque blanche, garnishing a gourmet dish","A superhero in a form-fitting red and blue costume, cape billowing behind them"],
["woman in a forest, sunlight filtering through the canopy of leaves onto the forest floor","A woman on a serene beach at sunset, the sky ablaze with hues of orange and purple."],
["a man in the snow","a old woman drinking water"],
["a boy wearing a blue cap, doing homework","a woman laughing on the lawn"]
];
const id_mapping = {
    "lecun": 0,
    "biden":1,
    "sansa":2,
    "eva":3,
    "musk":4
};
function onArtClick(event){
    newSelectedArt = event.target.parentNode.className;
    document.getElementsByClassName(selectedArt)[0].firstChild.className="artImage";
    document.getElementsByClassName(newSelectedArt)[0].firstChild.className="artImageSelected";
    selectedArt = newSelectedArt;
    document.getElementsByClassName("artResult")[0].firstChild.src=`assets/results_art/${newSelectedArt}.jpg`;
}

function initArtSelection(){
    Array.from(document.getElementsByClassName("artImage")).forEach((e) => {e.addEventListener("click", onArtClick)});
    document.getElementsByClassName(selectedArt)[0].firstChild.className="artImageSelected";
}


function initReconSelection(){
    Array.from(document.getElementsByClassName("ReconImage")).forEach((e) => {e.addEventListener("click", onReconClick)});
    document.getElementsByClassName(selectedRecon)[0].firstChild.className="ReconImageSelected";
}
// function initReconSelection() {
//     Array.from(document.getElementsByClassName("ReconImage")).forEach((e) => {
//         e.addEventListener("click", onReconClick)
//     });
//     document.getElementsByClassName(selectedRecon)[0].firstChild.firstChild.className = "ReconImageSelected";
// }

function onReconClick(event) {
    newSelectedRecon = event.target.parentNode.className;
    document.getElementsByClassName(selectedRecon)[0].firstChild.className = "ReconImage";
    document.getElementsByClassName(newSelectedRecon)[0].firstChild.className = "ReconImageSelected";
    selectedRecon = newSelectedRecon;
    id_name = event.target.dataset.id;
    for (let i = 1; i <= 2; i++) {
      document.getElementsByClassName("ReconResult")[0].children[i - 1].children[0].src = `./assets/second_part/${id_name}/${i}.gif`;
      j = id_mapping[id_name];
      document.getElementsByClassName("ReconResult")[0].children[i - 1].children[1].innerHTML = captions[j][i-1];
    //   document.getElementsByClassName("ReconResult")[0].children[i - 1].children[1].innerHTML = captions[i][i-1];
    }
}
function onMixClick(event) {
    newselectedMix = event.target.parentNode.className;
    document.getElementsByClassName(selectedMix)[0].firstChild.className = "mixImage";
    document.getElementsByClassName(newselectedMix)[0].firstChild.className = "mixImageSelected";
    selectedMix = newselectedMix;
    id_name = event.target.dataset.id;
    for (let i = 1; i <= 6; i++) {
      document.getElementsByClassName("mixResult")[0].children[i - 1].src = `./assets/third_part/${id_name}/${i}.gif`;
    }
  }

  
function initMixSelection(){
    Array.from(document.getElementsByClassName("mixImage")).forEach((e) => {e.addEventListener("click", onMixClick)});
    document.getElementsByClassName(selectedMix)[0].firstChild.className="mixImageSelected";
}

function onCommuClick(event) {
    newSelectedCommu = event.target.parentNode.className;
    document.getElementsByClassName(selectedCom)[0].firstChild.className = "commImage";
    document.getElementsByClassName(newSelectedCommu)[0].firstChild.className = "commImageSelected";
    selectedCom = newSelectedCommu;
    id_name = event.target.dataset.id;
    for (let i = 1; i <= 6; i++) {
      document.getElementsByClassName("commResult")[0].children[i - 1].src = `./assets/fifth_part/${id_name}/${i}.gif`;
    }
  }

  
function initCommuSelection(){
    Array.from(document.getElementsByClassName("commImage")).forEach((e) => {e.addEventListener("click", onCommuClick)});
    document.getElementsByClassName(selectedCom)[0].firstChild.className="commImageSelected";
}





function onRealClick(event) {
    newSelectedReal = event.target.parentNode.className;
    document.getElementsByClassName(selectedReal)[0].firstChild.className = "realImage";
    document.getElementsByClassName(newSelectedReal)[0].firstChild.className = "realImageSelected";
    selectedReal = newSelectedReal;
    id_name = event.target.dataset.id;
    for (let i = 1; i <= 6; i++) {
      document.getElementsByClassName("realResult")[0].children[i - 1].src = `./assets/first_part/${id_name}/${i}.gif`;
    }
  }

  
function initRealSelection(){
    Array.from(document.getElementsByClassName("realImage")).forEach((e) => {e.addEventListener("click", onRealClick)});
    document.getElementsByClassName(selectedReal)[0].firstChild.className="realImageSelected";
}

function getOther(className)
{
    if (className  == "personalization"){
        return "alignment";
    }
    return "personalization";
}
function hoverEffect(event)
{
    hoverClassName = event.target.className;
    otherClassName = getOther(hoverClassName);
    elist = Array.from(document.getElementsByClassName(otherClassName));
    elist.forEach((e) => {e.style.opacity = 0.1;});
}

function unHoverEffect(event)
{
    hoverClassName = event.target.className;
    otherClassName = getOther(hoverClassName);
    elist = Array.from(document.getElementsByClassName(otherClassName));
    elist.forEach((e) => {e.style.opacity = 1.0;});
}


function registerEventListeners(element)
{
    element.addEventListener(
        "mouseenter",
        hoverEffect,
        false,
      );
      element.addEventListener(
        "mouseleave",
        unHoverEffect,
        false,
      );
}

var test = Array.from(document.getElementsByClassName("personalization"));
test.forEach(registerEventListeners);

var test = Array.from(document.getElementsByClassName("alignment"));
test.forEach(registerEventListeners)