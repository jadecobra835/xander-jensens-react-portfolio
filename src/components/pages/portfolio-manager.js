import React, { Component } from 'react';
import axios from 'axios';

import PortfolioSidebarList from '../portfolio/portfolio-sidebar-list';
 
export default class PortfolioManager extends Component {
    constructor() {
        super();

        this.state = {
            isLoading: false,
            portfolioItems: []
        }
    };



    getPortfolioItems() {
        axios
            .get('https://xanderjensen.devcamp.space/portfolio/portfolio_items', {withCredentials: true })
            .then(response => {
                this.setState({
                    portfolioItems: [...response.data.portfolio_items]
                });
              })
            .catch(error => {
                console.log("Error in getPortfolioItems", error);
            });
    };

    componentDidMount() {
        this.getPortfolioItems();
    };
 
    render() {
        if(this.state.isLoading) {
            return <div>Loading...</div>
        }

        return (
            <div className="portfolio-manager-wrapper">
                <div className="left-column">
                    <h1>Portfolio form....</h1>
                </div> 

                <div className="right-column">
                    <PortfolioSidebarList data={this.state.portfolioItems} />
                </div>   
            </div>
        );
    }
}