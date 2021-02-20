class Vehicle {
  // modifiers: public, private, protected
  //color: string; al hacerlo public o alguno de los otros modificadores en el constructor no es necesario repetirlo

  constructor(public color: string) {
    //this.color = color;
  }

  public drive(): void {
    console.log("drive");
  }

  public honk(): void {
    console.log("honk");
  }
}

//Herencia
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color); //constructor en clase padre
  }
}

const car = new Car(1, "red");
