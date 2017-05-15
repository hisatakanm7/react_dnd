import React from 'react';
import ReactDOM from 'react-dom';

class Box extends React.Component {
    constructor() {
        super();
        this.state = {
            child1: "child value1",
            child2: "child value2",
            child3: "child value3",
            grand: "grand son",
        }
    }

    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <Child child1={this.state.child1} child2={this.state.child2} child3={this.state.child3} grand={this.state.grand} />
            </div>
        );
    }
}

class Child extends React.Component {
    render() {
        //↑のBoxコンポーネント（親）でChildコンポーネント（子）を呼び出すときに後ろにつけている値に↓のようにthis.props〜でアクセスできる。
        return (
            <div>
                <p>{this.props.child1}</p>
                <p>{this.props.child2}</p>
                <p>{this.props.child3}</p>
                <Grandson grand={this.props.grand} />
            </div>
        )
    }
}

class Grandson extends React.Component {
    render() {
        //BoxからChildへの時と同じように、↑でGrandsonコンポーネント呼び出し時にgrandという名前で値を渡しているからthis.props.grand
        // でアクセスできる。
        return (
            <p>{this.props.grand}</p>
        )
    }
}

ReactDOM.render((
    <div>
        <Box />
    </div>
), document.getElementById('root'));
