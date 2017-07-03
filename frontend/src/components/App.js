import React from 'react'

import {questionsService} from '../app'

import QuestionForm from './QuestionForm'

class App extends React.Component {
  
  constructor (props) {
    super(props)

    this.state = {
      questions: []
    }
  }

  componentWillMount(){
    questionsService.find()
    .then((result)=>{
      console.log('result: ', result.data)
      this.setState({questions: result.data})
    })
  }

  render() {
    const { questions } = this.state
    if (questions.length === 0)
      return (<div><QuestionForm/></div>)
    return (
      <div>
        Hello world
      </div>
    );
  }
}

export default App;
