import React, { ChangeEvent, createContext } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { State, PageProps } from "./index.interface";
import styles from "./index.module.scss";

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

  render() {
    const { name, value, userInfo } = this.state;
    return (
      // !pending && (
      <>Demo</>
    );
    // );
  }
}

export default page;
