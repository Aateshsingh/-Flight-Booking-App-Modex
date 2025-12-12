
import React from 'react'

import './customerservice.css'
export default class App extends React.Component {
    
    moveToCusPage = e => {
        e.preventDefault()
        window.location.href = '/ServicePage'
    }
    
    render(){
    return (
        
            <div className="row">

                <div className="column3" >
                    <div className="seatInfo">
                    <p className="new">SWADESHI AIRLINES</p>
                    <center>
                    <div className="cen">
                            <form >
                            <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label className='t'>Name: &nbsp;&nbsp;&nbsp;</label>
                        <input type="text" name="name" id="d" required />
                        <br/>
                        <label className='t'>Email-Id : &nbsp;&nbsp;&nbsp;</label>
                        <input type="email" name="usr_email" id="d" required  />
                        <br/><br/>
                        <label className='bo' htmlFor="message">FEEDBACK</label> <br />
                        <textarea id="message" name="message"></textarea>
                        <br/><br/>
                        <p className='ne'>RATING</p>
                        
                            <center>
                            <div className="form-check form-check-inline">
                            <input className="form-check-input cen" type="radio" name="rating" id="1" value="1" />
                            <label className="form-check-label" htmlFor="1">1</label>
                            </div>
                            <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="rating" id="2" value="2"/>
                            <label className="form-check-label" htmlFor="2">2</label>
                            </div>
                            <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="rating" id="3" value="3"/>
                            <label className="form-check-label" htmlFor="3">3</label>
                            </div>
                            <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="rating" id="4" value="4"/>
                            <label className="form-check-label" htmlFor="4">4</label>
                            </div>
                            <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="rating" id="5" value="5"/>
                            <label className="form-check-label" htmlFor="5">5</label>
                            </div>
                            </center>
                            <br/><br/>
                        <button type="submit" className="myform-btn bt" onClick={e => this.moveToCusPage(e)}><center>submit</center></button> &nbsp;&nbsp;
                        <button type="reset" className="myform-btn bt1" value="clear"><center>clear</center></button>
                            </form>
                    
                        </div>
                    <br/><br/>
                    
                    
                        <br/>
                        <center>
                            <br/>
                        <p className="te">EMAIL: swadesiairlines@gmail.com</p>
                    <p className="te">CONTACT NUMBER: 9677934637</p>
                    <p className="te">ADDRESS:91-Z/19,DELHI,110001 </p>
                    </center>
                        </center>
                        <br/><br/>
                        <p className='bo'>If you need any information send mail</p>

        <button type="button" className='bo' onClick={() => window.location.href='mailto:harishramaraj13@gmail.com'}>Report via mail</button><br />
                        
                        
                    </div>
                </div>

            </div>

            
    )

    }
}

// arigato