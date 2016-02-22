import React, {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  StatusBarIOS,
  LinkingIOS,
  Image
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 20,
    backgroundColor: '#000',
    paddingBottom: 40
  },
  row: {
    paddingRight: 40,
    paddingLeft: 40
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    padding: 12
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600'
  },
  blurb: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 20,
    marginLeft: 50,
    marginRight: 50,
    opacity: 0.7
  },
  blurbText: {
    flex: 0.5,
    textAlign: 'center'
  },
  instructionContainer: {
    height: 150,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  instruction: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  instructionText: {
    paddingLeft: 17,
    width: 200
  },
  image: {
    width: 30,
    height: 30
  },
  mainButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 5
  },
  secondaryButton: {
    marginTop: 20
  },
  highlightText: {
    textAlign: 'center'
  },
  text: {
    color: '#fff'
  }
});

const Header = () => (
  <View style={styles.header}>
    <Text style={[styles.headerTitle, styles.text]}>Please turn on Notifications</Text>
  </View>
);

const SettingsIntructions = () => (
  <View style={[styles.row, styles.instructionContainer]}>
    <View style={styles.instruction}>
      <Image style={styles.image} source={require('./img/gear.png')} />
      <Text style={[styles.text, styles.instructionText]}>Open Settings</Text>
    </View>

    <View style={styles.instruction}>
      <Image style={styles.image} source={require('./img/notifications.png')} />
      <Text style={[styles.text, styles.instructionText]}>Select Notifications</Text>
    </View>

    <View style={styles.instruction}>
      <Image style={styles.image} source={require('./img/switch.png')} />
      <Text style={[styles.text, styles.instructionText]}>Turn on Allow Notifications, Show on Lock Screen and Banners</Text>
    </View>
  </View>
);

class PushReminder extends React.Component {
  componentDidMount() {
    StatusBarIOS.setStyle('light-content', true);
  }

  componentWillUnmount() {
    StatusBarIOS.setStyle(this.props.statusBarColor, true);
  }

  openSettings() {
    LinkingIOS.openURL("app-settings:");
  }

  render() {
    return (
      <View style={styles.container}>

        <View>
          <Header />
          <View style={styles.blurb}>
            <Text style={[styles.blurbText, styles.text]}>
              {this.props.blurb}
            </Text>
          </View>
        </View>

        <SettingsIntructions />

        <View style={[styles.row, styles.actions]}>
          <TouchableHighlight
            onPress={this.openSettings}
            style={[styles.mainButton, { backgroundColor: this.props.btnColor }]}>
            <Text style={styles.text}>Go To Settings</Text>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={this.props.goBack}
            style={styles.secondaryButton}>
            <Text style={[styles.highlightText, { color: this.props.btnColor }]}>Remind me later</Text>
          </TouchableHighlight>
        </View>

      </View>
    );
  }
};

PushReminder.defaultProps = {
  blurb: 'This app works best when you and your friends can see new activity straight away',
  btnColor: '#2FA0E8',
  statusBarColor: 'default'
};

PushReminder.propTypes = {
  blurb: React.PropTypes.string,
  btnColor: React.PropTypes.string,
  statusBarColor: React.PropTypes.string,
  goBack:  React.PropTypes.func,
};

export default PushReminder;
