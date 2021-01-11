import React from 'react';
import {connect} from 'react-redux';
import { fetchSmurfs } from '../actions/index'
import Smurf from './Smurf'
export class SmurfDisplay extends React.Component {
    fetchSmurfs(){
      this.props.fetchSmurfs();
    }
    componentDidMount(){
      this.fetchSmurfs();
    }
    renderSmurfs(){
      //console.log(this.props.smurfs[0]);
      
      return this.props.smurfs[0].map((smurf) => {
        return <Smurf smurf={smurf}/>
      })
    }
    render() {
        return(<div>
            {this.props.isLoading &&
              <p>Loading...</p>
            }
            {this.props.smurfs[0] &&
              this.renderSmurfs()
            }
        </div>)
    }
}
function mapStateToProps(state){
  return{
    isLoading: state.isLoading,
    error: state.error,
    smurfs: state.smurfs
  };
}
export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(SmurfDisplay);
//export default SmurfDisplay;

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.