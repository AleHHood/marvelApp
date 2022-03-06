import { Component } from "react";
import "./singleComics.scss";
import ImgComics from '../../resources/img/UW.png'

class SingleComics extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        return(
            <section className="singleComics">
                <img src={ImgComics} alt="" className="singleComics__img"/>
                <div className="singleComics__info">
                    <h2 className="singleComics__name">
                        X-Men: Days of Future Past
                    </h2>
                    <p className="singleComics__descrp">
                        Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?
                    </p>
                    <span className="singleComics__pages">144 pages</span>
                    <span className="singleComics__lang">Language: en-us</span>
                    <span className="singleComics__price">9.99$</span>
                </div>

                <a href={ImgComics} className="singleComics__link">
                    Back to all
                </a>
            </section>
        )
    }
}

export default SingleComics