import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import HomePage from  './pages/homepage/homepage.component';
import Shop_Page from './pages/shop/shop-page.component';
import Header from './components/header/header.component';
import SignInAndSignup from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import  { auth , createUserProfileDocument} from './firebase/firebase.utils';



class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null

    };
  }

  unsubscribeFromAuth = null;
  
  componentDidMount(){
    this.unsubscribeFromAuth =auth.onAuthStateChanged( async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state)
        });
      }
      this.setState({currentUser: userAuth}); 
    });
   
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
    return (
      <div >
        <Header currentUser={this.state.currentUser} />
        <switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={Shop_Page}/>
          <Route path='/signin' component={SignInAndSignup}/>
        </switch>
      </div>
    );
  }
  
}

export default App;
