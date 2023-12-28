import React from "react";

import PointShopDetailTable from "@/app/(Components)/ItemTable/PointShopDetailTable";
import PointShopDetailProductTable from "@/app/(Components)/ItemTable/PointShopDetailProductTable";

const page = () => {
  return (
    <main>
      <h3>상품권/쿠폰</h3>
      <PointShopDetailTable />
      <PointShopDetailProductTable />
    </main>
  );
};

export default page;
