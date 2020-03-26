import React, { Component } from 'react';
import GuestBookForm from './GuestBookForm';
import GuestBookList from './GuestBookList';
// import GuestBookListRsvp from './GuestBookListRsvp';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guestBookList: [],
            // guestBookListRsvp: [],
        }
    }
    //callback function to update state of arrays
    addGuest = (info) => {

        this.setState({ guestBookList: info })

    }

    render() {
        // //sanity
        // console.log(this.state.guestBookList)
        return (
            <div>
                <h1>Guest List Manager</h1>
                <div className='container'>
                    <div>
                        <GuestBookForm addGuest={this.addGuest} />
                    </div>
                    <div>
                        <GuestBookList guestBookList={this.state.guestBookList} />
                    </div>
                    {/* <div>
                        <GuestBookListRsvp guestBookListRsvp={this.state.guestBookListRsvp} />
                    </div> */}
                </div>
            </div>
        );
    }
}

export default AppContainer;