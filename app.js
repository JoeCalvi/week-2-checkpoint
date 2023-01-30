let upgradeShop = [
    {
        name: "Pebbles",
        cost: 100,
        increase: 50,
        type: "click",
        purchased: false,
        upgraded: false,
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c7578268-6339-4fab-909c-9f9d1a89b36e/dcmp29c-b0b53a79-7f53-461f-a6f3-f5d10e3cc171.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M3NTc4MjY4LTYzMzktNGZhYi05MDljLTlmOWQxYTg5YjM2ZVwvZGNtcDI5Yy1iMGI1M2E3OS03ZjUzLTQ2MWYtYTZmMy1mNWQxMGUzY2MxNzEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7iDt1uRF88vN6ITymAcQaN7N-hlprTKBRwwaNLKZVJk"
    },
    {
        name: "Birdie",
        cost: 1000,
        increase: 100,
        type: "click",
        purchased: false,
        upgraded: false,
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c7578268-6339-4fab-909c-9f9d1a89b36e/dcmp29c-b0b53a79-7f53-461f-a6f3-f5d10e3cc171.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M3NTc4MjY4LTYzMzktNGZhYi05MDljLTlmOWQxYTg5YjM2ZVwvZGNtcDI5Yy1iMGI1M2E3OS03ZjUzLTQ2MWYtYTZmMy1mNWQxMGUzY2MxNzEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7iDt1uRF88vN6ITymAcQaN7N-hlprTKBRwwaNLKZVJk"
    },
    {
        name: "Winkle",
        cost: 5000,
        increase: 40,
        type: "auto",
        purchased: false,
        upgraded: false,
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c7578268-6339-4fab-909c-9f9d1a89b36e/dcmp29c-b0b53a79-7f53-461f-a6f3-f5d10e3cc171.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M3NTc4MjY4LTYzMzktNGZhYi05MDljLTlmOWQxYTg5YjM2ZVwvZGNtcDI5Yy1iMGI1M2E3OS03ZjUzLTQ2MWYtYTZmMy1mNWQxMGUzY2MxNzEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7iDt1uRF88vN6ITymAcQaN7N-hlprTKBRwwaNLKZVJk"
    },
    {
        name: "Jojo",
        cost: 10000,
        increase: 160,
        type: "auto",
        purchased: false,
        upgraded: false,
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c7578268-6339-4fab-909c-9f9d1a89b36e/dcmp29c-b0b53a79-7f53-461f-a6f3-f5d10e3cc171.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M3NTc4MjY4LTYzMzktNGZhYi05MDljLTlmOWQxYTg5YjM2ZVwvZGNtcDI5Yy1iMGI1M2E3OS03ZjUzLTQ2MWYtYTZmMy1mNWQxMGUzY2MxNzEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7iDt1uRF88vN6ITymAcQaN7N-hlprTKBRwwaNLKZVJk"
    }
]

let purchasedUpgrades = []

let availableTrophies = [
    {
        name: "Pebbles",
        requirement: "Gained Pebbles as a friend.",
        achieved: false
    },
    {
        name: "Birdie",
        requirement: "Gained Birdie as a friend.",
        achieved: false
    },
    {
        name: "Winkle",
        requirement: "Gained Winkle as a friend.",
        achieved: false
    },
    {
        name: "Jojo",
        requirement: "Gained Jojo as a friend.",
        achieved: false
    },
    {
        name: "The Whole Flock",
        requirement: "Purchase all upgrades.",
        achieved: false
    },
    {
        name: "Enough to Go Around",
        requirement: "Upgrade all friends at least once.",
        achieved: false
    },
    {
        name: "Cat Person",
        requirement: "Earn 1,000,000 Affection",
        achieved: false
    },
    {
        name: "Time-Waster",
        requirement: "Acquire all trophies",
        achieved: false
    },
]

let trophyCase = []

let collectedResource = 0
let totalCollectedResource = 0
let collectionPerClick = 1
let autoCollection = 0



function collectResource() {

    collectedResource += collectionPerClick
    totalCollectedResource += collectionPerClick
    console.log("Collected Resource:", collectedResource, "Total Collected:", totalCollectedResource);

    drawCollectedResource()
    drawTotalCollectedResource()
    let catPersonTrophy = availableTrophies.find(trophy => trophy.name == 'Cat Person')
    if (catPersonTrophy.achieved == false) {
        acquireCatPerson()
    }
    acquireAllTrophies()
}

function autoCollectResource() {

    collectedResource += autoCollection
    totalCollectedResource += autoCollection

    drawCollectedResource()
    drawTotalCollectedResource()

    let catPersonTrophy = availableTrophies.find(trophy => trophy.name == 'Cat Person')
    if (catPersonTrophy.achieved == false) {
        acquireCatPerson()
    }
    acquireAllTrophies()
}

function purchaseUpgrade(name) {

    let upgrade = upgradeShop.find(upgrade => upgrade.name == name)
    let trophy = availableTrophies.find(trophy => trophy.name == name)

    // SECTION pushes upgrades from store to purchased upgrades
    // also notifies user that they've acquired that upgrade
    if (upgrade.purchased == false
        && collectedResource >= upgrade.cost) {
        purchasedUpgrades.push(upgrade)
        if (upgrade.name == "Pebbles" && collectedResource >= upgrade.cost) {
            window.alert('You gained Pebbles as a friend!')
        } else if (upgrade.name == "Birdie" && collectedResource >= upgrade.cost) {
            window.alert('You gained Birdie as a friend!')
        } else if (upgrade.name == "Winkle" && collectedResource >= upgrade.cost) {
            window.alert('You gained Winkle as a friend!')
        } else if (upgrade.name == "Jojo" && collectedResource >= upgrade.cost) {
            window.alert('You gained Jojo as a friend!')
        }
    }
    // SECTION end

    // SECTION determines whether an upgrade is "click" or "auto" buff
    if (collectedResource >= upgrade.cost
        && upgrade.type == "click") {
        drawPurchasedUpgrades()
        collectedResource -= upgrade.cost
        collectionPerClick += upgrade.increase
        upgrade.purchased = true
        upgrade.cost = upgrade.cost * 2
    } else if (collectedResource >= upgrade.cost
        && upgrade.type == "auto") {
        drawPurchasedUpgrades()
        collectedResource -= upgrade.cost
        autoCollection += upgrade.increase
        upgrade.purchased = true
        upgrade.cost = upgrade.cost * 2
    } else if (upgrade.cost > collectedResource) {
        window.alert("You haven't pet the cat enough :(")
    }
    // SECTION end

    // SECTION once upgrades are purchased, pushes respective trophies in trophyCase
    if (trophy.name == "Pebbles"
        && trophy.achieved == false
        && upgrade.purchased == true) {
        trophyCase.push(trophy)
        trophy.achieved = true
        drawTrophyCase()
    }

    if (trophy.name == "Birdie"
        && trophy.achieved == false
        && upgrade.purchased == true) {
        trophyCase.push(trophy)
        trophy.achieved = true
        drawTrophyCase()
    }

    if (trophy.name == "Winkle"
        && trophy.achieved == false
        && upgrade.purchased == true) {
        trophyCase.push(trophy)
        trophy.achieved = true
        drawTrophyCase()
    }

    if (trophy.name == "Jojo"
        && trophy.achieved == false
        && upgrade.purchased == true) {
        trophyCase.push(trophy)
        trophy.achieved = true
        drawTrophyCase()
    }

    drawCollectionPerClick()
    drawAutoCollectionRate()
    drawCollectedResource()
    drawUpgradeShop()
    acquireWholeFlock()
    acquireAllTrophies()
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
                            <div>
                                <img src="${upgrade.img}" alt="hand" class="upgrade-img p-3">
                            </div>
                            <div class="pb-3">
                                <button class="btn btn-warning text-danger" 
                                onclick="purchaseUpgrade('${upgrade.name}'); 
                                drawCollectionPerClick(); drawAutoCollectionRate(); 
                                acquireWholeFlock(); upgradeAllFriendsOnce()" 
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

function acquireWholeFlock() {

    let wholeFlockAchieved = upgradeShop.every((upgrade) => {
        return upgrade.purchased == true;
    });


    let wholeFlockTrophy = availableTrophies.find(trophy => trophy.name == 'The Whole Flock')
    if (wholeFlockAchieved && wholeFlockTrophy.achieved == false) {
        trophyCase.push(wholeFlockTrophy)
        drawTrophyCase()
        wholeFlockTrophy.achieved = true
        window.alert("You collected all friends!")
    }

}

function upgradeAllFriendsOnce() {

    let pebbles = upgradeShop.find(upgrade => upgrade.name == 'Pebbles')
    let birdie = upgradeShop.find(upgrade => upgrade.name == 'Birdie')
    let winkle = upgradeShop.find(upgrade => upgrade.name == 'Winkle')
    let jojo = upgradeShop.find(upgrade => upgrade.name == 'Jojo')

    if (pebbles.cost == 400) {
        pebbles.upgraded = true
    }

    if (birdie.cost == 4000) {
        birdie.upgraded = true
    }

    if (winkle.cost == 20000) {
        winkle.upgraded = true
    }

    if (jojo.cost == 40000) {
        jojo.upgraded = true
    }

    let upgradedAllTrophy = availableTrophies.find(trophy => trophy.name == 'Enough to Go Around')

    if (pebbles.upgraded == true
        && birdie.upgraded == true
        && winkle.upgraded == true
        && jojo.upgraded == true
        && upgradedAllTrophy.achieved == false) {
        trophyCase.push(upgradedAllTrophy)
        drawTrophyCase()
        upgradedAllTrophy.achieved = true
        window.alert("You upgraded all friends at least once!")
    }
}

function acquireCatPerson() {

    if (totalCollectedResource >= 1000000) {
        let catPersonTrophy = availableTrophies.find(trophy => trophy.name == 'Cat Person')
        trophyCase.push(catPersonTrophy)
        if (catPersonTrophy.achieved == false) {
            window.alert("You received 1,000,000 total affection!")
            drawTrophyCase()
        }
        catPersonTrophy.achieved = true
    }
}

function acquireAllTrophies() {

    let pebblesTrophy = availableTrophies.find(trophy => trophy.name == 'Pebbles')
    let birdieTrophy = availableTrophies.find(trophy => trophy.name == 'Birdie')
    let winkleTrophy = availableTrophies.find(trophy => trophy.name == 'Winkle')
    let jojoTrophy = availableTrophies.find(trophy => trophy.name == 'Jojo')
    let wholeFlockTrophy = availableTrophies.find(trophy => trophy.name == 'The Whole Flock')
    let upgradeAllTrophy = availableTrophies.find(trophy => trophy.name == 'Enough to Go Around')
    let catPersonTrophy = availableTrophies.find(trophy => trophy.name == 'Cat Person')
    let timeWasterTrophy = availableTrophies.find(trophy => trophy.name == 'Time-Waster')

    if (pebblesTrophy.achieved == true
        && birdieTrophy.achieved == true
        && winkleTrophy.achieved == true
        && jojoTrophy.achieved == true
        && wholeFlockTrophy.achieved == true
        && upgradeAllTrophy.achieved == true
        && catPersonTrophy.achieved == true
        && timeWasterTrophy.achieved == false) {
        trophyCase.push(timeWasterTrophy)
        drawTrophyCase()
        timeWasterTrophy.achieved = true
        window.alert("You've earned all the trophies! Don't you have somewhere to be?")
    }
}

drawUpgradeShop()
drawCollectedResource()
drawTotalCollectedResource()
drawCollectionPerClick()
drawAutoCollectionRate()
drawTrophyCase()
setInterval(autoCollectResource, 3000)