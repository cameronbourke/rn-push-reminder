import React from 'react-native';
import PushReminder from '../push-reminder';

const NotificationsReminder = ({ navigator, route }) => (
	<PushReminder
		statusBarColor='default'
		goBack={navigator.pop}
	/>
);

export default NotificationsReminder;
