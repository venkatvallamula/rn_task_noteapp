/**
 * @format
 */

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import ViewNotes from '../screens/ViewNotes'
import AddNotes from '../screens/AddNotes'
import EditNotes from '../screens/EditNotes'

const StackNavigator  = createStackNavigator({
    ViewNotes:{
        screen:ViewNotes,
    },
    AddNotes:{
        screen:AddNotes,
    },
    EditNotes:{
        screen:EditNotes,
    }
    },
    {
        initialRouteName:'ViewNotes',
        headerMode:'none',
        mode:'modal'
    }
)

export default createAppContainer(StackNavigator)
