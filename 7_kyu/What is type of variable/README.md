# DESCRIPTION:

Create a function to return true type of variable, i.e.

```js
type([]) == 'array';
type({}) == 'object';
type('') == 'string';
type(NaN) == 'number';
```
