import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

import './CustomTable.css'


function CustomTable() {
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://api.coinlore.net/api/tickers/")
      .then((response) => {
        setApiData(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

const renderTable = () => {
    const selectedKeys = ['symbol', 'name', 'price_usd', 'price_btc']
    let tableHeading = [];
    let tableRows = [];
    if(apiData.length > 0){
        apiData?.map((item, index) => {
            const rowItems = [];
            for(let key in item){
                if(selectedKeys.includes(key)){
                    if(index === 0){
                        tableHeading.push(
                            <th className="border border-gray-300 p-1 capitalize"  key={key}>
                                {key.replace('_', ' ')}
                            </th>
                        )
                    }
                    rowItems.push(
                        <td className="text-center border border-gray-200 p-1" key={key + Math.random()}>{item[key]}</td>
                    )
                }
            }
            tableRows.push(
                <tr>
                    {rowItems}
                </tr>
            );
        })
    }

    return(
        <table className="w-full h-full">
            <thead className="dark-header">
                <tr>
                    {tableHeading}
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    )
  }

  if(isLoading){
    return <div className="flex justify-center items-center h-full w-full">
        <p className="text-3xl">Loading ...</p>
    </div>;
  }else{
      return <div className="h-full w-full flex justify-center items-center table-container">
        <div className="h-[80%] w-[80%] rounded-xl px-3 pb-3 bg-gray-100 text-black flex justify-center overflow-scroll">
            {renderTable()}
        </div>
      </div>;
  }
}

export default CustomTable;
