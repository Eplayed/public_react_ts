import React, { ChangeEvent } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { State, PageProps } from "./index.interface";



import styles from "./index.module.scss";

class Home extends React.Component<PageProps, State> {
    constructor(props: PageProps) {
        super(props);
    }


    render() {
        return (
            // !pending && (
            <>
                <div>
                    <h2 className={styles.color}>Home</h2>
                </div>

            </>
        );
        // );
    }
}


export default Home;
