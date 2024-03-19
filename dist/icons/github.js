export function gitHub(color) {
    const colorsConfig = {
        default: {
            color1: ['#dbeafe', '#d4d4d8'],
            color2: ['#bfdbfe', '#71717a']
        },
        primary: {
            color1: ['#d8b4fe', '#93c5fd'],
            color2: ['#a855f7', '#3b82f6']
        },
        secondary: {
            color1: ['#fca5a5', '#c4b5fd'],
            color2: ['#ef4444', '#8b5cf6']
        },
        success: {
            color1: ['#93c5fd', '#86efac'],
            color2: ['#3b82f6', '#22c55e']
        },
        warning: {
            color1: ['#86efac', '#fdba74'],
            color2: ['#22c55e', '#f97316']
        },
        error: {
            color1: ['#fde047', '#fca5a5'],
            color2: ['#eab308', '#ef4444']
        },
        ghost: {
            color1: ['#d4d4d8', '#ede9fe'],
            color2: ['#71717a', '#ddd6fe']
        }
    }

    return `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0,0,256,256"
            width="24px"
            height="24px"
            ><defs
                ><linearGradient
                    x1="30.999"
                    y1="16"
                    x2="30.999"
                    y2="55.342"
                    gradientUnits="userSpaceOnUse"
                    id="github-color-1"
                    ><stop
                        offset="0"
                        stop-color="${colorsConfig[color].color1[0]}"
                    ></stop><stop
                        offset="1"
                        stop-color="${colorsConfig[color].color1[1]}"
                    ></stop></linearGradient
                ><linearGradient
                    x1="32"
                    y1="5"
                    x2="32"
                    y2="59.167"
                    gradientUnits="userSpaceOnUse"
                    id="github-color-2"
                    ><stop
                        offset="0"
                        stop-color="${colorsConfig[color].color2[0]}"
                    ></stop><stop
                        offset="1"
                        stop-color="${colorsConfig[color].color2[1]}"
                    ></stop></linearGradient
                ></defs
            ><g
                fill="none"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style="mix-blend-mode: normal"
                ><g transform="scale(4,4)"
                    ><path
                        d="M25.008,56.007c-0.003,-0.368 -0.006,-1.962 -0.009,-3.454l-0.003,-1.55c-6.729,0.915 -8.358,-3.78 -8.376,-3.83c-0.934,-2.368 -2.211,-3.045 -2.266,-3.073l-0.124,-0.072c-0.463,-0.316 -1.691,-1.157 -1.342,-2.263c0.315,-0.997 1.536,-1.1 2.091,-1.082c3.074,0.215 4.63,2.978 4.694,3.095c1.569,2.689 3.964,2.411 5.509,1.844c0.144,-0.688 0.367,-1.32 0.659,-1.878c-4.956,-0.879 -10.571,-3.515 -10.571,-13.104c0,-2.633 0.82,-4.96 2.441,-6.929c-0.362,-1.206 -0.774,-3.666 0.446,-6.765l0.174,-0.442l0.452,-0.144c0.416,-0.137 2.688,-0.624 7.359,2.433c1.928,-0.494 3.969,-0.749 6.074,-0.759c2.115,0.01 4.158,0.265 6.09,0.759c4.667,-3.058 6.934,-2.565 7.351,-2.433l0.451,0.145l0.174,0.44c1.225,3.098 0.813,5.559 0.451,6.766c1.618,1.963 2.438,4.291 2.438,6.929c0,9.591 -5.621,12.219 -10.588,13.087c0.563,1.065 0.868,2.402 0.868,3.878c0,1.683 -0.007,7.204 -0.015,8.402l-2,-0.014c0.008,-1.196 0.015,-6.708 0.015,-8.389c0,-2.442 -0.943,-3.522 -1.35,-3.874l-1.73,-1.497l2.274,-0.253c5.205,-0.578 10.525,-2.379 10.525,-11.341c0,-2.33 -0.777,-4.361 -2.31,-6.036l-0.43,-0.469l0.242,-0.587c0.166,-0.401 0.894,-2.442 -0.043,-5.291c-0.758,0.045 -2.568,0.402 -5.584,2.447l-0.384,0.259l-0.445,-0.123c-1.863,-0.518 -3.938,-0.796 -6.001,-0.806c-2.052,0.01 -4.124,0.288 -5.984,0.806l-0.445,0.123l-0.383,-0.259c-3.019,-2.044 -4.833,-2.404 -5.594,-2.449c-0.935,2.851 -0.206,4.892 -0.04,5.293l0.242,0.587l-0.429,0.469c-1.536,1.681 -2.314,3.712 -2.314,6.036c0,8.958 5.31,10.77 10.504,11.361l2.252,0.256l-1.708,1.49c-0.372,0.325 -1.03,1.112 -1.254,2.727l-0.075,0.549l-0.506,0.227c-1.321,0.592 -5.839,2.162 -8.548,-2.485c-0.015,-0.025 -0.544,-0.945 -1.502,-1.557c0.646,0.639 1.433,1.673 2.068,3.287c0.066,0.19 1.357,3.622 7.28,2.339l1.206,-0.262l0.012,3.978c0.003,1.487 0.006,3.076 0.009,3.444z"
                        fill="url(#github-color-1)"
                    ></path><path
                        d="M32,58c-14.337,0 -26,-11.663 -26,-26c0,-14.337 11.663,-26 26,-26c14.337,0 26,11.663 26,26c0,14.337 -11.663,26 -26,26zM32,8c-13.233,0 -24,10.767 -24,24c0,13.233 10.767,24 24,24c13.233,0 24,-10.767 24,-24c0,-13.233 -10.767,-24 -24,-24z"
                        fill="url(#github-color-2)"
                    ></path></g
                ></g
            ></svg
        >
    `
}