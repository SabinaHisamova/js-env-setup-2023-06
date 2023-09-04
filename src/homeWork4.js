export function objAge() {
    let user = {
      name: "John"
    };
    const age1 = prompt("Enter age for obj user");
    user.age = +age1;

    let admin = Object.assign({}, user, {role: 'admin'});
    let {name,age,role} = admin;
  
    console.log(`${name}, ${age}, ${role}`);
  }
  