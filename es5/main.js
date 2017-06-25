// named import from es5 index.js file
import { AppBar } from 'material-react-components/dist';
import Menu from 'material-design-icons/navigation/svg/production/ic_menu_24px.svg';
import React from 'react';
import ReactDOM from 'react-dom';
// default and named import from ES5 source file
import Tabs, { Tab } from 'material-react-components/dist/Tabs';
import Search from 'material-design-icons/action/svg/production/ic_search_24px.svg';
import SvgIcon from 'material-react-components/dist/SvgIcon';

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
      <div>
        <AppBar
          backgroundColor="#2196f3"
          elevation={2}
          style={{ fill: '#FFF' }}
          primary={<SvgIcon component={Menu} />}
          secondary={<SvgIcon component={Search} />}
        >
          <span style={{ color: '#FFF' }}>ES5 Example</span>
        </AppBar>
        <Tabs index={this.state.tab} onChange={this.onChange}>
          <Tab label="foo" />
          <Tab label="bar" />
          <Tab label="baz" />
        </Tabs>
      </div>
    );
  }
}

ReactDOM.render(<ExampleUsage />, node);
