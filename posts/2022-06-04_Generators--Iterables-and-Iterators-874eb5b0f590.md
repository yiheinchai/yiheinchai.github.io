---
title: 'Generators, Iterables and Iterators'
date: '2022-06-04'
---
The for loop calls the \_\_iter\_\_() method on the iterable which returns an iterator object.

The iterator object contains implementations of \_\_iter\_\_ method which returns self. And \_\_next\_\_ method which does the looping logic such as so:

> index+= 1
> 
> return data\_of\_iterable\[index\]

The for loop takes the iterator object, and calls \_\_next\_\_. The for loop takes the value returned from the \_\_next\_\_ method and sets that value as the for loop variable (ie. item | for item in items)

The for loop then runs the code block within the for loop.

Afterwards, the for loop then calls the \_\_next\_\_ method again and again until the stop condition is reached.

Generators
==========

Action of Generators in a for loop
----------------------------------

A generator is similar to the iterator object in that it has implementations of \_\_iter\_\_ and \_\_next\_\_ method. The \_\_iter\_\_ method returns self.

The for loop calls the \_\_iter\_\_ method on the generator, returning self (the generator).

The for loop calls the \_\_next\_\_ method, which does the looping logic such as so:

> current += 1
> 
> return current

Afterwards, the for loop then calls the \_\_next\_\_ method again and again until the stop condition is reached.

Creating generators
-------------------

It is possible to create a generator object manually by implementing a class with the \_\_iter\_\_ and \_\_next\_\_ method.

For example:

![](https://miro.medium.com/v2/resize:fit:318/1*IMHc--rtfyaki8DHBlJ9rQ.png)

However, a faster way to create a generator object is to simply use the ‘yield’ keyword in a function. The following demonstrates the use of ‘yield’ keyword and the generator object it creates under the hood.

![](https://miro.medium.com/v2/resize:fit:209/1*KOske6vLcYj63d_HA7nDcA.png)

Crossover between iterables and generators
==========================================

Realising that the iterator object is rather similar to a generator object, we can have a custom implementation of the \_\_iter\_\_ method which returns a generator object instead of a iterator object and the iterable would still work the same.