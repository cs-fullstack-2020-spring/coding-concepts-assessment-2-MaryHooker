import React,{Component} from 'react';

class GuestBookForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            guestName: '',
            guestPhoneNumber:'',
            guestBookList:[],
            guestRsvpStatus: false,
            guestBookListRsvp:[],
         }
    }

    //function to update state when user uses input field
    handleInputs = (event) =>{
        if(event.target.name==='name'){
            this.setState({guestName:event.target.value})
        } else if(event.target.name==='number'){
            this.setState({guestPhoneNumber:event.target.value})
        } else if(event.target.name==='rsvp'){
            this.setState({guestRsvpStatus:true})
        } 
    }

    //function to run everytime button is pushed
    handleSubmission = (event) =>{
        event.preventDefault();
        //push into above array
        this.state.guestBookList.push(
            {
                guestName:this.state.guestName,
                guestPhoneNumber:this.state.guestPhoneNumber
            }
        )
        
        //gloabally update status
        this.setState(
            {
                guestBookList: this.state.guestBookList
            }
        );
        // //sanity
        // console.log(this.state.guestBookList)
        // console.log(`Submission ${this.state.guestName}`)
        // console.log(`Submission ${this.state.guestPhoneNumber}`)
        // console.log(`Submission ${this.state.guestRsvpStatus}`)
            
        //callback function
        this.props.addGuest(this.state.guestBookList)
    }

    render() { 
        return ( 
            <div>
                <h2>Guest Book Form</h2>
                <form action="">
                <fieldset>
                    <legend>Add Guest</legend>
                <div>
                    <label htmlFor="name">Guest Name: </label>
                    <br/>
                    <input type="text" id='name' name='name' value={this.state.guestName} onChange={this.handleInputs}/>
                </div>
                <div>
                    <label htmlFor="number">Guest Phone Number: </label>
                    <br/>
                    <input type="text" id='number' name='number' value={this.state.guestPhoneNumber} onChange={this.handleInputs}/>
                </div>
                <div>
                    <label htmlFor="rsvp">RSVP: </label>
                    <input type="checkbox" id='rsvp' name='rsvp' value={this.state.guestRsvpStatus} onChange={this.handleInputs}/>
                </div>
                <div>
                    <button onClick={this.handleSubmission}>Submit Guest</button>
                </div>
                </fieldset>
                </form>
            </div>
         );
    }
}
 
export default GuestBookForm;