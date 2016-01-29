/// <reference path="typings/tsd.d.ts" />
interface GreeterProps {
    name: string;
}

class Greeter extends React.Component<GreeterProps, {}> {
    render(): JSX.Element {
        return <div>Hello, {this.props.name}</div>;
    }
}

//stateless functional component SimpleGreeter
let SimpleGreeter = ({name = 'world'}) => <div>Hello, {name}</div>;
