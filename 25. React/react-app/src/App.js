import React from 'react';
import Badge from './components/badge'

/* 
class App extends React.Component {
  myFunc(){

  }
  render(){
    return (
      <div>
        <h1>My application</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe fugiat enim architecto nesciunt vero deserunt libero assumenda totam, perspiciatis exercitationem numquam aliquid, itaque ullam quod! Mollitia saepe dolore hic. Ad.</p>
      </div>
    );
  }
}
 */


const App = () => {
  const sendNotifications = () => {
    console.log("sendig notification");
  }
  const showSent = () => {
    console.log("show sent messages");
  }
  return (
    <div>
      <h1>My application</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe fugiat enim architecto nesciunt vero deserunt libero assumenda totam, perspiciatis exercitationem numquam aliquid, itaque ullam quod! Mollitia saepe dolore hic. Ad.</p>
      <Badge myMethod={sendNotifications} text="Notification" color="black" backgroundColor="darkseagreen" count="42" /><br />
      <Badge myMethod={showSent} text="Sent" count="15" />
    </div>
  );
}


export default App;
