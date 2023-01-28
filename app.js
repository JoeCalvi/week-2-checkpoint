let upgradeShop = [
    {
        name: "Pebbles",
        cost: 100,
        increase: 20,
        type: "click",
        purchased: false,
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c7578268-6339-4fab-909c-9f9d1a89b36e/dcmp29c-b0b53a79-7f53-461f-a6f3-f5d10e3cc171.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M3NTc4MjY4LTYzMzktNGZhYi05MDljLTlmOWQxYTg5YjM2ZVwvZGNtcDI5Yy1iMGI1M2E3OS03ZjUzLTQ2MWYtYTZmMy1mNWQxMGUzY2MxNzEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7iDt1uRF88vN6ITymAcQaN7N-hlprTKBRwwaNLKZVJk"
    },
    {
        name: "Birdie",
        cost: 1000,
        increase: 50,
        type: "click",
        purchased: false,
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c7578268-6339-4fab-909c-9f9d1a89b36e/dcmp29c-b0b53a79-7f53-461f-a6f3-f5d10e3cc171.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M3NTc4MjY4LTYzMzktNGZhYi05MDljLTlmOWQxYTg5YjM2ZVwvZGNtcDI5Yy1iMGI1M2E3OS03ZjUzLTQ2MWYtYTZmMy1mNWQxMGUzY2MxNzEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7iDt1uRF88vN6ITymAcQaN7N-hlprTKBRwwaNLKZVJk"
    },
    {
        name: "Winkle",
        cost: 5000,
        increase: 20,
        type: "auto",
        purchased: false,
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c7578268-6339-4fab-909c-9f9d1a89b36e/dcmp29c-b0b53a79-7f53-461f-a6f3-f5d10e3cc171.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M3NTc4MjY4LTYzMzktNGZhYi05MDljLTlmOWQxYTg5YjM2ZVwvZGNtcDI5Yy1iMGI1M2E3OS03ZjUzLTQ2MWYtYTZmMy1mNWQxMGUzY2MxNzEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7iDt1uRF88vN6ITymAcQaN7N-hlprTKBRwwaNLKZVJk"
    },
    {
        name: "Jojo",
        cost: 10000,
        increase: 100,
        type: "auto",
        purchased: false,
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c7578268-6339-4fab-909c-9f9d1a89b36e/dcmp29c-b0b53a79-7f53-461f-a6f3-f5d10e3cc171.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M3NTc4MjY4LTYzMzktNGZhYi05MDljLTlmOWQxYTg5YjM2ZVwvZGNtcDI5Yy1iMGI1M2E3OS03ZjUzLTQ2MWYtYTZmMy1mNWQxMGUzY2MxNzEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7iDt1uRF88vN6ITymAcQaN7N-hlprTKBRwwaNLKZVJk"
    }
]

let purchasedUpgrades = []

let availableTrophies = [
    {
        name: "Pebbles",
        requirement: "Gained a new friend."
    },
    {
        name: "Birdie",
        requirement: "Gained a new friend."
    },
    {
        name: "Winkle",
        requirement: "Gained a new friend."
    },
    {
        name: "Jojo",
        requirement: "Gained a new friend."
    },
    {
        name: "The Whole Flock",
        requirement: "Purhase all upgrades."
    },
    {
        name: "Enough to Go Around",
        requirement: "Upgrade all friends at least once."
    },
    {
        name: "Cat Person",
        requirement: "Earn 500,000 Affection"
    },
    {
        name: "Time-Waster",
        requirement: "Earn 1,000,000 Affection"
    },
]

let trophyCase = []

let collectedResource = 16600
let totalCollectedResource = 0
let collectionPerClick = 1
let autoCollection = 0



function collectResource() {

    collectedResource += collectionPerClick
    totalCollectedResource += collectionPerClick
    console.log("Collected Resource:", collectedResource, "Total Collected:", totalCollectedResource);

    drawCollectedResource()
    drawTotalCollectedResource()
}

function autoCollectResource() {

    collectedResource += autoCollection
    totalCollectedResource += autoCollection

    drawCollectedResource()
    drawTotalCollectedResource()
}

function purchaseUpgrade(name) {

    let upgrade = upgradeShop.find(upgrade => upgrade.name == name)
    if (upgrade.purchased == false) {
        purchasedUpgrades.push(upgrade)
    }

    if (upgrade.cost <= collectedResource
        && upgrade.type == "click") {
        drawPurchasedUpgrades()
        collectedResource -= upgrade.cost
        collectionPerClick += upgrade.increase
        upgrade.purchased = true
        upgrade.cost = upgrade.cost * 2
    } else if (upgrade.cost <= collectedResource
        && upgrade.type == "auto") {
        drawPurchasedUpgrades()
        collectedResource -= upgrade.cost
        autoCollection += upgrade.increase
        upgrade.purchased = true
        upgrade.cost = upgrade.cost * 2
    } else if (upgrade.cost > collectedResource) {
        window.alert("You haven't pet the cat enough :(")
    }

    let trophy = availableTrophies.find(trophy => trophy.name == name)

    if (trophy.name == "Pebbles") {
        trophyCase.push(trophy)
    }

    if (trophy.name == "Birdie") {
        trophyCase.push(trophy)
    }

    if (trophy.name == "Winkle") {
        trophyCase.push(trophy)
    }

    if (trophy.name == "Jojo") {
        trophyCase.push(trophy)
    }

    console.log(trophyCase)

    drawCollectionPerClick()
    drawAutoCollectionRate()
    drawCollectedResource()
    drawUpgradeShop()
    drawTrophyCase()
    // console.log(purchasedUpgrades)
}

function drawCollectedResource() {

    let collectedResourceTemplate = ""
    collectedResourceTemplate += `
    <div class="row text-center">
                        <h3>
                            Affection: ${collectedResource}
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

    let collectionPerClickTemplate = ""
    collectionPerClickTemplate += ` Per Click: ${collectionPerClick} `
    document.getElementById('collection-per-click').innerText = collectionPerClickTemplate

}

function drawAutoCollectionRate() {

    let autoCollectionTemplate = ""
    autoCollectionTemplate += ` Per 3s: ${autoCollection} `
    document.getElementById('auto-collect').innerText = autoCollectionTemplate

}

function drawUpgradeShop() {


    let upgradeShopTemplate = ""
    upgradeShop.forEach(upgrade => {
        upgradeShopTemplate += `
                        <div class="col-3 upgrade-shop-text">
                            <h5 class="text-center pt-2">
                                ${upgrade.name}
                            </h5> <p>${upgrade.type}</p>
                            <div class="pb-3">
                                <img src="${upgrade.img}" alt="hand" class="upgrade-img p-3">
                                <button class="btn btn-warning text-danger" 
                                onclick="purchaseUpgrade('${upgrade.name}'); 
                                drawCollectionPerClick(); drawAutoCollectionRate()" 
                                title="Upgrade ${upgrade.type} by ${upgrade.increase}">${upgrade.cost}</button>
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
                            <span class="p-3">
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

function drawTrophyCase() {

    let trophyTemplate = ""
    trophyCase.forEach(trophy => {
        trophyTemplate += `
                           <div class="col-3">
                            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/04cc8621-d568-4939-9b57-79314b377bfb/d7xpdou-cdb777da-468d-47e8-93d1-fd10860d539f.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA0Y2M4NjIxLWQ1NjgtNDkzOS05YjU3LTc5MzE0YjM3N2JmYlwvZDd4cGRvdS1jZGI3NzdkYS00NjhkLTQ3ZTgtOTNkMS1mZDEwODYwZDUzOWYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5O5rLuhlOGK6v4hDwJzZ4PDPr0Qw6663mVkSaw3LTU8"
                                alt="" class="trophy-img" title="${trophy.name}: ${trophy.requirement}">
                        </div>
        `
    })
    document.getElementById('trophy-case').innerHTML = trophyTemplate
}


drawUpgradeShop()
drawCollectedResource()
drawTotalCollectedResource()
drawCollectionPerClick()
drawAutoCollectionRate()
drawTrophyCase()
setInterval(autoCollectResource, 3000)