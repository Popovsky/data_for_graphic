import React, {useEffect, useState} from 'react';
import Data from "../../services/fetchData";
import Render from "../Render";

const App = () => {
    const [data, setData] = useState();
    useEffect(async () => {
        setData(await Data());
    },[]);
    console.log(data);

    return (
        <Render data={data}></Render>
    );
};

export default App;
