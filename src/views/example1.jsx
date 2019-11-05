import React from 'react';

function App() {
    return (
        <div className="App">
            <section>
                <h4>Layout Toggle</h4>
                <a href='/example1?layoutEnabled=true'>
                    <button>
                        Enable Layout
                    </button>
                </a>
                <a href='/example1?layoutEnabled=false'>
                    <button>
                        Disable Layout
                    </button>
                </a>
                
            </section>
            
            <section>
                <h5>This is a form</h5>
                <form>
                    <label>
                        Name
                        <input type='text' />
                    </label>
                    <label>
                        Title
                        <input type='text' />
                    </label>
                    <label>
                        Name
                        <textarea />
                    </label>
                </form>
            </section>
        </div>
    );
}

export default App;
