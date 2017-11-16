import React, { Component } from 'react'
import { getChangedProps } from './util'
import { Query as KeenQuery } from 'keen-analysis'

export default class Query extends Component {
  
  state = {
    data: null
  }

  run(props) {
    const { client, children, type, id, ...rest } = props
    switch (type) {
      case 'saved': {
        return client.query('saved', id).then(data => this.setState({ data }))
      }
      default: {
        return client.run(new KeenQuery(type, rest)).then(data => this.setState({ data }))
      }
    }
  }

  componentWillMount() {
    this.run(this.props)
  }

  componentWillReceiveProps(nextProps) {
    const changedProps = getChangedProps(nextProps, this.props)
    if (changedProps.length) {
     this.run(nextProps) 
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.data !== this.state.data
  }

  render() {
    if (!this.state.data) {
      return null
    }
    return this.props.children(this.state.data)
  }
}
