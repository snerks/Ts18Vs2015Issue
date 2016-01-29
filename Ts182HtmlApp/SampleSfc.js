/// <reference path="typings/tsd.d.ts" />
class Greeter extends React.Component {
    render() {
        return React.createElement("div", null, "Hello, ", this.props.name);
    }
}
//stateless functional component SimpleGreeter
let SimpleGreeter = ({ name = 'world' }) => React.createElement("div", null, "Hello, ", name);
//# sourceMappingURL=SampleSfc.js.map