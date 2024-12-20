import React from "react";

import { productDatas } from "../../../Datas/ProductDatas";
import ProductCard from "../ProductCard";

import { Box, Grid2, styled } from "@mui/material";
import FilterBox from "./FilterBox";

const MainContainer = styled(Box)(({ theme }) => ({
    minHeight: "200vh",
    width: "100%",
}));
const FilterContainer = styled(Box)(({ theme }) => ({
    position: "sticky",
    top: "4rem",
    zIndex: 100,
}));

const ProductContainer = styled(Box)(({ theme }) => ({}));
const GridContainer = styled(Grid2)(({ theme }) => ({
}));
const GridItem = styled(Grid2)(({ theme }) => ({
border:'1px solid rgba(144, 144, 153, 0.2)'

}));

const Products = () => {
    return (
        <MainContainer>
            <FilterContainer>
                <FilterBox />
            </FilterContainer>
            <ProductContainer>
                <GridContainer container  p={2}>
                    {productDatas.map((item,index) => (
                        <GridItem item key={item.id}  size={{ xs: 6, md: 4, lg: 3 }}>
                            <ProductCard products={item} index={index} />
                        </GridItem>
                    ))}
                </GridContainer>
            </ProductContainer>
        </MainContainer>
    );
};

export default Products;
