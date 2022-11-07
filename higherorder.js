const users = [
  {
    name: "Van Batchelder",
    city: "London",
    birthYear: 1998
  },
  {
    name: "Winter Rubino",
    city: "Madrid",
    birthYear: 1992
  },
  {
    name: "Yusuf Shea",
    city: "Paris",
    birthYear: 1990
  },
  {
    name: "Zion Shively",
    city: "Alabama",
    birthYear: 2002,
  }
];

const currentYear = new Date().getFullYear();
const filteredUsers = users.filter((user) => (currentYear - user.birthYear) > 25);


map@@@@@@@@@@@@@@@@@@@@@@@@@@@@
console.log(filteredUsers);

const tasks = [
  {
    'name'     : 'Write for Envato Tuts+',
    'duration' : 120
  },
  {
    'name'     : 'Work out',
    'duration' : 60
  },
  {
    'name'     : 'Procrastinate on Duolingo',
    'duration' : 240
  }
];


const task_names = tasks.map(task => task.name)
console.log(task_names)

reduce-----------------
const a =[1,2,3,4,5]
const total =a.reduce((acc,item)=>{
    return acc+item;
})
console.log(total);
