// class MyClass {
//     constructor(value, ob) {
//       this.value = value; 
//       this.ob = ob
//      // store value in static property
//     }
  
//     // Static method
//      accessInstanceValue(data) {
//       console.log(this.value, data); 
//       console.log(this.ob); // Access static property
//     }
//   }
  
//   const obj = new MyClass('Hello', {name: "panchanan"});
//   obj.accessInstanceValue('world!'); 


// UPDATE ?? 
// SET first_name = ?, last_name = ?, email = ?
// WHERE id = ?;

// const valu = ['id', 'name']
// const cond = ['mr_id']
// const values = valu.map((el, index) => 'SET ' + el + ' = ?' + ${index=== valu.length - 1 ? '' : ','})
// const condition = cond.map((el, index) => el + ' = ?' + ${index=== cond.length - 1 ? ';' : ','})
// const sql = UPDATE ??  + values.join(' ') + ' WHERE ' + condition.join(' ')

// console.log(sql);


