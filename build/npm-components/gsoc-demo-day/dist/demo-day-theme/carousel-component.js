"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
const CarouselComponent = ({ data })=>{
    const years = Array.from(new Set(data.map((session)=>session.year))).sort((a, b)=>b - a);
    const [selectedYear, setSelectedYear] = useState(years[0]);
    const filteredData = selectedYear ? data.filter((session)=>session.year === selectedYear) : data;
    return /*#__PURE__*/ _jsxs("div", {
        children: [
            /*#__PURE__*/ _jsx("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '2rem'
                },
                children: /*#__PURE__*/ _jsx(ButtonGroup, {
                    children: years.map((year)=>/*#__PURE__*/ _jsx(Button, {
                            onClick: ()=>setSelectedYear(year),
                            style: {
                                backgroundColor: selectedYear === year ? '#0056b3' : '#0d6efd'
                            },
                            children: year
                        }, year))
                })
            }),
            /*#__PURE__*/ _jsx(Carousel, {
                style: {
                    maxWidth: "40rem",
                    margin: "auto"
                },
                children: filteredData.map((videoObj)=>{
                    return /*#__PURE__*/ _jsx(Carousel.Item, {
                        children: /*#__PURE__*/ _jsx(ReactPlayer, {
                            url: videoObj.src,
                            // pip={true}
                            controls: true
                        })
                    }, videoObj.id);
                })
            })
        ]
    });
};
export default CarouselComponent;
