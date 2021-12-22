/*1) Determine the Big O for the following algorithm: You are sitting in a
room with 15 people. You want to find a playmate for your dog,
preferably of the same breed. So you want to know if anyone out of the
15 people have the same breed as your dog. You stand up and yell out,
who here has a golden retriever and would like to be a playdate for my
golden. Someone yells - "I do, be happy to bring him over" 

-Answer-

This is similar to looking up how many Golden Retrievers exist in a dataset
and since you are directly looking for a value this is 0(1)*/

/* 2) Determine the Big O for the following algorithm: You are sitting in a
room with 15 people. You want to find a playmate for your dog who is of
the same breed. So you want to know if anyone out of the 15 people
have the same breed as your dog. You start with the first person and ask
him if he has a golden retriever. He says no, then you ask the next
person, and the next, and the next until you find someone who has a
golden or there is no one else to ask. 

-Answer-

The list of 15 people is simple to an array of 15 people and you are working
through them iterratively.  Upon finding someone with a golden retriever
you will stop giving this a best case of o(1), and a worst case of o(n)

Even or Odd

function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else {
        return false;
    }

    o(1) as it only does a single calculation.

function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

o(n ^ 2)

4. o(n)

5. best case o(1), worst case o(n)

6. o(n^2)

7. This index numbers in a fibonacci sequence, and the runtime is 0(2n)

8. Each iteration of the search is removing half of the values from the array
resulting in o(log n)

9. o(1)
*/


