import React from 'react';
import ReactDOM from 'react-dom';
import Tabs, { Tab } from 'material-react-components/dist/Tabs';

const node = document.createElement('div');
document.body.appendChild(node);

class ExampleUsage extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      tab: 0,
    };
  }

  onChange(e, index) {
    this.setState({
      tab: index,
    });
  }

  render() {
    return (
      <Tabs index={this.state.tab} onChange={this.onChange}>
        <Tab label="foo" />
        <Tab label="bar" />
        <Tab label="baz" />
      </Tabs>
    );
  }
}

ReactDOM.render(<ExampleUsage />, node);
