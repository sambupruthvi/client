import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';



class GoogleAuth extends Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                'clientId' : '29814973684-8eila50rt5m7n6lnvit0j8814cgijftl.apps.googleusercontent.com',
                'scope': 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                // this.setState({isSignedIn : this.auth.isSignedIn.get()});
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId())
        } else {
            this.props.signOut()
        }
    }
    onSignInClick = () => {
        this.auth.signIn();
    }
    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderButton = () => {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
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

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn}
}
export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);