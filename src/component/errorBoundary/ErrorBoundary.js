import  { Component } from 'react'
import ErorrMessge from '../erorrMessge/ErorrMessge';

class ErrorBoundary extends Component {
    constructor(props){
        super(props)
        this.state = {
            error: false
        }
    }

    componentDidCatch(error, info){
        console.log(error, info);
        this.setState({error})
    }

    render(){
        if(this.state.error){
            return(
                <ErorrMessge/>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary
