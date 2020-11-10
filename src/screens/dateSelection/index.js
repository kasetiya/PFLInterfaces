import {Container, Root} from 'native-base';
import React, {Component} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import ShadowView from 'react-native-simple-shadow-view';
import ContinueButton from '../../components/continueButton';
import CustomHeader from '../../components/customHeader';
import {Colors, Dimens} from '../../config';
import {Images} from '../../config/images';
import strings from '../../lang/strings';
import DateSelectionListItem from './dateSelectionListItem';
import style from './style';

class DateSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeSlot: [
        {time: '08:30', selected: false},
        {time: '09:00', selected: false},
        {time: '09:30', selected: false},
        {time: '10:00', selected: false},
        {time: '10:30', selected: false},
        {time: '11:00', selected: false},
        {time: '11:30', selected: false},
        {time: '12:00', selected: false},
        {time: '12:30', selected: false},
        {time: '01:00', selected: false},
        {time: '01:30', selected: false},
        {time: '02:00', selected: false},
      ],
      date_time_selected: false,
    };
    LocaleConfig.locales['en'] = {
      monthNames: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      monthNamesShort: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      dayNames: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      today: "Aujourd'hui",
    };
    LocaleConfig.defaultLocale = 'en';
  }

  goBack = () => {
    this.props.navigation.goBack();
  };

  renderProgressView() {
    return (
      <View
        style={{
          marginHorizontal: Dimens.ms60,
          marginTop: Dimens.ms30,
        }}>
        <Image
          source={Images.ic_progress_4}
          style={{
            height: Dimens.ms10,
            width: '100%',
          }}
          resizeMode="contain"
        />
        <Text style={{...style.text_choose_car}}>
          {strings.select_date_and_time}
        </Text>
      </View>
    );
  }

  rednerCalendarview() {
    return (
      <View style={{marginTop: Dimens.ms48}}>
        <Calendar
          current={'2020-09-10'}
          onDayPress={(day) => {
            console.log('selected day', day);
          }}
          onDayLongPress={(day) => {
            console.log('selected day', day);
          }}
          monthFormat={'MMMM yyyy'}
          onMonthChange={(month) => {
            console.log('month changed', month);
          }}
          hideArrows={false}
          hideExtraDays={true}
          disableMonthChange={false}
          firstDay={0}
          theme={{
            calendarBackground: Colors.colorBackground,
            monthTextColor: Colors.colorBlue,
            textMonthFontWeight: '500',
            textMonthFontSize: Dimens.ms16,
            arrowColor: Colors.colorTextGray,
            selectedDayBackgroundColor: Colors.colorBlue,
            textDayFontSize: Dimens.ms16,
            textDayHeaderFontSize: Dimens.ms16,
            textDisabledColor: Colors.colorTextGray,
            dayTextColor: Colors.colorBlack,
          }}
          hideDayNames={false}
          showWeekNumbers={false}
          onPressArrowLeft={(subtractMonth) => subtractMonth()}
          onPressArrowRight={(addMonth) => addMonth()}
          disableAllTouchEventsForDisabledDays={true}
          enableSwipeMonths={true}
          markedDates={{
            '2020-09-01': {
              marked: true,
              dotColor: Colors.colorOrange,
            },
            '2020-09-02': {marked: true, dotColor: Colors.colorOrange},
            '2020-09-05': {marked: true, dotColor: Colors.colorOrange},
            '2020-09-06': {marked: true, dotColor: Colors.colorOrange},
            '2020-09-07': {marked: true, dotColor: Colors.colorOrange},
            '2020-09-08': {
              marked: true,
              dotColor: Colors.colorOrange,
              selected: true,
            },
            '2020-09-05': {marked: true, dotColor: Colors.colorOrange},
            '2020-09-15': {marked: true, dotColor: Colors.colorOrange},
            '2020-09-16': {marked: true, dotColor: Colors.colorOrange},
            '2020-09-19': {marked: true, dotColor: Colors.colorOrange},
            '2020-09-23': {marked: true, dotColor: Colors.colorOrange},
            '2020-09-26': {marked: true, dotColor: Colors.colorOrange},
            '2020-09-28': {marked: true, dotColor: Colors.colorOrange},
            '2020-09-30': {marked: true, dotColor: Colors.colorOrange},
            '2020-09-03': {disabled: true, disableTouchEvent: true},
            '2020-09-04': {disabled: true, disableTouchEvent: true},
            '2020-09-09': {disabled: true, disableTouchEvent: true},
            '2020-09-10': {disabled: true, disableTouchEvent: true},
            '2020-09-11': {disabled: true, disableTouchEvent: true},
            '2020-09-12': {disabled: true, disableTouchEvent: true},
            '2020-09-13': {disabled: true, disableTouchEvent: true},
            '2020-09-14': {disabled: true, disableTouchEvent: true},
            '2020-09-17': {disabled: true, disableTouchEvent: true},
            '2020-09-18': {disabled: true, disableTouchEvent: true},
            '2020-09-20': {disabled: true, disableTouchEvent: true},
            '2020-09-21': {disabled: true, disableTouchEvent: true},
            '2020-09-22': {disabled: true, disableTouchEvent: true},
            '2020-09-24': {disabled: true, disableTouchEvent: true},
            '2020-09-25': {disabled: true, disableTouchEvent: true},
            '2020-09-27': {disabled: true, disableTouchEvent: true},
            '2020-09-29': {disabled: true, disableTouchEvent: true},
          }}
        />
      </View>
    );
  }

  handleTimeSlot = (index, item) => {
    let all_slot = this.state.timeSlot;
    for (var i = 0; i < all_slot.length; i++) {
      all_slot[i].selected = false;
    }
    all_slot[index].selected = true;

    this.setState({timeSlot: all_slot, date_time_selected: true});
  };

  renderSelectTimeView() {
    return (
      <ShadowView style={{...style.view_select_time_container}}>
        <Text style={{...style.text_select_time}}>Select Time</Text>
        <FlatList
          listKey={(item, index) => index.toString()}
          bounces={false}
          contentContainerStyle={{
            marginVertical: Dimens.ms8,
          }}
          showsVerticalScrollIndicator={false}
          data={this.state.timeSlot}
          numColumns={4}
          keyExtractor={({id}, index) => index.toString()}
          renderItem={({item, index}) => (
            <DateSelectionListItem
              row={item}
              props={this.props}
              itemIndex={index}
              rowAction={() => this.handleTimeSlot(index, item)}
            />
          )}
        />
      </ShadowView>
    );
  }

  goToAdditionalJobSelection = () => {
    this.props.navigation.navigate('AdditionalJobSelection');
  };

  render() {
    return (
      <Root>
        <Container style={{backgroundColor: Colors.colorBackground}}>
          <CustomHeader leftAction={this.goBack} />
          <View style={{flex: 1}}>
            {this.renderProgressView()}
            {this.rednerCalendarview()}
            {this.renderSelectTimeView()}
          </View>
          <View style={{marginBottom: Dimens.ms60}}>
            <ContinueButton
              enable={this.state.date_time_selected}
              buttonAction={this.goToAdditionalJobSelection}
              title={'4'}
            />
          </View>
        </Container>
      </Root>
    );
  }
}

export default DateSelection;
