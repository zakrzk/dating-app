import React, {Component} from 'react';

export class TestDatabase extends Component {

    state = {
        isLoading: true,
        data: [],
        error: null
    }

    render() {
        const {isLoading, data, error} = this.state;
        return (
            <React.Fragment>
                {error ? <p>{error.message}</p> : null}
                {!isLoading ?

                    <p>{data.message}</p>

                    : (
                        <p>Loading...</p>
                    )}
            </React.Fragment>
        );
    }

    fetchData() {
        fetch(`server/database`)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    data: data,
                    isLoading: false,
                })
            )
            .catch(error => this.setState({ error, isLoading: false }));
    }
    componentDidMount() {
        this.fetchData();
    }

}