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
         <div>
            <h1>Let us get your location.</h1>
            <GeoLocation/> //Ça c'est le comp. qui trouve la geoloc. Et le 'disabled=this.state' met le boutton disable if true.
            <button disabled={this.state} className="FirstPageButton" onClick={this.helpSent}>Submit</button> //disabled={this.state} c'est ça qui devrait rendre le bouton active
         </div>
      );
   }
}

export default LastPage;