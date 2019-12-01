import React from "react";
import { FlatList, View } from "react-native";
import { connect } from "react-redux";
import ListItem from "./ListItem";

class ListPage extends React.Component {
  static navigationOptions = {
    title: "Liste des stations"
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.props.stations}
          keyExtractor={station => station.code}
          renderItem={station => (
            <ListItem
              key={station.item.code}
              station={station.item}
              navigation={this.props.navigation}
              isFavorite={this.props.favorite.indexOf(station) > -1}
            />
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  stations: state.stations,
  favorite: state.favorite
});

const ConnectedList = connect(mapStateToProps)(ListPage);

export default ConnectedList;
