import React from 'react'
import Card from './Card'
// import Button from './Button'
import Input from './Input'



const PracticeProp = () => {
    return <>
        <div>PracticeProp</div>
        {/* <Button text="testing" /> */}
        {/* <Button text="sample" /> */}
        {/* <Input type="text" />
        <Input type="password" /> */}
        <Card header="hello card" >
            <Input type="submit" val="Skills" />
        </Card>
    </>
}

export default PracticeProp