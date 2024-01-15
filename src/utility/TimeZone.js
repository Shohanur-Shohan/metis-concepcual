                 
export default function RemoveTimezone(props){
    
    let withTimeZone = new Date(props);
    let withoutTimeZone = withTimeZone.toLocaleDateString();

    return withoutTimeZone;
}