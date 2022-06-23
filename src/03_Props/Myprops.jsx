const Myprops = (props) => {
    //props is used to get values from app.js and stores it in argument of default function
    const { pfunc, afunc, children } = props

    return <>
        <button onClick={pfunc}>Click here</button>
        <button onClick={e => afunc("hello")}>Click func call</button>
        {children}
        {/* {JSON.stringify(props)} */}
    </>
}
export default Myprops