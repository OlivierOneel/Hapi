import React from 'react';
 
const SecondPage = () => {
    return (
       <div>
          <h1>Hello again victims</h1>
        <button onClick={event =>window.location.href="/victims/last"}>
            Next Page
        </button>
        </div>
    );
}
 
export default SecondPage;