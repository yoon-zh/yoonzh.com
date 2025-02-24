---
layout: post
title: flametemp-eq
card_title: Equations in flametemp()
url: /posts/flametemp-eq
excerpt: Documentation on equations in flametemp()
math: true
tech_stack: [MATLAB]
date: 2025-02-24
---

## flametemp <a href="https://github.com/yoon-zh/flametemp" target="_blank" class="pdf-link"><i class="fab fa-github"></i></a>

## Equations
1
```matlab
terms = comp(:, 1) + comp(:, 2)/4 - comp(:, 3)/2;
```

2
```matlab
Pv = psat*phi;
nH2Or = (Pv/Pt) * n_air/(1-(Pv/Pt));
```
cengel pg 727-728, eq 14-9, 14-10

3
```matlab
nO2r = n_air;
nN2r = 3.76 * n_air;
```

4
```matlab
%    nCO2       nCO         nH2O        nH2     nO2
        A = [1,         1,          0,          0,      0; % C
             0,         0,          2,          2,      0; % H
             2,         1,          1,          0,      2; % O
             1-xCO2,-xCO2,          0,          0,      0; % CO2 conversion
             0,         0,     1-xH2O,      -xH2O,      0]; % H2O conversion
        B = [nC;        nH;        nO;          0;      0];
```

5
```matlab
h_total_air = hf_air + h_air - hamb_air;
```

6
```matlab
h_N2ideal = (n_r.*h_r - n_p.*h_pBase)./n_p;
```

7
```matlab
t_flame = LagrangeIntp(h_tofind, T_tofind, h_flame);
```

let 
xCO2 = nCO2/(nCO2 + nCO)
xH2O = nH2O/(nH2O + nH2)
the values are given:
xCO2 = 0.85;
xH2O = 0.93;
with the above, balance this equation:
1 CH3OH(l) + 4.5 (O2 + 3.76N2) + 0.086081 H2O => CO2 + CO + H2O + H2 + O2 + N2


HUMID AIR
nH2Or = molesH2OinAir(n_air, phi, T, Pt)
How many moles of H2O (n_H2O) are in the air under the following conditions? :
n_air = 4.5 % Dry air
phi = 0.6; % Relative humidity
air_temp = 25; % °C
pressure = 101.325; % kPa

Pv = psat*phi;
nH2Or = (Pv/Pt) * n_air/(1-(Pv/Pt));
