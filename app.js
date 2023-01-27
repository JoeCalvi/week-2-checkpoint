let upgradeShop = [
    {
        name: "pebbles",
        cost: 100,
        collectionRate: 3,
        type: "click",
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c7578268-6339-4fab-909c-9f9d1a89b36e/dcmp29c-b0b53a79-7f53-461f-a6f3-f5d10e3cc171.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M3NTc4MjY4LTYzMzktNGZhYi05MDljLTlmOWQxYTg5YjM2ZVwvZGNtcDI5Yy1iMGI1M2E3OS03ZjUzLTQ2MWYtYTZmMy1mNWQxMGUzY2MxNzEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7iDt1uRF88vN6ITymAcQaN7N-hlprTKBRwwaNLKZVJk"
    },
    {
        name: "birdie",
        cost: 100,
        collectionRate: 3,
        type: "click",
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c7578268-6339-4fab-909c-9f9d1a89b36e/dcmp29c-b0b53a79-7f53-461f-a6f3-f5d10e3cc171.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M3NTc4MjY4LTYzMzktNGZhYi05MDljLTlmOWQxYTg5YjM2ZVwvZGNtcDI5Yy1iMGI1M2E3OS03ZjUzLTQ2MWYtYTZmMy1mNWQxMGUzY2MxNzEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7iDt1uRF88vN6ITymAcQaN7N-hlprTKBRwwaNLKZVJk"
    },
    {
        name: "winkle",
        cost: 100,
        collectionRate: 3,
        type: "auto",
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c7578268-6339-4fab-909c-9f9d1a89b36e/dcmp29c-b0b53a79-7f53-461f-a6f3-f5d10e3cc171.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M3NTc4MjY4LTYzMzktNGZhYi05MDljLTlmOWQxYTg5YjM2ZVwvZGNtcDI5Yy1iMGI1M2E3OS03ZjUzLTQ2MWYtYTZmMy1mNWQxMGUzY2MxNzEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7iDt1uRF88vN6ITymAcQaN7N-hlprTKBRwwaNLKZVJk"
    },
    {
        name: "jojo",
        cost: 100,
        collectionRate: 3,
        type: "auto",
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c7578268-6339-4fab-909c-9f9d1a89b36e/dcmp29c-b0b53a79-7f53-461f-a6f3-f5d10e3cc171.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M3NTc4MjY4LTYzMzktNGZhYi05MDljLTlmOWQxYTg5YjM2ZVwvZGNtcDI5Yy1iMGI1M2E3OS03ZjUzLTQ2MWYtYTZmMy1mNWQxMGUzY2MxNzEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7iDt1uRF88vN6ITymAcQaN7N-hlprTKBRwwaNLKZVJk"
    }
]

let purchasedUpgrades = []

let collectedResource = 0
let totalCollectedResource = 0




function collectResource() {

    collectedResource += 1
    totalCollectedResource += 1
    console.log("Collected Resource:", collectedResource, "Total Collected:", totalCollectedResource);

    drawCollectedResource()
    drawTotalCollectedResource()
}

function autoCollectResource() {

}

function purchaseUpgrade(name) {

    let purchasedUpgrade = upgradeShop.find(upgrade => upgrade.name == name)

    purchasedUpgrades.push(purchasedUpgrade)

    // console.log(purchasedUpgrades)
}

function drawCollectedResource() {

    let collectedResourceTemplate = ""
    collectedResourceTemplate += `
    <div class="row text-center">
                        <h3>
                            Current: ${collectedResource}
                        </h3>
                    </div>
    `

    document.getElementById('collected-resource').innerHTML = collectedResourceTemplate
}

function drawTotalCollectedResource() {

    let totalCollectedResourceTemplate = ""
    totalCollectedResourceTemplate += `
    <div class="row text-center" id="total-collected">
                        <h6>
                            Ever: ${totalCollectedResource}
                        </h6>
                    </div>
    `

    document.getElementById('total-collected').innerHTML = totalCollectedResourceTemplate

}

function drawCollectionPerClick() {


}

function drawAutoCollectionRate() {

}

function drawUpgradeShop() {


    let upgradeShopTemplate = ""
    upgradeShop.forEach(upgrade => {
        upgradeShopTemplate += `
                        <div class="col-3">
                            <h5 class="text-center pt-2">
                                ${upgrade.name}
                            </h5>
                            <div class="pb-3">
                                <img src="${upgrade.img}"
                                    alt="hand" class="upgrade-img p-3">
                                <button class="btn btn-warning text-danger" onclick="purchaseUpgrade('${upgrade.name}'); drawPurchasedUpgrades()">${upgrade.cost}</button>
                            </div>
                        </div>
        `
    })
    document.getElementById('upgrade-shop').innerHTML = upgradeShopTemplate

}

function drawPurchasedUpgrades() {

    let purchasedUpgradesTemplate = ""
    purchasedUpgrades.forEach(upgrade => {
        purchasedUpgradesTemplate += `
                    <div class="row">
                        <div class="col-12 d-flex align-items-center justify-content-center">
                            <span>
                                <h6>${upgrade.name}</h6>
                            </span>
                            <span>
                                <img src="${upgrade.img}"
                                    alt="hand" class="purchased-upgrade-img">
                            </span>
                        </div>
                    </div>
        `
    })
    document.getElementById('purchased-upgrades').innerHTML = purchasedUpgradesTemplate

}

function drawTrophy() {

}

drawUpgradeShop()
