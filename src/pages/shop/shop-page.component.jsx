import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import SHOP_DATA from './shop_data.js';

import './shop-page.styles.scss';

class Shop_Page extends React.Component{
    constructor(){
        super();
        this.state={
            collections: SHOP_DATA
        };
    }
    render(){
        const {collections}=this.state;

        return(
                <div className='shop-page'>
                {
                collections.map(({id,...otherCollectionsprops}) => (
                 <CollectionPreview key={id} {...otherCollectionsprops} />
                ))}
            </div>
        );
    }
}
export default Shop_Page;