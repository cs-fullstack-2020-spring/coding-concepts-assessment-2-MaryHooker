import React, { Component } from 'react';
import GuestBookForm from './GuestBookForm';
import GuestBookList from './GuestBookList';
import GuestBookListRsvp from './GuestBookListRsvp';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guestBookList: [
                {
                    guestName: 'Mary',
                    guestPhoneNumber: '',
                },
            ],
            guestBookListRsvp: [],
        }
    }

    addGuest = (info, rsvp) => {
        // this.setState(
        //     {
        //         guestBookList:
        //         {
        //             guestName: info,
        //             guestPhoneNumber: info,
        //         }
        //     }
        // )
        // this.setState(
        //     {
        //         guestBookListRsvp: rsvp
        //     }
        // )
        //sanity
        console.log(`callback function ${this.state.guestBookList.guestName}`)
    }

    render() {
        return (
            <div>
                <h1>Guest List Manager</h1>
                <div className='container'>
                    <div>
                        <GuestBookForm addGuest={this.addGuest} />
                    </div>
                    {/* <div>
                        <GuestBookList guestBookList={this.state.guestBookList} />
                    </div>
                    <div>
                        <GuestBookListRsvp guestBookListRsvp={this.state.guestBookListRsvp} />
                    </div> */}
                </div>
            </div>
        );
    }
}

export default AppContainer;