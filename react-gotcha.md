Gotchas

- .defaultProps only comes into effect when the value of the prop is undefined. So,
if the value is null, it will not come into effect.

- setState does not take effect immediately.

- The creators of React and Redux was heavily influenced by "pure function". Try update objects with new objects (like use Object.asssign()) rather than simply modify an objects

- forceUpdate should rarely be used.


- forceUpdate seems to be best suited for displaying results of impure functions

- forceUpdate seems to work when the impure function is in an expression ({}) but not when the function is in state

  Questions
- e.target vs ref
- How to integrate with third-party libraries?
