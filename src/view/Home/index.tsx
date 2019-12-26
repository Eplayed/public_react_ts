import React, { ChangeEvent } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { State, PageProps } from "./index.interface";

import About from '../About/index'

import styles from "./index.module.scss";

class Home extends React.Component<PageProps, State> {
    constructor(props: PageProps) {
        super(props);
    }


    render() {
        function Home() {
            return (
                <div>
                    <h2 className={styles.color}>Home</h2>
                </div>
            );
        }
        return (
            // !pending && (
            <>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                </Switch>
            </>
        );
        // );
    }
}


export default Home;
