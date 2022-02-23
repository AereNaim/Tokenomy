/* Declare DOMs */
// const btnBuy = document.getElementById("buyCLG");
const priceDOM = document.getElementById("priceLive");
const Buyform = document.getElementById("CLGform");
const percentageDOM = document.getElementById("Percentage");
let toBuyAmount = document.getElementsByName("amount")[0];


/* CLG = 1 USD */
let CLG = 1;
const MaxSupply = 10000000;
let circulation = 1000000;

/* MarketCap = Price * MAxSupply */
let MarketCap = CLG * MaxSupply;

const MintPrice = 1;
let changePercentage;

function BuyCLG(amount) {
  if (circulation < MaxSupply) {
    let oldCiculation = circulation;
    circulation += amount;
    changePercentage = (amount / oldCiculation) * 100;
    CLG = CLG + (CLG*changePercentage/100);
    MarketCap = CLG * circulation;
    console.log(circulation);
  }
  priceDOM.innerHTML = ` Price Now : ${CLG}`;
  percentageDOM.innerHTML = ` Perctage of Growth : ${changePercentage}`;
  
}

function SellCLG() {
  if (circulation > 0) {
    circulation -= 1;
    MarketCap = CLG * circulation;
  }
}

Buyform.addEventListener("submit", function (e) {
    BuyCLG(toBuyAmount.value);
    e.preventDefault();
    /*
    toBuyAmount.addEventListener("change", ()=> {
        BuyCLG(toBuyAmount.value);
    })*/
})





