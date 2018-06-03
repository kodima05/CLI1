import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.119276,
          longitude: 115.092053
        },
        title: "Clandy's Grosir Singaraja",
        subtitle: "Jl. Ngurah Rai, No. 31, Singaraja, Astina, Kec. Buleleng, Kabupaten Buleleng, Bali 81112"
      },
      {
        key:2,
        latlng: {
          latitude:-8.543837,
          longitude: 115.140713
        },
        title: "Clandy's Mart Tabanan",
        subtitle: "Jl. Gatot Subroto, Banjar Anyar, Kec. Tabanan, Kabupaten Tabanan, Bali 82121"
      },
      {
        key:3,
        latlng: {
          latitude:-8.533100,
          longitude: 115.397147
        },
        title: "Clandy's Mart Klungkung",
        subtitle: "Jl. Ngurah Rai, Semarapura Kauh, Kec. Klungkung, Kabupaten Klungkung, Bali 80716"
      },
      {
        key:4,
        latlng: {
          latitude:-8.600184,
          longitude: 115.267300
        },
        title: "Clandy's Mart Sukawati",
        subtitle: "Jl. Raya Celuk, Celuk, Sukawati, Kabupaten Gianyar, Bali 80582"
      },
      {
        key:5,
        latlng: {
          latitude:-8.625448,
          longitude: 115.171261
        },
        title: "Clandy's Mart Dalung",
        subtitle: "Jalan Raya Dalung, Kuta Utara, Dalung, Kuta Utara, Kabupaten Badung, Bali 80351"
      },
      {
        key:6,
        latlng: {
          latitude:-8.761411,
          longitude: 115.179339
        },
        title: "Clandy's Mart Jimbaran",
        subtitle: "Jl. By Pass Ngurah Rai No.10, Jimbaran, Kuta Sel., Kabupaten Badung, Bali 80361"
      }
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Peta Clandy's Supermarket di Bali
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}> by Aditya30 </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
