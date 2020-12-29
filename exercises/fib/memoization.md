# Memoization

**Memoization** ensures that a method does **NOT** run for the same inputs more than once by keeping a record of the results for the given input(*usually in a hash map**).

For example, a simple recursive method for computing the Fibonacci number:

```js

const fib = (n) => {
  if (n < 0) {
    throw new Error('Index was negative. No such thing as a negative index in a series');
  }

  //Base Case
  if (n === 0 || n === 1) {
    return n;
  }

  console.log(`computing fib(${n})\n`, n);

  return fib(n - 1) + fib(n - 2);
}

```

Will run the same input multiple times:

```bash
# output for fib(5)
computing fib(5)
computing fib(4)
computing fib(3)
computing fib(2)
computing fib(3)
computing fib(2)
5
```

We can imagine the recursive calls of the method as a tree, where the two children of a node are the two recursive calls it makes. We can see that the tree quickly branches out of control.

![Fib Tree](../../assets/fibonacci__binary_tree_recursive.svg)


To avoid the duplication work caused by the branching, we can wrap the method in a class that stores an instance variable, *memo*, that maps inputs to outputs. Then we simply:

1. check *memo* to see if we can avoid computing the answer for any given input, and
2. save the results of any calculation to *memo*.

```js

//Placeholder for example

```

```bash

# Placeholder for example calls

```

Now in our recurrence tree, no node appears more than twice:

![Memo Fib Tree](../../assets/fibonacci__binary_tree_memoized.svg)

Memoization is a common strategy for **dynamic programming** problems, which are problems where the solution is composed of solutions to the same problem with smaller inputs(as with the Fibonacci problem, above). The other common strategy for dynamic programming is **going bottom-up**, which is usually cleaner and often more efficient.