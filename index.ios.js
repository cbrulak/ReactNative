/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
	TextInput,
  View,
} = React;

var DATA = ['row 1', 'row 2', 'row 3', 'row 4','']


var Notes = React.createClass({

	getInitialState: function() {
	  var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	  return {
	    dataSource: ds.cloneWithRows(DATA),
	  };
	},

	render: function() {
	  return (
	    <View>
		    <Text/>
		    <Text/>
		    <Text/>
			<ListView
   	   			ref="listview"
	          	renderSeparator={this.renderSeparator}
	          	dataSource={this.state.dataSource}
	          	renderFooter={this.renderFooter}
	          	renderRow={this.renderRow}
	          	onEndReached={this.onEndReached}
	          	automaticallyAdjustContentInsets={false}
	          	keyboardDismissMode="on-drag"
	          	keyboardShouldPersistTaps={true}
	          	showsVerticalScrollIndicator={false}
		      	dataSource={this.state.dataSource}
		      	renderRow={(rowData) => <Text>{rowData}</Text>}
		    />
		    <TextInput
		      style={{height: 20, borderColor: 'gray', borderWidth: 1}}
		      onChangeText={(text) => this.setState({text}
			  )}
		      value={this.state.text}
			  onEndEditing = {() => this.updateRows(this.state.text)}
		    />
			 
	 	</View>
		
	  );
	},	
	
    updateRows: function(newRow: text) {
       //this._pressData[rowID] = !this._pressData[rowID];
	  // var dataBlob = DATA;
	      
	   //this.state.dataSource.cloneWithRows(dataBlob)	  
		  
	   DATA.push(newRow);
	      
	   
       this.setState({dataSource: this.state.dataSource.cloneWithRows(DATA)
       
	   
	   });
     },
});


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  centerText: {
    alignItems: 'center',
  },
  noMoviesText: {
    marginTop: 80,
    color: '#888888',
  },
  separator: {
    height: 1,
    backgroundColor: '#eeeeee',
  },
  scrollSpinner: {
    marginVertical: 20,
  },
  rowSeparator: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: 1,
    marginLeft: 4,
  },
  rowSeparatorHide: {
    opacity: 0.0,
  },
});

AppRegistry.registerComponent('Notes', () => Notes);