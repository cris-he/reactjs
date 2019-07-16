import React from 'react';
import { Route,Switch, Redirect } from 'react-router-dom';

import Simple from '../pages/Simple';


function RestrictedRoute({ component: Component, ...rest }) {
    console.log('RestrictedRoute', rest)
    return (
        <Route
            {...rest}
            render={props =>
                true ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/home",
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    );
}


const PrivateRoutes = () => (
    <Switch>
        <Route path='/account/simple' component={Simple} />
    </Switch>
)


export default PrivateRoutes;


