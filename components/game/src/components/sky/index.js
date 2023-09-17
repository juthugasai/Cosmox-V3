import React, { PureComponent } from 'react'
import { View, StyleSheet,ImageBackground } from 'react-native'
import Star from './star'
import options from '../../config'

export default class Sky extends PureComponent {

    renderStars() {
        const { width, height } = this.props

        return Array(options.numberOfStars).fill(0).map((el, id) => {
        
            const position = {
                x: Math.random() * width,
                y: Math.random() * height
            }

            // Genera un numero tra 0.4 e 1
            const luminosity = (Math.random() * 0.6 + 0.4).toFixed(2)

            const isBig = Math.random() < 0.2

            return <Star key={id} position={position} big={isBig} luminosity={luminosity}/>

        })
    }

    render() {

        return (
            
            <View style={styles.base}>
                <ImageBackground
            source={require('../../../../../../assets/A-2/bg.png')}
            style={styles.backgroundImage}>
               {this.renderStars()}</ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    base: {
        position: 'absolute',
        ...StyleSheet.absoluteFill,
        backgroundColor: '#000',
    }
})