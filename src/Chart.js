import React, { Component } from 'react'
import { getChangedProps } from './util'
import Dataviz from 'keen-dataviz'

export default class Chart extends Component {

  handleRef = el => {
    if (el) {
      this.dataviz = new Dataviz().el(el)
      this.sync()
    }
  }

  componentDidUpdate() {
    this.sync()
  }

  componentWillUnmount() {
    this.dataviz.destroy()
  }

  sync() {
    const { data, message } = this.props
    this.dataviz.attributes(this.props)
    if (message) {
      this.dataviz.message(message)
    }
    else if (data) {
      this.dataviz.data(data).render()
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
