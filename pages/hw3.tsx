import Index from "../components/hw3/Index";
import React from "react"

class Hw3 extends React.Component {
    componentDidMount() { }
    render() {
        const props = {
            count: {
                silde: 1,
                show: 2
            }, 
            speed: 0.3,
            whenClick: function () {
               
           }
        }
        return <>
            <Index />
        </>
    }
}

export default Hw3;
