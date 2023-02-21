import React,{Component} from "react";
import "../css/QuizComponent.css"
class QuizComponent extends Component{
    render(){
        return(
            <div className="quiz">
                <p>Question</p>
                <div>
                    <span>
                        1 of 15
                    </span>
                    <h5>Which is the only mammal that can jump?</h5>
                </div>
                <div className="options">
                    <p className="top-left option">Dog</p>
                    <p className="top-right option">Goat</p>
                    <p className="bottom-left option">Elephant</p>
                    <p className="bottom-right option">Lion</p>
                </div>
                <div>
                    <button className="previous-btn">Previous</button>
                    <button className="next-btn">Next</button>
                    <button className="quit-btn">Quit</button>
                </div>
            </div>
        )
    }
}
export default QuizComponent