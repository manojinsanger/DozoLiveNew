// import React, { useCallback, useEffect, useState } from 'react';
// import {
//   View,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   RefreshControl,
// } from 'react-native';
// import LottieView from 'lottie-react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import { useNavigation } from '@react-navigation/native';
// import Header from '../../components/common/Header';
// import LiveCardsList from '../../components/live/LiveCardList';
// import LoadingScreen from '../../components/common/Loading';
// import MainContainer from '../../components/common/mainContainers/MainContainer';
// import { getLives } from '../../services/agora';
// import { useAuth } from '../../context/AuthProvider';

// import {
//   scaleFont,
//   scaleHeight,
//   scaleWidth,
// } from '../../constants/scaling';

// const HomeLiveScreen: React.FC = () => {
//   const navigation = useNavigation();
//   const [lives, setLives] = useState<LiveSession[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [refreshing, setRefreshing] = useState(false);
//   const { loading: isAuthLoading } = useAuth();

//   const fetchLives = useCallback(async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await getLives();
//       setLives(response.results);
//     } catch (err: any) {
//       setError(err.response?.data?.error || 'Failed to fetch live sessions.');
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   const onRefresh = useCallback(async () => {
//     setRefreshing(true);
//     await fetchLives();
//     setRefreshing(false);
//   }, [fetchLives]);

//   useEffect(() => {
//     fetchLives();
//   }, [fetchLives]);

//   if (isAuthLoading) {
//     return <LoadingScreen />;
//   }

//   return (
//     <MainContainer>
//       <View style={styles.container}>
//         {/* <Header appName="Dozo Live!" /> */}
//         <ScrollView
//           contentContainerStyle={styles.scrollContent}
//           refreshControl={
//             <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//           }
//         >
//           <LiveCardsList
//             lives={lives}
//             loading={loading}
//             refreshing={refreshing}
//             onRefresh={onRefresh}
//           />
//         </ScrollView>

//         <TouchableOpacity
//           style={styles.floatingButton}
//         //   onPress={() => navigation.navigate('GoLive')}
//         >
//           <LinearGradient
//             colors={['#F1567D', '#FF7EB3']}
//             style={styles.gradientBackground}
//           >
//             <View style={styles.lottieContainer}>
//               <LottieView
//                 source={require('../../assets/images/permisssion/Animation_1738268533330.json')}
//                 autoPlay
//                 loop
//                 style={styles.animation}
//               />
//             </View>
//             <Text style={styles.buttonText}>Go Live</Text>
//           </LinearGradient>
//         </TouchableOpacity>
//       </View>
//     </MainContainer>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   scrollContent: {
//     flexGrow: 1,
//     paddingBottom: scaleHeight(110),
//   },
//   floatingButton: {
//     position: 'absolute',
//     bottom: scaleHeight(110),
//     right: scaleWidth(20),
//     borderRadius: scaleWidth(50),
//     overflow: 'hidden',
//     elevation: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: scaleWidth(8),
//     shadowOffset: { width: 0, height: scaleHeight(3) },
//   },
//   gradientBackground: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: scaleHeight(8),
//     paddingHorizontal: scaleWidth(10),
//     borderRadius: scaleWidth(50),
//   },
//   lottieContainer: {
//     width: scaleWidth(40),
//     height: scaleHeight(40),
//     backgroundColor: '#fff',
//     borderRadius: scaleWidth(25),
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: scaleWidth(10),
//   },
//   animation: {
//     width: scaleWidth(40),
//     height: scaleHeight(40),
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: scaleFont(18),
//     fontFamily: 'DMSans-Bold',
//   },
// });

// export default HomeLiveScreen;


import { View, Text } from 'react-native'
import React from 'react'

const HomeLiveScreen = () => {
  return (
    <View>
      <Text>HomeLiveScreen</Text>
    </View>
  )
}

export default HomeLiveScreen