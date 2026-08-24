let marks = [55, 65, 97, 75, 85, 95];

let max = marks[0];

for (let i = 1; i < marks.length; i++)
{
    if (marks[i] > max)
    {
        max = marks[i];
    }
}
console.log("Maximum mark is: ", max);

let sum = 0;
for( let mark of marks)
{
    sum += mark;
}
console.log("Sum of marks is: ", sum);

console.log("Avg", sum/marks.length)

let min = Math.min(...marks);

console.log("Minimum mark is:", min);

let reversedMarks = marks.reverse();
console.log("Reversed marks:", reversedMarks);