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
  View,
} = React;


var Notes = React.createClass({
  render: function() {
    return (
    	<View>
			<Text>Hi from React</Text>
		</View>
    );
  }
});

AppRegistry.registerComponent('Notes', () => Notes);