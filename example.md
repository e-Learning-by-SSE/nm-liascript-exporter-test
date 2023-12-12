# Matching stuff?

!?[](http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4)
??[Parsing and display of math equations is included in this blog template. Parsing of math is enabled by `remark-math` and `rehype-katex`.
KaTeX and its associated font is included in `_document.js` so feel free to use it on any page.
^[For the full list of supported TeX functions, check out the [KaTeX documentation](https://katex.org/docs/supported.html)]

Inline math symbols can be included by enclosing the term between the `$` symbol.

Math code blocks are denoted by `$$`.

If you intend to use the `$` sign instead of math, you can escape it (`\$`), or specify the HTML entity (`&dollar;`) [^2]

Inline or manually enumerated footnotes are also supported. Click on the links above to see them in action.

[^2]: \$10 and &dollar;20.

# Deriving the OLS Estimator

Using matrix notation, let $n$ denote the number of observations and $k$ denote the number of regressors.

The vector of outcome variables $\mathbf{Y}$ is a $n \times 1$ matrix,

```tex
\mathbf{Y} = \left[\begin{array}
  {c}
  y_1 \\
  . \\
  . \\
  . \\
  y_n
\end{array}\right]
```

$$
\mathbf{Y} = \left[\begin{array}
  {c}
  y_1 \\
  . \\
  . \\
  . \\
  y_n
\end{array}\right]
$$

The matrix of regressors $\mathbf{X}$ is a $n \times k$ matrix (or each row is a $k \times 1$ vector),

```latex
\mathbf{X} = \left[\begin{array}
  {ccccc}
  x_{11} & . & . & . & x_{1k} \\
  . & . & . & . & .  \\
  . & . & . & . & .  \\
  . & . & . & . & .  \\
  x_{n1} & . & . & . & x_{nn}
\end{array}\right] =
\left[\begin{array}
  {c}
  \mathbf{x}'_1 \\
  . \\
  . \\
  . \\
  \mathbf{x}'_n
\end{array}\right]
```

$$
\mathbf{X} = \left[\begin{array}
  {ccccc}
  x_{11} & . & . & . & x_{1k} \\
  . & . & . & . & .  \\
  . & . & . & . & .  \\
  . & . & . & . & .  \\
  x_{n1} & . & . & . & x_{nn}
\end{array}\right] =
\left[\begin{array}
  {c}
  \mathbf{x}'_1 \\
  . \\
  . \\
  . \\
  \mathbf{x}'_n
\end{array}\right]
$$

The vector of error terms $\mathbf{U}$ is also a $n \times 1$ matrix.

At times it might be easier to use vector notation. For consistency, I will use the bold small x to denote a vector and capital letters to denote a matrix. Single observations are denoted by the subscript.

## Least Squares

**Start**:  
$$y_i = \mathbf{x}'_i \beta + u_i$$

**Assumptions**:

1. Linearity (given above)
2. $E(\mathbf{U}|\mathbf{X}) = 0$ (conditional independence)
3. rank($\mathbf{X}$) = $k$ (no multi-collinearity i.e. full rank)
4. $Var(\mathbf{U}|\mathbf{X}) = \sigma^2 I_n$ (Homoskedascity)

**Aim**:  
Find $\beta$ that minimises the sum of squared errors:

$$
Q = \sum_{i=1}^{n}{u_i^2} = \sum_{i=1}^{n}{(y_i - \mathbf{x}'_i\beta)^2} = (Y-X\beta)'(Y-X\beta)
$$

**Solution**:  
Hints: $Q$ is a $1 \times 1$ scalar, by symmetry $\frac{\partial b'Ab}{\partial b} = 2Ab$.

Take matrix derivative w.r.t $\beta$:

```tex
\begin{aligned}
  \min Q           & = \min_{\beta} \mathbf{Y}'\mathbf{Y} - 2\beta'\mathbf{X}'\mathbf{Y} +
  \beta'\mathbf{X}'\mathbf{X}\beta \\
                   & = \min_{\beta} - 2\beta'\mathbf{X}'\mathbf{Y} + \beta'\mathbf{X}'\mathbf{X}\beta \\
  \text{[FOC]}~~~0 & =  - 2\mathbf{X}'\mathbf{Y} + 2\mathbf{X}'\mathbf{X}\hat{\beta}                  \\
  \hat{\beta}      & = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{Y}                              \\
                   & = (\sum^{n} \mathbf{x}_i \mathbf{x}'_i)^{-1} \sum^{n} \mathbf{x}_i y_i
\end{aligned}
```

$$
\begin{aligned}
  \min Q           & = \min_{\beta} \mathbf{Y}'\mathbf{Y} - 2\beta'\mathbf{X}'\mathbf{Y} +
  \beta'\mathbf{X}'\mathbf{X}\beta \\
                   & = \min_{\beta} - 2\beta'\mathbf{X}'\mathbf{Y} + \beta'\mathbf{X}'\mathbf{X}\beta \\
  \text{[FOC]}~~~0 & =  - 2\mathbf{X}'\mathbf{Y} + 2\mathbf{X}'\mathbf{X}\hat{\beta}                  \\
  \hat{\beta}      & = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{Y}                              \\
                   & = (\sum^{n} \mathbf{x}_i \mathbf{x}'_i)^{-1} \sum^{n} \mathbf{x}_i y_i
\end{aligned}
$$

## Inline Highlighting

Sample of inline highlighting `sum = parseInt(num1) + parseInt(num2)`

## Code Blocks

Some Javascript code

```js {1,3-4} showLineNumbers
var num1, num2, sum;
num1 = prompt("Enter first number");
num2 = prompt("Enter second number");
sum = parseInt(num1) + parseInt(num2); // "+" means "add"
alert("Sum = " + sum); // "+" means combine into a string
```

Some Java code

```java showLineNumbers
public class HelloWorld {
	public static void main(String[] args) {
		int count = 0;

		for (int i = 0; i < 10; i++) {
			System.out.println("Count: " + count);
			count++;
		}
	}
}
```

Some Python code 🐍

```python
def fib():
    a, b = 0, 1
    while True:            # First iteration:
        yield a            # yield 0 to start with and then
        a, b = b, a + b    # a will now be 1, and b will also be 1, (0 + 1)

for index, fibonacci_number in zip(range(10), fib()):
     print('{i:3}: {f:3}'.format(i=index, f=fibonacci_number))
```
](https://github.com/timlrx/tailwind-nextjs-starter-blog  "Introduction")

# How was your day?
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi molestias doloribus assumenda aspernatur in maxime numquam. Sint quas nobis voluptatum nemo consequatur aperiam ea sit eveniet, perferendis iure! Fugiat, optio!