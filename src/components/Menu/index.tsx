import React, { SFC } from "react";
import { Menu, Icon } from 'antd';
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

class MyMenu extends React.Component<PageProps, State> {
    state = {
        current: 'home',
    };

    handleClick = (e: any) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="home">
                    <Icon type="mail" />
                    <div style={{ display: 'inline-block' }}>
                        <Link to="/">Home</Link>
                    </div>

                </Menu.Item>
                <Menu.Item key="about">
                    <Icon type="mail" />
                    <div style={{ display: 'inline-block' }}>
                        <Link to="/About">About</Link>
                    </div>
                </Menu.Item>
                <Menu.Item key="app" disabled>
                    <Icon type="appstore" />About
        </Menu.Item>
                <SubMenu
                    title={
                        <span className="submenu-title-wrapper">
                            <Icon type="setting" />
                            Navigation Three - Submenu
            </span>
                    }
                >
                    <Menu.ItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="alipay">
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                        Navigation Four - Link
          </a>
                </Menu.Item>
            </Menu>
        );
    }
}
export default MyMenu
