import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Calculate pixel values based on screen dimensions
const sidebarWidth = width * (113/1280);
const headerHeight = height * (393/720); 
const sectionHeight = height * ((50 + 207) /720); 
const movieThumbnailWidth = width * (145/1280); 
const movieThumbnailHeight = height * (207/720); 

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      flexDirection: 'row',
    },
    sidebar: {
      width: sidebarWidth,
      height: '100%',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      paddingVertical: 20,
      backgroundColor: '#000000',
    },
    scrollContainer: {
      flexGrow: 1,
      paddingBottom: 20,
      paddingLeft: 0,
    },
    headerSection: {
      height: headerHeight,
      width: '100%',
      position: 'relative',
    },
    headerImage: {
      width: '64.22%',
      height: '100%',
      alignSelf: 'flex-end',
    },
    movieInfoContainer: {
      position: 'absolute',
      //width: '29.14%',
      zIndex: 1,
//      justifyContent: 'center',
      flex: 1,
      marginLeft: width * (14/1280),
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
      fontSize: height * (40/720),
      lineHeight: height * (48/720),
      color: '#FFFFFF',
    },
    movieDetails: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: height * (14/720),
      lineHeight: height * (17/720),
      color: '#FFFFFF',
      //marginTop: 8,
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
      fontSize: height * (12/720),
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
      fontSize: height * (10/720),
      color: '#FFFFFF',
    },
    movieDescription: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: height * (12/720),
      lineHeight: height * (15/720),
      color: '#FFFFFF',
      //marginTop: 10,
      width: height * (364/720),
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
      height: sectionHeight,
      justifyContent: 'center',
      //marginBottom: 20,
    },
    sectionTitle: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: height * (25/720),
      lineHeight: height * (50/720),//estimated 50
      color: '#FFFFFF',
      //paddingHorizontal: 20,
    },
    sectionContainer: {
      flexDirection: 'row',
      //paddingHorizontal: 20,
    },
    movieThumbnail: {
      width: movieThumbnailWidth,
      height: movieThumbnailHeight,
      marginRight: width * (10/1280),
    },
    sidebarIconContainer: {
      position: 'relative',
      width: width * (40/1280),
      height: width * (40/1280),
      alignItems: 'center',
      justifyContent: 'center',
    },
    sidebarActiveIndicator: {
      position: 'absolute',
      top: width * (44/1280),
      width: width * (40/1280),
      height: 4,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 209, 255, 0.7)',
    },
  });