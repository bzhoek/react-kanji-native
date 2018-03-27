Now [ejected](https://github.com/react-community/create-react-native-app/blob/master/EJECTING.md) from `create-react-native-app`

`yarn run ios` to run on device, `open ios/kanjinative.xcodeproj` to edit in Xcode.

For production, the JavaScript bundle should be [pre-packaged](https://facebook.github.io/react-native/docs/running-on-device.html).

## Icon
`brew install libsrvg` Square with 毎日, and 漢字.

## Realm

Started [here](https://hellokoding.com/todo-app-with-react-native-realm/). Unit testing should be [possible](http://hoangtran.me/ios/testing/2016/10/15/how-to-unit-test-your-realm-database-layer/). Command-line scripts hang when running, but [example](https://realm.io/docs/javascript/latest/) seems to imply this could work.

### Performance
[Realm](https://realm.io/docs/javascript/latest/) ListView is pretty slow, [FlatList](https://facebook.github.io/react-native/docs/flatlist.html) is supposed to [fix](https://medium.com/react-native-development/how-to-use-the-flatlist-component-react-native-basics-92c482816fe6) this.

### iOS
Bundling the [initial database](https://stackoverflow.com/a/29854659) requires copying from the bundle to Documents. You can view [the device or simulator content](https://stackoverflow.com/a/28465803).