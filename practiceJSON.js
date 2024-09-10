const library = [
  {
    title: "Harry Potter",
    author: "J.K Rowlings",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Harry Potter the prince of azkaban",
    author: "J.K Rowlings",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Harry Potter the order of phoenix",
    author: "J.K Rowlings",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

library[0].status.reading = true;

library[1].status.reading = true;

library[2].status.reading = true;

library[0].status.read = true;

library[1].status.read = true;

library[2].status.read = true;

const { title: firstBook } = library[0];
console.log(firstBook);

const str = JSON.stringify(library);
// console.log(str);

const strParsed = JSON.parse(str);
strParsed[0].title;
console.log(strParsed);
console.log(strParsed[0].status.reading);
