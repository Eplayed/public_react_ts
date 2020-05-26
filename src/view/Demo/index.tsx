import React, { ChangeEvent, createContext } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { State, PageProps } from "./index.interface";
import styles from "./index.module.scss";
import DemoComponent from "../../components/SetTimeout/index";

const CounterContext = createContext({
  counter: 0,
});

class page extends React.Component<PageProps, State> {
  constructor(props: PageProps) {
    super(props);
    this.state = {
      name: "1",
      age: 12,
      value: "",
      userInfo: {
        address: "",
        gender: "",
        nickName: "",
      },
    };
  }

  componentDidMount() {}
  timeout() {}

  render() {
    const { name, value, userInfo } = this.state;
    return (
      // !pending && (
      <>
        <CounterContext.Provider value={{ counter: 0 }}>
          <DemoComponent handleClick={() => {}} countDown={100} />
        </CounterContext.Provider>
      </>
    );
    // );
  }
}

export default page;
