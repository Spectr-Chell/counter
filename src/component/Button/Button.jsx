import "./Button.css"

export default function Button( { children, isActive, onClick, style} ) {
    return (
        <button className={isActive ? "button.active" : "button"} style={style} onClick={onClick}>{children}</button>
    )
}