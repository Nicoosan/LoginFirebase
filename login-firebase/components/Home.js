
import { Text, SafeAreaView, StyleSheet } from 'react-native' ;


export default function Home() {
return (
<SafeAreaView style={styles.container}>
<Text style={styles.paragraph}>
Nicole
</Text>
</SafeAreaView>
   );
 }
const styles = StyleSheet.create({

container: {
flex: 1,
justifyContent: 'center' ,
backgroundColor: '#77aaff',
padding: 8,
},
paragraph: {
margin: 24,
fontSize: 38,
fontWeight: 'bold' ,
textAlign: 'center' ,
  },
});

