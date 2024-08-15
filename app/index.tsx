import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function MainScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.backgroundContainer}>
        {/* Header Image and Logo */}
        <Image source={require('../assets/image.png')} style={styles.headerImage} />
        <Text style={styles.logo}>LOGO</Text>

        {/* Movie Info */}
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

        {/* Sidebar Icons */}
        <View style={styles.sidebar}>
          {renderSidebarIcon('home', true)}
          {renderSidebarIcon('soccer')}
          {renderSidebarIcon('videocam')}
          {renderSidebarIcon('tv')}
          {renderSidebarIcon('play-circle')}
          {renderSidebarIcon('18')}
        </View>

        {/* Sections */}
        <Text style={styles.sectionTitle}>Lo nuevo</Text>
        <ScrollView horizontal style={styles.sectionContainer}>
          {renderMovies()}
        </ScrollView>

        <Text style={styles.sectionTitle}>Lo más buscado</Text>
        <ScrollView horizontal style={styles.sectionContainer}>
          {renderMovies()}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

function renderSidebarIcon(iconName, isActive = false) {
  return (
    <View style={styles.sidebarIconContainer} key={iconName}>
      <Image source={require('../assets/image.png')} style={styles.sidebarIcon} />
      {isActive && <View style={styles.sidebarActiveIndicator} />}
    </View>
  );
}

function renderMovies() {
  const movies = Array(10).fill('../assets/image.png');
  return movies.map((_, index) => (
    <Image key={index} source={require('../assets/image.png')} style={styles.movieThumbnail} />
  ));
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  backgroundContainer: {
    position: 'relative',
    width: 1280,
    height: 1633,
  },
  headerImage: {
    position: 'absolute',
    width: 822,
    height: 420,
    left: 458,
    top: 0,
  },
  logo: {
    position: 'absolute',
    top: 33,
    right: 40,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 40,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  movieInfoContainer: {
    position: 'absolute',
    left: 127,
    top: 95,
  },
  movieTitle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 40,
    lineHeight: 48,
    color: '#FFFFFF',
    width: 328,
    height: 63,
  },
  movieDetails: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 17,
    color: '#FFFFFF',
    marginTop: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  rating: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    color: '#FFFFFF',
  },
  pgContainer: {
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 6,
    marginLeft: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  pgText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 10,
    color: '#FFFFFF',
  },
  movieDescription: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
    color: '#FFFFFF',
    marginTop: 10,
    width: 364,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  playButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  playButtonText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    color: '#000000',
  },
  infoButton: {
    backgroundColor: 'rgba(179, 179, 179, 0.44)',
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  infoButtonText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    color: '#FFFFFF',
  },
  sidebar: {
    position: 'absolute',
    top: 132,
    left: 33,
    width: 40,
    height: 563,
    justifyContent: 'space-between',
  },
  sidebarIconContainer: {
    position: 'relative',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sidebarIcon: {
    width: 25,
    height: 25,
  },
  sidebarActiveIndicator: {
    position: 'absolute',
    left: 8,
    top: 33,
    width: 25,
    height: 4,
    backgroundColor: 'rgba(0, 209, 255, 0.7)',
  },
  sectionTitle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 25,
    lineHeight: 30,
    color: '#FFFFFF',
    marginTop: 50,
    marginLeft: 113,
  },
  sectionContainer: {
    marginTop: 10,
    paddingLeft: 113,
  },
  movieThumbnail: {
    width: 145,
    height: 207,
    marginRight: 15,
    borderRadius: 6,
  },
});