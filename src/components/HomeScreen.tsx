import * as React from "react";
import { RouteProp } from '@react-navigation/core';
import { Dialogs } from '@nativescript/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { StyleSheet } from "react-nativescript";
import { MainStackParamList } from "./NavigationParamList";
import { requestPermissions,takePicture } from '@nativescript/camera'
type HomeScreenProps = {
    route: RouteProp<MainStackParamList, "Home">,
    navigation: FrameNavigationProp<MainStackParamList, "Home">,
}

export function HomeScreen({ navigation }: HomeScreenProps) {
    React.useEffect(()=>{
        requestPermissions().then(result=>{
            console.log(result,"resultt")
            takePicture().then(_result=>{
                console.log(_result,"_result")
            })
        }).catch(error=>{

        })
    },[])

    return (
        <flexboxLayout style={styles.container}>
            <label
                className="fas"
                style={styles.text}
            >
                &#xf135; Hello World!sss
            </label>
            <button
                style={styles.button}
                onTap={() => Dialogs.alert("Tapped!")}
            >
                Tap me for an alert
            </button>
            <button
                style={styles.button}
                onTap={() => navigation.navigate('Secondary')}
            >
                Go to next screen
            </button>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
    },
    text: {
        textAlignment: "center",
        fontSize: 24,
        color: "black",
    },
    button: {
        fontSize: 24,
        color: "#2e6ddf",
    },
});
