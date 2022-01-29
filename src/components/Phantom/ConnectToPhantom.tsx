import { useEffect, useState } from "react";
import { Button } from 'antd';
import Icon from '@ant-design/icons';

type Event = "connect" | "disconnect";

interface Phantom {
  on: (event: Event, callback: () => void) => void;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
}

const PhantomSVG = () => (
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
  width="15px" height="15px" viewBox="0 0 768.000000 768.000000"
  preserveAspectRatio="xMidYMid meet">

  <g transform="translate(0.000000,768.000000) scale(0.100000,-0.100000)"
  fill="#000000" stroke="none">
  <path d="M3582 7670 c-1248 -92 -2341 -749 -3003 -1807 -96 -153 -228 -412
  -297 -583 -460 -1141 -348 -2429 301 -3471 243 -391 584 -762 959 -1043 247
  -185 607 -387 883 -495 1140 -447 2412 -332 3446 312 391 243 762 584 1043
  959 238 317 448 720 573 1098 79 240 145 554 175 830 18 174 15 605 -6 780
  -54 453 -153 811 -331 1200 -259 566 -686 1090 -1193 1468 -550 409 -1193 662
  -1877 737 -169 19 -518 27 -673 15z m108 -1385 c501 -59 940 -241 1325 -552
  129 -104 330 -311 426 -438 305 -407 479 -882 506 -1387 l6 -118 347 0 c193 0
  371 -5 401 -10 116 -22 212 -96 264 -205 41 -84 40 -180 -5 -324 -99 -327
  -285 -616 -589 -922 -195 -195 -324 -300 -556 -454 -204 -135 -303 -191 -506
  -289 -435 -210 -882 -339 -1308 -377 -172 -15 -618 -6 -756 15 -478 72 -911
  257 -1315 559 -157 118 -409 363 -520 507 -233 302 -391 615 -475 945 -80 312
  -93 627 -39 955 182 1103 1083 1958 2208 2094 151 19 434 19 586 1z"/>
  <path d="M1987 4599 c-104 -17 -200 -88 -248 -184 -24 -50 -24 -51 -27 -408
  l-3 -358 27 -60 c34 -76 113 -150 189 -178 165 -62 350 14 426 174 l29 60 0
  346 c0 278 -3 355 -15 388 -54 154 -213 247 -378 220z"/>
  <path d="M3172 4599 c-104 -17 -198 -87 -248 -186 l-29 -58 0 -355 0 -355 33
  -67 c36 -73 86 -123 161 -160 66 -33 215 -33 282 0 74 36 125 87 161 160 l33
  67 0 355 0 355 -28 56 c-66 136 -214 212 -365 188z"/>
  </g>
  </svg>
);

const ConnectToPhantom = (props) => {
  const [phantom, setPhantom] = useState<Phantom | null>(null);
  const [phantomError, setPhantomError] = useState(false);

  useEffect(() => {
    if ("solana" in window) {
      setPhantom(window["solana"]);
    } else {
      setTimeout(() => {
        if ("solana" in window) {
          setPhantom(window["solana"]);
        } else {
          setPhantomError(true);
        }
      }, 1500);
    }
  }, []);

  const [connected, setConnected] = useState(false);

  useEffect(() => {
    phantom?.on("connect", () => {
      const anyWindow: any = window;
      const provider = anyWindow.solana;
      props.setUserWallet(provider.publicKey?.toBase58());
      setConnected(true);
    });

    phantom?.on("disconnect", () => {
      props.setUserWallet('none');
      setConnected(false);
    });
  }, [phantom]);

  const connectHandler = () => {
    phantom?.connect();
  };

  const disconnectHandler = () => {
    phantom?.disconnect();
  };

  if (phantom) {
    if (connected) {
      return (
        <Button
          icon={<Icon component={PhantomSVG} />}
          onClick={disconnectHandler}
          danger={true}
        >
          Disconnect from Phantom
        </Button>
      );
    }

    return (
      <Button
        icon={<Icon component={PhantomSVG} />}
        onClick={connectHandler}
      >
        Connect to Phantom
      </Button>
    );
  }

  return (
    <Button
        icon={<Icon component={PhantomSVG} />}
        onClick={() => {window.open('https://phantom.app/', '_blank')}}
      >
        {phantomError ? "Phantom Not Detected!" : "Trying to Find Phantom..."}
    </Button>
  );
};

export default ConnectToPhantom;
