function numIdenticalPairs(nums) {
    const count = {}; 
    let goodPairs = 0;  
    for (const num of nums) {
      if (count[num]) {
        goodPairs += count[num];
        count[num]++;
      } else {
        count[num] = 1;
      }
    }  
    return goodPairs;
  }
  
  const nums = [1,1,1,1]; 
  const result = numIdenticalPairs(nums);
  console.log(result);
  