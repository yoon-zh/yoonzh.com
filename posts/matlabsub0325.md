---
layout: hidden
title: matlabsub0325
card_title: "MATLAB Submission Scripts"
math: true
url: /posts/matlabsub0325
date: 2025-03-13
---

Any inquiries or concerns, please contact me via email: [yoon_zh@outlook.com](mailto:yoon_zh@outlook.com)

***

# Problem 1

filename: problem1.m

```matlab
clc
clearvars
close all

x = linspace(-pi,pi,50);
y1 = 0.5*sin(x);
y2 = 3*cos(2*x);
y3 = exp(x);
range1_2 = [-3, 3];
range3 = [0, 30];

problem_1(x, y1, y2, y3, range1_2, range3);

function problem_1(x, y1, y2, y3, range1_2, range3)
  % Print plots in figure
  figure('Name','2470120','NumberTitle','off')
  subplot(3,1,1)
  plot(x, y1, 'LineStyle','-', 'Marker','square','Color','r')
  ylim(range1_2)
  title('y = 0.5*sin(x)')

  subplot(3,1,2)
  plot(x, y2, 'LineStyle',':', 'Marker','*','Color','g')
  ylim(range1_2)
  title('y = 3*cos(2*x)')

  subplot(3,1,3)
  plot(x, y3, 'LineStyle','--','Marker','o','Color','b')
  ylim(range3)
  title('y = exp(x)')
end
```

***

# Problem 2

filename: problem2.m

```matlab
clc
clearvars
close all

%% Initialize the matrix AA
function AA = initvar()
  AA = [1,  5, -3,  8;
       -3, -7,  1,  8;
        6,  4,  9,  5;
        7,  0,  3, -1];
end

%% Problem 2-1
function ans2 = problem_2()
  AA = initvar();
  ans2.v = AA(3,:)';
  ans2.w = AA(:,2);
  ans2.BB = AA(1:3, 2:4);
  ans2.CC = AA(2:3, 1:2);
  ans2.DD = reshape(ans2.CC', 1, []); % transpose CC for column-wise op
end

%% Problem 2-2
function ans2 = problem_2_2()
  ans2.array1 = zeros(4,5) + 30;
  ans2.rowvector = linspace(1,10,10)';
  ans2.array2 = inneficient_for_loop(4,5);
end

% Initialize a 4x4 array with 20 as all elements
function array2 = inneficient_for_loop(row,col)
  array2 = zeros(row,col);
  for i = 1:row
    for j = 1:col
      array2(i,j) = 20;
    end
  end
end

%% Problem 2-3
function ans2_3 = simple_resistor_circuit()
  %% The lazy way (if the equation is really difficult)
  %% Uncomment to try
  % syms i1 i2 i3
  % eqns = [12 + 10*i1 + 2*(i1-i2) + 5*(i1 - i3) + 7*i1 == 0;...
  %              5*i2 + 3*(i2-i3) + 2*(i2-i1) == 0;...
  %              3*(i3-i2) - 10 + 6*i3 + 5*(i3-i1) == 0];
  % vars = [i1 i2 i3];
  % [ans2_3.i1, ans2_3.i2, ans2_3.i3] = solve(eqns, vars);

  % The cleaner, resource-wise way (if all eqns are of first order)
  % == i1  i2  i3 ==
  A = [24, -2, -5;
       -2, 10, -3;
       -5, -3, 14];
  b = [-12, 0, 10]';
  sol = A\b;
  % Turn to struct for easy printing with printans() function
  ans2_3 = cell2struct(num2cell(sol), {'i1', 'i2', 'i3'}, 1);
end

%% Print values in struct
% All functions return structs, this prints the answers
function printans(ans_struct)
  fn = fieldnames(ans_struct);
  for i = 1:length(fn)
    disp(fn{i})
    disp(ans_struct.(fn{i}))
    disp('Size: ')
    disp(size(ans_struct.(fn{i})))
    disp('================================')
  end
end

%% Call functions above
% Problem 2-1
ans2_1 = problem_2();
printans(ans2_1);

% Problem 2-2
ans2_2 = problem_2_2();
printans(ans2_2);

% Problem 2-3
ans2_3 = simple_resistor_circuit();
printans(ans2_3);
```

***

# Problem 3

filename: problem3.m

```matlab

```

***

# Problem 4

filename: problem4.m

```matlab

```

***

# Problem 5

filename: problem5.m

```matlab

```