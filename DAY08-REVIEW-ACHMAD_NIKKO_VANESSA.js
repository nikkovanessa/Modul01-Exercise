// DAY 8 EXERCISE REVIEW
let data = [
    {
    name : 'Avanza',
    brand : 'Toyota',
    machine : 'DQHC',
    cc : 1500
    },
    {
    name : 'Supra',
    brand : 'Toyota',
    machine : 'V8',
    cc : 5000
    },
    { 
    name : 'ERTIGA',
    brand : 'Suzuki',
    machine : 'DQHC',
    cc : 1550
    }
]

let print = (data, cbfn) => {
    let temp = ``;
    for (let i = 0; i < data.length; i++) {
      let { name, brand, machine, cc } = data[i];
        if (!cbfn) {
        temp += `${i + 1}. ${brand} ${name} with ${machine} ${cc.toLocaleString()}\n`
        } else if (cbfn(data[i])) {
        temp = `${i + 1}. ${brand} ${name} with ${machine} ${cc.toLocaleString()}\n`
        break;
        }
    }
    return temp;
  }
  
let filterName = (obj) => {
    return obj.name == "ERTIGA";
}
  
console.log(print(data, filterName));