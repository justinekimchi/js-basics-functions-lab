// Code your solution in this file!

function distanceFromHqInBlocks(block) {
  if (block > 42) {
    return block - 42;
  } else return 42 - block;
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(start, destination) {
  if (start > destination) {
    return (start - destination) * 264;
  } else {
    return (destination - start) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  const tripDistance = distanceTravelledInFeet(start, destination);
  if (tripDistance <= 400) {
    return 0;
  } else if (tripDistance <= 2000) {
    return (tripDistance - 400) * 0.02;
  } else if (tripDistance > 2000 && tripDistance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
