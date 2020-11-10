import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CarSelection from '../screens/carSelection/index';
import ServiceSelection from '../screens/serviceSelection/index';
import LocationSelection from '../screens/locationSelection/index';
import DateSelection from '../screens/dateSelection/index';
import AdditionalJobSelection from '../screens/additionJobSelection/index';
import BookingStatus from '../screens/bookingStatus/index';
import AppointmentSummary from '../screens/appointmentSummary/index';

const StackNavigator = createStackNavigator(
  {
    CarSelection: {
      screen: CarSelection,
    },
    ServiceSelection: {
      screen: ServiceSelection,
    },
    LocationSelection: {
      screen: LocationSelection,
    },
    DateSelection: {
      screen: DateSelection,
    },
    AdditionalJobSelection: {
      screen: AdditionalJobSelection,
    },
    AppointmentSummary: {
      screen: AppointmentSummary,
    },
    BookingStatus: {
      screen: BookingStatus,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'CarSelection',
  },
);

const AppNavigator = createAppContainer(StackNavigator);
export default AppNavigator;
