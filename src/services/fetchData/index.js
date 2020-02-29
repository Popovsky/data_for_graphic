import React from "react";
import {NO_CORS_URL, URL} from "../constants";

const Data = async () => {
    let arr = [];
    let result;
    for (let i = 1; i <= 31; i++) {
        result = await fetch(NO_CORS_URL + URL + `${i}.01.2020`);
        arr.push(await result.json());
    }
    return arr;
};

export default Data;