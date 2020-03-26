import React,{Component} from 'react';

class GuestBookListRsvp extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h2>RSVPed</h2>
                {
                    this.props.guestBookListRsvp.map((guest,index)=>{
                        return(
                            <div key={index}>
                                <p>Guest: {guest.guestName}</p>
                                <p>Phone Number: {guest.guestPhoneNumber}</p>
                            </div>
                        )
                    }

                    )
                }
            </div>
         );
    }
}
 
export default GuestBookListRsvp;