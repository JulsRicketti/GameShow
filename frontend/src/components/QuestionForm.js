import React from 'react'
import { questionsService } from '../app'
import { Button, Form } from 'semantic-ui-react'

const categories = [
        {key:'h', text: 'History', value: 'history'},
        {key:'g', text: 'Geography', value: 'geography'},
        {key:'p', text: 'Programming', value: 'programming'},
        {key:'e', text: 'Entertainment', value: 'entertainment'},
        {key:'m', text: 'Misc', value: 'misc'},
    ]

export default class QuestionForm extends React.Component {
    
    constructor (props) {
        super(props)

        this.state = {
            question: '',
            answer: '',
            category: ''
        }
    }

    handleSubmit(evt){
        const { question, answer, category } = this.state
        questionsService.create({
            question: question,
            answer: answer,
            category
        })
        .then(()=>{
            console.log('question successfully created!')
        })
    }

    render(){
        return (
            <Form>
                <Form.Select options={categories} placeholder='Categories'/>
                <Form.Group>
                    <Form.Input label='Question'/>
                    <Form.Input label='Correct Answer' />
                </Form.Group>
                <Button type='submit' onClick={(evt) => this.handleSubmit(evt)}> Submit </Button>
            </Form>
        )
    }
}