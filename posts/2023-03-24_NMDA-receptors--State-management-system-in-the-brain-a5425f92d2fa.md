---
title: 'NMDA receptors: State management system in the brain'
date: '2023-03-24'
---
NMDA receptors can be seen as a state management system in the brain.

Particularly, memory is stored in neurons via the number of receptors on the postsynaptic neuronal membrane. The more ligand and voltage gated ion channels that are present on the postsynaptic membrane, the easier it is for the postsynaptic membrane to reach threshold potential for membrane depolarisation. We can think of the number of postsynaptic membrane receptors as the value of the weights on the neural network.

NMDA receptors are particularly special, they different form other postsynaptic membrane receptors in that they can only be activated when two conditions have been fulfilled simultaneously:
1. Binding of glutamate neurotransmitter to the NMDA receptor
2. Depolarisation of the postsynaptic membrane
The NMDA receptor can be seen as the callback function to update the current state in this state management system. This feature is enabled by the ability for NMDA receptor to allow the influx of calcium ions during activation. Calcium ions serves as a second messenger in the neuron, and this leads to a cascade of reactions that eventually leads to the insertion of more receptor on the postsynaptic membrane, hence making the postsynaptic neuron more easily activated by the presynaptic neuron.

So the typical cycle of the function of such a state management system is as follows:

The exist a certain number of receptors on the postsynaptic membrane (this serves as memory of the neuron / data stored in the neuron)
Activation of the NMDA receptor, allows calcium influx, triggering a cascade of reactions
As a result of the cascade of reactions, more receptors are inserted onto the postsynaptic membrane. This results in the number of receptors on the postsynaptic membrane to be incremented.
If you use React, this will seem oddly familiar to how a useState hook functions, for example:

```javascript
import { useState } from 'react';

function Neuron() {
  const [numberOfReceptors, setNumberOfReceptors] = useState(20);

  function handleNMDAReceptorActivation() {
     setNumberofReceptors((currentNumber) => currentNumber + 5)
   }
 }
```