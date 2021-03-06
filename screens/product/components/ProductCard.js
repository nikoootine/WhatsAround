import React from 'react';
import { TouchableOpacity, Image, Dimensions, } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right, Title, Text } from 'native-base';
import WhatsAroundUrl from '../../../constants/WhatsAroundUrl';

const { width }  = Dimensions.get("window");

export default class ProductCard extends React.Component {

    render() {
        const { item, productModalFacade, navigation } = this.props;
        
        return (
            <TouchableOpacity onPress={() =>{
                    productModalFacade ?
                    productModalFacade.showProductModal(item) :
                    navigation.navigate('Product', { product: item })
                }}>
                <Card style={ styles.container }>
                    <CardItem cardBody>
                        <Image source={{uri : WhatsAroundUrl.url + item.image }} resizeMode="stretch" style={{height: 150, width: null, flex: 1}}/>
                    </CardItem>
                    {
                        (item.price && item.name) &&
                        <CardItem footer>
                            <Body>
                                <Title style={ styles.textStyle }>{ item.name }</Title>
                                <Text style={ { ...styles.textStyle, ...{color:'green'}} }>{"$" + Number(item.price).toFixed(2)}</Text>
                            </Body>
                        </CardItem>
                    }
                </Card>
            </TouchableOpacity>
        );
    }
}

const styles = {

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textStyle : {
        fontFamily: "webly-sleek",
        textAlign: 'center'
    }
};
