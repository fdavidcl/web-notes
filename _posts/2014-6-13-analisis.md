---
layout: chapter
title: Resúmenes/Esquemas de análisis
---

## 1. Sucesiones y series funcionales. Series de potencias

## 2. Medidas de Lebesgue en `$\mathbb{R}^N$`

Teorema
: Sea $G$ abierto de $\mathbb{R}^N$. Entonces `$\exists \{Q_n\}$` cubos diádicos
tales que `$G=\bigcup\limits_{n}Q_n$` y `$\overline{Q_n}\subseteq G \forall n \in \mathbb{N}$`.

Corolario
: $\mathcal{B}$ es la menor $\sigma$-álgebra generada por la familia de intervalos
acotados $\mathcal{I}$.

Proposición (regularidad de la medida exterior)
: Sea $A \subseteq \mathbb{R}^N$. Entonces existe $B in \mathcal{B}$ tal que
`$A\subseteq B, \lambda^*(A) = \lambda^*(B)$`.

Proposición
: Sea $\mu^*$ una medida exterior sobre $\Omega$. Entonces, sea
`$$ \mathcal{C} = \{ E \subseteq \Omega : \mu^*(A) = \mu^*(A\cap E) + \mu^*(A \cap E^c) \forall A \subseteq \Omega\}$$`
tenemos que $\mathcal{C}$ es una $\sigma$-álgebra, y `$\mu^*_{|\mathcal{C}}$` es una medida.

Teorema (de existencia y unicidad de la medida de Lebesgue)
: 1. La familia `$M=\{A\cup Z : A \in \mathcal{B}, \lambda^*(Z) = 0\}$` es una $\sigma$-álgebra
     y `$\lambda^*_{|M}=\lambda$` es una medida.
  2. $\lambda(I) = v(I) \forall I \in \mathcal{I}$ y $\lambda$ es la única medida sobre
     $M$ que verifica esto.
  3. $M$ es la mayor $\sigma$-álgebra tal que $\lambda$ es aditiva.

Teorema (caraacterización de la medida de Lebesgue)
: 1. Si $\mu$ es otra medida en $M$ invariante por traslaciones tal que $\mu([0,1]^N)=\alpha < \infty$,
     entonces $\mu = \alpha \lambda$.
  2. $\lambda$ es la única medida en M invariante por traslaciones que verifica $\lambda([0,1]^N)=1$.

Teorema (relación de aplicaciones lineales con la medida de Lebesgue)
: Sea $T: \mathbb{R}^N \rightarrow \mathbb{R}^N$ una aplicación lineal y sea $E\in M$. Entonces
  $T(E) \in M$ y $\lambda(T(E))=|det(T)| \lambda(E)$

Teorema (relación de la medida de Lebesgue con las funciones `$\mathcal{C}^1$`)
: $G \subseteq \mathbb{R}^N$ abierto, sea $f \in \mathcal{C}^1(G), f: G \rightarrow \mathbb{R}^N$. Entonces,
    1. $Z \subseteq G, \lambda(Z) = 0 \Rightarrow \lambda(f(Z)) = 0$.
    2. $E\in M, E \subseteq G \Rightarrow f(E) \in M$

Teorema (relación con el producto cartesiano)
: $E$ medible en $\mathbb{R}^N$, $F$ medible en $\mathbb{R}^M$. Entonces,
    1. $E\times F$ es medible en $\mathbb{R}^{N+M}$.
    2. $\lambda(E\times F) = \lambda(E)\lambda(F)$.
