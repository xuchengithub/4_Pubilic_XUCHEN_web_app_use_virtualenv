import Hashtitlechild from "./Hashtitlechild"

function Hashtitle() {
    return (
        <div style={HashtitleStyle}>
            <table style={{textAlign:'right'}}>
            <tbody>
                <tr>
                    <td style={{paddingRight:"55px"}}><Hashtitlechild text="Weather"/></td>
                    
                    <td style={{paddingRight:"55px"}}><Hashtitlechild text="Map"/></td>
                    
                    <td style={{paddingRight:"55px"}}><Hashtitlechild text="Scraping"/></td>
                    
                    <td><Hashtitlechild text="CMSnews"/></td>
                    
                </tr>
            </tbody>
            </table>
        </div>
    )
}

const HashtitleStyle={
    border: "1px solid steelblue",
    textAlign: 'center',
}

export default Hashtitle
