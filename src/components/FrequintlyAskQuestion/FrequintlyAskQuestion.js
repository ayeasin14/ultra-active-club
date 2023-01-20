import React from 'react';
import './FrequintlyAskQuestion.css';

const FrequintlyAskQuestion = () => {
    return (
        <div>
            <div className='footer'>
                <h1>Interview Questions !</h1>
                <div className='question-answer'>
                    <h5 className='question'>How does React work?</h5>
                    <p className='answer'>While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
                        Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
                        Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js. </p>
                </div>
                <div className='question-answer'>
                    <h5 className='question'>What is the Difference between props and state?</h5>
                    <p className='answer'>Props: The Data is passed from one component to another.which is Immutable (cannot be modified).Props can be used with state and functional components.Props are read-only.
                        <br />
                        State: The Data is passed within the component only.	It is Mutable ( can be modified).State can be used only with the state components/class component (Before 16.0).	State is both read and write.</p>
                </div>
                <div className='question-answer'>
                    <h5 className='question'>What does useEffect do ?</h5>
                    <p className='answer'>By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API !!</p>
                </div>
            </div>
        </div>
    );
};

export default FrequintlyAskQuestion;