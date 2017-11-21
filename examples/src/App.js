import React, { Component } from 'react';
import Keen from 'keen-analysis'
import { Query, Chart } from 'react-keen'
import keen from './keen-io.svg'
import react from './react.svg'
import 'keen-dataviz/dist/keen-dataviz.css'
import './App.css';

const client = new Keen({
  projectId: "53eab6e12481962467000000",
  readKey: "d1b97982ce67ad4b411af30e53dd75be6cf610213c35f3bd3dd2ef62eaeac14632164890413e2cc2df2e489da88e87430af43628b0c9e0b2870d0a70580d5f5fe8d9ba2a6d56f9448a3b6f62a5e6cdd1be435c227253fbe3fab27beb0d14f91b710d9a6e657ecf47775281abc17ec455"
})

const CHART_1_TIMEFRAME = {
  start: "2014-02-02T00:00:00.000-00:00",
  end: "2014-04-01T00:00:00.000-00:00"
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div style={{ display: 'flex', flexAlign: 'center' }}>
            <img height="140" src={keen} alt="Keen Logo" />
            <img height="150" src={react} alt="React Logo" />
          </div>
          <h1 className="App-title">React Keen Examples</h1>
        </header>
        <Query client={client} type="count" event_collection="user_action" timeframe={CHART_1_TIMEFRAME} interval="weekly">{
          ({ error, data }) => (
            <Chart {...error} type="area" data={data} height={300}/>
          )
        }</Query>
      </div>
    );
  }
}

export default App;
