import React, { Component, useState } from "react";
import { Resizable } from "re-resizable";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0",
};
const Home = () => {
  const [width, setWidht] = useState(400);
  const [height, setheight] = useState(400);
  return (
    <>
      <div className="flex">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Resizable
          style={style}
          defaultSize={{
            width: width,
            height: height,
          }}
          onResizeStop={(e, d, reff, delta) => {
            setWidht(width + delta.width);
            setheight(height + delta.height);
          }}
        >
          <TransformWrapper>
            <TransformComponent>
              <div
                className=" border border-sky-500"
                style={{ width: width - 10, height: height - 10 }}
              >
                <div className="flex gap-4">
                  <div className="border-red-500">
                    <div>
                      <h1>lllllllllllllllllll</h1>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </TransformComponent>
          </TransformWrapper>
        </Resizable>
      </div>
    </>
  );
};

export default Home;
