This is a code spike to test RTK reactivity when you have a regular JavaScript class instance as part of Redux state.

A `Counter` plain JavaScript class with an instance method `getValue()` for getting the value of a counter is defined.
In one component, we render the current value of the counter, while in another component, we increment the value.
Unforunately every time you click to increment, the updated value is not being displayed.
This shouldn't be surprising since given that during the dispatching of the `increment()` Redux action, we perform the [side effect](https://redux.js.org/usage/side-effects-approaches#redux-and-side-effects)
of updating the internal state of a class instance. 

This code spikes works around this by adding a dirty bit (named `dirtyCounter`) to the state, which is incremented
whenever the `increment()` action is dispatched. By doing this, new state is effectively created thus achieving reactivity.
