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
              txt: "Hey I'm state text",
              currentEvent: "---"
            }
            this.update = this.update.bind(this)
            this.updateEvent = this.updateEvent.bind(this)
          }
          update(e){
            this.setState({
              txt: e.target.value

            })
          }
          updateEvent(e){
            this.setState({currentEvent: e.type})
          }
          render(){
            return(
              <div>
              <h1>{this.state.txt}</h1>
              <Widget update = {this.update.bind(this)}/>
              <Button>I <Heart /> React</Button>
              <h1>{this.state.currentEvent}</h1>
              <textarea 
              onKeyPress = {this.updateEvent}
              onCopy = {this.updateEvent}
              onPaste = {this.updateEvent}
              onChange = {this.updateEvent}
              cols ="30"
              rows = "10" />
              </div>
              )
          }
        }

        const Widget = (props) => <input type="text"
        onChange = {props.update}/>
        const Button = (props) => <button>{props.children}</button>
        const Heart = (props) => <span>&hearts;</span>

        export default App