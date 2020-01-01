import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Choices.css';

class Choices extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tracks : ["Nhạc Phổ biến", "Nhạc Việt Bất Hủ", "Nhạc Bất Hủ Âu Mỹ", "Nhạc Không Lời", "Nhạc Thư Giãn"]
        };
    };

    componentDidMount() {
        this.RootElm = ReactDOM.findDOMNode(this);
        this.optionsContainerElm = this.RootElm.querySelector('.options-container');
        this.selectedElm = this.RootElm.querySelector('.selected');
        this.optionlist = this.RootElm.querySelectorAll('.option');

    };

    dropdownSlide = () => {
        this.optionsContainerElm.classList.toggle("active");
    };

    selectOption = () => {
        this.optionlist.forEach(item => {
            item.addEventListener('click', () => {
                this.selectedElm.innerHTML = `${item.querySelector('label').innerHTML} <i class="ion-chevron-down"></i>`;
                this.optionsContainerElm.classList.remove('active');
            })
        })
    };

    showDropdown = (tracks) => {
        return tracks.map((label, index) => {
            return (
                <div key={index} className="option" onClick={() => this.selectOption()}>
                    <input type="radio" className="radio" id="science" name="category"/>
                    <label htmlFor="science">{label}</label>
                </div>
            );
        });
    };

    render() {
        const { tracks } = this.state;

        return (
            <div className="select-box">
                <div className="options-container">
                    {this.showDropdown(tracks)}
                </div>
                <div className="selected" onClick={() => this.dropdownSlide()}>
                    Nhạc Phổ Biến
                    <i className="ion-chevron-down"></i>
                </div>
            </div>
        );
    };
};

export default Choices;