import React from 'react'
import { Modal, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { Car } from '../HomeScreen'
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../../commons/color';
import { ButtonComponent } from '../../../components/ButtonComponent';


interface Props {
    cars: Car[];
    isVisible: boolean;
    changeVisible: () => void;
}

export const ModalCar = ({ cars, isVisible, changeVisible }: Props) => {
    const { width } = useWindowDimensions();


    const totalPay = () => {
        let total = 0
        cars.forEach(item => {
            total += (item.price * item.quantity)
        })
        return total;
    }

    return (
        <Modal visible={isVisible} animationType='fade' transparent={true}>
            <View style={styles.root}>
                <View style={{
                    width: width * 0.80,
                    ...styles.conten
                }}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Mis Productos</Text>
                        <View style={styles.root2}>
                            <Icon name={'cancel'} size={20} color={PRIMARY_COLOR} onPress={changeVisible} />
                        </View>
                    </View>
                    <View style={styles.infoTable}>
                        
                        <View style={styles.descriptionTable}>
                        <Text style={styles.textHeaderTable}>Producto</Text>
                            <Text style={styles.descriptionText}>Precio</Text>
                            <Text style={styles.descriptionText}>Cantidad</Text>

                        </View>
                    </View>
                    <FlatList
                        data={cars}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) =>
                            <View style={styles.infoTable}>
                                <Text>{item.name}</Text>
                                <View style={styles.descriptionTable}>
                                    <Text style={styles.textValue}>${item.price.toFixed(2)}</Text>
                                    <Text style={{
                                        paddingHorizontal: 10,
                                        ...styles.textValue
                                    }}>{item.quantity}</Text>
                                    
                                </View>
                            </View>} />
                    <View style={styles.textTotalPay}>
                        <Text style={{ fontWeight: 'bold' }}>Total: ${totalPay().toFixed(2)}</Text>

                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    root2: {
        backgroundColor: 'white'
    },
    conten: {
        padding: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    }, header: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        padding: 10,
    }
    , title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    },
    infoTable: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems:'center'


    },
    descriptionTable: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    descriptionText: {
        marginHorizontal: 10,
        fontWeight: 'bold',
        color: '#000'
    },
    textHeaderTable: {
        fontWeight: 'bold',
        color: '#000'
    },
    textValue: {
        marginHorizontal: 10
    },
    textTotalPay: {
        alignItems: 'flex-end',
        marginTop: 15
    }
})