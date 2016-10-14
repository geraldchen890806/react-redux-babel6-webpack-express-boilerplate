

import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import Header from "./header";
import Footer from "./footer";

@connect((state, ownProps) => ({
    ...state.tradeFutureGroup,
    location: ownProps.location
}))
export default class App extends Component {

    static contextTypes = {
        router: React.PropTypes.object.isRequired
    }

    render() {
        return (
            <div>
                <Header {...this.props} {...this.context}/>
                <main>
                    {this.props.children}
                </main>
                <Footer/>
            </div>
        );
    }
}
