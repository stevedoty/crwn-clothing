import React from 'react';
import SHOP_DATA from './shop.data.js'
import CollectionPreview from '../../collection-preview/collection-preview.component.js'

class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){

        return(
            <div className='shop-page'>
                {
                   this.state.collections.map((collection, i) => (
                       <CollectionPreview key={i} collection={collection}/>
                   ))
                }
            </div>
        )
    }
}

export default ShopPage;