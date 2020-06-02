import React from "react";
import styles from "./index.module.scss";
import { State } from "./index.interface";

class Form extends React.Component<PageProps, State> {
  constructor(props: PageProps) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return <div className={styles.container}>form</div>;
  }
}

export default Form;
