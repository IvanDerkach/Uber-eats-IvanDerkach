import React from "react";
import { Search } from "../Search/Search.jsx";
import "./MainSection.css";
import { restaurants } from "./restaurants-info.js";
import { RestaurantCard } from "../RestaurantCard/RestaurantCard.jsx";

export class MainSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: ""
    };
  }

  updateSearchValue = searchValue => {
    this.setState({
      searchValue: searchValue
    });
  };

  render() {
    return (
      <div className="cards">
        <div className="cards_wrapper">
          <Search onSearchChange={this.updateSearchValue} />

          <span className="cards__title">Kyiv Restaurants</span>

          <ul className="cards-list">
            {restaurants
              .filter(restaurant =>
                restaurant.title
                  .toLowerCase()
                  .includes(this.state.searchValue.toLowerCase())
              )
              .map((restaurant, i) => {
                return (
                  <RestaurantCard
                    key={i}
                    title={restaurant.title}
                    categories={restaurant.categories}
                    priceBucket={restaurant.priceBucket}
                    etaRange={restaurant.etaRange}
                    imageUrl={restaurant.imageUrl}
                    searchValue={this.state.searchValue}
                  />
                );
              })}
          </ul>
        </div>
      </div>
    );
  }
}
