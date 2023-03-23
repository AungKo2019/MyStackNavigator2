import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from '../screens/home';
import About from '../screens/about';
import Review from '../screens/reviewdetails';

const screens = {
    Home : {
         screen: Home,
         navigationOptions:{
            title: 'My Home',
            headerStyle : {backgroundColor:'#E1FFEE',},
            headerTintColor:'#f4511e',
            headerTitleStyle:{fontWeight:'bold',textAlign:'center'},
         },
    },
    Review:{
        screen: Review,
        navigationOptions: {
            title: 'My Review', 
            headerStyle: {backgroundColor: '#E1FFEE',}, 
            headerTintColor: '#f4511e',
            headerTitleStyle: {fontWeight: 'bold',textAlign: 'center'},
        },

    }, 
    About: {
        screen: About
    }
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
