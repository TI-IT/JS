//Functions
//Есть контекст this
function getName(name) {
  return name;
}

//Нету контекста this
const getChannelName = () => 'test';

console.log(getName('tttt'));
console.log(getChannelName());
