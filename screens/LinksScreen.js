import React from "react";
import { View, StyleSheet, TextInput, Text, SectionList, Item, Section } from "react-native";
import { MapView } from "expo";
import { Callout } from "react-native-maps";
import { EvilIcons } from "@expo/vector-icons";
import Spinner from "react-native-loading-spinner-overlay";

    var A = ['Apple', 'Apricot', 'Avocado'] ;
    var B = ['Banana', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry'] ;
    var C = ['Cherry', 'Coconut'] ;

export default class LinksScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: -6.270565,
      longitude: 106.75955,
      is_searching: false
    };

    this.teste = this.teste.bind(this);
  }

  static navigationOptions = {
    title: "Airlift"
  };

  teste() {
    console.log("oi");
    this.setState({ is_searching: true });

    setTimeout(() => {
      this.setState({ is_searching: false });
    }, 3000);
  }

  GetSectionListItem() {
    console.log('function getSection')
  }

  _renderItem = ({ section, index }) => {
    // const { numColumns } = this.props;
    const numColumns = 2;

    if (index % numColumns !== 0) return null;

    const items = [];

    // for (let i = index; i < index + numColumns; i++) {
    //   if (i >= section.data.length) {
    //     break;
    //   }
    //
    //   items.push(<Item item={section.data[i]} />);
    // }

    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <Text>items</Text>
      </View>
    );
  }

  _renderSection = (data, index, section) => (<Text>{section.title}</Text>);

  render() {
    return (
      <View style={styles.container}>
        <Spinner
          visible={this.state.is_searching}
          animation={"fade"}
          textContent={"Looking for drivers..."}
          textStyle={{ color: "#FFF" }}
          overlayColor={"rgba(0, 0, 0, 0.65)"}
        />
        <MapView
          style={{
            flex: 0.5
          }}
          initialRegion={{
            latitude: 31.52037,
            longitude: 74.358749,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />
        <Callout>
          <View style={styles.calloutContainer}>
            <View style={styles.calloutView}>
              <EvilIcons name="location" size={40} color="green" />
              <TextInput
                style={styles.calloutSearch}
                placeholder={"Select your initial destination"}
                onChange={this.teste}
              />
            </View>
            <View style={styles.calloutView}>
              <EvilIcons name="location" size={40} color="red" />
              <TextInput
                style={styles.calloutSearch}
                placeholder={"Select your final destination"}
              />
            </View>
          </View>
        </Callout>
        <View style={{ flex: 0.5 }}>
          <SectionList

          sections={[

            { title: 'Título A', data: A },
            { title: 'Título B', data: B },
            { title: 'Título C', data: C },

          ]}

          renderSectionHeader={this._renderSection}

          renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}


        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  calloutContainer: {
    marginTop: 10
  },
  calloutView: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    width: "60%",
    marginLeft: "5%",
    marginRight: "70%",
    borderColor: "black",
    borderWidth: 1,
  },
  calloutSearch: {
    borderColor: "transparent",
    marginLeft: 10,
    width: "90%",
    marginRight: 10,
    height: 40,
    borderWidth: 0.0
  },
  SectionHeaderStyle:{

    backgroundColor : '#CDDC39',
    fontSize : 20,
    padding: 5,
    color: '#fff',
  },

  SectionListItemStyle:{

    fontSize : 15,
    padding: 5,
    color: '#000',
    backgroundColor : '#F5F5F5'

  }
});
