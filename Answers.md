# Answers

1.  What is React JS and what problems does it try and solve?
React is a Javascript UI library. It tries to solve the problem of a website constantly having to read and update state in an efficient and rapid manner.
1.  What does it mean to _think_ in react?
Think in pieces. How can I break this project down into bite sized components of a whole? Thinking in react is thinking in terms of re-usability and
1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
A functional component does not have state and is often used for smaller components that have no need to apply any state other than the state passed to it from its parent component.
A class component is often used as a parent component that stores state(data) and passes that state down to any component that might need to read state and change based off of that state.
1.  Describe state.
State is essentially data in key: value pairs that is used to efficiently update certain pieces of a whole. It is very specific, making it an excellent way to change certain pieces of a page while ignoring any elements that don't need any change in state.
1.  Describe props.
Props is short for properties. Often an extension of State they are often primarily used to display ever changing data to the user. Props is the data that is passed around for the user to view/interact with
