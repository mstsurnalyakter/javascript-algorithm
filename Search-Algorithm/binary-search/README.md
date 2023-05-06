# Binary Search

In computer science, binary search, also known as half-interval search, logarithmic search, or binary chop, is a search algorithm that finds the position of a target value within a sorted array.Binary search compares the target value to the middle element of the array. If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half, again taking the middle element to compare to the target value, and repeating this until the target value is found. If the search ends with the remaining half being empty, the target is not in the array.

![Binary Search](https://upload.wikimedia.org/wikipedia/commons/8/83/Binary_Search_Depiction.svg)

**Time Complexity**: `O(log(n))` - since we split search area by two for every next iteration.


## References

- [YouTube](https://www.youtube.com/watch?v=oVj5ZvZd-cU&list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP&index=16)

- [YouTube](https://www.youtube.com/watch?v=75jGy1xAhhs&list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP&index=17)

- [YouTube](https://www.youtube.com/watch?v=P3YID7liBug&index=29&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

- [Wikipedia](https://en.wikipedia.org/wiki/Binary_search_algorithm)