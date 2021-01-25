import React from 'react';

import { View, Image, ImageBackground } from 'react-native';
import { useTheme } from '@/Theme';
import { Text } from '@ui-kitten/components';
import { ScrollView } from 'react-native-gesture-handler';


function ContentPageClubs() {
  const { Gutters, Colors, MetricsSizes, Images} = useTheme();
  const [clubInterestIDs, setClubInterestIDs] = React.useState([]);
  React.useEffect(()=> {
    //   make api call here for user club interests
    //  and assign the ids to a variable clubInterestIDs
    axios.get("API_URL", )
  },[])

  const categories = [
    {
      id: '1',
      name: 'Fitness',
      clubs: [
        {
          id: '1',
          name: 'Cycling',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          icons: require('@/Assets/Images/cycling.png'),
          rect: require('@/Assets/Images/Rectangle.png')
        },
        {
          id: '2',
          name: 'Running',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          icons : require('@/Assets/Images/runningIMG.png'),
          rect: require('@/Assets/Images/Rectangle.png')
        },
        {
          id: '3',
          name: 'Walking & Hiking',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          icons : require('@/Assets/Images/hikingIMG.png'),
          rect: require('@/Assets/Images/Rectangle.png')

        },

        {
          id: '4',
          name: 'Fitness & Strength',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          icons: require('@/Assets/Images/strengthandfitness.png'),
          rect: require('@/Assets/Images/Rectangle.png')
        },

        {
          id: '5',
          name: 'Yoga & Pilate',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          icons: require('@/Assets/Images/yoga.png'),
          rect: require('@/Assets/Images/Rectangle.png')
        },

      ],
    },

    {
      id: '2',
      name: 'WellBeing',
      clubs: [
        {
          id: '1',
          name: 'Mental WellBeing',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          icons: require('@/Assets/Images/mentalhealth.png'),
          rect: require('@/Assets/Images/Rectangle.png'),
        },
        {
          id: '2',
          name: 'Personal Development',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          icons: require('@/Assets/Images/personalDevelop.png'),
          rect: require('@/Assets/Images/Rectangle.png')
        },
      ],
    },

    {
      id: '3',
      name: 'Culture',
      clubs: [
        {
          id: '1',
          name: 'Travel, Food & Wine',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          icons: require('@/Assets/Images/worldtravel.png'),
          rect: require('@/Assets/Images/Rectangle.png'),
        },
        {
          id: '2',
          name: 'Entertainment',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          icons: require('@/Assets/Images/entertain.png'),
          rect: require('@/Assets/Images/Rectangle.png'),
        },
        {
          id: '3',
          name: 'Arts & Crafts',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          icons: require('@/Assets/Images/artscraft.png'),
          rect: require('@/Assets/Images/Rectangle.png'),

        },
      ],
    },

    {
      id: '4',
      name: 'Purpose',
      clubs: [
        {
          id: '1',
          name: 'Substainability',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          icons: require('@/Assets/Images/sustainability.png'),
          rect: require('@/Assets/Images/Rectangle.png'),
        },

        {
          id: '2',
          name: 'Philanthropy',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          icons: require('@/Assets/Images/philanthropy.png'),
          rect: require('@/Assets/Images/Rectangle.png'),
        },
      ],
    },


  ];

  return (
    <ScrollView>
    <View style={{ backgroundColor: '#343434', Width:414, height:1117, }}>
      {/*
      use flex={1} instead of using width:100%, height:100%
      because setting width and height in your wrapper is a big mistake for handling responsiveness
      */}

      {categories.map((category) => (
        <View key={category.id}  style={{}}>
        
          <Text
         category="h3"
            style={[{
              width:374, height:20,
              left:36,
              right:4,
              lineHeight:20,
              fontSize: 16,
              fontWeight: '700',
              marginTop: 32,
              color: '#00AEEF'
            }]}
          >
            {category.name}
          </Text>
          

          {/**
            array.map the CLUBS inside categories because clubs is an array
             */}
          <View style={{ flexDirection: 'column' ,   marginLeft: 36, marginTop: 10, }}>
            {category.clubs.map((club) => {
              return (
                //   check if the user is part of club
                clubInterestIDs.includes(club.id)
                ?
                // colored icon
                <View key={club.id} flexDirection="row"  >
                  <ImageBackground
                    style={{ marginTop:19}}
                    source={club.rect}
                  >
                    <Image
                      style={{ height: 29.81, width:32, marginLeft:8, marginTop:10, marginBottom: 10, marginRight:10   }}
                      source={club.icons}
                      resizeMode='center'
                    />
                  </ImageBackground>

                  <View style={{flexDirection:'column'}}>
                  
                  <Text style={{ width:260, height:20,marginLeft: 11, fontSize: 13, top:24,  
                  color:'white', fontWeight:'700', }}>{club.name}</Text>  
                  <Text style={{ width:261, height:14,marginLeft: 11, fontSize: 10, top:25, 
                  color:'white',fontWeight:'400'}}>{club.desc}</Text>                 
                  </View>              
                </View>
                : // greyed icon
                <View key={club.id} flexDirection="row"  >
                  <ImageBackground
                    style={{ marginTop:19}}
                    source={club.rect}
                  >
                    <Image
                      style={{ height: 29.81, width:32, marginLeft:8, marginTop:10, marginBottom: 10, marginRight:10   }}
                      source={club.icons}
                      resizeMode='center'
                    />
                  </ImageBackground>

                  <View style={{flexDirection:'column'}}>
                  
                  <Text style={{ width:260, height:20,marginLeft: 11, fontSize: 13, top:24,  
                  color:'white', fontWeight:'700', }}>{club.name}</Text>  
                  <Text style={{ width:261, height:14,marginLeft: 11, fontSize: 10, top:25, 
                  color:'white',fontWeight:'400'}}>{club.desc}</Text>                 
                  </View>              
                </View>
              );
            })}
          </View>
        </View>
      ))}
    </View>
    </ScrollView>
  );
}

export default ContentPageClubs;