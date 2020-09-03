class Rectangle {
  private readonly high: number = 10;
  private readonly width: number = 10;

  /**
   * Read only, only can be edited y the constructor or with the initial value.
   * @param high
   */
  constructor(high: number, width: number) {
    this.high = high;
    this.width = width;
  }

  /**
   * Virtual attreibute with get because when you use this object you can
   * access to area with this.area
   */
  get area() {
    return this.high * this.width;
  }
}

class Person {
  /**
   * Internal property
   */
  private _name: string = "Joe";

  constructor() {
    this.name = "Jhon";
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    // you can excecute any code when your attribute changes
    console.log(`Changing name to ${name}`);
    this._name = name;
  }
}

new Person();
