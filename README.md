<div align="center" href="">
    <img height="140" src="assets/keen-io.svg" alt="Keen Logo" align="center" />
    <img width="167" src="assets/react.svg" alt="React Logo" align="center" />
<h1>React Keen</h1>
<p>A React component for <a href="https://github.com/keen/keen-js">Keen IO </a></p>
</div>

## Installation

```bash
npm install react-keen
# or
yarn add react-keen
```

## Usage

Use Query and Chart components to create a chart of data from Keen. Query expects a client prop and parameters used by the [Keen.Query of keen-analysis.js](https://github.com/keen/keen-analysis.js#keenquery) and Chart expects a data prop of the response from the query (a Keen.Dataset object) or a raw object and values passed to [Keen.Dataviz methods](https://github.com/keen/keen-dataviz.js/tree/master/docs). Check the `examples/` directory for some examples

```jsx
import Keen from 'keen-analysis'
import { Query, Chart } from 'react-keen'
import 'keen-dataviz/dist/keen-dataviz.css'

const client = new Keen({
    readKey: KEEN_READ_KEY
})

<Query
    client={client}
    event_collection='pageviews'
    timeframe='this_14_days'
>{
    data => (
        <Chart
            type="area"
            data={data}
        >
    )
}</Query>
```

## Development

 - Clone the repo `git clone git@github.com:iddan/react-keen.git`
 - Install dependencies `yarn install`
 - Go to the examples directories `cd examples/`
 - Install examples dependencies `yarn install`
 - Run examples development server `yarn start`

## License

MIT License
