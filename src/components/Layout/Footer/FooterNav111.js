import React, {Component} from "react";
import {connect} from "react-redux";
import {
    HomeFilled,
    RightCircleFilled,
    PlayCircleFilled,
    CrownFilled,
} from "@ant-design/icons";
import "./index.css";

const mapStateToProps = (state) => {
    return {
        menuKey: state.tabs.menuKey
    }
}

const mapDispatchToProps = (
    dispatch,
    ownProps
) => {
    return {
        onChangeTab: () => {
            dispatch({
                type: 'CHANGE_TAB',
                menuKey: ownProps.menuKey
            });
        }
    };
}

class AppMenuItem extends Component {
    render() {
        console.log(this.props)
        const {menuKey, onChangeTab} = this.props;
        return (
            <div
                onClick={onChangeTab}
                className={`app-menu-item ${
                    menuKey === this.props.menuName
                        ? "app-menu-item-selected"
                        : ""
                }`}
            >
                <div>{this.props.menuIcon}</div>
                <div>{this.props.children}</div>
            </div>
        );
    }
}

const VisibleAppMenuItem = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppMenuItem)

class AppMenu extends Component {
    render() {
        return (
            <div className="app-menu">
                <VisibleAppMenuItem
                    menuKey="home"
                    menuIcon={<HomeFilled/>}
                    menuName="home"
                >
                    首页
                </VisibleAppMenuItem>
                <VisibleAppMenuItem
                    menuKey="app"
                    menuIcon={<RightCircleFilled/>}
                    menuName="app"
                >
                    西瓜视频
                </VisibleAppMenuItem>
                <VisibleAppMenuItem
                    menuKey="movie"
                    menuIcon={<PlayCircleFilled/>}
                    menuName="movie"
                >
                    放映厅
                </VisibleAppMenuItem>
                <VisibleAppMenuItem
                    menuKey="user"
                    menuIcon={<CrownFilled/>}
                    menuName="user"
                >
                    我的
                </VisibleAppMenuItem>
            </div>
        );
    }
}

export default class FooterNav extends Component {
    render() {
        return <AppMenu/>;
    }
}
