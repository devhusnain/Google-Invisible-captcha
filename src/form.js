import React, {Component} from 'react';
import Recaptcha from 'react-google-invisible-recaptcha';

export class Form extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        messageSent: false
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    sendMessage = () => {
        this.recaptcha.execute();
    }

    onResolved = () => {
        this.setState({messageSent: true})
        // Process Data //
        console.log(this.state);
    }

    render() {
        let confirmation = this.state.messageSent ?
            (<div>Message Sent!</div>) : null;
        return (
            <>
            {confirmation}
            <form style={{display:'flex',flexDirection: "column",width:"50%", margin:"auto" ,paddingTop:"20px"}}>
                
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" value={this.state.firstName} onChange={this.handleChange('firstName')} />
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" value={this.state.lastName} onChange={this.handleChange('lastName')} />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange('email')} />
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={this.state.message} onChange={this.handleChange('message')} />
                <button type="button" onClick={this.sendMessage}>Send</button>
                <Recaptcha
                        ref={ ref => this.recaptcha = ref }
                        sitekey="6Lf-53siAAAAAMCyJPYkGtXXRNz_ewOioPZu6j0U"
                        onResolved={ this.onResolved }
                    />
            </form>
            
            </>
        );
    }
}

export default Form;