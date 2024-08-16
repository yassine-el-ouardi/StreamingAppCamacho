import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function MainScreen() {
  return (
    <View style={styles.container}>
      {/* Sidebar Navigation */}
      <View style={styles.sidebar}>
        {renderSidebarIcon('home-outline', true)}
        {renderSidebarIcon('football-outline')}
        {renderSidebarIcon('videocam-outline')}
        {renderSidebarIcon('tv-outline')}
        {renderSidebarIcon('play-circle-outline')}
        {renderSidebarIcon('settings-outline')}
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header Section with Movie Info Overlay */}
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

        {/* Sections */}
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

function renderSidebarIcon(iconName, isActive = false) {
  return (
    <TouchableOpacity style={styles.sidebarIconContainer} key={iconName}>
      <Icon name={iconName} size={30} color="#FFFFFF" />
      {isActive && <View style={styles.sidebarActiveIndicator} />}
    </TouchableOpacity>
  );
}

function renderMovies() {
  const movies = Array(10).fill('../assets/image.png');
  return movies.map((_, index) => (
    <Image key={index} source={require('../assets/image.png')} style={styles.movieThumbnail} resizeMode="contain" />
  ));
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    flexDirection: 'row',
  },
  sidebar: {
    width: 60,
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 20,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
    flexDirection: 'column',
  },
  headerSection: {
    width: '100%',
    height: '58.33%', // Same as before for the header section
    position: 'relative',
    //minHeight: 300, // Ensure a minimum height to prevent shrinking
  },
  headerImage: {
    width: '64.22%', //(822 / 1280) * 100
    height: '100%',
    alignSelf: 'flex-end',
  },
  movieInfoContainer: {
    position: 'absolute',
    width: '29.14%', // 373px / 1280px * 100
    left: '9.92%', // 127px / 1280px * 100
    top: '13.19%', // 95px / 720px * 100
    zIndex: 1, // Ensures this content stays above the header image
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
    zIndex: 1,
  },
  movieTitle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 40,
    lineHeight: 48,
    color: '#FFFFFF',
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
  section: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '28.75%', // Use percentage
    minHeight: 250, // Ensure a minimum height to prevent too much shrinking
    justifyContent: 'center', // Center content vertically within the section
  },
  sectionTitle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 25,
    lineHeight: 30,
    color: '#FFFFFF',
  },
  sectionContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
  movieThumbnail: {
    width: '11.33%', // Width relative to the section container
    height: '100%', // Fill the section container height
    marginRight: 15,
    borderRadius: 6,
  },
});
