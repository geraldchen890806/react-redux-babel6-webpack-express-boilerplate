

import React, {Component} from 'react';
import {render} from 'react-dom';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as actions from "./actions";

@connect(state => ({
    ...state.homeIndex
}), dispatch => ({
    actions: bindActionCreators(actions, dispatch)
}))
export default class Home extends Component {

    static contextTypes = {
        router: React.PropTypes.object.isRequired
    }

    render() {
        var {router} = this.context;
        var {test, actions} = this.props;
        return (
            <div className="home">
                <h1>HOME PAGE {test.toString()}</h1>
                <a onClick={() => {
                    actions.change();
                }}>click</a>
            </div>
        );
    }
}
