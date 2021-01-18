class Car{
    carBrand:string = "Tesla"
    carModel:string = "model 3"
    engine:string = "battery"
    topSpeed:number = 160
    milage:number = 500
    noOfDoors:string = "SEVEN"

    carStart(){
        console.log("Car Started")
    }
    carAccelerate(){
        console.log("Car Accelerated")
    }
    carLightsON(){
        console.log("Car lights ON")
    }
    carMove(){
        console.log("Car Moved")
    }
    carHorn(){
        console.log("Car Horned")
    }
    carOFF(){
        console.log("Car Stopped")
    }
    getData(){
        console.log(this.carBrand,this.carModel,this.engine,this.topSpeed,this.milage,this.noOfDoors)
    }
}

let c = new Car()
c.carStart()
c.carAccelerate()
c.carLightsON()
c.carMove()
c.carHorn()
c.carOFF()
c.getData()