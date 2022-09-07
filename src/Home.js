import React from 'react'
import "./Home.css"
import Banner from './Banner';
import Card from './Card';

function Home() {
    return (
        <div className="home">
            <Banner />

            <div className="home__section">
                <Card src="https://www.verywellfamily.com/thmb/yOsLP53ukt-8AAu0ghv_rzb3_tw=/500x350/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-649969946-5bb9ccc7055f469ca753c7e59b8e2450.jpg"
                    title="Online Experiences"
                    description="Unique activities we can do together,led by a world of hosts."
                />
                <Card
                    src="https://musehotelawards.com/upload/entry/thumb/1623147607_thumb_100054.jpeg"
                    title="Unique Stays"
                    description="Spaces that are more than just a place to sleep."
                />
                <Card src="https://smilyhomes.com/wp-content/uploads/2022/05/modern-home.jpg"
                    title="Entire Homes"
                    description="Comfortable private places,with room for firends or family."
                />
            </div>

            <div className="home__section">
                <Card src="https://images.pexels.com/photos/90319/pexels-photo-90319.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    title="3 Bedroom Flat in Bournemouth"
                    description="Superhost with a stunnign view of the beatchside in Sunny Bournemouth"
                    price=" £130/night" />
                <Card src="https://jamarchitects.com.au/wp-content/uploads/2021/07/JAM-Projects-CoppinPenthouse-th-1280x1080-1-500x350.jpg" title="Penthouse in London" description="Enjoy the amazing sights of London with this stunning penthouse" price=" £350/night" />
                <Card src="https://cf.bstatic.com/xdata/images/hotel/max500/326281439.jpg?k=6687d6d2ba9f8f9f86aec8a7e6154d37d69bc72d81cb691baaf45c593ca9155f&o=&hp=1" title="1 Bedroom apartament" description="Superhost with great amentities and fabolous shopping complex nearby" price=" £70/night" />
            </div>
        </div>
    )
}

export default Home;