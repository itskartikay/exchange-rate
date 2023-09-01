import React from 'react';
import axios from 'axios';

const App = () => {

    async function getData(){
        const cur= await axios.get("http://data.fixer.io/api/latest?access_key=de00ace027ee08be4918cfdc7570cc47&format=1")
        console.log(cur)
    }
    getData()

    return(
        <div>
            <h1>Currency Convertor</h1>
        </div>
    )
}

export default App;