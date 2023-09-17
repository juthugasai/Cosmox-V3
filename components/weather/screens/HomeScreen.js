import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { MagnifyingGlassIcon, XMarkIcon } from 'react-native-heroicons/outline'
import { CalendarDaysIcon, MapPinIcon } from 'react-native-heroicons/solid'
import { debounce } from "lodash";
import { theme } from '../theme';
import { fetchLocations, fetchWeatherForecast } from '../api/weather';
import * as Progress from 'react-native-progress';
import { StatusBar } from 'expo-status-bar';
import { weatherImages } from '../constants';
import { getData, storeData } from '../utils/asyncStorage';

export default function HomeScreen() {
  const [showSearch, toggleSearch] = useState(false);
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState({})


  const handleSearch = search=>{
    // console.log('value: ',search);
    if(search && search.length>2)
      fetchLocations({cityName: search}).then(data=>{
        // console.log('got locations: ',data);
        setLocations(data);
      })
  }

  const handleLocation = loc=>{
    setLoading(true);
    toggleSearch(false);
    setLocations([]);
    fetchWeatherForecast({
      cityName: loc.name,
      days: '7'
    }).then(data=>{
      setLoading(false);
      setWeather(data);
      storeData('city',loc.name);
    })
  }

  useEffect(()=>{
    fetchMyWeatherData();
  },[]);

  const fetchMyWeatherData = async ()=>{
    let myCity = await getData('city');
    let cityName = 'Islamabad';
    if(myCity){
      cityName = myCity;
    }
    fetchWeatherForecast({
      cityName,
      days: '7'
    }).then(data=>{
      // console.log('got data: ',data.forecast.forecastday);
      setWeather(data);
      setLoading(false);
    })
    
  }

  const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);

  const {location, current} = weather;

  return (
    <View style={{flex:1,backgroundColor:'#000235'}}>
      <StatusBar style="light" />
      
        {
          loading? (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <Progress.CircleSnail thickness={10} size={140} color="#0bb3b2" />
            </View>
          ):(
            <View style={{flex:1}}>
            
              {/* search section */}
              <View style={{}} >
                <View 
                 
                  style={{backgroundColor: showSearch? theme.bgWhite(0.2): 'transparent'}}>
                  <Text></Text>
                  <Text></Text>
                    {
                      
                      showSearch? (
                        <TextInput 
                          onChangeText={handleTextDebounce} 
                          placeholder="Search city" 
                          placeholderTextColor={'lightgray'} 
                          style={{color:'white',top:50}} 
                        />
                      ):null
                    }
                    <View style={{left:300,marginTop:45}}>
                    <TouchableOpacity 
                      onPress={()=> toggleSearch(!showSearch)} 
                      className="rounded-full p-3 m-1" 
                      style={{backgroundColor: theme.bgWhite(0.3),borderRadius:30,height:30,width:30}}>
                      {
                        showSearch? (
                          <XMarkIcon size="25" color="white" />
                        ):(
                          
                          <MagnifyingGlassIcon size="25" color="white" />
                        )
                      }
                      
                  </TouchableOpacity></View>
                </View>
                {
                  locations.length>0 && showSearch?(
                    <View className="absolute w-full bg-gray-300 top-16 rounded-3xl ">
                      {
                        locations.map((loc, index)=>{
                          let showBorder = index+1 != locations.length;
                          let borderClass = showBorder? ' border-b-2 border-b-gray-400':'';
                          return (
                            <TouchableOpacity 
                              key={index}
                              onPress={()=> handleLocation(loc)} 
                              className={"flex-row items-center border-0 p-3 px-4 mb-1 "+borderClass}>
                                <View style={{flexDirection: 'row',margin:5}}>
                                <MapPinIcon size="20" color="gray" />
                                <Text style={{color:'white'}} className="text-black text-lg ml-2">{loc?.name}, {loc?.country}</Text></View>
                            </TouchableOpacity>
                          )
                        })
                      }
                    </View>
                  ):null
                }
                
              </View>

              {/* forecast section */}
              <ScrollView >
              <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text ></Text>
                {/* location */}
                <Text style={{color:'white',fontWeight:'bold',fontSize:25,justifyContent:'center',alignItems:'center'}}>
                  {location?.name}, 
                  <Text style={{color:'white'}}>{location?.country}</Text>
                </Text>
                {/* weather icon */}
                <View style={{justifyContent:'flex-end'}}>
                  <Image 
                    // source={{uri: 'https:'+current?.condition?.icon}} 
                    source={weatherImages[current?.condition?.text || 'other']} 
                    style={{width:300,height:300,alignContent:'center'}}/>
                  
                </View>
                {/* degree celcius */}
                <View style={{justifyContent:'center'}}>
                    <Text style={{color:'white',fontSize:30,fontWeight:'bold',alignItems:'center'}}>
                      {current?.temp_c}&#176;
                    </Text>
                    <Text style={{color:'white',fontSize:25,fontWeight:'bold'}}>
                      {current?.condition?.text}
                    </Text>
                </View>

                {/* other stats */}
                <Text></Text>
                <View style={{flexDirection: 'row',alignItems:'center'}}>
                  <View style={{padding:5}}>
                   <Image source={require('../../../../assets/A-8/icons/wind.png')} style={{width:30,height:30}} />
                    <Text style={{color:'white',marginLeft:30,top:-20,fontWeight:'bold'}}>{current?.wind_kph}km</Text>
                  </View>
                  <View style={{padding:5}}>
                  <Image source={require('../../../../assets/A-8/icons/drop.png')} style={{width:30,height:30}} />
                    <Text style={{color:'white',marginLeft:30,top:-20,fontWeight:'bold'}}>{current?.humidity}%</Text>
                  </View>
                  <View style={{padding:5}}>
                  <Image source={require('../../../../assets/A-8/icons/sun.png')} style={{width:30,height:30}} />
                    <Text style={{color:'white',marginLeft:30,top:-20,fontWeight:'bold'}}>
                      { weather?.forecast?.forecastday[0]?.astro?.sunrise }
                    </Text>
                  </View>
                  
                </View>
              </View>

              {/* forecast for next days */}
              <View className="mb-2 space-y-3">
                <View style={{marginLeft:15}}>
                  <Text></Text>
                  
                  <CalendarDaysIcon size="22" color="white" />
                  <Text style={{marginLeft:40,color:'white',top:-20,fontWeight:'bold'}}>Daily forecast</Text>
                </View>
                <ScrollView   
                  horizontal
                  contentContainerStyle={{paddingHorizontal: 15}}
                  showsHorizontalScrollIndicator={false}
                >
                  {
                    weather?.forecast?.forecastday?.map((item,index)=>{
                      const date = new Date(item.date);
                      const options = { weekday: 'long' };
                      let dayName = date.toLocaleDateString('en-US', options);
                      dayName = dayName.split(',')[0];

                      return (
                        <View 
                          key={index} 
                         
                          style={{backgroundColor: theme.bgWhite(0.15),width:190,height:150,borderRadius:30,margin:10,alignItems:'center'}}
                        >
                          <Image 
                            // source={{uri: 'https:'+item?.day?.condition?.icon}}
                            source={weatherImages[item?.day?.condition?.text || 'other']}
                              style={{width:100,height:100}} />
                          <Text style={{color:'white'}}>{dayName}</Text>
                          <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>
                            {item?.day?.avgtemp_c}&#176;
                          </Text>
                        </View>
                      )
                    })
                  }
                  
                </ScrollView>
              </View>
              
            </ScrollView>
            </View>
          )
        }
      
    </View>
  )
}
