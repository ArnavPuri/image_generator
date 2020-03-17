import React from 'react';
import './App.css';
import Background from "./Background/Background";

let image = "https://images.unsplash.com/photo-1549241520-425e3dfc01cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80";

function App() {
    return (
        <Background image={image}>
            <p className="shlok title">
                कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। <br/>
                मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥
                <br/>
                (द्वितीय अध्याय, श्लोक 47)
            </p>
            <p className="meaning">
                अर्थ: कर्म पर ही तुम्हारा अधिकार है, कर्म के फलों में कभी नहीं... इसलिए कर्म को फल के लिए मत करो।
                कर्तव्य-कर्म करने में ही तेरा अधिकार है फलों में कभी नहीं। अतः तू कर्मफल का हेतु भी मत बन और तेरी
                अकर्मण्यता में भी आसक्ति न हो।
            </p>
        </Background>
    );
}

export default App;
