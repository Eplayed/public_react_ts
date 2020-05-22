import React from "react";
import styles from "./index.module.less";
import { State } from "./index.interface";

class Page extends React.Component<PageProps, State> {
  constructor(props: PageProps) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return <div className={styles.container}></div>;
  }
}

export default Page;
