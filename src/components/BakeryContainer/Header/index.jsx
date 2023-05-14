import React from 'react';
import HeaderTab from './HeaderTab';

const Header = () => {
    return(
        <div className="container text-center">
            <div className="row">
                <div className="col col-sm-4" style={{padding: '0'}}>
                    <HeaderTab imageURL={"https://sugargeekshow.com/wp-content/uploads/2022/08/vanilla_cupcake_featured_blog.jpg"} heading={"Products"} description={"Any kind of product"} position={'left'} redirectUrl={'/products'}/>
                </div>
                <div className="col col-sm-4" style={{'padding': '0'}}>
                    <HeaderTab imageURL={"https://sugargeekshow.com/wp-content/uploads/2022/08/vanilla_cupcake_featured_blog.jpg"} heading={"Cake class"} description={"Attend cake classes"}  redirectUrl={'/classes'}/>
                </div>
                <div className="col col-sm-4" style={{'padding': '0'}}>
                    <HeaderTab imageURL={"https://sugargeekshow.com/wp-content/uploads/2022/08/vanilla_cupcake_featured_blog.jpg"} heading={"Recipes"} description={"Learn recipes"} position={'right'} redirectUrl={'/recipes'}/>
                </div>
            </div>
        </div>
    )
}

export default Header;