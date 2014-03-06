---
layout: chapter
title: Un post de prueba
---

### Probando MathJax

Sea \\(f(n)\\) una función para un *post de prueba*, se verifica $$f(n) \in O(g(n)) \Leftrightarrow \exists k \in \mathbb{N} \exists c \in \mathbb{R}^{+} : f(n) \leq c\times g(n) \forall n \geq k$$.

Voy a complicarle la vida a MD/MathJax: `$a_{ij}\times b_{ji}$ texto en medio $1*2*3*4*5$`

`$$a_{ij}\times b_{ij}; 1*2*3*4*5$$`

### Probando highlight.js

Tal vez algo de código:

    var preorder = function(call_each, node) {
        call_each(node.key());

        for (var c = 0; c < node.numChildren(); c++) {
            preorder(call_each, node.child(c));
        }
    }
