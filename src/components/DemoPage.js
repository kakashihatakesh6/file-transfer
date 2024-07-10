import React from 'react'

const DemoPage = () => {
    const handleSelect = (e) => {
        console.log(e)
    }

    const fetchDemoData = async (req, res) => {
        const res = await axios.get('https://fakestoreapi.com/products/1');
        const response = res.data;
        console.log(response)
        
    }




    return (
        <>
           <div>
            This is a demo page
           </div>
        </>
    )
}

export default DemoPage