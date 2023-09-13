import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Greetings from './Greetings';

//testing suites means to make tests of certain component grouping together which is possible by using describe()

describe('Greetings Component', () => {
    test('render "Hello World" text',() => {
        //Arrange
        render(<Greetings/>)
    
        //Act
        //here nothing to act ..example like clicking button etc.,
    
        //Assert
        const helloWorldElement = screen.getByText('Hello World!', {exact:true}) //checks for the exact match , otherwise fails the test
        expect(helloWorldElement).toBeInTheDocument();
    });
    test('render "this is my webpage" text  when button is not clicked',() => {
        //Arrange
        render(<Greetings/>)
    
        //Act
        //here nothing to act ..example like clicking button etc.,
    
        //Assert
        const outputElement = screen.getByText('this is my webpage', {exact:false}) //checks for the exact match , otherwise fails the test
        expect(outputElement).toBeInTheDocument();
    });
    test('render "Changed!" text  when button is clicked',() => {
        //Arrange
        render(<Greetings/>)
    
        //Act
        //here nothing to act ..example like clicking button etc.,
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)
    
        //Assert
        const outputElement = screen.getByText('Changed!', {exact:true}) //checks for the exact match , otherwise fails the test
        expect(outputElement).toBeInTheDocument();
    });

    test('does not render "this is my webpage" text  if button was clicked',() => {
        //Arrange
        render(<Greetings/>)

      //Act
        //here nothing to act ..example like clicking button etc.,
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)
    
        //Assert
        const outputElement = screen.queryByText('this is my webpage', {exact:false}) //checks for the exact match , otherwise fails the test
        expect(outputElement).toBeNull()
    });


})
