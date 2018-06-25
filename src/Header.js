import React, {Component} from 'react'

class Header extends Component {
    render(){

        let {currentUser, isLoggedIn} = this.props;
        currentUser = 'Logged in as ' + currentUser;

        // let currentUser = this.props.currentUser;
        // let isLoggedIn = this.props.isLoggedIn;

        return(
            <div>Header {isLoggedIn && currentUser}</div>
        )
    }
}

export default Header;