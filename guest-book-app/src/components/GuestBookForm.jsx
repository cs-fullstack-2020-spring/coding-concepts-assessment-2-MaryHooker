import React,{Component} from 'react';

class GuestBookForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            guestName: '',
            guestPhoneNumber:'',
            guestRsvpStatus: false,
         }
    }

    handleInputs = (event) =>{

    }

    handleSubmission = (event) =>{

    }
    
    render() { 
        return ( 
            <div>
                <h2>Guest Book Form</h2>
            </div>
         );
    }
}
 
export default GuestBookForm;