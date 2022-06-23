export default function Myevent(params) {
    const handleClick = () => console.log("clicked");
    const test = e => console.log(e);

    return <>
        <h1>hello</h1>
        <button onClick={handleClick}>Handle Click</button>
        <button onClick={e => console.log("Clicked again")}>direct on button func</button>
        <button onClick={e => test("Hello user")}>call func with args</button>
    </>
};
