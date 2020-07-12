import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class helpSecondPage extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>Help Second Page</h1>
                <br/>
                <div>
                    <h2>
                        Thank you for your support!
                    </h2>
                    <p3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit sit amet erat nec lacinia. Sed porttitor lacus nec erat eleifend gravida et dapibus elit. Sed vel quam malesuada nisl lacinia mollis eget at dolor. Quisque id libero vestibulum, porttitor erat eu, tincidunt nunc. Proin facilisis ullamcorper velit in bibendum. Donec in felis auctor, vestibulum mauris ut, consectetur odio. Vivamus eu tellus ullamcorper, sollicitudin metus vulputate, malesuada ante. Nam quis lacus sagittis, varius neque id, finibus lectus. Nulla porttitor accumsan eros id viverra. In faucibus arcu eros, id rutrum nunc tristique eu. Sed porttitor accumsan dui, in semper sem fermentum at. Fusce volutpat vestibulum metus quis sollicitudin. Quisque vel ante at metus iaculis iaculis vitae sed leo.
                    </p3>
                </div>
                <br/>
                <div>
                    <ol>
                        <li>Drop Point #1</li>
                        <li>Drop Point #2</li>
                        <li>Drop Point #3</li>
                        <li>Drop Point #4</li>
                        <li>Drop Point #5</li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default helpSecondPage;