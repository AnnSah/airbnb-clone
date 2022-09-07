import React from 'react'
import "./SearchPage.css"
import "@mui/material"
import Button from '@mui/material/Button'
import SearchResult from './SearchResult'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p> 62 stays · 30 august to 4 september · 2 guests </p>
                <h1>Stays nearby</h1>
                <Button > Cancellation Felxibility</Button>
                <Button > Type of place</Button>
                <Button > Price</Button>
                <Button > Rooms and beds</Button>
                <Button > More filters</Button>
            </div>

            <SearchResult img="https://whalehuahin.com/wp-content/uploads/2020/12/410-045_resize-500x350.jpg"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.73}
                price="£30/night"
                total="£117 total"
            />

            <SearchResult img="https://www.kravelv.com/wp-content/uploads/2020/12/small-apartment-design.jpg"
                location="Private room in center of London"
                title="Independant luxury studio apartament"
                description="2 guest · 3 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen "
                star={4.3}
                price="£40/night"
                total="£157 total"
            />

            <SearchResult img="https://content.r9cdn.net/rimg/himg/f9/e9/28/leonardo-2095635-FD-The-Chronicle-702-13_O-363795.jpg?width=500&height=350&xhint=1620&yhint=998&crop=true"
                location="Private room in center of London"
                title="London Studio Apartaments"
                description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Wifi · Kitchen · Free Parking · Washing Machine "
                star={3.8}
                price="£35/night"
                total="£207 total"
            />

            <SearchResult img="https://cdngeneralcf.rentcafe.com/dmslivecafe/2/88940/1024x768_Model%20Unit%20Living%20Room%202(9).jpg?width=500&height=350&mode=crop"
                location="Private room in center of London"
                title="30 mins to Oxford Street, Excel London"
                description="1 guest · 1 bedroom · 1 bed · 1.5 bathrooms · Wifi · Kitchen · Free Parking · Washing Machine "
                star={4.1}
                price="£55/night"
                total="£320 total"
            />

            <SearchResult img="https://5.imimg.com/data5/SELLER/Default/2021/9/GP/LS/GY/42460889/home-interior-design-bedroom-500x500.jpg"
                location="Private room in center of London"
                title="Spacious Peaceful Modern Bedroom"
                description="3 guest · 1 bedroom · 1 bed · 1.5 bathrooms · Wifi  · Free Parking · Dry Cleaning "
                star={5.0}
                price="£60/night"
                total="£450 total"
            />

            <SearchResult img="https://content.r9cdn.net/rimg/himg/ce/e1/ef/leonardo-2150952-The_Milestone_Deluxe_King_Room_6_O-143306.jpg?width=500&height=350&xhint=1620&yhint=998&crop=true"
                location="Private room in center of London"
                title="The Blue Room in London"
                description="2 guest · 1 bedroom · 1 bed · 1.5 bathrooms · Wifi · Washing Machine "
                star={4.23}
                price="£65/night"
                total="£480 total"
            />

            <SearchResult img="https://content.r9cdn.net/rimg/himg/ad/f0/f1/expediav2-898471-94712b-437478.jpg?width=500&height=350&xhint=480&yhint=333&crop=true"
                location="Private room in center of London"
                title="5 Star Luxury Apartament"
                description="3 guest · 1 bedroom · 1 bed · 1.5 bathrooms · Wifi · Kitchen · Washing Machine · Free Parking "
                star={3.85}
                price="£90/night"
                total="£650 total"
            />
        </div>
    )
}

export default SearchPage;