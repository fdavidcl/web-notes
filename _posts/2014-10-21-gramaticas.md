##Gramaticas Regulares

Una gramática regular derecha es aquella cuyas reglas de producción P son de la siguiente forma:  

+ A → a, donde A es un símbolo no-terminal en N y a uno terminal en $\Sigma$  
+ A → aB, donde A y B pertenecen a N y a pertenece a $\Sigma$  
+ A → $\epsilon$, donde A pertenece a N.  

Análogamente, en una gramática regular izquierda, las reglas son de la siguiente forma:  

+ A → a, donde A es un símbolo no-terminal en N y a uno terminal en $\Sigma$
+ A → Ba, donde A y B pertenecen a N y a pertenece a $\Sigma$  
+ A → $\epsilon$, donde A pertenece a N.  

Nota
: Si mezclamos reglas de una regular derecha y una regular izquierda lo que obtenemos   
sigue siendo una gramatica lineal pero no necesariamente una gramatica regular.

Por ejemplo la gramatoca G con N = {S, A}, $\Sigma$ = {a, b}, P con simbolo inicial S y reglas:  

+ S → aA  
+ A → Sb  
+ S → $\epsilon$  
genera $\{a^ib^i : i \geq 0\}$, que es un lenguaje lineal no regular.  
