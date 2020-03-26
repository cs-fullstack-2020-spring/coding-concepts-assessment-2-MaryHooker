import React,{Component} from 'react';
import GuestBookForm from './GuestBookForm';
import GuestBookList from './GuestBookList';
import GuestBookListRsvp from './GuestBookListRsvp';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            guestBookList:[],
            guestBookListRsvp:[],
         }
    }

    addGuest = (info,rsvp) =>{

    }

    render() { 
        return ( 
            <div>
                <h1>Guest List Manager</h1>
                <div className='container'>
                <div>
                    <GuestBookForm/>
                </div>
                <div>
                    <GuestBookList/>
                </div>
                <div>
                    <GuestBookListRsvp/>
                </div>
                </div>
            </div>
         );
    }
}
 
export default AppContainer;