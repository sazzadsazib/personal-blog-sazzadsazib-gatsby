---
title: A beginner introduction to React Context API
date: "2018-08-28T22:12:03.284Z"
---

Hello everybody, today I am going to talk about React Context API, If you used redux before you will find it pretty easy and simple, For others, Context API is a State Management system for react. It helps when you have nested component which need to share state and you have to pass states as props every single component. So lets start how you do that..

So **React Context API** has **a provider and a consumer**. Provider provides data and consumer consumes the data where ever you need it.

To start create a **Context.JS** or any named Javascript File.

```javascript
import React, { Component } from "react"

const AppContext = React.createContext()

class AppProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      setState: this.handleSetState,
      user: "misfit",
    }
  }

  handleSetState = Data => {
    this.setState(Data)
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}
export default AppProvider

export const AppContextConsumer = AppContext.Consumer
```

To many things to notice here. First of all, I’ve created context API using,

```javascript
const AppContext = React.createContext()
```

Now AppProvider class implements provider part of Context API, where I have some States (SetState part I will comeback), & Render this,

```javascript
<AppContext.Provider value={this.state}>
  {this.props.children}
</AppContext.Provider>
```

where this.props.children is any component that is wrapped inside AppProvider Component. and value is where we pass the state.


Now, handleSetState function takes any data and set it to provider’s state. Its needed when you need to change any data from any child component. This function is also in state so every children gets that function as a prop.

```javascript
export const AppContextConsumer = AppContext.Consumer;
```
this is where I export Consumer Part of the Context API,

Now How to use it on a App.js or any root file?

```javascript
import React, { Component } from 'react';
import AppProvider from "./Context";
import {AppContextConsumer} from './Context';
import MyComponent from './MyComponent';
class App extends Component {
    render() {
        return (
            <AppProvider>
                <MyComponent />
            </AppProvider>
    );
    }
}
export default App;
```


So We Import Both AppProvider and AppContextConsumer from “Context.js” file, then we Wrap the whole App Component inside AppProvider component so that Child Components get AppProvider Components State.


So How do we get Data inside MyComponent?

```javascript
import React, {Component} from 'react';
import {AppContextConsumer} from './../AppProvider';
import './../assets/css/coverStyle.css';

const WithContext = (Component) => {
    return (props) => (
        <AppContextConsumer>
            {(context) =>  <Component {...props} context={context} />}
        </AppContextConsumer>
    )
};

class MyComponent extends Component {

    componentDidMount(){
       this.props.context.setState({'newState':"Added"});
    }
    componentDidUpdate(prevProps, prevState) {
      console.log(this.props.context);
    }

    render() {
        // console.log(this.props.context);
        return(
            <AppContextConsumer>
                {(context) =>
                   <div className="cover-wrapper">
                       {/*{console.log(context)}*/}
                       <button onClick={()=>{this.props.context.setState({'AddNewState': 'onButtonClick'})}} >Add</button>
                   </div>
                }
            </AppContextConsumer>
        )
    }
}
export default WithContext(MyComponent);

```

So WithContext Component takes a component and sets WithContext Consumer data as child component’s props data, in this case, MyComponent.


So,
```javascript
<AppContextConsumer>
    {(context) =>
       <div className="cover-wrapper">
           {console.log(context)}
       </div> 
    }
</AppContextConsumer>
```

this context gives you data but if you need data in componentDidMount() or componentDidUpdate() then you need to use WithContext type of component to get the data as props. if you use it you will get inside


```javascript
this.props.context
```

## Question: How do I change State Data of Context Provider?
**Answer:** As we already added a function named setState in AppProvider class so just call

```javascript
this.props.context.setState({key: "value"});
```

you will set the data to the provider.

## Question: Why do So much hassle to maintain state?

**Answer:** Well, if you are in small scale project which needs less state you probably should be fine with normal props and state but when projects gets large you or have many nested component you will start losing states if you are not too much careful. so for these cases its better to use context API,

This is just one way of doing this, there are many ways to implement this,

let me know your thoughts,

[Find Me On Github](https://github.com/sazzadsazib)
