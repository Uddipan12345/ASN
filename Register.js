import React, { Component } from 'react'
import { View, Button, TextInput} from 'react-native'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getAuth } from 'firebase/auth'

export class Register extends Component {
  constructor(props){
    super(props);
    this.state= {
        email: '',
        password: '',
        name: ''
    }
    this.onSignUp = this.onSignUp.bind(this)// sharing state variables with onSignUP
  }

  onSignUp(){
    const {email,password,name} =this.state;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth,email,password)
    .then((result)=>{
        console.log(result);
     })
     .catch((error)=>{
        console.log(error);
     })
  }
  render() {
    return (
      <View>
        <TextInput 
            placeholder='name'
            onChangeText={(name) => this.setState({name})}
        />
        <TextInput 
            placeholder='email'
            onChangeText={(email) => this.setState({email})}
        />
        <TextInput 
            placeholder='password'
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
        />
        <Button 
          onPress={()=> this.onSignUp()}
          title="Sign Up"
        />
        <Button onPress={() => this.props.navigation.navigate("Chatscreen")} title="Go to chat window" />
      </View>
    )
  }
}

export default Register
