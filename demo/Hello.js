class Hello extends React.Component {
    render() {
        console.log('Props', this.props.to)
        return (
            <div>
                <h1>Hi {this.props.to}  from {this.props.from} </h1>
            </div>
        )
    }
}