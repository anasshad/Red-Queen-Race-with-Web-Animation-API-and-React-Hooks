import React, { useLayoutEffect, useRef } from "react";
import "./styles.css";

export default function App() {
  const spriteRef = useRef();
  const background1Ref = useRef();
  const background2Ref = useRef();
  const foreground1Ref = useRef();
  const foreground2Ref = useRef();

  const adjustBackgroundPlayback = () => {
    const sceneries = [
      background1Ref,
      background2Ref,
      foreground1Ref,
      foreground2Ref
    ];

    if (spriteRef.current.playbackRate < 0.8) {
      sceneries.forEach((anim) => {
        anim.current.playbackRate = (spriteRef.current.playbackRate / 2) * -1;
      });
    } else if (spriteRef.current.playbackRate > 1.2) {
      sceneries.forEach((anim) => {
        anim.current.playbackRate = spriteRef.current.playbackRate / 2;
      });
    } else {
      sceneries.forEach((anim) => {
        anim.current.playbackRate = 0;
      });
    }
  };

  const goFaster = () => {
    spriteRef.current.playbackRate *= 1.1;
    adjustBackgroundPlayback();
  };

  useLayoutEffect(() => {
    const queen_and_alice = document.querySelector(
      "#red-queen_and_alice_sprite"
    );
    const background1 = document.querySelector("#background1");
    const background2 = document.querySelector("#background2");
    const foreground1 = document.querySelector("#foreground1");
    const foreground2 = document.querySelector("#foreground2");

    const qaAnimation = [
      { transform: `translateY(0%)` },
      { transform: `translateY(-100%)` }
    ];

    const qaTiming = {
      easing: "steps(7, end)",
      direction: "reverse",
      duration: 600,
      playbackRate: 1,
      iterations: Infinity
    };

    const sceneryAnimation = [
      {
        transform: `translateX(100%)`
      },
      { transform: `translate(-100%)` }
    ];

    const sceneryTiming = {
      duration: 1000,
      iterations: Infinity
    };

    spriteRef.current = queen_and_alice.animate(qaAnimation, qaTiming);
    background1Ref.current = background1.animate(
      sceneryAnimation,
      sceneryTiming
    );
    background2Ref.current = background2.animate(
      sceneryAnimation,
      sceneryTiming
    );
    foreground1Ref.current = foreground1.animate(
      sceneryAnimation,
      sceneryTiming
    );
    foreground2Ref.current = foreground2.animate(
      sceneryAnimation,
      sceneryTiming
    );

    adjustBackgroundPlayback();
  }, []);

  return (
    <>
      <div className="message">
        Click on Queen and Alice to make them go faster
      </div>
      <div className="wrapper">
        <div className="sky"></div>

        <div className="earth">
          <div id="red-queen_and_alice">
            <img
              ref={spriteRef}
              onClick={goFaster}
              id="red-queen_and_alice_sprite"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
              srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x"
              alt="Alice and the Red Queen running to stay in place."
            ></img>
          </div>
        </div>

        <div className="scenery" id="foreground1" ref={foreground1Ref}>
          <img
            id="palm3"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x"
            alt=" "
          />
        </div>

        <div className="scenery" id="foreground2" ref={foreground2Ref}>
          <img
            id="bush"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x"
            alt=" "
          />
          <img
            id="w_rook_upright"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x"
            alt=" "
          />
        </div>

        <div className="scenery" id="background1" ref={background1Ref}>
          <img
            id="r_pawn_upright"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x"
            alt=" "
          />
          <img
            id="w_rook"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x"
            alt=" "
          />
          <img
            id="palm1"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x"
            alt=" "
          />
        </div>

        <div className="scenery" id="background2" ref={background2Ref}>
          <img
            id="r_pawn"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x"
            alt=" "
          />
          <img
            id="r_knight"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x"
            alt=" "
          />
          <img
            id="palm2"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x"
            alt=" "
          />
        </div>
      </div>
    </>
  );
}
