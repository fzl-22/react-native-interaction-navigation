# Pemrograman Mobile - Modul 5: Interaction and Navigation in React Native

| Nama | Ahmad Mu'min Faisal |
| -- | -- |
| NIM | 1203210101 |
| Kelas | IF-01-01 |
| URL Github | [**https://github.com/fzl-22/react-native-interaction-navigation**](https://github.com/fzl-22/react-native-interaction-navigation) |

## 1. Persiapan

Buka terminal, navigasikan ke direktori tempat menyimpan project. Kemudian, buat project Expo baru dengan menjalankan perintah:

```bash
npx create-expo-app react-native-interaction-navigation
```

Setelah project Expo terbuat, buka project tersebut menggunakan code editor atau IDE. Di sini, penulis menggunakan VS Codium. Maka, jalankan perintah:

```bash
codium react-native-interaction-navigation
```

Setelah itu, buka integrated terminal di VS Codium. Jalankan perintah:

```bash
npm run android
```

Maka, secara otomatis Expo akan menjalankan Android emulator dan menginstall Expo Go di emulator tersebut. Setelah menunggu beberapa lama, maka Expo telah memnginstall dan menjalankan aplikasi React Native di emulator Android. Tampilan project starter Expo dapat dilihat pada gambar berikut.

![](./assets/laporan/init-project.png)

## 2. Source Code

### 2.1 App.js

Komponen ini merupakan komponen utama (*root component*). Pada komponen ini, terdapat komponen `StackParamScreen` sebagai komponen yang menampilkan screen utama dan `Text` untuk menampilkan credential mahasiswa.

File `App.js`:

```jsx
import React from "react";
import { StatusBar, View, Text, Touchable } from "react-native";
import {
  PressableScreen,
  StackHookScreen,
  StackScreen,
  TouchableScreen,
  StackParamScreen,
} from "./screens";

const App = () => {
  return (
    <View style={{ paddingTop: 0, flex: 1 }}>
      <StatusBar style={{ padding: 0 }} />
      <Text style={{ textAlign: "left", fontSize: 24 }}>
        Nama: Ahmad Mu'min Faisal
      </Text>
      <Text style={{ textAlign: "left", fontSize: 24 }}>NIM: 1203210101</Text>
      <StackParamScreen />
    </View>
  );
};

export default App;
```

### 2.2 Components

#### 2.2.1 Button

Komponen ini merupakan komponen tombol (button) yang dibangun dari komponen `TouchableOpacity` yang dihias sehingga mirip tombol. Apabila `Button` ditekan, maka callback function `onPress` akan dijalankan.

File `components/button.js`:

```jsx
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dddddd",
    padding: 15,
    alignItems: "center",
    borderRadius: 30,
  },
  text: {
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default Button;
```

#### 2.2.2 Separator

Komponen ini bertindak sebagai pemisah antara komponen satu dengan komponen lainnya.

File `components/separator.js`:

```jsx
import React from "react";
import { View } from "react-native";

const Separator = (props) => {
  return <View style={{ height: props.height }}></View>;
};

export default Separator;
```

### 2.3 Screens

#### 2.3.1 StackParamScreen

Komponen ini berisi komponen screen utama yang berisi tumpukan komponen `List` dengan nama screen `ArticleList` dan komponen `Article` dengan nama screen `ArticleDetail`.

File `screens/stack_param.js`:

```jsx
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import List from "./list";
import Article from "./article";

const Stack = createNativeStackNavigator();

const StackParamScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ArticleList"
          component={List}
          options={{
            title: "Berita ITTelkom Surabaya",
          }}
        />
        <Stack.Screen
          name="ArticleDetail"
          component={Article}
          options={{
            title: "Detail Berita",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackParamScreen;
```

#### 2.3.2 List

Komponen ini berisi data konten-konten artikel dalam bentuk list object. Kemudian, semua konten artikel tersebut akan di-render dengan dibungkus oleh komponen `TouchableOpacity`. Nantinya, ketika ada article yang ditekan, maka aplikasi akan bernavigasi ke halaman `ArticleDetail` sesuai data artikel yang dibangun oleh komponen `Article` melalui callback function `onPressed`. Sehingga, aplikasi akan menampilkan halaman yang menampilkan detail dari konten yang ditekan di halaman sebelumnya.

File `screens/list.js`:

```jsx
import React from "react";
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: 1,
    title:
      "Tiga Mahasiswa IT Telkom Surabaya Bersinar di Konferensi Internasional ISICO 2023",
    image:
      "https://10tph8qrsp2c6.cdn.shift8web.com/wp-content/uploads/2023/09/ISICO-2023.jpg",
  },
  {
    id: 2,
    title:
      "Pentingnya Manajemen Konfigurasi dalam Rekayasa Perangkat Lunak dan Penerapannya",
    image:
      "https://10tph8qrsp2c6.cdn.shift8web.com/wp-content/uploads/2023/10/manajemen-konfigurasi.jpeg",
  },
  {
    id: 3,
    title: "Model-Model Software Development Life Cycle (SDLC)",
    image:
      "https://10tph8qrsp2c6.cdn.shift8web.com/wp-content/uploads/2023/10/software-development-life-cycle-.jpeg",
  },
  {
    id: 4,
    title: "Software Development Life Cycle (SDLC)",
    image:
      "https://10tph8qrsp2c6.cdn.shift8web.com/wp-content/uploads/2023/10/software-development-life-cycle.jpg",
  },
  {
    id: 5,
    title:
      "Sidang Terbuka Senat ITTelkom Surabaya Menyambut Dies Natalis ke-5, Pengukuhan Mahasiswa Baru dan PKKMB Dewangkara Maetala 2023",
    image:
      "https://10tph8qrsp2c6.cdn.shift8web.com/wp-content/uploads/2023/09/institut-teknologi-telkom-surabaya.jpg",
  },
  {
    id: 6,
    title:
      "Tiga Mahasiswa IT Telkom Surabaya Bersinar di Konferensi Internasional ISICO 2023",
    image:
      "https://10tph8qrsp2c6.cdn.shift8web.com/wp-content/uploads/2023/09/ISICO-2023.jpg",
  },
  {
    id: 7,
    title:
      "Pentingnya Manajemen Konfigurasi dalam Rekayasa Perangkat Lunak dan Penerapannya",
    image:
      "https://10tph8qrsp2c6.cdn.shift8web.com/wp-content/uploads/2023/10/manajemen-konfigurasi.jpeg",
  },
  {
    id: 8,
    title: "Model-Model Software Development Life Cycle (SDLC)",
    image:
      "https://10tph8qrsp2c6.cdn.shift8web.com/wp-content/uploads/2023/10/software-development-life-cycle-.jpeg",
  },
  {
    id: 9,
    title: "Software Development Life Cycle (SDLC)",
    image:
      "https://10tph8qrsp2c6.cdn.shift8web.com/wp-content/uploads/2023/10/software-development-life-cycle.jpg",
  },
  {
    id: 10,
    title:
      "Sidang Terbuka Senat ITTelkom Surabaya Menyambut Dies Natalis ke-5, Pengukuhan Mahasiswa Baru dan PKKMB Dewangkara Maetala 2023",
    image:
      "https://10tph8qrsp2c6.cdn.shift8web.com/wp-content/uploads/2023/09/institut-teknologi-telkom-surabaya.jpg",
  },
];

const List = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      
      <TouchableOpacity
        style={styles.view}
        onPress={() => navigation.navigate("ArticleDetail", { data: item })}
      >
        <View>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.text}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  view: {
    padding: 17,
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    backgroundColor: "white",
  },
  image: {
    height: 280,
    resizeMode: "contain",
  },
  text: {
    fontSize: 18,
    paddingTop: 10,
  },
});
```


#### 2.3.3 Article

Komponen ini merupakan komponen halaman yang diberi nama `ArticleDetail`. Komponen ini menerima `route` berupa data dari setiap article yang di-klik dari halaman `List`. Komponen ini akan menampilkan layar yang menampilkan data dari konten yang ditekan dan tombol dari komponen `Button`.

File `screens/article.js`:

```jsx
import React from "react";
import { ScrollView, Image, View, Text, StyleSheet, Alert } from "react-native";
import Separator from "../components/separator";
import Button from "../components/button";

const ButtonHandler = () => {
  Alert.alert("Button Handler");
};

const Article = ({ route }) => {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Image
        source={{
          uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATQAAACjCAMAAAAzSxLiAAABJlBMVEX///+Dg4QAAACvERbtHSVUVFTrAABFQ0SAgIHo6Oj8/Pz5+flBP0C4uLiIiIhKSEnV1dWsAACkpKTz8/OnAADk5OTv7++Pj49MSktiYmKenp6qqqrl5eV8fHze3t48OjvMzMxwcHC9vb21NDP96+spKSmWlpYcHBzHx8f0k5W8vLwwMDBmZGWvCBCoEBTSkJFbWVroxMQfHx/tExzsAA/5xcYrKysRERGgqpnwYWH1oKDrHiXzhoXa3te7v7hhY2D4uLjy3t7crKvvODnwUVTycG/zgH76w8L719fjvLzYoaHKgH/FcnDBYmG4QUKyIiLvTE25Tk71mZv3rK7vPkO9WFeQk4zO1b+0ubDw9eyfo5rn6+GtrK/s9+Wqt5+BdYd3fHOVm5Bp4X7xAAAYkUlEQVR4nO2dCX+b1tKHUW4x+2JhAQKxiNqYSHKrOqnTtLUTd03apmlvel3X0dvb+/2/xDtzDiAQoMVRIifSP7/YCA4IHubMzFnADLPTTju9Bzr8+umzQ3GNBxSNy8+++XSNB7yDOtwjevDtd4+///6Hr+/f//eXRE+f/rgApnT52fPn3/yE+hT08y+/vPjPry/3D0D7L9/V6W9Gh3sfET2gepiJsvzo8f0fpZqdvvn5VwJnVicnJ/8CnXz87i/kXSqD1qAHQO+3VyWLu/z0JdAicJq05dAIuL29Hw6z8p/9fjAf2A5apod7X9PSvx8sJLaDNsX28HOG+fRgfwlkO2hT7f3w+3LIdtAKerBMzdxBK+urT3bQqHbQbqEdtFtoBWgf7aCl2kG7hXbQbqEdtFtoFwhuIexPe/jgwYM1QTs5Odnf3z/4ZNOX9ZZ1+Ozp/e8f//HRXlUPZ1CWoBE4s9p/+euLn396frnOruA7qMNXzw5rVkuHh58/vf/4YQncFBrgevnip+fPDo06PIeX37zt096sLtGkvvrj8ff3i/r3l68+JzAPX/2293AG2sn+wS/PsT/38PI57eqe6sXvH58c7O//a9OX9XZ1uUccWqGje9rf/fC7+58DmvsZtk8ospdgR9Lzn1/uV7u7SYf3yQcPTXz19eNva/wZiQ7Y2f39M4a5v/cgg7Z/8pxhnv+OHd4nhFLVr/364tPnm76sdyHx8PLZ5wX9+PTVlz88/oqg2/vjGXP4x0MaPQ9+ZpifUlgfg8//5vnzzwp6drnW4cD3UuKzL78DbnuPReZryOc+OTn4jLl8icBefHO56ZO7y5JefbuHfd2v9r46ObjEHu+D/3y26ZN6D/Q5OL1XzNO9g0Pmxf7Bi52NLacvkdqXl8zvB5/skC2tw6/2fmSYXw5+2fSJvF/6be+3lwc/bfos3jc93jv4wFtHb0O/7exsp512+nAkhRO9ZoLfTvMUql78etMn8Z7JcHhevdj6PoyVJIYW32o555s+j/dK5g0wa/HKztSWl6hbBFp7FwqWl+C2iKxwZ2pLS1fR0Foqf7MztaXVa6vE0q4udtBmJAmC0bDJbKOpqck7PZ/3QaIeq1805K+dmMfauVz0FCVjawxS9C2ev6pNxcxr4tR4dbAEDSlxr5Teus/urkqAZKyeWu+GRk8+NhcexXdVno/1bQmzpgPmxDt+dcv5VQZNWHAMMYx5QB933soZ3kEZNO2Pq9TO+SWhmRFNTpStcWrMhUrJ6IbZ6/U6uXw9LkETRUkyapy96Lt8eoR3fu4bU2LRa7bajlVUy0stzVP/lKSOrifRQJlE+gw3KaT7t3h3US3+cCQprVx8Sfla1b24VlWa6bZUSym6LlNRs2LRtoQBUBi3FmuKEBadPJpCBGhlW2q84ocr31kCGV/40LpOK6ioK9Z0w6CpYfEBShqoNZjmAPSu/6I7+oBsWoetrck3wCetyAyhneu+7+tFZNhC3Z58ozdp8c2AGgXBVS3tx7vbUzn9+BbI0MPx5f22KUfrObcxszqO29MYMOcx4/kVgG5PumEqczDwvDqNEIvw8crWeLSkGQbvxRc304+qVeY5u5+zNemG31g5ed5yz/+6mK6Ik/a0rOq0Y4idhSZCXb/ShylJabQzy9UlRkzUKRXDn6b+sS51wqgNLfq0oW6Fm76WdyWxscmpuj6GwiK0WGD0nJpKsgupoytgcPg52ZqGutFuqJpWSJ26mEzXATTRz3fIUjLJAItTBtszF0vUa1tPvHrdSe1GDKeWRtqVZuiQGDApdJuJkrQ1yMDQGtKN6zx3KPazqcTTi4KfDCJ98SjLh6rXtbWTn0yJGE6hByMPj9LW+K9Mhq+fp5Z0btXFTrdgRUa8nd0+M5J01bu6FtBWpEkNM75dzOsLltbaYmgGSSLiCNCYrldlVu6pKEHbmqHzisx0vlm7w7y+9iqmNpNv7SyNyPwiM6kwqWlCTcphsQiN5LOiIKwaBToKSmSMcStWimr3fWGsltc5/eoQoI8bQlgIcWETcdvMmuB8uQGeOvuZ6RxFaHzCMML1VeyGq3Fz76EA2r2K9E51XRVaG1fzsNDHhfANLv62EvI0oy5yOjP3cQaaNMDM1nImib/8DU/wUmXm9tAUXN2GBQsXNtEvYDa0nKjaC6AldN4V34rdxKfqCML89oCOl6qtDdomwpGhzBt4mnX2hTytpYaQpVyk48JgcCqduBA7TtSZ1/2YQTNroPnvBzQ6s7FJ86on7dgQolgt1GxqeNbEb7a2DJo07oJGGn4cjnA50E2WrAtwXUDX3Uloc+unM3PKVWhwAN21Kh7Rah7xzKClmuDHVrmIlWHJ93FjJ09+aqAJqF72lYLiOEp+5iZuwyoVt2n/VeTEy0zjnKe5g+mzo73SLLROeK4LoqG7M9R4ddKUxs1AI8HUKxdRcZ2Tf0yGtKama6rQHLL5lFYLnaWl7fSmko+9mKyTDRp7791Tbk8MOSTVVKNgMeWhyxloou6oquUougDmNjtI0DQYtTI0K/dv3Xpo5Ij3juj9bU/doUtWtMie6apRK9sYvgk0UZ/n1Hi35NVmoYVk+pVntQdRexYaH9c/dLYqtEkhKqh10MxHZBs90aQYRJL8YFVxbwKNMdy5g3GTYiScrZ5COtebjK9XgN/UTuhbERrNTI7HtIr6FWgCE+Rb4AQpEZmje82BVhOWV1E0DxrfUgpHL6UcWHONxGmu3TNmejtoToaI2FCrAs0cF2sbOdoRuNPOMS4pObTjgW5TWJ6uFPe4pebWT7z0qXMSCoTS6ClB8FSbBkvrqK0IDVOSUY7vdBbaI8os8+vkEzmxEJe6OTQ4kR5ZULNVgzeCxmQd/w2TDgqPAviFSKvmYyl+5MYNIditplGrQSP17SxADdOLL1sakZXtie5tSBdP0/pJDoYxgVZ0KfvO6M2gSTp5SgznHNRTszJqeh00OIBk6opTy82pzBxaDdpsu0GvhZZyolxojGVIwDTSg3VKG5U1QGMg0YJ80D1/fa02UZsLjZyv6Q8ctWKsvOPPvJh0NWj6DLSkFlopavTpcj81THIwf/3QyDULJqbN9c4pSx/mQGPIWDFW1Nl8zZ1ExUR3NWjCDDS3HlqacBAuY3qQcVoZ3yK0VGbdOAFSuyHU5kMjp+2HM3OcMR+50aeJyy18Wps0hUwT7qxUgaYQk6KxgsGYeTRdPGPeBTRGaJgBA9VMhES4sKYeGqhTPQSvXuTUVoyemHGxZCkM6KSaMjQnjYohKdNNq3CaofSZdwKtcd4QPiglLrA0ScIhUFGpGaCZTiK6TZ6Gy/pxWt9mk1vGw980FpBtj/TMF4bvCFrjlFteMRdUz9eTiQtxtsbSoHrnbm0JaFYBGk0UTsc07+8zNW1P6vdIr4hIyN47OyK/AuZdQWP8hs4iMJa50P7v7//C2qh2Pn18nofQpAzNyVgUREwny72KbU9MIWp6OUh5GgtKbU+/Co3ND7leaIwZ1eZrajK/ev71xX/Re9W0q0pPyia5DRA5+f2fikDgs0/qDAUls0OygXRQ5VaYjdvcm2LxslJmfrdIT4i7LlypjKguX+MVaS40KSKlqs2K8ogzvaq8n84rMyRiyyAHpxTCiOYVuW2SsEm8Pm2f04ZR1sbs9goHw1KkL/0RrrKKlrw2SUo2o5GfOnXeFZICiqpPM69r7JPsWExvpR7tSk1lCKWP9EAkwyisgCaLNTCLe5hpMdpdS1b1sgIdxYrLPbeklJh/ExbvrX8atRHRt+M41zd5VeXbfnEullp9B4xf3wLlZwe1PlRhpyzUNPe1oWQP78xAa1UHtxuSPH57JnqbCTTBsXu2o8TUV7lCCVr1oWEpqZ9KuT3QSDM+Qm8qmokbx1eObkyKLCbVvk9jdoBl66AxmOJTvyVBq+/cFA13ATSmp1g1Gcfs8OlWyWwX7ah2wo7pDyrpyna/bM1IodHBlOta+zGUKjR366CJmcgDLemEF/xx4zNCZVq3UDO2Vc7TUJGnnWneLXrpB67rvtk471uWaPaEjq+DwjBJktA30hE7i/aYqVEY9y/+EgXf99OZQqJQGTMm0MoH1tMM/96jlV8oNs6aj3dRhh65jmXFlqVSteB/TIdPeGdCMwscU7g5j2KcL5TNhqnGTnz0rHTssNCkXpUaDpCP1nWR65TkJwriqTxgnTYrc2gEHE19eUcXQqXS1Z3GgdIEhbT3JtWK3k6tdoncARl60m4ex6QQHLfwqGxWEqyy4bFjPiqRoUO1qktnVbSbTqReCM1bXOydytRxYGTBM8MlaFV6lQ1X5ZkwPLIKYSHChXlTKsTqUg5NbCq64EhrlxC6C4k1Qmss3boo9yeMsg4aZuQ5CvhCy+M90k0bejzvSYwLn2Mm7B4dB2QCuds9Oz6WPeI1VdLRpoxPjwM1C9yhFxwfD7sYbYQ+HIFG1zYcrI/fLFj26fERu8RL8m4haKIv9zqOFaHNPqThzfYAYkc2GXYjPW0GcfY27XXTiwOfVgqtPypFkezTvaFBh6Bor3C2NJ16Fa6fmaTXPhn1ptB4dfa9VhQHZ0XZrR9nVU6hkQHn39HZU4/KI+zR7BQgrPfd6UcgH1PuaY+jUu4sX3sPmqlYs5GyqaauBq3yco7prG6O2hs7A21qG2zK5KjLpR/L0OxsTIAdE8oCHc5DC3TosejUK657hr8ma2YmuNks7RaZpd0eJBE+MIKBtDrTYHlodbOtCjf/tNMI7bRlaW1GZI9pjoEQjjJosWBGZKHDOEcEFrXIkB4My8v0t46zZrDlgZOPWpVTeSPRB/55XgXP7PsdzPBF0TAMSPZ1SNrK3DBPW64m8/WN+sLYB1aZWmjT4SozNCRfT7cRaCRNISZGJgN1dGjO+QGtjmk5UjvpvGQhgaRA9+6tO8EjnYc8H0/CTk2yafhRm+RgKTq0tOUihtrw+jTTsTNoXgO0abdT0s+zYQrtmK5HE8PYYFpytl1JpzEMiG9Lpye4bLZ5rdCMBDINNVb8xnRG0Adtq2VdrQKNh+ZTc74vhhZ19mIttGFeLr/kHFo6TJVWxMLEZDK1r0VKYK0kaUxx1tE6oUkDfE4nWjAH1QgHepg2mZaAxres5ndomsQAxSF1S3XQ8pxXK1x0Ci1te1JoSnE7QiOUyA9MdUqTjtYJzXd4dZknAEXIEym0hT4NkCkNz+YJdnBMZ2nT/ECfQnOn0OS0NPFc3MQ3wym0tNqdkepJ5h9YoWBwKTRiZPjfxg8kKewnHcNaM7SO257zVE5Rft7LMX+WbssJG58qIxkHve4udV7j9HqEe1VocVZVB1NoNEslxqSQoEmS3OMMWlZfc4Jq9l1rrZ7msi2MUC35tLpUjsd6GZpzGnsk5dJCs0Na7I+ygfI0iZiB1kp9mCgXoOGsIIHUbYFMSMDTd3JOWR5I7lqGUl939VxeYSuDRn7HCk5QLr78lucxZ5l/D4oJB6mX5YS1DI2wiCP36F4BGlQ9Gh5Ymp6x0aA7NS56E9K+EGR9qkTq2n3a8ipbmjcxTUjjJu1s/IlX3aQ5AufKM4TUSsrTaiUCKgsE/sy2SjOqFCgoNNrJSSdNFGeYbszSsAu3hZamqio/ITVA6mXDAnG4VOvOGE6vg1xaP/3QomDwQvOUo1+8aol8PMs+YmqbdwNjApO2k7A3/YwuSo8KmzcD7TyOnTiOJwr+jOO0c1GgY1R843zSilxqbMdqCpnQ0vzo0dHRscF4p0dHObTUVjwdtp2aTPf06NjSye4B7eQIyS2QddxC5wESPxenu5uk4h677eOj0830k0tCp9PrdASz18FXx6e+K51wyuOjxsvK8HW9+PhQ6dPMl/p6JbgLxfK94oeBYZLWxnRMH9pQGx3gNy4sPhtlUVWXTpPPH+O7Cy+BTB8oo0na3dDrG68/lZo+mmimk9nuwhsNs+63cNMnMhX+AQKQTwZD9fzZADOh7fk78I7WNBKvfZbjG8hIyGtZomSgKBcXSv46PlGfxJZlbeRtLGX1usN7p9279EetxAuOPA7HPoHfNhv8M310WEQb3Dwz1Na9zO1D1F+ORx5Zv7FU1bpSb3Z/hHexxIsnNsva9pMnY9tmn7D/1D/Zv1NR5s2YRXWfjFmbHbP9653/WKhzlaXQRghvPB7/769Nn9Ld10XXJtDGXWpx9j87p7ZIwg1lBtDob7t767+MCg3KtSQogl43foYy89kQxiadyEU/hcaOU2js1e1MTbI4WQ680uWO7XHx4kQBR186mq3OOY4xkoOhU7/NHbKZmG752LlMm7XxJNq2Fha/28Tvdm0urNtpJQlXGbMMGlD78zZHksYyJ3O2zBdXclxp3llydDbBVzMN5z0s1+c4e9jQdlM5jYrrMzZXP6fND7RgQMrKRbsPz87aDOMFwRv3jojX3Qo0Vqv/y6kLFMtcP3FkLiicqSBzJZOJZHxzmt5uzzlxM+Aspun9aX2SHWksy8UGx9WbYyLbGnay9TlWLK2W4U4o7TefyX/u5cym0Fj25hbdQWMNe248PjZwcpltewAmlOWIcZw2vqPNmXTivqbFDhO5+CyajmV8fD+e4ytjO30hqR+rHMc7E9wD6jb22rYdxe9rIwpAZDocpzKixOiBnLiwH96jjsraatb9NpFtG+fA2WCNjNTu2nZfh+N6HBc7kuviIZWRzcYAL3EcM7btuOZymqUXmBWg2ePrlW+HZGtc9ga5OICKyoFRKXLgG0EANVYIAmcw1OByRkw/kEWmTcv4TDSUxwGnybQHNhpyts0FbXB8sixrQcxImjy2OTnv4ggDmVTuSLbJflBHk0AOoE6n52xBFeZajMmBxRqsjJtkgxw36BpyAMThBMCVdLGycqysacEqj9aeqwVmRWlP/lw5OIGlBXYfnUkUcCO3j+ccc5zhy3iRYBdhDE0OexwzXW4E18l1XQ9dnivb8hhMkCXX7MAt08bgrFk0DE2TTZOD29GVcyc3kWmXuAP+czzStDHcEG6kqFx26X1uNIL9dPxebxi09RYn+w75bkuQ5QmjyjLvjrUgYkZwzv2xxs2LSyWJ4uv/afXM4MT7fzLiatzCAO9wAFWC5bpoefCzz43BlwQhwwxkWWdEm4OaYGD96nIIaQzbVfyIS+TrJMaDdRLYqAxo2pwcgl+3O8zUX0CMJgA9Yn34XSqx0hGXTrpiOW8AvpR8L04+QifhY221iE2GAjpNRpfhXDgbyPkyt1xPnXh+obgttsHQkNo/N8r1cuNQmfx4LMOdi8CoFHIRXUDRB0tC5+/IEMrA6GBLJ5AnPfhPLpwlYBlSkoou4d6kKoYR+sWCwIRJqEF7ZUQWUNkaXofN0bgN98QSOW3c5kjQiftguprB9Dg0eFeWBfgP7lYCSzZJnPLp+S7W66snXfCQjcww8eg++SdcBRqDU4o12QVH1qEXL2lwD1XOBvY8hrIkQAeNdxv+6wTNCCwADM3UuNQbG2RJImvR3nwHqnjhK8SxNk7LgX3AZbeFwJbJ+7EoNFItY85mNVsC7wXCKgz80eDB34ktzgaj7kAxndT0CM5n/mVJ5xeom7E9x8xSbDarYtk/l0lADG+EdWQCtgSmZdKT6qEH6aNFSCzaz0TmBHq3FVJj4JJjQ5bbxbvdwX0Yg1QmsESNWGNBsA+xyQ7ZAwglYL8R6a6n4TPCit0JbMw7ICJZeq+LeyjEvtCs++SAGKPo7W2Ts5rH7OLqCWi8gFemMRb+539LjBKYQ45LJJ3VAgTiQoSC1DLBu8tqrNkZYVhAoxPxbnMSxAEHzS/o6KT2QRIV0gNRFwixeCzh2rhQcYn8gNpkQuwDEj+9R/BNSA7BIAMk4XFYXVnMf4n3QtuT0Kl68K1g5YIN+GIO6i1DLa9RwvmFutDAKgansfHF+ULv1oVgpsE/lekFNjdiMW1A7yGCRyEtBRfvs9b1yN02ZY2UickdJ3c7zWdhH1ziOY0dwW4SuKhSGjWQqU3ScrCfCbeF86DplbYPwDpNrI023Bbwdm0VorNCDtj1DLxXg8DW+hCy9NSdoo9olnFDfNXKgpr85O9F/UVgMRzkXR7cNEzB5AAsCQK+yaiYkHnBEJKRVgAFmCAAH6+QMoCDHx5B5QDfk2ZZ3nCIfl6wIZMKxgKjnw1LDw2pw7MoLQc3chQEBhpdodELiQ8aDhsMJ/jdQWAHQ9jDwu8Oh0PSlILv5hKIBZA0QgskmDezwbjBZKVei7B9sfC1nqZrqekb/EJYwiodhqHIiG017ggKvlJDclQrFJMQS+kxLaNjGfyZHiZMlwxXtZCOEIalr4aSRvo7+wam46hxtr8UksMzfhgC/IlqJSbZA787SQ82sFScn06LSkk41/0IF1/8/fcXdbq5cW9u2u5FkkRJRRAMktdb3J0rzZfYpE2f90477bS9+n+yo5RF9qayHgAAAABJRU5ErkJggg==",
        }}
        style={styles.logo}
      />
      <View style={styles.titleView}>
        <Text style={styles.title}>{route.params.data.title}</Text>
      </View>
      <View style={styles.content}>
        <Image
          source={{
            uri: route.params.data.image,
          }}
          style={styles.mainImage}
        />
        <Text style={{ marginTop: 10, marginBottom: 10 }}>
          {route.params.data.title}
        </Text>
        <Separator height={10} />
        <Text style={{ fontWeight: "bold" }}>OCTOBER 24, 2023 </Text>
        <Separator height={10} />
        <View style={{ backgroundColor: "gray", height: 1 }} />
        <Separator height={20} />
        <Button text="Share" onPress={ButtonHandler} />
        <Separator height={70} />
      </View>
    </ScrollView>
  );
};

export default Article;

const styles = StyleSheet.create({
  logo: {
    height: 60,
    resizeMode: "contain",
    marginVertical: 15,
  },
  titleView: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: "#eeeeee",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  mainImage: {
    height: 220,
    resizeMode: "cover",
  },
  content: {
    padding: 15,
  },
});
```

#### 2.3.4 index.js

Komponen ini bertindak sebagai gerbang ke modul `components` sehingga bisa melakukan pemanggilan komponen dari `App.js` dalam 1 baris saja.

File `screens/index.js`:

```jsx
import TouchableScreen from "./touchable";
import PressableScreen from "./pressable";
import StackScreen from "./stack";
import StackHookScreen from "./stack_hook";
import StackParamScreen from "./stack_param";

export {
  TouchableScreen,
  PressableScreen,
  StackScreen,
  StackHookScreen,
  StackParamScreen,
};
```

## 3. Dokumentasi

### 3.1 Komponen List

![](./assets/laporan/list.png)

### 3.2 Komponen Article

![](./assets/laporan/article.png)

### 3.3 Button ketika di-tekan

![](./assets/laporan/button.png)

