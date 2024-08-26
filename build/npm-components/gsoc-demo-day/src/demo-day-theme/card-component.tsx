"use client"
import React , { useState }from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const CarouselComponent = ({ data } : any) => {

  const years = Array.from(new Set(data.map((session) => session.year))).sort((a, b) => b - a);
  const [selectedYear, setSelectedYear] = useState<number | null>(years[0]);
  const filteredData = selectedYear ? data.filter((session) => session.year === selectedYear) : data;


  return (
     <div>
       <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <ButtonGroup>
          {years.map((year) => (
            <Button key={year} onClick={() => setSelectedYear(year)}
            style={{ backgroundColor: selectedYear === year ? '#0056b3' : '#0d6efd' }}
            >{year}</Button>
          ))}
        </ButtonGroup>
      </div>
      <Carousel style={{maxWidth:"40rem" , margin: "auto"}}>
        {filteredData.map((videoObj) => {
          return (
            <Carousel.Item key={videoObj.id}>
              <ReactPlayer
                url={videoObj.src}
                // pip={true}
                controls={true}
              
              />
              
              {/* <Carousel.Caption>
                <h3>{videoObj.title}</h3>
                <p>{videoObj.credit}</p>
              </Carousel.Caption> */}
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};


export default CarouselComponent;