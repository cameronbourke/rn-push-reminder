rn-push-reminder
=========================

Inspired by the modal used in Facebook's messenger app to remind the user to enable push notifications, <PushReminder /> is a react native component that lets you easily add the same reminder to your iOS app.

Screenshot of `<PushReminder />`

![screenshot of the component](http://puu.sh/nhUIW/1164e8d23f.png)

## Installation
```
npm install --save rn-push-reminder
```

## Example
To build the example locally, clone this repo then run:
*Note* you will need a mac, Xcode and the iOS simulator installedÂ

```
cd example
npm install
react-native run-ios
```

## Usage
```js
import React from 'react-native';
import PushReminder from 'rn-push-reminder';

<PushReminder
	btnColor={config.brandingColor}
	statusBarColor='default'
	goBack={navigator.pop}
/>
```

## Using w/ Navigator Component
The most common use case for this component would be showing the component inside a modal to the user when the app starts. You obviously shouldn't show the modal to the user every time, but instead choose how often you want to show it if the user does not have push notifications enabled for the app.

When using this component with `<Navigator />` you will need to wrap `<PushReminder />` with another component, which will be the component that is rendered by the Navigator. For example:
```js
// by wrapping <PushReminder /> with another component
// you can pass the available props to <PushReminder />
// which wouldn't be possible if the Navigator rendered
// the component directly
const NotificationsReminder = ({ navigator, route }) => (
	<PushReminder
		statusBarColor='default'
		goBack={navigator.pop}
	/>
);

export default NotificationsReminder
```

Then use the Navigator like so:
```js
import React, { Navigator } from 'react-native';
import PushReminder from 'rn-push-reminder';

class App extends React.Component {

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
```

## Available Props

Property  | Type | Default | Description
------------- | ------------- | ------ | --------
blurb          | string | This app works best ... | value of the text rendered below the nav bar
btnColor       | string | #2FA0E8 (blue)          | colour for both the 'Go To Settings' and 'Remind me later' buttons
statusBarColor | string | (required)              | this component will change the status bar colour to white, so the component needs to know the color to change the status bar back to
goBack         | func   | undefined               | function is called when the 'Remind me later' button is pressed

## Todo

- Add Unit Tests

## License

MIT Licensed Copyright (c) Cameron Bourke 2016
