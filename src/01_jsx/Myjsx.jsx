export default function MyJsx(params) {
    const lb = "Variable"
    const ary = ["a", "b", "c", "d"]
    const obj = { "a": "asd", "b": "das", "c": "vcsa", "d": "asd" }
    const show = false
    return <>
        <h1>Hello World </h1>
        <h1>{lb}</h1>
        <h1>{ary}</h1>
        <h1>{obj.b}</h1>
        <h1>{JSON.stringify(obj)}</h1>
        {show}
    </>
}