import React from 'react';

const SharedUserContext = React.createContext();

export class UserContextProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
           name: ''
        }
    }

    setName = name => {
        this.setState({
            layoutEnabled: name
        })
    }

    setAge = age => {
        this.setState({
            age: age
        })
    }

    setBirthday = bday => {
        this.setState({
            birthday: bday
        })
    }

    render() {
        const { children } = this.props;

        return (
            <SharedUserContext.Provider 
                value={{
                    name: this.state.name
                }}>
                {children}
            </SharedUserContext.Provider>
        )
    }
}

export const UserContextConsumer = SharedUserContext.Consumer;