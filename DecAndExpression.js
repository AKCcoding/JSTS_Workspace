// function computeGrade(prelim, midterm, prefinal, finals) {
//   return (prelim + midterm + prefinal + finals) / 4;
// }

// console.log(computeGrade(1.25, 1.25, 1.25, 1.0));

// const compute = (prelim, midterm, prefinal, finals) =>
//   (prelim + midterm + prefinal + finals) / 4;

// console.log(compute(2, 1, 1, 2));

const createObj = (name, age, isAdmin) => ({
  name,
  age,
  isAdmin,
});

console.log(createObj("Alrae", 25, true));
