export class Weather {
    constructor(city, description){
        this.city = city;
        this.description = description;
        this.temperature = '';
    }
}

export const WEATHER_PROXY_HANDLER = {
    get: (target, property)=>{
        return Reflect.get(target, property);
    }, 
    set: (target, property, value) => {
        const NEW_VALUE = (value - 273.15).toFixed(2) + ' deg. C';
        return Reflect.set(target, property, NEW_VALUE);
    }
}