---
title: 'Similarity of System Design in Software Engineering and Medicine'
date: '2022-04-06'
---
We can observe similarities in system design in software engineering and medicine.

For example, in the regulation of the urea cycle, we notice that because the Km of urea cycle enzymes are relatively low, there is a limit to the magnitude in which urea cycle enzymes can be upregulated. This may cause a problem where the urea cycle gets overwhelmed and toxic ammonia accumulates.

However, this typically isn’t a problem because there are upstream regulatory mechanisms such as satiety to prevent humans from consuming too much food such that there is a sudden spike in the amino acid concentration.

In React’s composing components, we notice situations where the child component may not handle all the different edge cases and might throw an error. However, this typically isn’t a problem if the parent component does some error-handling by itself to ensure that the child component is not rendered for those specific edge cases.

In both cases, we see that in system design there is an element of delegation of error handling to upstream processes and downstream processes. There is a certain level of trust that upstream processes will not fail. Moreover, there is also no total dependency of upstream regulatory mechanisms. Downstream regulatory mechanisms still work to some extent to soften the impact in the cases that upstream processes fail. There is also no total regulatory coverage by downstream processes and perhaps in an effort to conserve resources.