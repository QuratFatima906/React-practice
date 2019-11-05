import React from 'react';
// class App extends React.Component{
  //   render(){
    //     return(
    //       <h1>{this.props.txt}</h1>)
    //   }
    // }

    // // Define data type of props for a component
    // App.propTypes = {
      //   txt: React.propTypes.string.isRequired
      // }

      // // Set Default values for props
      // App.defaultProps = {
        //   txt: "Hey i'm the default value"
        // }

        class App extends React.Component {
          constructor(){
            super();
            this.state = {
              txt: "Hey I'm state text"
            }
          }
          update(e){
            this.setState({txt: e.target.value})
          }
          render(){
            return(
              <div>
              <h1>{this.state.txt}</h1>
              <Widget update = {this.update.bind(this)}/>
              <Button>I <Heart /> React</Button>
              </div>
              )
          }
        }

        const Widget = (props) => <input type="text"
              onChange = {props.update}/>
        const Button = (props) => <button>{props.children}</button>
        const Heart = (props) => <span>&hearts;</span>

        export default App