function findUniq(arr) {
  const uniqueValues = arr.filter((value) => arr.indexOf(value) === arr.lastIndexOf(value));
  return uniqueValues[0];
}

