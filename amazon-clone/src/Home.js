import React from 'react'
import "./Home.css"
import Product from './Product'


function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://mobirise.com/extensions/simpleamp/assets/images/background17.jpg"
                alt="" 
            />

            {/* Product id, title, price, rating, image */}
            <div className="home__row">
                <Product 
                    id="001"
                    title="Figure Midoriya Deku "
                    price= {1499000}
                    rating={5}
                    image={require('./img/1.PNG')}
                />
                
                <Product 
                    id="002"
                    title="Figure Goku Form SSJ Blue"
                    price={2499000}
                    rating={5}
                    image={require('./img/2.PNG')}
                />

                
            </div>
            
            <div className="home__row">
                <Product 
                    id="003"
                    title="Figure Goku Form SSJ2"
                    price={2550000}
                    rating={5}
                    image={require('./img/3.PNG')}
                />

                <Product 
                    id="004"
                    title="Figure Goku Form Normal"
                    price={1699000}
                    rating={5}
                    image={require('./img/4.PNG')}
                />
                
                <Product 
                    id="005"
                    title="Figure Luffy"
                    price={6160000}
                    rating={5}
                    image={require('./img/5.PNG')}
                />
            </div>

            <div className="home__row">
            <Product 
                    id="006"
                    title="Figure Goku Milk"
                    price={30111999}
                    rating={5}
                    image={require('./img/6.PNG')}
                />
                
            </div>


            {/* Product */}


        </div>
    )
}

export default Home
