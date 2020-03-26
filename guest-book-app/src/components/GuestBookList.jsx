import React,{Component} from 'react';

class GuestBookList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
               <h2>Waiting for response</h2>
               {
                   this.props.guestBookList.map((guest,index) =>{
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
 
export default GuestBookList;