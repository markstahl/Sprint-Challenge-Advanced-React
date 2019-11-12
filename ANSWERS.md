- [ ] Why would you use class component over function components (removing hooks from the question)?

    You could use a class component over a function component when you want to extend upon the React Component module and add more logic inside your code. This is not avaliable in functional components because you cannot access the lifecycle methods.

- [ ] Name three lifecycle methods and their purposes.

    componentDidMount - This is executed after the first render. You can also call setState here, which will cause another render to happen.

    componentDidUpdate - This is executed after updating has happened. Obviously letting you know it updated.

    componentWillUnmount - this is executed just before the component is unmounted. This is used to perform any necessary bug fixes and code cleanup.

- [ ] What is the purpose of a custom hook?

   To use stateful logic between components and call their functions accordingly.

- [ ] Why is it important to test our apps?

   Tests make bugs less prevelant and therefor are good for programs that are much larger and have more developers adding to the master code. It is much easier to test code and find the problem than weeding through thousands of lines of code for something so menial as a missing bracket or colon.