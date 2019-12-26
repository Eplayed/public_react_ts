import React, { ChangeEvent, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { State, PageProps } from "./index.interface";


const About =(state:State,props:PageProps) =>{
  // react hooks 写法  https://react.docschina.org/docs/hooks-overview.html

    const [count, setCount] = useState(0);
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }


export default About;