class Rocket {
    //make the properties
    constructor(
        fuelType,
        weight,
        power
    ) {
        this.fuelType = fuelType;
        this.weight = weight;
        this.power = power;
    }
    launch(){
        console.log("launch sequence started");
        alert("Clear the launch area, launch is about to start");
        alert("launch sequence started");
    }

    landing(){
        console.log("launch sequence started");
        alert("landing sequence started");
    }

    detachThruster(){
        console.log("detach Thruster sequence started");
        alert("detach Thruster sequence started")
    }
}

class Mission{
    constructor(
        objective,
        oxyLvl,
        launchDataDay,
        launchDataMonth,
        launchDataYear,
        spaceCraft,
        numOfAstronauts
    ) {
        this.objective = objective;
        this.oxyLvl = oxyLvl;
        this.launchDataDay = launchDataDay;
        this.launchDataMonth = launchDataMonth;
        this.launchDataYear =  launchDataYear;
        this.spaceCraft = spaceCraft;
        this.numOfAstronauts = numOfAstronauts
    }

    launchMission(){
        console.log("launchMission")
        alert("launch sequence started, Best of luck to the crew of the " + this.spaceCraft)
    }

    displayMissionParameters(){
        console.log("displayMissionParameters() started");
        alert("The spacecraft, " + this.spaceCraft + ", will launch on " + this.launchDataDay 
            + " of " + this.launchDataMonth + " " + this.launchDataYear + " with an O2 level " + 
            this.oxyLvl + "%");
    }
}

function runSpDisplay(){
    console.log("runSpDisplay() started")
    springLaunch.displayMissionParameters();
}

function spLaunch(){
    console.log("spLaunch() started");
    springLaunch.launchMission();
}

function runFallDisplay(){
    console.log("runFallDisplay() started")
    faLaunch.displayMissionParameters();
}

function fallLaunch(){
    console.log("faLaunch() started");
    faLaunch.launchMission();
    
}