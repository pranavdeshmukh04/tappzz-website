<<<<<<< HEAD
import React from "react";
import styled from "styled-components";
import NewArrivalItem from "./NewArrivalItem";
// import { newArrivalItems } from "../data";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { useGetProductsQuery } from "../services/appApi";
import { ColorRing } from "react-loader-spinner";

=======
import React from 'react'
import styled from 'styled-components'
import { newArrivalItems } from '../data'
import NewArrivalItem from './NewArrivalItem'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Link } from "react-router-dom";
>>>>>>> main
const Container = styled.div`
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
`;
const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NewArrival = () => {
  const { data: products, isLoading, isSuccess } = useGetProductsQuery();
  return (
<<<<<<< HEAD
    <>
      {isLoading && (
        <Loader>
          <ColorRing />
        </Loader>
      )}
      {isSuccess && (
        <div>
          <Title>
            <AutoAwesomeIcon style={{ color: "#1995AD", fontSize: 40 }} />
            NEW ARRIVALS
            <AutoAwesomeIcon style={{ color: "#1995AD", fontSize: 40 }} />
          </Title>
          <Container>
            {products?.products.map((item) => (
              <NewArrivalItem item={item} key={item._id} />
            ))}
            {/* {newArrivalItems.map((item) => (
            <NewArrivalItem item = {item} key={item.id}/>
        ))}  */}
          </Container>
        </div>
      )}
    </>
  );
};
=======
    <div>
        <Title>
            <AutoAwesomeIcon style={{color:"#1995AD", fontSize:40}}/>
                NEW ARRIVALS
            <AutoAwesomeIcon style={{color:"#1995AD", fontSize:40}}/>
        </Title>
        <Link to="/product">
            <Container>
            {newArrivalItems.map((item) => (
                <NewArrivalItem item = {item} key={item.id}/>
            ))}
            </Container>
        </Link>
        
    </div>
  )
}
>>>>>>> main

export default NewArrival;
