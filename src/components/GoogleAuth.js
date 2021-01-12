import React, { Component } from 'react';

class GoogleAuth extends Component {
    state = {isSignedIn : null};
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                'clientId' : '29814973684-8eila50rt5m7n6lnvit0j8814cgijftl.apps.googleusercontent.com',
                'scope': 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn : this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
    }

    onAuthChange = () => {
        this.setState({isSignedIn : this.auth.isSignedIn.get()});
    }
    onSignInClick = () => {
        this.auth.signIn();
    }
    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderButton = () => {
        if (this.state.isSignedIn === null) {
            return null;
        } else if (this.state.isSignedIn) {
            return (
                <button onClick = {this.onSignOutClick} className = 'ui button red google'>
                    <i className = "google icon"></i>
                    SignOut
                </button>
            )
        } else {
            return (
                <button onClick = {this.onSignInClick} className = 'ui button red google'>
                    <i className = "google icon"></i>
                    SignIn
                </button>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderButton()}
            </div>
        );
    }
}

export default GoogleAuth;