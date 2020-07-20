import React from 'react'
import HotDeals from './home/HotDeals'

import Collections from './home/Collections'
import Carousel from './home/Carousel'
import Widgets from './home/Widgets'
import QuickView from './home/QuickView'

const Home = () => (
    <div>
		<QuickView />
		<Collections />
        <Carousel title="New Products" id="1" />
        
		<HotDeals />

		<Carousel title="Top Selling" id="1" />
        <Widgets />    
    </div>
)

export default Home