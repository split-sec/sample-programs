const arr = [1, 2, 3];

const subsets = (arr) => {
  if (arr.length === 0) {
    return [[]];
  }
  const firstElement = arr[0];
  const subsetsWithoutFirstElement = subsets(arr.slice(1));
// console.log(subsetsWithoutFirstElement);
  const withFirstElement = subsetsWithoutFirstElement.map((subset) => {
    return [firstElement, ...subset];
  });

  return [...subsetsWithoutFirstElement, ...withFirstElement];
};
console.log(subsets(arr));