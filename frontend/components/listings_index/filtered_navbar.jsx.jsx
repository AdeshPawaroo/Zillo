import React from "react";
import { FilteredIndex } from "./filtered_index";
import { FilteredBuy } from "./filtered_buy";

export class FilteredNavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            realator: "",
            style: "",
            zipcode: "",
            beds: "",
            baths: ""
        }
    }
     
    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    }

    handleRealatorFilter = () => {
        return (
            <div className="filter-dropdown">
                <label>Realator: {" "}</label>
                <select onChange={this.handleChange("realator")}>
                    <option value="none" selected disabled hidden>Select an Option</option>
                    <option value="Pavilion Real Estate">Pavilion Real Estate</option>
                    <option value="Bargain Real Estate">Bargain Real Estate</option>
                    <option value="Underground Real Estate">Underground Real Estate</option>
                    <option value="Eastside Real Estate">Eastside Real Estate</option>
                </select>
            </div>
        )
    }

    handleStyleFilter = () => {
        return (
            <div className="filter-dropdown">
                <label>Style: {" "}</label>
                <select onChange={this.handleChange("style")}>
                    <option value="none" selected disabled hidden>Select an Option</option>
                    <option value="bungalow">Bungalow</option>
                    <option value="cottage">Cottage</option>
                    <option value="victorian">Victorian</option>
                    <option value="ranch">Ranch</option>
                    <option value="colonial">Colonial</option>
                    <option value="manor">Manor</option>
                    <option value="villa">Villa</option>
                    <option value="chalet">Chalet</option>
                    <option value="apartment">Apartment</option>
                </select>
            </div>
        )
    }

    handleZipcodeFilter = () => {
        return (
            <div className="filter-dropdown">
                <label>Zipcode: {" "}</label>
                <select onChange={this.handleChange("zipcode")}>
                    <option value="none" selected disabled hidden>Select an Option</option>
                    <option value="11111">11111</option>
                    <option value="22222">22222</option>
                    <option value="33333">33333</option>
                    <option value="44444">44444</option>
                    <option value="55555">55555</option>
                    <option value="66666">66666</option>
                    <option value="77777">77777</option>
                    <option value="88888">88888</option>
                    <option value="99999">99999</option>
                </select>
            </div>
        )
    }
   
    handleBedsFilter = () => {
        return (
            <div className="filter-dropdown">
                <label>Beds: {" "}</label>
                <select onChange={this.handleChange("beds")}>
                    <option value="none" selected disabled hidden>Select an Option</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                </select>
            </div>
        )
    }

    handleBathsFilter = () => {
        return (
            <div className="filter-dropdown">
                <label>Baths: {" "}</label>
                <select onChange={this.handleChange("baths")}>
                    <option value="none" selected disabled hidden>Select an Option</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                </select>
            </div>
        )
    }

    handleNavBar = () => {
        return (
            <div className="buy-page-container">
                <div className="buy-nav-container">
                    {this.handleRealatorFilter()}
                    {this.handleStyleFilter()}
                    {this.handleZipcodeFilter()}
                    {this.handleBathsFilter()}
                    {this.handleBedsFilter()}
                </div>
            </div>
        )
    }

    render() {
        return(
            <div>
                {this.handleNavBar()}
                <FilteredBuy 
                    options={this.state}
                />
            </div>
        )
    }
}