import {View, Button, Text} from 'react-native';
import GDtoast from '../components/GDtoast';
import Toast from 'react-native-root-toast';

export function HomePage() {
  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', height: '100%'}}>
      <Text>hello world</Text>
      <Button
        title="点我提示"
        onPress={() => {
        //   Toast.show('Hello', {
        //     position: 100,
        //     visible: true,
        //     opacity: 1,
        //     onShow: () => {
        //         console.log('onShow')
        //     }
        //   })
          GDtoast.warn('Hello World');
        }}></Button>
    </View>
  );
}
