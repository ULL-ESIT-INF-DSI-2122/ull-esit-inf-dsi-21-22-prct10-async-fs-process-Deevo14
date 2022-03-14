let rectangle = {
    name: "Rectangle",
    sides: 4,
  };
  
  let triangle = {
    name: "Triangle",
    sides: 3,
  };
  
  let hexagon = {
    name: "Hexagon",
    sides: 6,
  };
  
  const figures = [rectangle, triangle, hexagon];
  
  figures.forEach((figure) => {
    console.log(`I am a ${figure.name} and I have ${figure.sides} sides`);
  });