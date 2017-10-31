import React, { Component } from 'react'
import { getChangedProps } from './util'
import Dataviz from 'keen-dataviz'

export default class Chart extends Component {

  handleRef = el => {
    this.dataviz = new Dataviz()
      .el(el)
      .prepare()
    this.sync()
  }

  componentDidUpdate(prevProps) {
    this.sync(prevProps)
  }

  componentWillUnmount() {
    this.dataviz.destroy()
  }

  sync(prevProps) {
    const changedProps = prevProps ? getChangedProps(this.props, prevProps) : Object.keys(this.props)
    for (const prop of changedProps) {
      this.dataviz[prop](this.props[prop])
    }
    if (this.props.data) {
      this.dataviz.render()
    }
    else {
      this.dataviz.prepare()
    }
  }

  render() {
    return (
      <div ref={this.handleRef} />
    );
  }
}
