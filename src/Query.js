import React, { Component } from 'react'
import { getChangedProps } from './util'
import { Query as KeenQuery } from 'keen-analysis'

export default class Query extends Component {
  
  state = {
    data: null,
    error: null,
  }

  run(props) {
    const { client, children, type, id, ...rest } = props
    this.setState({ data: null, error: null })
    switch (type) {
      case 'saved': {
        client
          .query('saved', id)
          .then(data => this.setState({ data }))
          .catch((error) => this.setState({ error }))
      }
      default: {
        client
          .run(new KeenQuery(type, rest))
          .then(data => this.setState({ data }))
          .catch((error) => this.setState({ error }))
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
    return nextState !== this.state
  }

  render() {
    console.log(this.state)
    return this.props.children(this.state)
  }
}
