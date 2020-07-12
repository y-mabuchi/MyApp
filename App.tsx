import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const lightTheme = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    color: 'black',
  },
  label: {
    backgroundColor: 'white',
    color: 'black',
  },
});

const darkTheme = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
  },
  label: {
    backgroundColor: 'black',
    color: 'white',
  },
});

type Theme = typeof lightTheme | typeof darkTheme;

interface Context {
  theme: Theme;
  setTheme: (newTheme: Theme) => void;
}

const ThemeContext = React.createContext<Context>({
  theme: lightTheme,
  setTheme: (_: typeof lightTheme | typeof darkTheme) => {},
});

interface Props {
  name: string;
}

function Profile(props: Props) {
  const { theme } = React.useContext(ThemeContext);
  return <Text style={theme.label}>{props.name}</Text>;
}

export default function App() {
  const [theme, setTheme] = React.useState(lightTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <View style={theme.container}>
        <Text
          onPress={() => {
            setTheme(theme === lightTheme ? darkTheme : lightTheme);
          }}
          style={theme.label}
        >
          切り替え
        </Text>
        <Profile name="januswel" />
      </View>
    </ThemeContext.Provider>
  );
}
