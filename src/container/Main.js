import Table from "../components/Table";
import ModalOne from "../components/Modal";

import React, { useState } from "react";

export default function Main() {
  const [data, setData] = useState([]);

  const getData = (info) => {
    // setData(info);
    let array = [...data, info];
    setData(array);

    console.log(data);
  };

  // console.log(`modalone ${data}`);

  return (
    <div>
      <Table records={data} />
      <ModalOne onSubmit={getData} />
    </div>
  );
}
