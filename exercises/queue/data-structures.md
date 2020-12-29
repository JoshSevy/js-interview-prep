# Data Structures

Ways of organizing information with optimal 'runtime complexity' for adding or removing records

Javascript natively implements several data structures. **You will still be asked about 'inferior' data structures.**

## The Queue Data Structure

A queue is a ordered list of elements where an element is inserted at the end of the queue and is removed from the front of the queue.

Unlike a stack, which works based on the last-in, first-out(LIFO) principle, a queue works based on the first in, first-out(FIFO) principle.

A queue has two main operations involving inserting a new element and removing an existing element.

The insertion operation is called *enqueue*, and the removal operation is called *dequeue*. The *enqueue* operation inserts an element at the end of the queue, whereas the *dequeue* operation removes an element from the from of a queue.

The following figure illustrates a queue:

![Queue Diagram](../../assets/JavaScript-Queue-Illustration.png)

Another important operation of a queue is getting the element at the front called the *peek*. Different from the *dequeue* operation, the *peek* operation just returns the element at the front without modifying the queue.

The name *queue* comes from the analogy to a queue of customers at a bank. The customer who comes first will be served first, and the one who comes later is queued at the end of the queue and will be served later.

