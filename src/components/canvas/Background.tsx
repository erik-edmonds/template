
const colors = [[255,0,0],
  [255,255,0],
  [255,255,255],
  [0,0,255],
  [0,255,255],
  [0,0,0]];

const step = 0;
const colorIndices = [0,1,2,3];

const gradientSpeed = 0.1;

function updateGradient()
{
  const c0_0 = colors[colorIndices[0]];
  const c0_1 = colors[colorIndices[1]];
  const c1_0 = colors[colorIndices[2]];
  const c1_1 = colors[colorIndices[3]];

  const istep = 1 - step;
  const r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  const g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  const b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  const color1 = "#"+((r1 << 16) | (g1 << 8) | b1).toString(16);

  const r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  const g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  const b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  const color2 = "#"+((r2 << 16) | (g2 << 8) | b2).toString(16);

  $('#gradient').css({
    background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).csss({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});

  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];

    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;

  }
  return (
    <div className="fullscreen bg-[url('/img/')]">
      
    </div>
    <div className="first-section bg-[url('/img/')]">
  
    </div>
    <div className="second-section bg-[url('/img/')]">
  
    </div>
  )
}

setInterval(updateGradient,50);
