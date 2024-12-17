class MyClass {
    constructor(value, ob) {
      this.value = value; 
      this.ob = ob
     // store value in static property
    }
  
    // Static method
     accessInstanceValue(data) {
      console.log(this.value, data); 
      console.log(this.ob); // Access static property
    }
  }
  
  const obj = new MyClass('Hello', {name: "panchanan"});
  obj.accessInstanceValue('world!'); 