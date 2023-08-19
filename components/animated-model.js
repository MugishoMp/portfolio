/* eslint-disable */
import Zdog from 'zdog';
import React, { useEffect, useRef } from 'react';
import { Container } from '@chakra-ui/react';

function Kirby() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Made with Zdog

    // ----- setup ----- //

    const sceneSize = 100;
    const isSpinning = true;
    const { TAU } = Zdog;
    // colors
    const pink = '#F8B';
    const blush = '#F5A';
    const black = '#333';
    const shoe = '#D03';
    const red = '#E10';
    const yellow = '#FD0';

    const illo = new Zdog.Illustration({
      element: '.zdog-canvas',
      dragRotate: true,
      resize: 'fullscreen',
      onDragStart() {
        // isSpinning = false;
      },
      onResize(width, height) {
        this.zoom = Math.floor(Math.min(width, height) / sceneSize);
      },
    });

    // ----- model ----- //

    const body = new Zdog.Shape({
      stroke: 22,
      translate: { y: 11 },
      rotate: { x: 0.3, z: 0.1 },
      addTo: illo,
      color: pink,
    });

    const face = new Zdog.Anchor({
      translate: { z: 10.5 },
      addTo: body,
    });

    [-1, 1].forEach((xSide) => {
      const eyeGroup = new Zdog.Group({
        addTo: face,
        translate: { x: 2.4 * xSide, y: -2 },
        rotate: { x: -0.1 },
      });
      // eye
      new Zdog.Ellipse({
        width: 1.4,
        height: 5.5,
        addTo: eyeGroup,
        stroke: 1,
        color: black,
        fill: true,
      });
      // eye highlight
      new Zdog.Ellipse({
        width: 1,
        height: 2,
        addTo: eyeGroup,
        translate: { y: -1.5, z: 0.5 },
        stroke: 0.5,
        color: '#FFF',
        fill: true,
      });

      // cheek holder
      const cheekHolder = new Zdog.Anchor({
        addTo: body,
        rotate: { y: 0.6 * xSide },
      });

      new Zdog.Ellipse({
        width: 2.5,
        height: 1,
        translate: { y: 1, z: 10.5 },
        addTo: cheekHolder,
        color: blush,
        stroke: 1,
      });
    });

    // mouth
    new Zdog.Shape({
      path: [
        { x: 0, y: 0 },
        {
          bezier: [
            { x: 1.1, y: 0 },
            { x: 1.1, y: 0.2 },
            { x: 1.1, y: 0.5 },
          ],
        },
        {
          bezier: [
            { x: 1.1, y: 1.1 },
            { x: 0.2, y: 1.8 },
            { x: 0, y: 1.8 },
          ],
        },
        {
          bezier: [
            { x: -0.2, y: 1.8 },
            { x: -1.1, y: 1.1 },
            { x: -1.1, y: 0.5 },
          ],
        },
        {
          bezier: [
            { x: -1.1, y: 0.2 },
            { x: -1.1, y: 0 },
            { x: 0, y: 0 },
          ],
        },
      ],
      addTo: face,
      translate: { y: 2, z: -0.5 },
      stroke: 1,
      color: shoe,
      fill: true,
    });

    const rightArm = new Zdog.Shape({
      path: [
        { y: 0 },
        { y: -7 },
      ],
      addTo: body,
      translate: { x: -6, y: -4, z: 0 },
      color: pink,
      stroke: 7,
    });

    // left arm
    rightArm.copy({
      path: [
        { x: 0 },
        { x: 6 },
      ],
      translate: { x: 6, y: -2, z: 0 },
    });

    // right foot
    const rightFoot = new Zdog.Shape({
      path: [
        { x: 0, y: -2 },
        {
          arc: [
            { x: 2, y: -2 },
            { x: 2, y: 0 },
          ],
        },
        {
          arc: [
            { x: 2, y: 5 },
            { x: 0, y: 5 },
          ],
        },
        {
          arc: [
            { x: -2, y: 5 },
            { x: -2, y: 0 },
          ],
        },
        {
          arc: [
            { x: -2, y: -2 },
            { x: 0, y: -2 },
          ],
        },
      ],
      addTo: body,
      translate: { x: -1, y: 9, z: -9 },
      rotate: { z: 0.2 },
      stroke: 6,
      color: shoe,
      fill: true,
      closed: false,
    });

    rightFoot.copy({
      translate: { x: 9.5, y: 6, z: -6 },
      rotate: { z: -1.1, y: 0.8 },
    });

    // ----- umbrella ----- //

    // umbrella rod
    const umbrella = new Zdog.Shape({
      path: [
        { y: 0 },
        { y: 22 },
      ],
      addTo: rightArm,
      translate: { y: -33, z: 2 },
      rotate: { y: 0.5 },
      color: yellow,
      stroke: 1,
    });

    // star
    const starPath = (function () {
      const path = [];
      const starRadiusA = 3;
      const starRadiusB = 1.7;
      for (let i = 0; i < 10; i++) {
        const radius = i % 2 ? starRadiusA : starRadiusB;
        const angle = TAU * i / 10 + TAU / 4;
        const point = {
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
        };
        path.push(point);
      }
      return path;
    }());
    // star shape
    const star = new Zdog.Shape({
      path: starPath,
      addTo: umbrella,
      translate: { y: -4.5 },
      stroke: 2,
      color: yellow,
      fill: true,
    });

    // umbrella handle
    new Zdog.Shape({
      path: [
        { z: 0, y: 0 },
        { z: 0, y: 1 },
        {
          arc: [
            { z: 0, y: 4 },
            { z: 3, y: 4 },
          ],
        },
        {
          arc: [
            { z: 6, y: 4 },
            { z: 6, y: 1 },
          ],
        },
      ],
      addTo: umbrella,
      translate: { y: 23 },
      stroke: 2,
      color: '#37F',
      closed: false,
    });

    // umbrella shield panels
    (function () {
      const umbPanelX = 14 * Math.sin(TAU / 24);
      const umbPanelZ = 14 * Math.cos(TAU / 24);
      for (let i = 0; i < 12; i++) {
        const colorSide = Math.floor(i / 2) % 2;
        new Zdog.Shape({
          path: [
            { x: 0, y: 0, z: 0 },
            {
              arc: [
                { x: -umbPanelX, y: 0, z: umbPanelZ },
                { x: -umbPanelX, y: 14, z: umbPanelZ },
              ],
            },
            { x: umbPanelX, y: 14, z: umbPanelZ },
            {
              arc: [
                { x: umbPanelX, y: 0, z: umbPanelZ },
                { x: 0, y: 0, z: 0 },
              ],
            },
          ],
          addTo: umbrella,
          rotate: { y: TAU / 12 * i },
          stroke: 1,
          color: colorSide ? red : 'white',
          fill: true,
        });
      }
    }());

    // floater stars
    (function () {
      for (let i = 0; i < 6; i++) {
        const starHolder = new Zdog.Anchor({
          addTo: umbrella,
          translate: { y: 10 },
          rotate: { y: TAU / 6 * i + TAU / 24 },
        });
        star.copy({
          addTo: starHolder,
          translate: { z: 28 },
        });
      }
    }());

    // ----- animate ----- //

    function animate() {
      illo.rotate.y += isSpinning ? -0.01 : 0;
      illo.updateRenderGraph();
      requestAnimationFrame(animate);
    }

    animate();

    // Clean up the Zdog instance on unmount
    // return () => {
    //   illo.destroy();
    // };
  }, []);

  return (
    <Container
      width="100%"
      h={[175, 220, 250]}
      display="flex"
      mb={6}
      mt={0}
      justifyContent="center"
      alignItems="center"
    >
      <canvas
        width="auto"
        ref={canvasRef}
        className="zdog-canvas"
        style={{ width: '70%', height: 'auto' }} // Set width and height to 100%
      />
    </Container>
  );
}

export default Kirby;
