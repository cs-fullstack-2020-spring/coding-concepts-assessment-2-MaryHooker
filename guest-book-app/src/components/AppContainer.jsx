import React, { Component } from 'react';
import GuestBookForm from './GuestBookForm';
import GuestBookList from './GuestBookList';
import GuestBookListRsvp from './GuestBookListRsvp';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        //set initial state
        this.state = {
            guestBookList: [], //array to hold form responses for no RSVP
            guestBookListRsvp: [],//array to hold form responses for RSVP
        }
    }

    // //test mapping in child components without form by adding mock data to array
    // componentDidMount(){
    //     this.state.guestBookList.push(
    //         {
    //             guestName: 'Mary',
    //             guestPhoneNumber: 9014969595,
    //         }
    //     )
    //     //update state globally
    //     this.setState({guestBookList:this.state.guestBookList})

    //     this.state.guestBookListRsvp.push(
    //         {
    //             guestName: 'Charlie',
    //             guestPhoneNumber: 9016548965,
    //         }
    //     )
    //      //update state globally 
    //      this.setState({guestBookListRsvp:this.state.guestBookListRsvp})
    // }
    
    //callback function to update state of arrays
    addGuest = (info, rsvp) => {
        //update above array
        this.setState({ guestBookList: info})
        //update above array
        this.setState({guestBookListRsvp: rsvp})
    }
    //display title, form for adding guest and two lists (3 columns)
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
                    <div>
                        <GuestBookListRsvp guestBookListRsvp={this.state.guestBookListRsvp} />
                    </div>
                </div>
            </div>
        );
    }
}

export default AppContainer;