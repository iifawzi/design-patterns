interface subject {
    registerObserver(observer: observer): any,
    removeObserver(observer: observer): any,
    notifyObserver(): any
}

interface observer {
    update(temp: number, humidity: number, pressure: number): any
}

interface DisplayElement {
    display(): any
}

// Subject: 

class WeatherData implements subject {
    private observers: observer[] = []
    private temp: number = 0
    private humidity: number = 0
    private pressure: number = 0
    registerObserver = (observer: observer)=>{
        this.observers.push(observer)
    }
    removeObserver = (observer: observer)=>{
        const indexOfObserver = this.observers.findIndex((obs)=>{
            return obs === observer
        })
        if (indexOfObserver >= 0){
            this.observers.splice(indexOfObserver, 1)
        }
    }
    notifyObserver = ()=>{
        for (let observer of this.observers){
            observer.update(this.temp,this.humidity,this.pressure)
        }
    }
    //
    private measurementsChanged = ()=>{
        this.notifyObserver()
    }
    setMeasurements = (temp: number, humidity: number, pressure: number)=>{
        this.temp = temp;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged()
    }

}


// Observers: 


class AppleWatch implements observer, DisplayElement {
    private temp: number = 0;
    private humidity: number = 0;
    private pressure: number = 0;

    display = () => {
        console.log("I got updated, the temp is=> "+this.temp+" the humidity is=> "+this.humidity+ "the pressure is=> "+ this.pressure)
    }
    update = (temp: number, humidity: number, pressure: number) => {
        this.temp = temp
        this.humidity = humidity
        this.pressure = pressure
        this.display()
    }
}


const subject = new WeatherData()
const observer = new AppleWatch()
subject.registerObserver(observer)
subject.setMeasurements(28,20,10)