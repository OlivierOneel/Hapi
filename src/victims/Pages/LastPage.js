import React from 'react';
import GeoLocation from '../../helper/helperComponents/GeoLocation';

class LastPage extends React.Component {

   constructor(props) {
      super(props);
      this.state = true;
      this.allowButton = this.allowButton.bind(this)
      this.helpSent = this.helpSent.bind(this)
   }

   allowButton() {
      this.setState();
   };

   helpSent() {
      alert("Help will be sent!")
   }

   render() {

      

      return (
         <div className='ThirdPageContainer'>
            <h1>Let us get your location.</h1>
            <GeoLocation/>
            <button id='DisabledButton' disabled={true} type="submit">Submit</button>
            <button id='EnabledButton' className="hiddenButton" type="submit" onClick={this.helpSent}>Submit</button>
         </div>
      );
   }
}

export default LastPage;