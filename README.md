# Data Structures: Sets and Maps

## Instructions

In this challenge you will implement several functions that use Sets and Maps.

## Tasks

### Set Operations

In this task you will implement some common set operations - union, intersection and difference.

`union()`
The union of two sets are all the elements that belong to either set.

![](https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/a577967b135c9c9c54bf432ed76c570c-image.png)

Write a function that accepts two Sets and returns the union of the two sets.

For example, given the set `{1,2,3,4}` and the set `{3,4,5,6}` the result will be the set `{1,2,3,4,5,6}`.

`intersect()`
The intersection of two sets are the elements that belong to both sets.

![](https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/a8b67f1f0903a0945ef304718316b7e2-image.png)

Write a function that accepts two Sets and return the set containing the elements that appear in both sets.

For example, given the set `{1,2,3,4}` and the set `{3,4,5,6}` the result will be the set `{3,4}`.

`difference()`
The difference between two sets A and B are all the elements that belong to A but not B.

![](https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/88870d4bb1eccc114ffb50b83ef93bf0-image.png)

Write a function that accepts two Sets and returns the difference between the sets.

For example, given the set `{1,2,3,4}` and the set `{3,4,5,6}` the difference is the set `{1,2}`.

Write the solutions to these tasks in the file named `src/setOperations.js`.

### Array Equality

Two arrays are equal if they contain the same elements but not necessarily in the same order. If any element in the arrays are repeated then the counts of the occurrence of that element must be the same in both arrays.

For example, the arrays `[5,4,3,2]` and `[2,3,4,5]` are equal because they are both the same length and contain the same elements. The arrays `[5,4,4,3]` and `[4,3,4,5]` are also equal because they contain the ame elements and even though the number 4 is repeated, it appears 2 times in both arrays.

The arrays `[9, 7, 7, 7]` and `[9, 7, 9, 9]` are not equal because the counts of `7` and `9` are not the same.

Write a function that accepts two arrays and returns true if the two arrays are equal, false otherwise. You may find it useful to use a Map in this solution.

Write the solution to this task in the file named `src/equalArrays.js`.
