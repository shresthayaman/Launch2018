import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryLabel
} from "victory";
let axios = require("axios");

export default class GitContributorsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contributors: [],
      graphData: [] //data that will be used to graph
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/repos/facebook/react/stats/contributors") //api call to react contributors in github
      .then(contList => {
        let topTenContributor = contList.data.slice(90); //obtians only the top 10 constubutors out of the 100 there were
        //let graphData = []; //data that will be used to graph

        let temp = [];
        topTenContributor.map(person => {
          //appending only relevant data to graphData by going through each person on top 10
          let x = {
            name: person.author.login,
            contributions: parseInt(person.total)
          };
          temp.push(x);
        });

        this.setState({
          contributors: topTenContributor,
          graphData: temp
        });
        console.log(this.state.graphData);
      });
  }

  render() {
    return (
      <div>
        <VictoryChart
          // adding the material theme provided with Victory
          theme={VictoryTheme.material}
          domainPadding={20}
        >
          <VictoryAxis
            tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            tickFormat={this.state.name}
            style={{
              tickLabels: { fontSize: 3 }
            }}
            label="Top 10 Contributors"
            //tickLabelComponent={<VictoryLabel angle={45} />}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={this.state.contributions}
            label="Number of Contributions"
            padding={{ top: 20, bottom: 60 }}
          />
          <VictoryBar data={this.state.graphData} x="name" y="contributions" />
        </VictoryChart>
      </div>
    );
  }
}
