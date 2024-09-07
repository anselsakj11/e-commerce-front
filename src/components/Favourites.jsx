import "./Favourites.css";
import Card from "./Card";
import Filter from "./Filter";
import luggage from "../assets/luggage.webp";
import bag from "../assets/bag.webp";
import luggage2 from "../assets/luggage2.webp";
import luggage3 from "../assets/luggage3.webp";
import { useState } from "react";

//     function Favourites(params) {
// return (
//   <div className="p-3 ">
//     <h1>Favourites</h1>
//     <p>A few of our</p>
{
  /* <div className="first-part d-flex   ">
        <Card
          title="Carry-on"
          price="295"
          imgUrl={luggage}
          colors="in 5 colors"
        ></Card>
        <Card
          title="Carry-on Flex"
          price="25"
          imgUrl={luggage3}
          colors="in 3colors"
        ></Card>
        <Card
          title="THe Bigger Carry-on"
          price="215"
          imgUrl={luggage2}
          colors="in 7 colors"
        ></Card>
        <Card
          title="Carry-Bag"
          price="125"
          imgUrl={bag}
          colors="in 2 colors"
        ></Card>
      </div>
      <div className="second-part d-flex ">
        <Card
          title="Carry-on Flex"
          price="295"
          imgUrl={luggage3}
          colors="in 2 colors"
        ></Card>
        <Card
          title="Carry-Bag"
          price="25"
          imgUrl={bag}
          colors="in 5 colors"
        ></Card>
        <Card
          title="Carry-on"
          price="215"
          imgUrl={luggage}
          colors="in 5 colors"
        ></Card>
        <Card
          title="The Bigger Carry-on"
          price="125"
          imgUrl={luggage2}
          colors="in 4colors"
        ></Card>
     </div> */
}

//     </div>
//   );
// }

// export default Favourites;

const favProductsData = [
  {
    name: "Carry-on",
    price: "30",
    imgUrl: luggage,
    material: "leather",
    category: "carry-on",
  },
  {
    name: "Carry-on Flex",
    price: "5",
    imgUrl: bag,
    material: "plastic",
    category: "backpack",
  },
  {
    name: "THe Bigger Carry-on",
    price: "88",
    imgUrl: luggage2,
    material: "metal",
    category: "duffel",
  },
  {
    name: "Carry-Bag",
    price: "200",
    imgUrl: luggage3,
    material: "leather",
    category: "carry-on",
  },
  {
    name: "Carry-on",
    price: "60",
    imgUrl: luggage,
    material: "leather",
    category: "carry-on",
  },
  {
    name: "THe Bigger Carry-on",
    price: "100",
    imgUrl: bag,
    material: "plastic",
    category: "backpack",
  },
  {
    name: "Carry-Bag",
    price: "190",
    imgUrl: luggage3,
    material: "metal",
    category: "duffel",
  },
  {
    name: "Carry-on Flex",
    price: "145",
    imgUrl: luggage2,
    material: "leather",
    category: "carry-on",
  },
];
// function Favourites({ params }) {
//   const [favProducts, setFavProducts] = useState(favProductsData);

//   return (
//     <div className=" p-3">
//       <p>A few of our</p>
//       <h1>Favourites</h1>

//       <div className=" d-flex first-part flex-wrap">
//         {favProducts.map((favProd) => {
//           return (
//             <Card
//               title={favProd.name}
//               price={favProd.price}
//               imgUrl={favProd.imgUrl}
//             ></Card>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
function Favourites() {
  const [filteredProducts, setFilteredProducts] = useState(favProductsData);

  // const handleFilterChange = (filter) => {
  //   const filteredProducts = favProductsData.filter((product) => {
  //     const materialMatch =
  //       filter.material === "" || product.material === filter.material;
  //     const categoryMatch =
  //       filter.category === "" || product.category === filter.category;
  //     const priceMatch =
  //       filter.price === "" ||
  //       (product.price >= filter.price.split("-")[0] &&
  //         product.price <= filter.price.split("-")[1]);
  //     return materialMatch && categoryMatch && priceMatch;
  //   });
  //   setFilteredProducts(filteredProducts);
  // };
  const handleFilterChange = (filter) => {
    const filteredProducts = favProductsData.filter((product) => {
      const materialMatch =
        filter.material === "" || product.material.includes(filter.material);
      const categoryMatch =
        filter.category === "" || product.category.includes(filter.category);
      const priceMatch =
        filter.price === "" ||
        (product.price >= parseInt(filter.price.split("-")[0]) &&
          product.price <= parseInt(filter.price.split("-")[1]));
      return materialMatch && categoryMatch && priceMatch;
    });
    setFilteredProducts(filteredProducts);
  };
  return (
    <div className="p-3">
      <p>A few of our</p>
      <h1>Favourites</h1>
      <Filter onFilterChange={handleFilterChange} />
      <div className="d-flex first-part flex-wrap">
        {filteredProducts.map((product) => (
          <Card
            title={product.name}
            price={product.price}
            imgUrl={product.imgUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Favourites;
