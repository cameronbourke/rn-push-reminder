import React, { AppRegistry, StyleSheet, Navigator } from 'react-native';

import NotificationsReminder from './app/components/notifications-reminder';
import Welcome from './app/components/welcome';

const ROUTES = {
  welcome: Welcome,
  notifications_reminder: NotificationsReminder
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

class PushReminderExample extends React.Component {

  componentDidMount() {
    // should check to see if user has accepted permissions yet
    // const permissions = NavigatorIOS.checkPermissions();
    // then some condition on how often to show the reminder
    // if there are no push notification permissions yet
    if (true) {

      setTimeout(() => {
        this.navigator.push({
          name: 'notifications_reminder'
        });
      }, 3000);

    }
  }

  renderScene(route, navigator) {
    this.navigator = navigator;

    const Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />;
  }

  configureScene({ name }) {
    if (name === 'notifications_reminder') return Navigator.SceneConfigs.FloatFromBottom;
    return Navigator.SceneConfigs.FloatFromLeft
  }

  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'welcome'}}
        renderScene={this.renderScene.bind(this)}
        configureScene={this.configureScene}
      />
    )
  }
}

AppRegistry.registerComponent('PushReminderExample', () => PushReminderExample);
