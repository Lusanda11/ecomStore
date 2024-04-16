// ****************** Api_JS *********************


import axios from "axios"; // Import neccessary modules.


// Define an asynchronous function productsData:
// ----------------------------------------------------------------------------------------------------------------------------
    export const productsData = async () =>
    {
        const products = await axios.get("https://fakestoreapiserver.reactbd.com/products") // Make an HTTP GET request using axios.
        return products;
    }
// ----------------------------------------------------------------------------------------------------------------------------
