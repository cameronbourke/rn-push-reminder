'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactNative = require('react-native');

var _reactNative2 = _interopRequireDefault(_reactNative);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = _reactNative.StyleSheet.create({
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

var Header = function Header() {
  return _reactNative2.default.createElement(
    _reactNative.View,
    { style: styles.header },
    _reactNative2.default.createElement(
      _reactNative.Text,
      { style: [styles.headerTitle, styles.text] },
      'Please turn on Notifications'
    )
  );
};

var SettingsIntructions = function SettingsIntructions() {
  return _reactNative2.default.createElement(
    _reactNative.View,
    { style: [styles.row, styles.instructionContainer] },
    _reactNative2.default.createElement(
      _reactNative.View,
      { style: styles.instruction },
      _reactNative2.default.createElement(_reactNative.Image, { style: styles.image, source: require('./img/gear.png') }),
      _reactNative2.default.createElement(
        _reactNative.Text,
        { style: [styles.text, styles.instructionText] },
        'Open Settings'
      )
    ),
    _reactNative2.default.createElement(
      _reactNative.View,
      { style: styles.instruction },
      _reactNative2.default.createElement(_reactNative.Image, { style: styles.image, source: require('./img/notifications.png') }),
      _reactNative2.default.createElement(
        _reactNative.Text,
        { style: [styles.text, styles.instructionText] },
        'Select Notifications'
      )
    ),
    _reactNative2.default.createElement(
      _reactNative.View,
      { style: styles.instruction },
      _reactNative2.default.createElement(_reactNative.Image, { style: styles.image, source: require('./img/switch.png') }),
      _reactNative2.default.createElement(
        _reactNative.Text,
        { style: [styles.text, styles.instructionText] },
        'Turn on Allow Notifications, Show on Lock Screen and Banners'
      )
    )
  );
};

var PushReminder = function (_React$Component) {
  _inherits(PushReminder, _React$Component);

  function PushReminder() {
    _classCallCheck(this, PushReminder);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(PushReminder).apply(this, arguments));
  }

  _createClass(PushReminder, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _reactNative.StatusBarIOS.setStyle('light-content', true);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _reactNative.StatusBarIOS.setStyle(this.props.statusBarColor, true);
    }
  }, {
    key: 'openSettings',
    value: function openSettings() {
      _reactNative.LinkingIOS.openURL("app-settings:");
    }
  }, {
    key: 'render',
    value: function render() {
      return _reactNative2.default.createElement(
        _reactNative.View,
        { style: styles.container },
        _reactNative2.default.createElement(
          _reactNative.View,
          null,
          _reactNative2.default.createElement(Header, null),
          _reactNative2.default.createElement(
            _reactNative.View,
            { style: styles.blurb },
            _reactNative2.default.createElement(
              _reactNative.Text,
              { style: [styles.blurbText, styles.text] },
              this.props.blurb
            )
          )
        ),
        _reactNative2.default.createElement(SettingsIntructions, null),
        _reactNative2.default.createElement(
          _reactNative.View,
          { style: [styles.row, styles.actions] },
          _reactNative2.default.createElement(
            _reactNative.TouchableHighlight,
            {
              onPress: this.openSettings,
              style: [styles.mainButton, { backgroundColor: this.props.btnColor }] },
            _reactNative2.default.createElement(
              _reactNative.Text,
              { style: styles.text },
              'Go To Settings'
            )
          ),
          _reactNative2.default.createElement(
            _reactNative.TouchableHighlight,
            {
              onPress: this.props.goBack,
              style: styles.secondaryButton },
            _reactNative2.default.createElement(
              _reactNative.Text,
              { style: [styles.highlightText, { color: this.props.btnColor }] },
              'Remind me later'
            )
          )
        )
      );
    }
  }]);

  return PushReminder;
}(_reactNative2.default.Component);

;

PushReminder.defaultProps = {
  blurb: 'This app works best when you and your friends can see new activity straight away',
  btnColor: '#2FA0E8',
  statusBarColor: 'default'
};

PushReminder.propTypes = {
  blurb: _reactNative2.default.PropTypes.string,
  btnColor: _reactNative2.default.PropTypes.string,
  statusBarColor: _reactNative2.default.PropTypes.string,
  goBack: _reactNative2.default.PropTypes.func
};

exports.default = PushReminder;
