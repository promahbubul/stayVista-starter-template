import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";

const CategoryBox = ({ label, icon: Icon, selected }) => {
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();

  const handleClick = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
      const updatedQuery = { ...currentQuery, category: label };
      const url = qs.stringifyUrl({
        url: "/",
        query: updatedQuery,
      });
      navigate(url);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={` ${selected ? "border-b-neutral-800 text-neutral-800" : ""} 
      flex flex-col justify-center items-center gap-2
      p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer
      `}
    >
      <Icon size={30} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoryBox;
