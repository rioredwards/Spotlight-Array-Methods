// INPUT: the array of brands from data.js
// OUTPUT: an array of all the sneakers brands
// REQS: use .reduce

export const getSneaks = (brands) => {
  return brands.reduce((acc, brand) => [...acc, ...brand.shoes], []);
};

// INPUT: the array of dogs from data.js
// OUTPUT: the average age of the dogs
// REQS: use .reduce
export const getAverageAge = (dogs) => {
  const dogAges = [];
  for (const dog of dogs) {
    dogAges.push(dog.age);
  }
  console.log('dogAges', dogAges);

  let sum = 0;
  for (const age of dogAges) {
    sum += age;
  }

  const avg = sum / dogAges.length;
  return avg;
};
