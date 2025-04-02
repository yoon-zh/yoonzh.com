---
layout: hidden
title: matlabsub0325
card_title: "MATLAB Submission Scripts"
math: true
url: /posts/matlabsub0325
date: 2025-04-02
---

Any inquiries or concerns, please contact me via email: [yoon_zh@outlook.com](mailto:yoon_zh@outlook.com)

To clarify, yes - this is my code.

Why copy from here instead of the PDF? The `.tex` format messes up some of the code (for example, changing the `''` into a different character) and copying the code is difficult. Here, you can simply click the `Copy` button in the top left corner of the codeblock and paste in your MATLAB to run locally.

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

%% Call functions below
% Problem 2-1
ans2_1 = problem_2_1();
printans(ans2_1);

% Problem 2-2
ans2_2 = problem_2_2();
printans(ans2_2);

% Problem 2-3
ans2_3 = simple_resistor_circuit();
printans(ans2_3);

%% Initialize the matrix AA
function AA = initvar()
  AA = [1,  5, -3,  8;
       -3, -7,  1,  8;
        6,  4,  9,  5;
        7,  0,  3, -1];
end

%% Problem 2-1
function ans2_1 = problem_2_1()
  AA = initvar();
  ans2_1.v = AA(3,:)';
  ans2_1.w = AA(:,2);
  ans2_1.BB = AA(1:3, 2:4);
  ans2_1.CC = AA(2:3, 1:2);
  ans2_1.DD = reshape(ans2_1.CC', 1, []); % transpose CC for column-wise op
end

%% Problem 2-2
function ans2_2 = problem_2_2()
  ans2_2.array1 = zeros(4,5) + 30;
  ans2_2.rowvector = linspace(1,10,10);
  ans2_2.array2 = inneficient_for_loops(4,5);
end

% Initialize a 4x4 array with 20 as all elements
function array2 = inneficient_for_loops(row,col)
  array2 = zeros(row,col);
  for i = 1:row
    for j = 1:col
      array2(i,j) = 20;
    end
  end
end

%% Problem 2-3
function ans2_3 = simple_resistor_circuit()
  % % The lazy way (if the equation is really difficult)
  % % Uncomment to try
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
```

***

# Problem 3

filename: problem3.m

```matlab
clc
clearvars
close all

%% Initialize values

% Initial values of a
init_a = {3, 5, @(t) 0.5*t};

% Initial values θ(0), θ'(0)
init_conds = {
    [0.5; 0]
    [3;   0]
    [3;   0]
}; % θ(0) θ'(0)

% Range of t
trange = [0 10];

%% Solve ODE, print figure
figure('Name','Pendulum');
for i = 1:3
  a = init_a{i};
  conds = init_conds{i};

  % Consider a as dependant of t
  ode_fun = @(t,y) ode_pendulum(t,y,a);
  [t, y] = ode45(ode_fun, trange, conds);
  disp(size(t))
  print_subplot(t, y, i, a, conds(1));
end


%% Define ODE
function dydt = ode_pendulum(t, y, a_val)
  % Define constants
  g = 9.81;
  L = 2;

  % Parse a
  if isa(a_val, 'function_handle') % If a is a function of t
    a = a_val(t); % Evaluate a at "t"
  else % If a is constant, just copy the number
    a = a_val;
  end

  % Let y(1) = θ(t),  y(2) = θ'(t)
  dydt = [
    y(2)
    ((a - g) / L) * sin(y(1))
  ];
end

%% Print graphs
function print_subplot(t, y, i, a, theta_0)
  if isa(a, 'function_handle')
    a = func2str(a);
  end
  subplot(3,1,i)
  plot(t, y(:,1), '-')
  title(sprintf('a = %s, \\theta(0) = %g', string(a), theta_0))
  xlabel('Time (s)')
  ylabel('\theta(t), rad')
end
```

***

# Problem 4

filename: problem4.m

```matlab
clc
clearvars
close all

% Define time vectors for t < 0 and t >= 0
t_neg = [-20*1e-6, 0];          % From -20 to 0 μs
t_pos = linspace(0, 1e-4, 500); % From 0 to 100 μs

% Convert time to microseconds (for printing plots)
t_neg_micro = t_neg * 1e6;
t_pos_micro = t_pos * 1e6;

% Compute i_L
i_L_neg = 0.36 * ones(size(t_neg));
i_L_pos = 0.36 * exp(-50000 * t_pos);

% Compute i_1
i_1_neg = 0.2 * ones(size(t_neg));
i_1_pos = -0.24 * exp(-50000 * t_pos);

%% Plot i_L and i_1 in subplots
figure;

% Subplot for i_L
subplot(2, 1, 1);
hold on;
plot(t_neg_micro, i_L_neg, 'b', 'LineWidth', 1.5);
plot(t_pos_micro, i_L_pos, 'b', 'LineWidth', 1.5);
hold off;
title('Inductor Current i_L(t)');
xlabel('Time (μs)');
ylabel('Current (A)');
grid on;

% Subplot for i_1
subplot(2, 1, 2);
hold on;
plot(t_neg_micro, i_1_neg, 'r', 'LineWidth', 1.5);
plot(t_neg_micro(end), i_1_neg(end), 'ro', 'LineWidth', 1.5) % The current jumps
plot(t_pos_micro, i_1_pos, 'r', 'LineWidth', 1.5);
hold off;
title('Current i_1(t)');
xlabel('Time (μs)');
ylabel('Current (A)');
grid on;
```

***

# Problem 5

filename: problem5.m

```matlab

```