import React, {Component} from 'react';
import shallowEqual from 'fbjs/lib/shallowEqual';
import _ from 'lodash';

export default class Responsive extends Component {
  static defaultProps = {
    component: 'div'
  };
  state = {
    remeasure: this.remeasure
  }; 
  mounted = false;
  root;

  componentWillMount() {
    this.mounted = true;
  }
  componentDidMount() {
    this.remeasure();
    window.addEventListener('resize', this.remeasure);
  }
  componentWillReceiveProps(nextProps) {
    if (!shallowEqual(this.props.domProps, nextProps.domProps) || 
        !shallowEqual(this.props.computedStyleProps, nextProps.computedStyleProps)) {
      this.remeasure();
    }
  }
  componentWillUnmount() {
    this.mounted = false;
    window.removeEventListener('resize', this.remeasure);
  }
  remeasure = _.throttle(() => {
    const {root} = this;
    if (this.mounted && root) {
      let {domProps, computedStyleProps} = this.props;
      let nextState = {};
      if (domProps) {
        domProps.forEach(prop => nextState[prop] = root[prop]);
      }
      if (computedStyleProps) {
        nextState.computedStyle = {};
        let computedStyle = getComputedStyle(root);
        computedStyleProps.forEach(prop => nextState.computedStyle[prop] = computedStyle[prop]);
      }
      this.setState(nextState);
    } 
  }, 500);
  render() {
    let {props: {children}, state} = this;
    let Comp = this.props.component;
    return <Comp ref={c => this.root= c} children={children(state)}/>;
  }
}