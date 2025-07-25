import React from 'react';
//quick and simple B-747 loader
const airplaneSvg = (
  <svg
      width="64"
      height="69"
      viewBox="0 0 215 233"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      <g transform="translate(0,233) scale(0.1,-0.1)" fill="#e4002b" stroke="none">
        <path d="M1026 2228 c-42 -65 -75 -234 -83 -423 -4 -104 -10 -147 -22 -166
        -21 -33 -163 -159 -173 -152 -5 2 -8 15 -8 28 0 18 -7 26 -27 31 -53 14 -75
        -27 -53 -98 13 -44 21 -32 -99 -136 -46 -39 -90 -72 -97 -72 -9 0 -14 12 -14
        31 0 29 -2 30 -37 27 l-38 -3 0 -71 c0 -70 -1 -71 -40 -105 -22 -18 -70 -63
        -107 -98 -67 -64 -68 -65 -68 -118 0 -40 4 -53 15 -53 8 0 59 23 112 51 178
        94 188 99 201 99 6 0 12 4 12 9 0 4 21 19 48 31 72 35 82 40 119 61 34 19 128
        49 168 53 11 2 32 6 48 10 50 15 57 -2 57 -138 1 -112 11 -286 26 -464 l7 -74
        -128 -121 c-114 -110 -127 -125 -123 -152 3 -28 6 -30 38 -27 19 2 76 15 125
        28 98 26 145 30 162 13 8 -8 13 -8 17 0 11 17 62 13 151 -10 80 -21 154 -38
        167 -39 15 -1 18 41 4 67 -8 16 -40 51 -73 79 -32 28 -84 78 -117 110 l-58 58
        6 61 c21 210 26 277 26 421 0 187 7 207 61 187 17 -7 36 -10 40 -7 5 3 18 0
        30 -6 11 -7 34 -13 49 -15 38 -5 140 -52 140 -65 0 -5 10 -10 23 -10 12 0 38
        -10 57 -22 19 -11 78 -43 130 -71 52 -27 109 -57 125 -67 17 -10 51 -28 78
        -39 l47 -20 0 62 0 63 -109 96 -109 97 1 68 2 68 -37 3 c-32 3 -38 0 -38 -17
        0 -52 -10 -53 -69 -5 -31 26 -75 66 -99 88 -43 41 -43 42 -37 93 8 69 -5 95
        -48 91 -28 -3 -33 -7 -37 -37 l-5 -35 -71 61 c-125 108 -124 106 -124 239 0
        170 -46 410 -88 457 -21 23 -39 22 -56 -5z"/>
      </g>
    </svg>
);

const AirplaneLoader: React.FC = () => (
  <div className="airplane-loader">
    {airplaneSvg}
  </div>
);

export default AirplaneLoader;