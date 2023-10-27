function findDuplicates(arr) {
    const count = {};
    const duplicates = [];
  
    for (const item of arr) {
      count[item] = (count[item] || 0) + 1;
    }
  
    for (const key in count) {
      if (count[key] > 1) {
        duplicates.push(parseInt(key));
      }
    }
  
    return duplicates;
  }
  
  const arr = [1, 2, 2, 3, 4, 4, 5];
  const duplicateElements = findDuplicates(arr);
  console.log("Duplicate elements: ", duplicateElements);
  