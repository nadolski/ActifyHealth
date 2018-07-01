import {createBottomTabNavigator} from "react-navigation";
import Homebase from "./Homebase";
import CurrentTask from "./CurrentTask";
import Settings from "./Settings";


export default createBottomTabNavigator({
  Home: Homebase,
  Task: CurrentTask
},
{
  swipeEnabled :true,
  animationEnabled :true,
  tabBarPosition :'bottom',
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
}
});
