class LegoStarwars{
    constructor(
        numMotors,
        numChair,
        numLights,
        cabineOpen,
        darkSideP,
        lightSideP,
        
    ){
        this.numMotors=numMotors;
        this.numChair=numChair;
        this.numLights=numLights;
        this.cabineOpen=cabineOpen
        this.side={
            dark:darkSideP,
            light:lightSideP,
        }
    }
    toggleCabin(cabinStatus){
        this.cabineOpen=cabinStatus;
    }
    addChair(moreChair){
        this.numChair=moreChair;
    }
    changeSideP(moreP){
        this.darkSideP=moreP,
        this.lightSideP=moreP
    }
}

export default LegoStarwars;