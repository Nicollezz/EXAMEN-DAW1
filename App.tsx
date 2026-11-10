import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import NavegacionDrawerComponents from './components/NavegacionDrawerComponents';
import RecetaProvider from './Providers/RecetaProvider';

export default function App() {
  return (
    <RecetaProvider>
      <NavegacionDrawerComponents />
      <StatusBar style="auto" />
    </RecetaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});