
function MsgBox({UserName,textColor,nar}) {
   let clr = {color:textColor};
    let clrr = {backgroundColor:UserName === "Ranjan" ? "blue": "" };
    return (
        < div style={clrr}>
        <h3 style={clr}>Hi,{UserName}</h3>
        <p>{
        nar.map((feat)=>(
            <li>{feat}</li>
        ))}</p>
        </div>
    );
}
export default MsgBox;