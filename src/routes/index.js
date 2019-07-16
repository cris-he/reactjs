/* React */
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

/* Redux */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authAction from '../actions/auth-action';
import * as settingAction from '../actions/setting-action';

/* i18n Support */
import { IntlProvider } from 'react-intl';
import i18n from '../utils/i18n';

/* Routes */
import PrivateRoutes from '../routes/PrivateRoutes';
import PublicRoutes from '../routes/PublicRoutes';


function RestrictedRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                rest.auth.token ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    );
}

class Routes extends Component {
    render() {
        console.log('Main Routes: props', this.props);
        const appLocale = i18n[this.props.settings.locale];

        return (
            <IntlProvider
                locale={appLocale.locale}
                messages={appLocale.messages}
            >
                <BrowserRouter>
                    <Switch>
                        <RestrictedRoute path='/account' component={PrivateRoutes} auth={this.props.user} />
                        <Route path="/" component={PublicRoutes} />
                    </Switch>
                </BrowserRouter>
            </IntlProvider>
        )
    }
}


function mapStateToProps(state, ownProps) {
    return {
        user: state.user,
        settings: state.settings
    }
}

function mapDispatchToProps(dispatch) {
    return {
        authAction: bindActionCreators(authAction, dispatch),
        settingAction: bindActionCreators(settingAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);