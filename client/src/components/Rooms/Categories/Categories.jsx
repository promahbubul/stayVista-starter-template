import React from "react";
import { useSearchParams } from "react-router-dom";
import Container from "../../Shared/Container";
import { categories } from "./categoriesData";
import CategoryBox from "./CategoryBox";

const Categories = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get("category");

  return (
    <Container>
      <div className="flex py-3 items-center justify-between overflow-x-auto">
        {categories.map((item, index) => (
          <CategoryBox
            key={index}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          ></CategoryBox>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
