import React from 'react'
import { Button, Form } from 'semantic-ui-react'

export default class QuestionForm extends React.Component {
    render(){
    const categories = [
        {key:'h', text: 'History', value: 'history'},
        {key:'g', text: 'Geography', value: 'geography'},
        {key:'p', text: 'Programming', value: 'programming'},
        {key:'e', text: 'Entertainment', value: 'entertainment'},
        {key:'m', text: 'Misc', value: 'misc'},
    ]
        return (
            <Form>
                <Form.Select options={categories} placeholder='Categories'/>
                <Form.Group>
                    <Form.Input label='Question'/>
                    <Form.Input label='Correct Answer' />
                </Form.Group>
                <Button type='submit'> Submit </Button>
            </Form>
        )
    }
}