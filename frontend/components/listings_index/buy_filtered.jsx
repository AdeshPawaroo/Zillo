import React, { useState } from "react";
import { BuyMap } from "../map/buy_map";
import { FilteredIndex } from "./filtered_index";

export class BuyPageFiltered extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: "",
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

    handleStatusFilter = () => {
        return (
            <div>
                <label>Status: {" "}</label>
                <select onChange={this.handleChange("status")}>
                    <option value="none" selected disabled hidden>Select an Option</option>
                    <option value="for sale">For Sale</option>
                    <option value="for rent">For Rent</option>
                    <option value="''">No Preference</option>
                </select>
            </div>
        )
    }

    handleRealatorFilter = () => {
        return (
            <div>
                <label>Realator: {" "}</label>
                <select onChange={this.handleChange("realator")}>
                    <option value="none" selected disabled hidden>Select an Option</option>
                    <option value="Pavilion Real Estate">Pavilion Real Estate</option>
                    <option value="Bargain Real Estate">Bargain Real Estate</option>
                    <option value="Underground Real Estate">Underground Real Estate</option>
                    <option value="Eastside Real Estate">Eastside Real Estate</option>
                    <option value="''">No Preference</option>
                </select>
            </div>
        )
    }

    handleStyleFilter = () => {
        return (
            <div>
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
                    <option value="apartment">apartment</option>
                    <option value="''">No Preference</option>
                </select>
            </div>
        )
    }

    handleZipcodeFilter = () => {
        return (
            <div>
                <label>Zipcode: {" "}</label>
                <select onChange={this.handleChange("zipcode")}>
                    <option value="none" selected disabled hidden>Select an Option</option>
                    <option value={11111}>11111</option>
                    <option value={22222}>22222</option>
                    <option value={33333}>33333</option>
                    <option value={44444}>44444</option>
                    <option value="55555">55555</option>
                    <option value="66666">66666</option>
                    <option value="77777">77777</option>
                    <option value="88888">88888</option>
                    <option value="99999">99999</option>
                    <option value="''">No Preference</option>
                </select>
            </div>
        )
    }
   
    handleBedsFilter = () => {
        return (
            <div>
                <label>Beds: {" "}</label>
                <select onChange={this.handleChange("beds")}>
                    <option value="none" selected disabled hidden>Select an Option</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="''">No Preference</option>
                </select>
            </div>
        )
    }

    handleBathsFilter = () => {
        return (
            <div>
                <label>Baths: {" "}</label>
                <select onChange={this.handleChange("baths")}>
                    <option value="none" selected disabled hidden>Select an Option</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="''">No Preference</option>
                </select>
            </div>
        )
    }

    handleNavBar = () => {
        return (
            <div className="buy-page-container">
                <div className="buy-nav-container">
                    {this.handleStatusFilter()}
                    {this.handleRealatorFilter()}
                    {this.handleStyleFilter()}
                    {this.handleZipcodeFilter()}
                    {this.handleBedsFilter()}
                    {this.handleBathsFilter()}
                </div>
                <div className="buy-page-contents">
                <div className="buy-page-left">
                    <BuyMap />
                </div>
                <div className="buy-page-right">
                    <FilteredIndex 
                        options={this.state}
                    />
                </div>
            </div>
            </div>
        )
    }

    render() {
        return(
            <div>
                {this.handleNavBar()}
            </div>
        )
    }
}