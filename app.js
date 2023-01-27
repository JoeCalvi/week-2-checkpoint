let upgradesShop = [
    {
        name: "",
        cost: 100,
        collectionRate: 3,
        type: "click"
    },
    {
        name: "",
        cost: 100,
        collectionRate: 3,
        type: "click"
    },
    {
        name: "",
        cost: 100,
        collectionRate: 3,
        type: "auto"
    },
    {
        name: "",
        cost: 100,
        collectionRate: 3,
        type: "auto"
    }
]

let purchaseUpgrades = []

let collectedResource = 0
let totalCollectedResource = 0




function collectResource() {

    collectedResource += 1
    totalCollectedResource += 1
    console.log("Collected Resource:", collectedResource, "Total Collected:", totalCollectedResource);
}

function autoCollectResource() {

}

function purchaseUpgrade() {

    console.log("Upgrade Purchased")
}

function drawCollectedResource() {

}

function drawTotalCollectedResource() {

}

function drawCollectionPerClick() {

}

function drawAutoCollectionRate() {

}

function drawUpgradeShop() {

}

function drawPurchasedUpgrades() {

}

function drawTrophy() {

}
