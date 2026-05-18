function showsms(){
    alert("Ky eshte vetem nje message")

}
showsms();

function sum(nr1,nr3){
    return nr1 + nr3

}
console.log(sum(2,4));
document.write(sum(3,4));

function localvariable(){
    var vl="Digital School";
    alert(vl);
}

localvariable();

var car={
    name:"Audi",
    color:"red",
    year:2000,
    kilometers:0,
    starEngine:function(){
        alert("vroom");
    },
    get getkilometers(){
        return this.kilometers;
    },
    set setkilometers(km){
        this.kilometers=km;
    }

};

console.log(car.getkilometers);

car.setkilometers=100;

console.log(car.getkilometers);

alert(car.name);
alert(car['color']);




car.starEngine();

function Computer(name,cpu,ram,rom){
    this.name=name;
    this.cpu=cpu;
    this.ram=ram;
    this.rom=rom;

}

var com1= new Computer("macbook","8-core","8gb","8gb")
var com2= new Computer("macbook2","6-core","8gb","8gb")

function Car(name,color,year,modelin){
    this.name=name;
    this.color=color;
    this.year=year;
    this.modelin=modelin;
}

var car1= new Car("Audi 2","Black",2026,"q3")
