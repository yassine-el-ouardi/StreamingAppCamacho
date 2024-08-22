import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles/styles'

const iconMap = {
  home: require('../assets/icons/home.png'),
  football: require('../assets/icons/football.png'),
  cam: require('../assets/icons/cam.png'),
  screen: require('../assets/icons/screen.png'),
  play: require('../assets/icons/play.png'),
  adult: require('../assets/icons/18.png'),
  kid: require('../assets/icons/kid.png'),
  settings: require('../assets/icons/settings.png'),
};

export default function MainScreen() {

  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        {renderSidebarIcon('home', true)}
        {renderSidebarIcon('football')}
        {renderSidebarIcon('cam')}
        {renderSidebarIcon('screen')}
        {renderSidebarIcon('play')}
        {renderSidebarIcon('adult')}
        {renderSidebarIcon('kid')}
        {renderSidebarIcon('settings')}
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerSection}>
          <Image source={require('../assets/header-image.png')} style={styles.headerImage} />
          <View style={styles.movieInfoContainer}>
            <Text style={styles.movieTitle}>Avengers</Text>
            <Text style={styles.movieDetails}>2022 - Acción - Película</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>8.8/10</Text>
              <View style={styles.pgContainer}>
                <Text style={styles.pgText}>PG - 13</Text>
              </View>
            </View>
            <Text style={styles.movieDescription}>
              Cuando un enemigo inesperado amenaza con poner en peligro la seguridad mundial, Nicholas
              Fury, Director de S.H.I.E.L.D., necesita encontrar urgentemente un equipo que salve al
              mundo del mayor de los desastres.
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.playButton}>
                <Text style={styles.playButtonText}>Reproducir</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.infoButton}>
                <Text style={styles.infoButtonText}>Más información</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.logo}>LOGO</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Lo nuevo</Text>
          <ScrollView horizontal style={styles.sectionContainer}>
            {renderMovies()}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Lo más buscado</Text>
          <ScrollView horizontal style={styles.sectionContainer}>
            {renderMovies()}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

function renderSidebarIcon(iconName: keyof typeof iconMap, isActive = false) {

  return (

    <TouchableOpacity key={iconName}>
      <Image source={iconMap[iconName]}
      style={styles.sidebarIconContainer}
      />
      {isActive && <View style={styles.sidebarActiveIndicator} />}
    </TouchableOpacity>
  );
}

function renderMovies() {
  const movies = Array(10).fill('../assets/image.png');
  return movies.map((_, index) => (
    <Image
      key={index}
      source={require('../assets/image.png')}
      style={styles.movieThumbnail}
      resizeMode="contain"
    />
  ));
}