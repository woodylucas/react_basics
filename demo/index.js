class App extends React.Component {
    render() {
        return (
            <div>
                <Hello to="Ringo" from="Paul" />
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

