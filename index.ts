class Car{
    carBrand:string
    carModel:string
    engine:string
    topSpeed:number
    milage:number
    noOfDoors:string

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
    getData(carBrand:string,carModel:string,engine:string,topSpeed:number,milage:number,noOfDoors:string){
        console.log(carBrand,carModel,engine,topSpeed,milage,noOfDoors)
    }
}

let c = new Car()
c.carStart()
c.carAccelerate()
c.carLightsON()
c.carMove()
c.carHorn()
c.carOFF()
c.getData("Tesla","model 3","battery",160,500,"SEVEN")