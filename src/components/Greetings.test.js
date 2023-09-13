import {render, screen} from '@testing-library/react';
import Greetings from './Greetings';


test('render Hello World text',() => {
    render(<Greetings/>)
    const helloWorldElement = screen.getByText('Hello World!', {exact:true}) //checks for the exact match , otherwise fails the test
    expect(helloWorldElement).toBeInTheDocument();
})