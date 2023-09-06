import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import App from "../App";
import MyButton from "../components/UI/button/MyButton";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/MyButton">
                <MyButton/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews