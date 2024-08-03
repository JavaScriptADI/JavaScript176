const nums = [];
for (let i = 0; i < 10; i++) {
    nums.push(Math.floor(Math.random() * 100));
}

console.log(nums);
const index = nums.indexOf(nums[5]);
console.log(index);
if (index !== -1){
    nums.splice(index, 1);
}
console.log(nums);