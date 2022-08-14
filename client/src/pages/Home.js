import {useState} from "react";

export default function Home() {
const [section,setSection] = useState('Home')
return <div>
    {section}
<button onClick={() => setSection('Contacts')}>
    {'<'}
</button>

</div>
}