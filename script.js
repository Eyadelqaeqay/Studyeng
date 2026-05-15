const questions = [
  { id: 1, topic: "Abstraction & Digital Basics", question: "Which of the following best describes the purpose of abstraction in digital design?", options: ["A) To increase transistor count", "B) To hide irrelevant details and expose only essential features", "C) To convert analog to digital signals", "D) To reduce clock frequency"], answer: "B" },
  { id: 2, topic: "Abstraction & Digital Basics", question: "Arrange these abstraction levels from lowest (closest to physics) to highest: RT level, Device level, Processor level, Digital circuits.", options: ["A) Processor → Digital → RT → Device", "B) Device → Digital → RT → Processor", "C) RT → Device → Digital → Processor", "D) Digital → RT → Processor → Device"], answer: "B" },
  { id: 3, topic: "Abstraction & Digital Basics", question: "A signal that can take any value within a continuous range is called:", options: ["A) Digital", "B) Quantized", "C) Analog", "D) Sampled"], answer: "C" },
  { id: 4, topic: "Abstraction & Digital Basics", question: "Which of the following is NOT an advantage of digital over analog systems?", options: ["A) Easier to design", "B) More reproducible", "C) Higher precision for raw signals", "D) Programmable"], answer: "C" },
  { id: 5, topic: "Abstraction & Digital Basics", question: "Quantization error in digitization is a result of:", options: ["A) Noise in the analog circuit", "B) Replacing a continuous range with a finite number of levels", "C) Too high a sampling rate", "D) Using DAC instead of ADC"], answer: "B" },
  { id: 6, topic: "Abstraction & Digital Basics", question: "In a wireless receiver chain, which block comes immediately after the antenna and before digital processing?", options: ["A) DAC", "B) Encryption", "C) ADC", "D) Modulator"], answer: "C" },
  { id: 7, topic: "Logic Circuits", question: "A truth table completely describes a:", options: ["A) Sequential circuit", "B) Combinational circuit", "C) State machine", "D) Flip-flop"], answer: "B" },
  { id: 8, topic: "Logic Circuits", question: "A state table describes the output and next state as a function of:", options: ["A) Current inputs only", "B) Previous outputs only", "C) Current state and current inputs", "D) Clock period only"], answer: "C" },
  { id: 9, topic: "Logic Circuits", question: "Which gate produces a HIGH output only when ALL inputs are LOW?", options: ["A) AND", "B) OR", "C) NOR", "D) NAND"], answer: "C" },
  { id: 10, topic: "Logic Circuits", question: "The output of an XNOR gate is HIGH when:", options: ["A) Inputs are different", "B) Inputs are equal", "C) At least one input is HIGH", "D) All inputs are LOW"], answer: "B" },
  { id: 11, topic: "Logic Circuits", question: "A logic diagram differs from a timing diagram in that a logic diagram shows:", options: ["A) How signals change over time", "B) Gate interconnections and structure", "C) Transistor dimensions", "D) Scaling effects"], answer: "B" },
  { id: 12, topic: "Logic Circuits", question: "Which of the following is a universal gate (can implement any Boolean function alone)?", options: ["A) AND", "B) OR", "C) NAND", "D) XOR"], answer: "C" },
  { id: 13, topic: "Device Technologies", question: "SSI/MSI components fell out of favor mainly because:", options: ["A) They were too fast", "B) Too much area is wasted in packaging rather than silicon", "C) They could not be programmed", "D) They consumed no power"], answer: "B" },
  { id: 14, topic: "Device Technologies", question: "In a gate-array ASIC, customization is performed primarily at which level?", options: ["A) Transistor diffusion", "B) Metal interconnect layers", "C) Package level", "D) PCB routing"], answer: "B" },
  { id: 15, topic: "Device Technologies", question: "Standard-cell ASIC differs from gate-array ASIC because standard-cell:", options: ["A) Uses pre-fabricated base cells only", "B) Customizes the complete layout including cells", "C) Cannot be simulated", "D) Is field-programmable"], answer: "B" },
  { id: 16, topic: "Device Technologies", question: "Which implementation technology offers the best trade-off between flexibility and time-to-market?", options: ["A) Full-custom ASIC", "B) Standard-cell ASIC", "C) FPGA/CPLD", "D) SSI"], answer: "C" },
  { id: 17, topic: "Device Technologies", question: "Hardware-software co-design refers to:", options: ["A) Implementing everything in hardware", "B) Designing hardware and software concurrently to meet system goals", "C) Writing HDL without simulation", "D) Using only general-purpose processors"], answer: "B" },
  { id: 18, topic: "Device Technologies", question: "Compared to FPGA, standard-cell ASIC generally offers:", options: ["A) Lower power and smaller area", "B) Higher power and larger area", "C) No difference in area", "D) Less flexibility at higher cost"], answer: "A" },
  { id: 19, topic: "System Design & EDA", question: "The behavioral view of a digital system describes:", options: ["A) Physical dimensions of transistors", "B) What the system does (function and timing)", "C) How gates are wired together", "D) Metal routing layers"], answer: "B" },
  { id: 20, topic: "System Design & EDA", question: "Physical design in the development flow includes:", options: ["A) Writing HDL code", "B) Functional simulation", "C) Placement and routing on silicon", "D) Specification writing"], answer: "C" },
  { id: 21, topic: "System Design & EDA", question: "EDA tools are limited because they:", options: ["A) Cannot run simulations", "B) Can automate tasks but cannot fix a fundamentally poor architecture", "C) Do not support HDL", "D) Only work for analog circuits"], answer: "B" },
  { id: 22, topic: "System Design & EDA", question: "Synthesis in the digital design flow converts:", options: ["A) Analog to digital signals", "B) HDL description into a gate-level netlist", "C) Layout to masks", "D) Test vectors to waveforms"], answer: "B" },
  { id: 23, topic: "MOSFET Scaling", question: "Under constant electric-field scaling by factor S > 1, the gate capacitance CGC scales as:", options: ["A) S²", "B) S", "C) 1/S", "D) 1/S²"], answer: "C" },
  { id: 24, topic: "MOSFET Scaling", question: "Under constant electric-field scaling, power dissipation P scales as:", options: ["A) S²", "B) 1/S", "C) 1/S²", "D) Stays constant"], answer: "C" },
  { id: 25, topic: "MOSFET Scaling", question: "Power-delay product (PDP) under scaling changes as:", options: ["A) 1/S²", "B) 1/S³", "C) 1/S", "D) S"], answer: "B" },
  { id: 26, topic: "MOSFET Scaling", question: "Energy-delay product (EDP) under scaling improves (decreases) as:", options: ["A) 1/S²", "B) 1/S³", "C) 1/S⁴", "D) 1/S"], answer: "C" },
  { id: 27, topic: "MOSFET Scaling", question: "Constant-voltage scaling is problematic because it leads to:", options: ["A) Reduced transistor speed", "B) Increased power density and reliability issues", "C) Lower transition frequency", "D) Higher gate capacitance"], answer: "B" },
  { id: 28, topic: "MOSFET Scaling", question: "If gm doubles and total gate capacitance remains unchanged, fT will:", options: ["A) Halve", "B) Stay the same", "C) Double", "D) Quadruple"], answer: "C" },
  { id: 29, topic: "MOSFET Scaling", question: "Under proper scaling, the power density (power per unit area) of a chip:", options: ["A) Increases proportionally to S²", "B) Decreases proportionally to 1/S²", "C) Remains approximately constant", "D) Becomes zero"], answer: "C" },
  { id: 30, topic: "MOSFET Scaling", question: "The propagation delay td under constant electric-field scaling by factor S changes to:", options: ["A) S · td", "B) td / S", "C) td / S²", "D) td stays the same"], answer: "B" },
  { id: 31, topic: "CMOS Logic Gates", question: "In a CMOS NOR gate with inputs A and B, the pull-down network (PDN) consists of:", options: ["A) PMOS in series", "B) NMOS in parallel", "C) NMOS in series", "D) PMOS in parallel"], answer: "B" },
  { id: 32, topic: "CMOS Logic Gates", question: "For a CMOS NAND gate, the pull-up network (PUN) has PMOS transistors connected:", options: ["A) In series", "B) In parallel", "C) In a feedback loop", "D) With no connection to VDD"], answer: "B" },
  { id: 33, topic: "CMOS Logic Gates", question: "The CMOS gate structure ensures that PUN and PDN are:", options: ["A) Identical networks", "B) Dual/complementary networks — one conducts when the other does not", "C) Both always OFF", "D) Both always ON"], answer: "B" },
  { id: 34, topic: "CMOS Logic Gates", question: "Which transistor type passes a degraded (weak) logic HIGH?", options: ["A) PMOS", "B) NMOS", "C) Both equally", "D) Neither"], answer: "B" },
  { id: 35, topic: "CMOS Logic Gates", question: "The ideal static power of a CMOS inverter is zero because:", options: ["A) NMOS and PMOS are never both ON in a stable state", "B) VDD is always zero", "C) The gate has infinite resistance", "D) Crowbar current is designed in"], answer: "A" },
  { id: 36, topic: "CMOS Logic Gates", question: "During a logic transition in a CMOS inverter, a brief current spike from VDD to GND can occur. This is called:", options: ["A) Leakage current", "B) Crowbar (shoot-through) current", "C) Body effect current", "D) Gate tunneling current"], answer: "B" },
  { id: 37, topic: "Transmission Gates & Multiplexers", question: "A transmission gate is formed by connecting an NMOS and PMOS transistor:", options: ["A) In series between VDD and GND", "B) In parallel between source and drain", "C) Gate-to-gate only", "D) Drain-to-source only"], answer: "B" },
  { id: 38, topic: "Transmission Gates & Multiplexers", question: "When the enable signal of a transmission gate is LOW (and its complement is HIGH), the gate:", options: ["A) Passes the signal strongly", "B) Becomes high impedance (open)", "C) Shorts to VDD", "D) Inverts the signal"], answer: "B" },
  { id: 39, topic: "Transmission Gates & Multiplexers", question: "A non-restoring multiplexer using transmission gates may suffer from:", options: ["A) Producing strong rail-to-rail output", "B) Signal degradation when driving multiple loads", "C) Crowbar current at every transition", "D) Undefined output when enabled"], answer: "B" },
  { id: 40, topic: "Transmission Gates & Multiplexers", question: "A tristate bus has a disadvantage over a multiplexer because:", options: ["A) Tristate outputs cannot drive capacitive loads", "B) Multiple enabled drivers create bus contention", "C) Tristate devices consume zero power", "D) Tristate buses are faster"], answer: "B" },
  { id: 41, topic: "Latches, Flip-Flops & Clocking", question: "A negative D-latch is transparent (passes input to output) when:", options: ["A) CLK = 1", "B) CLK = 0", "C) CLK is at any edge", "D) D = 1 only"], answer: "B" },
  { id: 42, topic: "Latches, Flip-Flops & Clocking", question: "A positive-edge-triggered D flip-flop samples its input:", options: ["A) Throughout the high phase of the clock", "B) At the rising edge of the clock", "C) At the falling edge of the clock", "D) Continuously"], answer: "B" },
  { id: 43, topic: "Latches, Flip-Flops & Clocking", question: "Setup time violation causes:", options: ["A) The flip-flop to capture stale data", "B) Metastability — the output is unpredictable", "C) The output to be always 0", "D) No effect on the circuit"], answer: "B" },
  { id: 44, topic: "Latches, Flip-Flops & Clocking", question: "Hold time is the minimum time data must remain stable:", options: ["A) Before the clock edge", "B) After the clock edge", "C) Before power-on", "D) During reset"], answer: "B" },
  { id: 45, topic: "Latches, Flip-Flops & Clocking", question: "A race condition between flip-flops in a pipeline is caused by:", options: ["A) Excessive setup time margin", "B) Clock skew causing one FF to capture data from a fast neighbor", "C) Zero propagation delay", "D) Mismatched VDD levels"], answer: "B" },
  { id: 46, topic: "Latches, Flip-Flops & Clocking", question: "Non-overlapping two-phase clocks are used to:", options: ["A) Double the operating frequency", "B) Prevent race conditions by ensuring no two latches are transparent simultaneously", "C) Reduce power supply voltage", "D) Implement asynchronous reset"], answer: "B" },
  { id: 47, topic: "Layout & Design Rules", question: "In CMOS layout, a MOSFET channel is formed where:", options: ["A) Metal overlaps diffusion", "B) Polysilicon gate crosses the active/diffusion region", "C) N-well contacts GND", "D) Via connects metal1 to metal2"], answer: "B" },
  { id: 48, topic: "Layout & Design Rules", question: "Design rules specify minimum 'enclosure' to ensure:", options: ["A) Gate oxide is thick enough", "B) One layer is fully surrounded by another with adequate margin for process variation", "C) Metal resistance is minimized", "D) Poly cannot touch diffusion"], answer: "B" },
  { id: 49, topic: "Layout & Design Rules", question: "Which of the following is checked by a DRC tool?", options: ["A) Logical correctness of the circuit", "B) Timing closure", "C) Minimum spacing and width violations in the layout", "D) HDL syntax errors"], answer: "C" },
  { id: 50, topic: "Layout & Design Rules", question: "Layout is best described as:", options: ["A) A schematic diagram of transistors", "B) A top-down physical view showing the geometric shapes of each layer on the chip", "C) A list of Boolean equations", "D) A timing diagram of the design"], answer: "B" },
// --- MOSFET Scaling & High-Frequency Performance ---
  { id: 51, topic: "MOSFET Scaling", question: "Moore's Law originally observed that the number of transistors on a microchip doubles approximately every:", options: ["A) 6 months", "B) 18 to 24 months", "C) 5 years", "D) 10 years"], answer: "B" },
  { id: 52, topic: "MOSFET Scaling", question: "Under constant electric-field scaling by a factor of S > 1, the power supply voltage (VDD) must scale by:", options: ["A) S", "B) 1", "C) 1/S", "D) 1/S²"], answer: "C" },
  { id: 53, topic: "MOSFET Scaling", question: "Under constant-voltage scaling, what happens to the power density (power per unit area)?", options: ["A) It remains constant", "B) It decreases by 1/S", "C) It increases by S²", "D) It increases by S³"], answer: "D" },
  { id: 54, topic: "MOSFET Scaling", question: "Which scaling method leads to severe reliability issues due to high internal electric fields?", options: ["A) Constant electric-field scaling", "B) Constant-voltage scaling", "C) Both methods equally", "D) Neither method"], answer: "B" },
  { id: 55, topic: "MOSFET Scaling", question: "Under constant electric-field scaling, the drain current (ID) of a transistor scales by:", options: ["A) 1", "B) S", "C) 1/S", "D) 1/S²"], answer: "C" },
  { id: 56, topic: "MOSFET Scaling", question: "The transition frequency (fT) of a MOSFET is defined as the frequency where the common-source short-circuit current gain becomes:", options: ["A) 0", "B) 0.5", "C) 1", "D) Infinity"], answer: "C" },
  { id: 57, topic: "MOSFET Scaling", question: "To obtain a higher transition frequency (fT) from a given MOSFET, it should be operated at:", options: ["A) A very low drain current", "B) A high drain current", "C) Zero overdrive voltage", "D) Cut-off region"], answer: "B" },
  { id: 58, topic: "MOSFET Scaling", question: "The transition frequency (fT) is inversely proportional to:", options: ["A) Electron mobility", "B) Overdrive voltage", "C) Gate width", "D) Channel length squared (L²)"], answer: "D" },
  
  // --- Layout & Reliability Issues ---
  { id: 59, topic: "Layout & Design Rules", question: "What is the minimum spacing rule between two P-wells that are at different potentials?", options: ["A) 2λ", "B) 4λ", "C) 6λ", "D) 8λ"], answer: "C" },
  { id: 60, topic: "Reliability Issues", question: "The Antenna Effect in IC fabrication is caused by:", options: ["A) RF interference from neighboring chips", "B) Metal wires charging up during the plasma-etching process", "C) Alpha particles flipping memory bits", "D) Excessive clock speeds"], answer: "B" },
  { id: 61, topic: "Reliability Issues", question: "Which of the following is a valid method to fix an antenna violation in layout?", options: ["A) Increasing the clock frequency", "B) Removing all well contacts", "C) Jumping to an upper metal layer just before the gate", "D) Making the gate oxide thinner"], answer: "C" },
  { id: 62, topic: "Reliability Issues", question: "Metal slotting rules are primarily applied to wide global wires (like power routing) in order to:", options: ["A) Increase the resistance", "B) Provide stress relief and ensure proper fabrication", "C) Form parasitic capacitors", "D) Reduce the transition frequency"], answer: "B" },
  { id: 63, topic: "Reliability Issues", question: "Latchup in CMOS circuits is triggered when:", options: ["A) The gate oxide breaks down under high voltage", "B) Substantial current in the substrate turns ON parasitic bipolar transistors", "C) The clock signal becomes metastable", "D) The power supply is completely disconnected"], answer: "B" },
  { id: 64, topic: "Reliability Issues", question: "How is latchup typically prevented during the layout phase?", options: ["A) Using only minimum size transistors", "B) Eliminating all metal layers", "C) Adding many substrate and well taps", "D) Increasing the operating temperature"], answer: "C" },
  { id: 65, topic: "Reliability Issues", question: "Electromigration is a reliability issue characterized by:", options: ["A) Electrons tunneling through the gate oxide", "B) Metal atoms being displaced over time due to high current density", "C) Holes accumulating in the N-well", "D) Plasma etching damage to the silicon surface"], answer: "B" },
  { id: 66, topic: "Layout & Design Rules", question: "A physical layout is essentially a:", options: ["A) Schematic diagram with timing details", "B) Top-down view showing the geometric shapes of each layer", "C) Cross-sectional view of the silicon lattice", "D) List of boolean equations"], answer: "B" },
  { id: 67, topic: "Layout & Design Rules", question: "To estimate cell area quickly, designers count the number of wiring tracks and multiply by:", options: ["A) 2λ", "B) 4λ", "C) 8λ", "D) 16λ"], answer: "C" },

  // --- CMOS Logic Families & Technologies ---
  { id: 68, topic: "CMOS Logic Gates", question: "In Pseudo-NMOS logic, the pull-up network consists of a pMOS transistor with its gate:", options: ["A) Driven by the clock signal", "B) Permanently tied to VDD", "C) Permanently grounded", "D) Connected to the output"], answer: "C" },
  { id: 69, topic: "CMOS Logic Gates", question: "A major disadvantage of Pseudo-NMOS logic compared to static CMOS is:", options: ["A) It requires more transistors", "B) It has non-zero static power dissipation", "C) It has a higher input capacitance", "D) It cannot implement NAND functions"], answer: "B" },
  { id: 70, topic: "CMOS Logic Gates", question: "Dynamic logic circuits use a clocked PMOS transistor primarily for:", options: ["A) The evaluation phase", "B) Output buffering", "C) The precharge phase", "D) Substrate biasing"], answer: "C" },
  { id: 71, topic: "CMOS Logic Gates", question: "During the evaluation phase of a dynamic logic gate, the clock signal is:", options: ["A) LOW", "B) HIGH", "C) Floating", "D) Negative"], answer: "B" },
  { id: 72, topic: "Device Technologies", question: "Which technology allows both pMOS and nMOS transistors to be optimized independently in their own isolated regions?", options: ["A) N-well process", "B) P-well process", "C) Twin-well technology", "D) Standard TTL"], answer: "C" },
  { id: 73, topic: "Device Technologies", question: "One of the major advantages of Silicon-On-Insulator (SOI) technology is:", options: ["A) It is cheaper to manufacture than standard bulk CMOS", "B) It completely eliminates the latchup problem", "C) It increases parasitic junction capacitances", "D) It requires no masks for fabrication"], answer: "B" },
  { id: 74, topic: "Device Technologies", question: "BiCMOS technology attempts to combine:", options: ["A) The low power of CMOS with the high speed and drive capability of Bipolar transistors", "B) The high density of Bipolar with the analog capabilities of vacuum tubes", "C) The low cost of standard cells with FPGA programmability", "D) Only nMOS and pMOS transistors in a single well"], answer: "A" },
  { id: 75, topic: "CMOS Logic Gates", question: "For an nMOS inverter driven directly by the output of another nMOS inverter, the required pull-up to pull-down ratio (Zpu/Zpd) is:", options: ["A) ≥ 1/1", "B) ≥ 2/1", "C) ≥ 4/1", "D) ≥ 8/1"], answer: "C" },
  { id: 76, topic: "CMOS Logic Gates", question: "If an nMOS inverter is driven through one or more pass transistors, the required pull-up to pull-down ratio (Zpu/Zpd) must be:", options: ["A) ≥ 2/1", "B) ≥ 4/1", "C) ≥ 8/1", "D) ≥ 16/1"], answer: "C" },

  // --- Verification, Testing & Systems ---
  { id: 77, topic: "System Design & EDA", question: "The process of detecting physical defects of a die or a package that occurred during manufacturing is called:", options: ["A) Formal Verification", "B) Logic Synthesis", "C) Testing", "D) Hardware Emulation"], answer: "C" },
  { id: 78, topic: "System Design & EDA", question: "Formal verification differs from standard testing because it:", options: ["A) Uses physical probes on the silicon", "B) Applies formal mathematical techniques to prove equivalence or properties", "C) Is only used for analog circuits", "D) Checks for manufacturing dust particles"], answer: "B" },
  { id: 79, topic: "System Design & EDA", question: "Built-In Self-Test (BIST) and scan chains are techniques used primarily to aid in:", options: ["A) Reducing power consumption", "B) The physical routing of metal layers", "C) The testing of large, complex digital circuits", "D) Increasing transition frequency"], answer: "C" },
  { id: 80, topic: "System Design & EDA", question: "A major limitation of EDA synthesis software is that it:", options: ["A) Cannot perform local optimizations", "B) Cannot alter a fundamentally poor architectural design into a good one", "C) Does not understand boolean algebra", "D) Cannot output a gate-level netlist"], answer: "B" },

  // --- Deep Dive: Transmission Gates & Logic Implementation ---
  { id: 81, topic: "Transmission Gates & Multiplexers", question: "A Restoring Multiplexer is better than a Non-Restoring Multiplexer when:", options: ["A) Area needs to be strictly minimized", "B) Signal regeneration and better noise margins are required", "C) Power consumption must be exactly zero", "D) Only 2 transistors are allowed per stage"], answer: "B" },
  { id: 82, topic: "Transmission Gates & Multiplexers", question: "How many transistors are typically required to build a simple non-restoring 2:1 multiplexer using transmission gates?", options: ["A) 2", "B) 4", "C) 8", "D) 12"], answer: "B" },
  { id: 83, topic: "CMOS Logic Gates", question: "To implement the boolean function Y = (A + B)' using static CMOS, the pull-down network must have:", options: ["A) Two nMOS transistors in series", "B) Two nMOS transistors in parallel", "C) Two pMOS transistors in parallel", "D) Two pMOS transistors in series"], answer: "B" },
  { id: 84, topic: "CMOS Logic Gates", question: "When two nMOS transistors are in series in a pull-down network, it represents which logic operation?", options: ["A) OR", "B) AND", "C) XOR", "D) NOT"], answer: "B" },
  { id: 85, topic: "CMOS Logic Gates", question: "In static CMOS, if an input combination causes both the Pull-Up Network (PUN) and Pull-Down Network (PDN) to be ON simultaneously, the output state is:", options: ["A) A clean Logic 1", "B) A clean Logic 0", "C) High Impedance (Z)", "D) Crowbarred (X)"], answer: "D" },

  // --- Abstraction & Advanced Concepts ---
  { id: 86, topic: "Abstraction & Digital Basics", question: "At the Register-Transfer (RT) level of abstraction, a system is viewed in terms of:", options: ["A) Electrons and holes", "B) Voltages and currents", "C) Registers, multiplexers, and ALUs", "D) Application software and OS"], answer: "C" },
  { id: 87, topic: "Device Technologies", question: "Which customization method relies on pre-fabricated base cells where only the metal interconnect layers are customized?", options: ["A) Full-Custom ASIC", "B) Gate-Array ASIC", "C) Standard-Cell ASIC", "D) Microprocessor"], answer: "B" },
  { id: 88, topic: "System Design & EDA", question: "The structural view of a digital system describes:", options: ["A) What the system does", "B) How the components are interconnected", "C) The physical silicon dimensions", "D) The power consumed"], answer: "B" },
  { id: 89, topic: "Latches, Flip-Flops & Clocking", question: "Flip-flops are generally preferred over level-sensitive latches in:", options: ["A) Asynchronous circuits", "B) High-speed custom memory arrays", "C) Strict synchronous, edge-triggered design flows", "D) Analog amplifiers"], answer: "C" },
  { id: 90, topic: "Latches, Flip-Flops & Clocking", question: "Clock skew is a critical issue where:", options: ["A) The clock signal runs too slow", "B) The clock signal arrives at different flip-flops at slightly different times", "C) The clock voltage is higher than VDD", "D) The clock stops toggling entirely"], answer: "B" },
  { id: 91, topic: "Latches, Flip-Flops & Clocking", question: "To fix a setup time violation, a designer can:", options: ["A) Increase the clock frequency", "B) Decrease the logic delay between flip-flops", "C) Increase the temperature", "D) Lower the power supply voltage"], answer: "B" },
  { id: 92, topic: "Latches, Flip-Flops & Clocking", question: "A two-phase non-overlapping clock scheme is primarily used to:", options: ["A) Double the power consumption", "B) Prevent race conditions through transparent latches", "C) Reduce the number of clock pins", "D) Increase substrate leakage"], answer: "B" },
  { id: 93, topic: "MOSFET Scaling", question: "If the scaling factor S = 2, under constant electric-field scaling, the area of a transistor decreases by a factor of:", options: ["A) 2", "B) 4", "C) 8", "D) It doesn't decrease"], answer: "B" },
  { id: 94, topic: "MOSFET Scaling", question: "Which parameter scales identically (by 1/S) in both Constant E-Field and Constant Voltage scaling?", options: ["A) Drain Current (ID)", "B) Power Dissipation (P)", "C) Gate Capacitance (Cg)", "D) Power Density"], answer: "C" },
  { id: 95, topic: "Layout & Design Rules", question: "A 'Butting Contact' in nMOS circuits is used to connect:", options: ["A) Metal 1 to Metal 2", "B) Poly to diffusion using metal", "C) Poly to N-well directly", "D) Substrate to VDD"], answer: "B" },
  { id: 96, topic: "Layout & Design Rules", question: "A 'Buried Contact' provides a direct connection between:", options: ["A) Poly and diffusion", "B) Metal and diffusion", "C) Metal and poly", "D) N-well and P-well"], answer: "A" },
  { id: 97, topic: "CMOS Logic Gates", question: "An OAI (OR-AND-INVERT) gate evaluates the OR logic first, then the AND, then inverts. Its Pull-Down Network will consist of:", options: ["A) Parallel groups connected in series", "B) Series groups connected in parallel", "C) Only pMOS transistors", "D) Only transmission gates"], answer: "A" },
  { id: 98, topic: "CMOS Logic Gates", question: "When pushing a bubble (inversion) through an AND gate using DeMorgan's laws, it becomes:", options: ["A) A NAND gate", "B) An OR gate with inverted inputs", "C) An XOR gate", "D) A NOR gate with non-inverted inputs"], answer: "B" },
  { id: 99, topic: "Device Technologies", question: "What does 'Yield' refer to in IC manufacturing?", options: ["A) The percentage of silicon area used for routing", "B) The ratio of functional chips to the total chips manufactured on a wafer", "C) The amount of power given off as heat", "D) The transition frequency of the transistors"], answer: "B" },
  { id: 100, topic: "Latches, Flip-Flops & Clocking", question: "In a Master-Slave D Flip-Flop, when the clock is LOW:", options: ["A) The Master is opaque, the Slave is transparent", "B) The Master is transparent, the Slave is opaque", "C) Both are transparent", "D) Both are opaque"], answer: "B" },
  // --- CMOS Logic Styles & Circuit Families ---
  { id: 101, topic: "CMOS Logic Gates", question: "What is the primary drawback of dynamic CMOS logic gates compared to static CMOS?", options: ["A) They require twice as many transistors", "B) They are highly susceptible to charge leakage, requiring a minimum operating clock frequency", "C) They cannot implement complex logic functions", "D) They exhibit massive static power dissipation"], answer: "B" },
  { id: 102, topic: "CMOS Logic Gates", question: "In a dynamic CMOS gate, the precharge phase is initiated when the clock signal is:", options: ["A) High", "B) Low", "C) Toggling at high frequency", "D) Floating"], answer: "B" },
  { id: 103, topic: "CMOS Logic Gates", question: "Directly cascading dynamic CMOS gates can lead to which severe operational problem?", options: ["A) Instantaneous thermal breakdown", "B) Erroneous discharge of downstream nodes during the evaluation phase due to internal delays", "C) Latchup of the substrate taps", "D) Permanent inversion of the clock signal"], answer: "B" },
  { id: 104, topic: "CMOS Logic Gates", question: "Domino logic successfully resolves the cascading issues of dynamic logic by doing what?", options: ["A) Placing a static CMOS inverter at the output of each dynamic stage", "B) Eliminating the precharge PMOS transistor entirely", "C) Shorting the pull-up network to GND", "D) Using an asynchronous clock delivery system"], answer: "A" },
  { id: 105, topic: "CMOS Logic Gates", question: "In ratioed circuits such as Pseudo-NMOS, the low output voltage level (VOL) is determined by:", options: ["A) The clock frequency exclusively", "B) The relative sizes (W/L aspect ratios) of the pull-up PMOS and pull-down NMOS transistors", "C) The threshold voltage of the substrate body contacts", "D) The global wire routing layers"], answer: "B" },
  { id: 106, topic: "CMOS Logic Gates", question: "Pass-transistor logic configurations utilizing exclusively NMOS networks suffer from which signal drawback?", options: ["A) Inability to pass a strong logic LOW", "B) Signal degradation when passing a logic HIGH due to a threshold voltage drop (VTN)", "C) Total lack of dynamic capacitance", "D) Infinite static power consumption"], answer: "B" },
  { id: 107, topic: "CMOS Logic Gates", question: "To transmit both a logic HIGH and a logic LOW without any threshold voltage attenuation, a designer should employ:", options: ["A) A single standalone PMOS transistor", "B) A complete complementary Transmission Gate (NMOS and PMOS in parallel)", "C) A pseudo-NMOS pull-up stack", "D) A standard open-drain NMOS driver"], answer: "B" },
  { id: 108, topic: "CMOS Logic Gates", question: "For an AOI21 (AND-OR-INVERT) complex cell implementing Y = (A·B + C)', the Pull-Down Network (PDN) is structurally built as:", options: ["A) Two NMOS in series, which are placed in parallel with a third NMOS", "B) Three NMOS transistors grouped concurrently in a single series line", "C) Two NMOS in parallel, which are placed in series with a third NMOS", "D) A purely cross-coupled pair of bilateral switches"], answer: "A" },
  { id: 109, topic: "CMOS Logic Gates", question: "If the Pull-Down Network of a static CMOS gate consists of two parallel pairs connected together in a series structure, its dual Pull-Up Network must consist of:", options: ["A) Two parallel pairs in a parallel layout", "B) Two series pairs connected together in a parallel structure", "C) Four separate PMOS transistors linked entirely in series", "D) A single wide-channel PMOS component"], answer: "B" },
  { id: 110, topic: "CMOS Logic Gates", question: "Complementary static CMOS circuits exhibit virtually zero ideal static power dissipation because:", options: ["A) The load capacitors act as short circuits to GND", "B) The input currents perfectly negate the output voltages", "C) A continuous direct conducting path from VDD to GND never exists in any stable steady-state", "D) The substrate taps operate as active negative voltage rails"], answer: "C" },

  // --- Sequential Design & Timing Violations ---
  { id: 111, topic: "Latches, Flip-Flops & Clocking", question: "The timing constraint mathematical expression (Tccq + Tcd >= Thold) is validated during design to prevent:", options: ["A) Setup time violations", "B) Hold time violations", "C) Electromigration failures", "D) Dynamic routing congestion"], answer: "B" },
  { id: 112, topic: "Latches, Flip-Flops & Clocking", question: "When data transitions unpredictably inside the setup and hold window of a flip-flop, the component may enter an unstable state known as:", options: ["A) Attenuation", "B) Latchup", "C) Metastability", "D) Parasitic masking"], answer: "C" },
  { id: 113, topic: "Latches, Flip-Flops & Clocking", question: "Clock jitter refers precisely to which phenomena in a high-speed synchronous network?", options: ["A) The difference in clock arrival times between two distant spatial points on the die", "B) The short-term temporal variations of clock edges relative to their ideal periodic occurrences", "C) Sudden permanent collapse of the main crystal oscillator voltage", "D) The mismatch between NMOS and PMOS gate delays"], answer: "B" },
  { id: 114, topic: "Latches, Flip-Flops & Clocking", question: "A level-sensitive sequential storage element that passes input data directly to the output during its active phase is a:", options: ["A) Flip-flop", "B) Latch", "C) Multiplexer", "D) Dynamic buffer"], answer: "B" },
  { id: 115, topic: "Latches, Flip-Flops & Clocking", question: "An edge-triggered D flip-flop can be properly synthesized by cascading:", options: ["A) Two level-sensitive latches in a master-slave arrangement with complementary clock feeds", "B) Two parallel transmission gates driven by a single common inverter", "C) An array of cross-coupled pseudo-NMOS NOR gates", "D) A single look-up table connected to a global clock buffer"], answer: "A" },
  { id: 116, topic: "Latches, Flip-Flops & Clocking", question: "If the target operating frequency of a synchronous digital system is systematically increased, which violation occurs first?", options: ["A) Hold time violation", "B) Setup time violation", "C) Antenna violation", "D) Electromigration violation"], answer: "B" },
  { id: 117, topic: "Latches, Flip-Flops & Clocking", question: "Hold time violations are distinct from setup time violations because they are completely independent of:", options: ["A) Contamination delay", "B) The clock frequency and period", "C) Transistor channel widths", "D) Interconnect routing layers"], answer: "B" },
  { id: 118, topic: "Latches, Flip-Flops & Clocking", question: "The minimal amount of time for which the input data must remain static prior to the arrival of the clock edge is the:", options: ["A) Hold time", "B) Setup time", "C) Propagation time", "D) Contamination time"], answer: "B" },
  { id: 119, topic: "Latches, Flip-Flops & Clocking", question: "The ultimate maximum operating frequency limit of a synchronous circuit is determined by the propagation delays of the launching registers plus:", options: ["A) The shortest path combination minus the hold margin", "B) The longest combinational path delay and the setup time of the receiving register", "C) The area of the global metal supply tracks", "D) The total count of substrate tap cells available"], answer: "B" },
  { id: 120, topic: "Latches, Flip-Flops & Clocking", question: "Negative clock skew describes a specific condition where the clock pulse arrives at the destination receiving register:", options: ["A) Earlier than it reaches the source launching register", "B) Simultaneously with the launching register's clock feed", "C) Later than it reaches the source launching register", "D) With double the baseline voltage swing amplitude"], answer: "A" },

  // --- Physical Layout & Advanced Reliability ---
  { id: 121, topic: "Layout & Design Rules", question: "In lambda-based scalable design rules, the universal parameter lambda (λ) represents:", options: ["A) The entire length of the largest PMOS device on the chip", "B) Half of the minimum printable feature size of a given technology node", "C) The exact thickness of the active gate field oxide layer", "D) The maximum height of a global standard cell routing line"], answer: "B" },
  { id: 122, topic: "Reliability Issues", question: "The physical failure mechanism known as Electromigration is significantly aggravated by:", options: ["A) Operation under cryogenic temperatures and zero voltage potential", "B) High directional current densities and elevated thermal environments within interconnects", "C) Reducing the global clock network toggle frequency", "D) Utilizing thick wide-profile metal lines for power tracking"], answer: "B" },
  { id: 123, topic: "Reliability Issues", question: "To rigorously protect a CMOS circuit design against internal layout Latchup conditions, a designer must minimize layout spacing between:", options: ["A) Poly lines and neighboring parallel poly lines", "B) Source contacts and their corresponding well/substrate tap structures", "C) Upper metal 4 lines and lower metal 1 lines", "D) Inverted input lines and transmission outputs"], answer: "B" },
  { id: 124, topic: "Reliability Issues", question: "Foundry-mandated minimum Layer Density Rules are crucial because they ensure:", options: ["A) Even distribution of signal delays across standard cell logic channels", "B) Structural flatness and material uniformity during the Chemical Mechanical Planarization (CMP) process", "C) High electrical insulation values between neighboring wells", "D) The optimization of routing tool path selections"], answer: "B" },
  { id: 125, topic: "Layout & Design Rules", question: "A Stick Diagram serves as a layout tool because it portrays:", options: ["A) Exact dimension metrics for manufacturing masks", "B) A qualitative, color-coded topological abstraction map of circuit layers and contacts", "C) The post-silicon parasitic simulation delays", "D) A cross-sectional physical view of silicon defects"], answer: "B" },
  { id: 126, topic: "Layout & Design Rules", question: "A major defining criterion for standard cell layout blocks is that all cells within a library must exhibit:", options: ["A) Perfectly identical horizontal cell widths", "B) Uniform vertical cell heights and uniform power/ground rail alignment coordinates", "C) The exact same transistor counts per gate function", "D) Fully custom diffusion perimeters tailored individually"], answer: "B" },
  { id: 127, topic: "Layout & Design Rules", question: "The total parasitic resistance associated with a contact or via junction in a layout can be mitigated by:", options: ["A) Shrinking the via size to sub-lambda coordinates", "B) Employing multiple redundant contacts or vias grouped in an array", "C) Swapping the underlying poly line layer with active diffusion", "D) Removing the surrounding metal enclosure margins"], answer: "B" },
  { id: 128, topic: "Reliability Issues", question: "How does adding a reverse-biased diode directly next to a vulnerable transistor gate pin fix an antenna rule violation?", options: ["A) It boosts the voltage threshold of the input pin", "B) It safely bleeds off plasma-induced charges accumulated on long metal tracks during manufacturing", "C) It isolates the gate completely from electrical signals", "D) It turns off the device permanently"], answer: "B" },
  { id: 129, topic: "Layout & Design Rules", question: "In physical layout architecture, a functional MOSFET channel region is automatically defined wherever:", options: ["A) Metal 1 makes contact with an active N-diffusion region", "B) A polysilicon line intersects and crosses over an active layer zone", "C) An N-well profile interfaces directly with a P-substrate", "D) A contact window is drilled into the field oxide layer"], answer: "B" },
  { id: 130, topic: "Reliability Issues", question: "Why do clean-room layout rules require wide global power buses to have slots sliced parallel to the current vector?", options: ["A) To intentionality increase line resistances", "B) To provide mechanical stress relief and eliminate delamination risks during fabrication baking", "C) To form parasitic cross-coupling delay filters", "D) To decrease the need for well taps"], answer: "B" },

  // --- Memory Architectures & Arithmetic Datapaths ---
  { id: 131, topic: "Device Technologies", question: "A conventional 6-Transistor (6T) static RAM (SRAM) cell preserves its internal data state using:", options: ["A) A pair of isolated structural micro-capacitors", "B) Two cross-coupled logic inverters combined with a pair of access transistors", "C) A dynamic refresh feedback line", "D) A single specialized floating-gate transistor configuration"], answer: "B" },
  { id: 132, topic: "Device Technologies", question: "A typical Dynamic RAM (DRAM) cell stores a single bit using a structural hardware configuration consisting of:", options: ["A) Six cross-coupled transistors linked to a bitline", "B) A single access transistor mated to an individual storage capacitor (1T1C)", "C) Two non-overlapping clock drivers and a buffer", "D) A high-speed latch matrix"], answer: "B" },
  { id: 133, topic: "Device Technologies", question: "DRAM cells demand periodic refreshing operations primarily because:", options: ["A) The operating supply voltage declines over active cycles", "B) The charge trapped on the small storage capacitor continuously leaks away over time", "C) Transistor thresholds vary randomly under high heat", "D) The wordline select drivers saturate quickly"], answer: "B" },
  { id: 134, topic: "Device Technologies", question: "In a 6T SRAM memory layout matrix, the Word Line (WL) is responsible for:", options: ["A) Carrying the absolute binary bit data out of the cell structures", "B) Activating the access transistors to open the cell for read or write operations", "C) Providing the continuous current required to power the cross-coupled inverters", "D) Clearing the internal contents before a clock cycle"], answer: "B" },
  { id: 135, topic: "Device Technologies", question: "A Barrel Shifter is a powerful architectural building block in CPU datapaths because it can shift data:", options: ["A) Only one single bit position per clock cycle", "B) By any arbitrary number of bits in a single cycle using purely combinational logic", "C) By transforming parallel bitstreams into sequential strings", "D) Without utilizing any hardware transistors"], answer: "B" },
  { id: 136, topic: "Device Technologies", question: "Booth's Multiplication Algorithm is used in modern high-performance math execution blocks because it successfully:", options: ["A) Cuts down the clock frequency required for math operations", "B) Minimizes the total count of required partial products through multiplier bit-encoding", "C) Replaces all hardware adders with basic shifters", "D) Eliminates the need for any parallel processing streams"], answer: "B" },
  { id: 137, topic: "Device Technologies", question: "A Programmable Logic Array (PLA) architecture is distinguished by having:", options: ["A) A static fixed AND plane matched to a fully programmable OR plane", "B) A fully programmable AND plane followed by a fully programmable OR plane", "C) A programmable look-up table array and fixed wiring networks", "D) A master-slave combination of dynamic latches"], answer: "B" },
  { id: 138, topic: "Device Technologies", question: "What is the structural role of Feed-Through Cells within standard cell ASIC placements?", options: ["A) They convert analog feedback into clean digital streams", "B) They provide empty silicon real-estate with ready routing tracks to pass signals through dense cell rows", "C) They actively amplify clock networks across long distances", "D) They serve as safety fuses to intercept short circuits"], answer: "B" },
  { id: 139, topic: "Device Technologies", question: "Compared directly to SRAM cells, DRAM alternatives offer the primary architectural benefit of:", options: ["A) Exceptional high-speed operations and zero latency overheads", "B) Dramatically superior storage density and lower layout cost per individual bit", "C) Zero total power consumption under active read states", "D) Full elimination of row and column decoders"], answer: "B" },
  { id: 140, topic: "Device Technologies", question: "A Carry-Lookahead Adder (CLA) optimizes speed compared to a Ripple-Carry alternative by:", options: ["A) Processing additions sequentially bit-by-bit", "B) Generating and predicting carries concurrently using dedicated propagate and generate terms", "C) Operating entirely on a pseudo-NMOS execution platform", "D) Lowering the threshold voltage of all datapath gates"], answer: "B" },

  // --- System Design, EDA Tools & Testing ---
  { id: 141, topic: "System Design & EDA", question: "The primary operational task of a Logic Synthesis EDA tool is to transform:", options: ["A) A physical layout map back into an original abstract schematic diagram", "B) A high-level behavioral RTL text description into an optimized gate-level netlist mapping to a cell library", "C) An analog waveform simulation into a set of clean test vectors", "D) A boolean equation table into an FPGA bitstream file"], answer: "B" },
  { id: 142, topic: "System Design & EDA", question: "Design constraints provided by an engineer to a synthesis tool typically include specifications for:", options: ["A) The physical chip package material and pin dimensions", "B) Target clock period limits, input/output delay bounds, and maximum area allowances", "C) The exact names of the manufacturing clean rooms", "D) The tool licensing keys and server locations"], answer: "B" },
  { id: 143, topic: "System Design & EDA", question: "A Design Rule Check (DRC) validation tool ensures that the layout geometry:", options: ["A) Achieves complete logical equivalence with the behavioral HDL program", "B) Obeys all precise geometric spacing and minimum width constraints mandated by the fabrication foundry", "C) Meets the target timing closure constraint profiles", "D) Contains zero dynamic power consumption leakage nodes"], answer: "B" },
  { id: 144, topic: "System Design & EDA", question: "A Layout Versus Schematic (LVS) verification check is performed to guarantee that:", options: ["A) The layout matches the target physical area boundaries", "B) The electrical circuit netlist extracted from the physical layout is identical to the source schematic circuit", "C) The propagation delay values do not cause setup violations", "D) All vias contain optimal copper cross-sections"], answer: "B" },
  { id: 145, topic: "System Design & EDA", question: "The single stuck-at structural fault model assumes that a defective circuit node is:", options: ["A) Randomly toggling between low and high voltage potentials", "B) Permanently clamped to either a static Logic 0 or a static Logic 1 state", "C) Operating with twice its nominal propagation delay", "D) Shorted directly to a neighboring parallel signal line"], answer: "B" },
  { id: 146, topic: "System Design & EDA", question: "A Scan Chain architecture drastically improves testability by converting normal operational registers into:", options: ["A) High-capacity dynamic RAM memory banks", "B) Serial shift registers during test mode to easily shift test patterns in and out of the chip core", "C) Asynchronous clock distribution networks", "D) Specialized look-up table combinational gates"], answer: "B" },
  { id: 147, topic: "System Design & EDA", question: "An integrated Built-In Self-Test (BIST) implementation requires adding which circuitry directly onto the die?", options: ["A) An extra microprocessor core and an analog-to-digital converter", "B) An automated pseudo-random test pattern generator (LFSR) and an output signature analyzer", "C) A series of bypass metal tracks and laser fuses", "D) Multiple parallel clock distribution networks"], answer: "B" },
  { id: 148, topic: "System Design & EDA", question: "A Programmable Array Logic (PAL) device architecture is defined by having:", options: ["A) A programmable AND plane coupled to a fixed OR plane layout", "B) A fixed AND plane coupled to a programmable OR plane layout", "C) Non-volatile flash memories replacing all logical routing points", "D) Dual-port static RAM arrays driving combinational lines"], answer: "A" },
  { id: 149, topic: "System Design & EDA", question: "Inside a Field Programmable Gate Array (FPGA), Lookup Tables (LUTs) are fundamentally used to:", options: ["A) Buffer high-fanout global clock paths", "B) Implement arbitrary combinational logic functions by functioning as programmable truth tables", "C) Keep track of internal power grid voltage drop metrics", "D) Store global variables during operational software runtime"], answer: "B" },
  { id: 150, topic: "System Design & EDA", question: "Parasitic Extraction (PEX) tool executions are a vital phase after physical routing because they calculate:", options: ["A) The price metrics per individual manufactured wafer", "B) Unintended parasitic resistances and capacitances of interconnect networks for precise timing simulations", "C) The absolute leakage current values of well contacts", "D) The minimum number of alignment markers for lithography"], answer: "B" },
  // --- MOS Transistor Theory & Advanced Electrical Properties ---
  { id: 151, topic: "MOS Transistor Theory", question: "Channel length modulation (λ) in a MOSFET primarily impacts device behavior in which region of operation?", options: ["A) Cut-off region", "B) Linear (Triode) region", "C) Saturation region", "D) Subthreshold region"], answer: "C" },
  { id: 152, topic: "MOS Transistor Theory", question: "The Body Effect describes an increase in the absolute threshold voltage (VT) of a MOSFET caused by a voltage potential difference between which two terminals?", options: ["A) Gate and Source", "B) Source and Bulk (Substrate)", "C) Drain and Source", "D) Gate and Drain"], answer: "B" },
  { id: 153, topic: "MOS Transistor Theory", question: "In short-channel sub-micron devices, velocity saturation causes the saturation drain current (ID) to become approximately proportional to:", options: ["A) The overdrive voltage (VGS - VT)", "B) The square of the overdrive voltage (VGS - VT)²", "C) The cube of the overdrive voltage (VGS - VT)³", "D) The drain-to-source voltage exclusively"], answer: "A" },
  { id: 154, topic: "MOS Transistor Theory", question: "Subthreshold leakage current represents a significant power drain in modern nanometer chips and flows when the gate-to-source voltage (VGS) is:", options: ["A) Equal to the supply voltage (VDD)", "B) Less than the threshold voltage (VT)", "C) Greater than twice the threshold voltage (VT)", "D) Completely negative for an NMOS device"], answer: "B" },
  { id: 155, topic: "CMOS Inverter Characteristics", question: "The High Noise Margin (NMH) of a digital logic gate is mathematically calculated by which formula?", options: ["A) VOH - VIH", "B) VIH - VIL", "C) VOH - VOL", "D) VIL - VOL"], answer: "A" },
  { id: 156, topic: "CMOS Inverter Characteristics", question: "For an ideal, perfectly symmetrical static CMOS inverter, the switching threshold voltage (Vinv) should be located exactly at:", options: ["A) 0V (GND)", "B) VDD / 2", "C) VDD - VT", "D) 0.7V"], answer: "B" },
  { id: 157, topic: "CMOS Inverter Characteristics", question: "In a standard silicon CMOS process, why is the physical channel width of a PMOS transistor typically designed to be 2 to 3 times larger than an NMOS transistor within a basic cell?", options: ["A) To increase the threshold voltage of the PMOS", "B) To compensate for the fact that electron mobility is higher than hole mobility", "C) To prevent latchup in the P-substrate", "D) To minimize the gate-to-drain overlap capacitance"], answer: "B" },

  // --- Power Consumption & Low-Power Design ---
  { id: 158, topic: "Power Consumption", question: "The dynamic power consumption equation of a CMOS gate shows that power is directly proportional to the square of which parameter?", options: ["A) Clock frequency (f)", "B) Total load capacitance (C)", "C) Power supply voltage (VDD)", "D) Switching activity factor (α)"], answer: "C" },
  { id: 159, topic: "Power Consumption", question: "Short-circuit (crowbar) power dissipation occurs in a complementary static CMOS gate when:", options: ["A) The output node is shorted directly to the substrate tap", "B) Both the Pull-Up and Pull-Down networks conduct current simultaneously during input logic transitions", "C) Electrons tunnel through the thin gate dielectric layer", "D) A reverse-biased source-body diode breaks down"], answer: "B" },
  { id: 160, topic: "Power Consumption", question: "Gate-Induced Drain Leakage (GIDL) and subthreshold conduction are structural components of which power category?", options: ["A) Dynamic switching power", "B) Static (leakage) power consumption", "C) Short-circuit power dissipation", "D) Transient capacitive charging power"], answer: "B" },
  { id: 161, topic: "Low-Power Design Techniques", question: "Clock Gating is an automated or manual architectural design technique used primarily to reduce:", options: ["A) Static leakage power by disconnecting the main ground rail", "B) Dynamic power consumption by disabling the clock distribution feed to idle registers", "C) The threshold voltage drop across long paths", "D) The antenna effect on global wiring layers"], answer: "B" },
  { id: 162, topic: "Low-Power Design Techniques", question: "Power Gating employs low-leakage high-threshold sleep transistors to disconnect idle logic blocks from power rails, specifically targeting:", options: ["A) Dynamic capacitive charging currents", "B) Static leakage power consumption during standby modes", "C) Clock skew variations across distant cells", "D) Electromigration on signal lines"], answer: "B" },
  { id: 163, topic: "Low-Power Design Techniques", question: "Multi-Threshold CMOS (MTCMOS) optimization balances speed and power by deploying:", options: ["A) Low-VT transistors on critical timing paths for speed, and high-VT transistors on non-critical paths to suppress leakage", "B) High-VT transistors everywhere to eliminate dynamic power", "C) Low-VT transistors exclusively in memory blocks and high-VT in logic blocks", "D) Variable external bias voltages to change substrate doping dynamically"], answer: "A" },
  { id: 164, topic: "Low-Power Design Techniques", question: "Dynamic Voltage and Frequency Scaling (DVFS) achieves quadratic power savings during low computational workloads by scaling down:", options: ["A) The clock frequency alone while boosting the voltage supply", "B) Both the clock frequency and the power supply voltage concurrently", "C) The transistor width-to-length channel aspect ratios", "D) The number of active well taps on the floorplan"], answer: "B" },

  // --- BiCMOS Logic Circuits ---
  { id: 165, topic: "BiCMOS Technology", question: "BiCMOS technology incorporates bipolar junction transistors (BJTs) alongside standard CMOS configurations primarily to provide:", options: ["A) High packaging density and low manufacturing cost", "B) High current-driving capability to charge or discharge large capacitive loads rapidly", "C) Zero ideal static leakage under any operational condition", "D) Symmetrical threshold voltage settings without adjusting widths"], answer: "B" },
  { id: 166, topic: "BiCMOS Technology", question: "A structural operational limitation of a standard, un-optimized BiCMOS inverter logic gate is:", options: ["A) High input static leakage current through the gates", "B) Reduced output voltage swing due to internal base-emitter diode drops (VBE)", "C) Total inability to execute simple NAND logic operations", "D) The mandate for a completely negative power supply rail"], answer: "B" },
  { id: 167, topic: "BiCMOS Technology", question: "BiCMOS logic gates are highly inefficient and generally avoided in circuits operating at ultra-low supply voltages (below 1V) because:", options: ["A) Bipolar transistors cannot operate in series", "B) The base-emitter junction turn-on voltage requirement (VBE ≈ 0.7V) leaves insufficient voltage headroom", "C) Parasitic substrate latchup becomes infinite", "D) Sheet resistance of the base wire increases exponentially"], answer: "B" },

  // --- IC Fabrication & Layout Parasitics ---
  { id: 168, topic: "CMOS Fabrication", question: "In integrated circuit manufacturing, the Photolithography process is explicitly used to:", options: ["A) Bake dopant atoms deeper into the silicon substrate layer", "B) Transfer geometric circuit layout patterns from a master mask onto a photoresist layer on the wafer surface", "C) Measure the threshold voltage of fabricated transistors", "D) Mechanically plane and flatten the top copper layer of a die"], answer: "B" },
  { id: 169, topic: "CMOS Fabrication", question: "The Ion Implantation phase of semiconductor fabrication is primarily utilized to:", options: ["A) Deposit thin structural layers of silicon dioxide insulator material", "B) Introduce specific dopant atoms into the silicon lattice to alter local electrical conductivity", "C) Drill micro-holes through oxide to establish metal contact points", "D) Plasma-etch away unwanted copper wires"], answer: "B" },
  { id: 170, topic: "CMOS Fabrication", question: "Chemical Vapor Deposition (CVD) is an IC fabrication technique used to:", options: ["A) Cut single-crystal silicon ingots into flat wafers", "B) Grow or deposit thin, uniform layers of materials like polysilicon or silicon dioxide onto the wafer", "C) Perform Automated Test Pattern Generation checks", "D) Sieve out dust particles from active clean rooms"], answer: "B" },
  { id: 171, topic: "CMOS Fabrication", question: "During the self-aligned gate fabrication process, which layer acts as a physical block mask for the source and drain ion implantations?", options: ["A) The thick photoresist outer boundary", "B) The previously patterned Polysilicon gate layer", "C) The global Metal 1 supply track", "D) The underlying P-substrate material itself"], answer: "B" },
  { id: 172, topic: "Layout & Design Rules", question: "The Sheet Resistance (Rs) parameter of a specific layout wire conductor depends exclusively on the material's bulk resistivity and its:", options: ["A) Total horizontal layout length", "B) Physical vertical thickness", "C) Distance from the nearest well contact", "D) Operational clock toggle rate"], answer: "B" },
  { id: 173, topic: "Layout & Design Rules", question: "The Elmore Delay model is universally applied by EDA timing analysis tools to compute fast approximations of delay through:", options: ["A) Individual isolated transistor gate channels", "B) Distributed interconnect resistor-capacitor (RC) wire networks and routing trees", "C) Subthreshold static leakage current tracks", "D) High-frequency crystal oscillators"], answer: "B" },
  { id: 174, topic: "Layout & Design Rules", question: "Electrical crosstalk noise between two parallel, long metal routing paths on a chip is driven by:", options: ["A) Substrate body effect voltages", "B) Parasitic mutual capacitance and mutual inductance between the adjacent tracks", "C) Poor threshold voltage matching between transistors", "D) Charge leakage through the gate field oxide"], answer: "B" },
  { id: 175, topic: "Layout & Design Rules", question: "As semiconductor technology scales down into deep sub-micron and nanometer regimes, interconnect propagation delay:", options: ["A) Disappears entirely due to shorter wire lengths", "B) Increases significantly relative to gate delay, becoming the dominant system performance bottleneck", "C) Decreases at an exponential rate of 1/S³", "D) Becomes completely independent of line resistance"], answer: "B" },

  // --- Advanced Combinational Logic Design ---
  { id: 176, topic: "CMOS Logic Gates", question: "To implement a static CMOS circuit for the complex logic expression Y = [(A + B)(C + D)]', the dual Pull-Up Network (PUN) must contain:", options: ["A) Four PMOS transistors linked entirely in a single series string", "B) Two series PMOS pairs that are connected together in a parallel layout configuration", "C) Two parallel PMOS pairs connected together in a series layout configuration", "D) Purely cross-coupled transmission gates with an active inverter"], answer: "B" },
  { id: 177, topic: "CMOS Logic Gates", question: "If a baseline NMOS transistor in an inverter has a width W, what width must each NMOS transistor in a 3-input NAND gate stack possess to match the equivalent pull-down resistance?", options: ["A) W / 3", "B) W", "C) 3W", "D) 9W"], answer: "C" },
  { id: 178, topic: "CMOS Logic Gates", question: "If a baseline PMOS transistor has a width W, what width must each PMOS transistor in a 3-input NOR gate series stack possess to maintain equivalent pull-up resistance?", options: ["A) W / 3", "B) W", "C) 3W", "D) 6W"], answer: "C" },
  { id: 179, topic: "CMOS Logic Gates", question: "In dynamic CMOS logic gate topologies, a small, weak PMOS 'keeper' transistor is attached to the precharge node to:", options: ["A) Double the evaluation speed of the gate", "B) Counteract charge leakage and charge sharing, thereby stabilizing the dynamic logic high state", "C) Isolate the input pins from the clock network", "D) Turn off the pull-down network permanently"], answer: "B" },
  { id: 180, topic: "CMOS Logic Gates", question: "The problem of Charge Sharing in dynamic gates occurs when charge stored on the dynamic output node is redistributed among:", options: ["A) The power rails via substrate contacts", "B) Internal parasitic junction capacitances of the pull-down network during the evaluation phase", "C) Neighboring metal lines via crosstalk", "D) The clock tree buffers"], answer: "B" },
  { id: 181, topic: "CMOS Logic Gates", question: "Complementary Pass-Transistor Logic (CPL) systems are characterized by requiring:", options: ["A) High-threshold sleep transistors on all paths", "B) Dual-rail inputs and generating dual-rail complementary outputs using exclusively NMOS pass networks", "C) Bipolar push-pull buffers at every internal node", "D) A separate clock phase for every individual logic gate"], answer: "B" },

  // --- Sequential Design & Clocking Constraints ---
  { id: 182, topic: "Latches, Flip-Flops & Clocking", question: "A level-sensitive transparent latch introduces a risk of race conditions during its active clock phase because:", options: ["A) The clock frequency fluctuates randomly", "B) Any data change at the input directly propagates through to the output immediately while the clock is held high", "C) It drops the threshold voltage by VTN", "D) It triggers only on negative clock edges"], answer: "B" },
  { id: 183, topic: "Latches, Flip-Flops & Clocking", question: "An H-tree network geometry layout is commonly implemented in global clock routing to ensure:", options: ["A) Minimum dynamic power dissipation", "B) Minimal clock skew by ensuring equal wire path lengths from the clock source to all destination registers", "C) High latchup immunity under high heat", "D) Complete elimination of the antenna effect"], answer: "B" },
  { id: 184, topic: "Latches, Flip-Flops & Clocking", question: "If positive clock skew occurs (the clock arrives at the destination register later than the source register), what is its impact on the setup time constraint?", options: ["A) It tightens and restricts the setup time budget", "B) It relaxes the setup time constraint, allowing more time for the combinational logic path", "C) It forces the setup time requirement to zero", "D) It shifts the violation exclusively into an antenna violation"], answer: "B" },
  { id: 185, topic: "Latches, Flip-Flops & Clocking", question: "If positive clock skew occurs (the clock arrives at the destination register later than the source register), what is its impact on the hold time constraint?", options: ["A) It improves the hold margin significantly", "B) It worsens the hold time condition, increasing the risk of race-induced hold violations", "C) It eliminates the need for contamination delay checks", "D) It turns the system into an asynchronous layout structure"], answer: "B" },

  // --- Datapath Arithmetic & Memory Sizing ---
  { id: 186, topic: "Device Technologies", question: "The worst-case propagation delay of a standard N-bit Ripple Carry Adder scales linearly with N because:", options: ["A) Every bit addition happens completely independently", "B) The carry bit must propagate serially through every stage from the least significant bit (LSB) to the most significant bit (MSB)", "C) The gate widths are shrunk at each progressive stage", "D) It relies on an asynchronous dynamic precharge line"], answer: "B" },
  { id: 187, topic: "Device Technologies", question: "Carry-Save Adders (CSA) are highly efficient structures in multi-operand multiplication blocks because they postpone carry propagation by producing:", options: ["A) A single definitive binary output for four concurrent inputs", "B) Two distinct vectors (a sum vector and a carry vector) for every three parallel input vectors", "C) A single serial bitstream driving a barrel shifter", "D) An analog current output corresponding to the arithmetic value"], answer: "B" },
  { id: 188, topic: "Device Technologies", question: "Compared to a Ripple Carry Adder, a Carry Lookahead Adder (CLA) dramatically optimizes execution speed at the cost of:", options: ["A) Higher ideal static leakage current", "B) Increased silicon area and wiring complexity due to multi-input generate and propagate lookahead gates", "C) Severe threshold voltage drops across the output terminals", "D) A mandatory dual-phase non-overlapping clock feed"], answer: "B" },
  { id: 189, topic: "Device Technologies", question: "To prevent accidental state destruction during a read cycle in a standard 6T SRAM cell, the pull-down NMOS transistors must be designed to be:", options: ["A) Much weaker than the access NMOS transistors", "B) Stronger than the access NMOS transistors (maintaining a high Cell Ratio)", "C) Perfectly identical in width and length to the pull-up PMOS components", "D) Constructed with high-VT sleep channels"], answer: "B" },
  { id: 190, topic: "Device Technologies", question: "To ensure a reliable and successful write operation into a standard 6T SRAM cell, the access NMOS transistors must be designed to be:", options: ["A) Weaker than the internal cross-coupled pull-up PMOS transistors", "B) Stronger than the internal cross-coupled pull-up PMOS transistors (maintaining a low Pull-Up Ratio)", "C) Completely asynchronous and independent of the bitlines", "D) Replaced with standalone transmission gates"], answer: "B" },
  { id: 191, topic: "Device Technologies", question: "Sense Amplifiers are attached to memory block bitlines primarily to:", options: ["A) Provide non-volatile backup power to the memory array matrix", "B) Accelerate read cycles by detecting and amplifying minute differential voltage swings on heavily capacitive bitlines", "C) Act as row address decoders", "D) Clear the internal memory state during power-on-reset states"], answer: "B" },

  // --- Design Automation, Synthesis & Manufacturing Test ---
  { id: 192, topic: "System Design & EDA", question: "In electronic design automation (EDA) workflows, a 'netlist' is defined as:", options: ["A) A behavioral description of a chip written in C++", "B) A text file or structural database documenting all components and their specific point-to-point electrical interconnections", "C) A quantitative chart charting power dissipation versus operating temperature", "D) The physical lithography mask set map"], answer: "B" },
  { id: 193, topic: "System Design & EDA", question: "A structural RTL view is distinguished from a behavioral RTL view because the structural view defines:", options: ["A) Purely mathematical formulas describing input-to-output operations", "B) The precise hardware library cells used and how their individual pins are explicitly wired together", "C) Only the software instructions that compile onto the chip core", "D) The target execution pricing parameters"], answer: "B" },
  { id: 194, topic: "System Design & EDA", question: "The Clock Tree Synthesis (CTS) engine within a physical design Place and Route (P&R) tool is executed to:", options: ["A) Convert logic gate structures into boolean tables", "B) Balance path delays and introduce buffers to distribute the global clock to all sequential pins with minimal skew and jitter", "C) Verify logical equivalence against original RTL documents", "D) Slot wide global copper routing buses automatically"], answer: "B" },
  { id: 195, topic: "System Design & EDA", question: "The Placement phase of a digital Place and Route (P&R) EDA implementation tool calculates:", options: ["A) The pricing model per manufacturing wafer run", "B) The exact, optimized physical spatial coordinates of every standard cell on the row-based silicon floorplan", "C) The exact thickness of the active gate field oxide layer", "D) The minimal test vector pattern sequence required for factory validation"], answer: "B" },
  { id: 196, topic: "System Design & EDA", question: "In manufacturing testing, the term 'Fault Coverage' precisely quantifies:", options: ["A) The percentage of chip layout area covered by active substrate well taps", "B) The percentage of modeled structural faults that can be successfully detected by a given set of production test vectors", "C) The number of routing layers protected against antenna effect violations", "D) The material safety margin against thermal runaway breaks"], answer: "B" },
  { id: 197, topic: "System Design & EDA", question: "Automatic Test Pattern Generation (ATPG) software tools are mathematically designed to:", options: ["A) Synthesize behavioral Verilog text files into a set of standard logic gates", "B) Compute the most compressed, minimal set of digital input vectors required to screen out manufacturing structural defects", "C) Adjust transistor gate oxide thicknesses automatically in layout view", "D) Eliminate hold time timing violations across internal data paths"], answer: "B" },
  { id: 198, topic: "System Design & EDA", question: "IDDQ testing is a highly effective manufacturing test screen technique based on checking:", options: ["A) The maximum high-frequency operating speed boundary of critical paths", "B) The steady-state background power supply current drawn by the device when all inputs are completely static", "C) The absolute voltage breakdown limit of the ESD clamp diodes", "D) The total parasitic capacitance of the output bond pads"], answer: "B" },
  { id: 199, topic: "System Design & EDA", question: "Boundary Scan architecture (mandated by the IEEE 1149.1 / JTAG standard) is integrated on-chip primarily to test:", options: ["A) The internal transition frequency (fT) parameters of deep logic rows", "B) Board-level electrical connectivity and solder integrity between chip pins once mounted on a PCB", "C) Subthreshold leakage variation under extreme operating temperatures", "D) Cross-coupling noise between internal multi-layer metals"], answer: "B" },
  { id: 200, topic: "System Design & EDA", question: "A Linear Feedback Shift Register (LFSR) is integrated into Built-In Self-Test (BIST) chip architectures to serve as a:", options: ["A) High-precision phase locked loop clock multiplier", "B) Low-overhead, compact hardware engine for generating pseudo-random test pattern sequences", "C) High-capacity dynamic cache memory store", "D) Substrate tap current steering circuit"], answer: "B" },
  // --- CMOS Technology Scaling Paradigms ---
  { id: 201, topic: "CMOS Technology Scaling", question: "Under a constant electric-field scaling regime where dimensions scale by 1/S (S > 1), the supply voltage VDD must scale by:", options: ["A) 1", "B) 1/S", "C) 1/S²", "D) S"], answer: "B" },
  { id: 202, topic: "CMOS Technology Scaling", question: "If a circuit is scaled according to the constant electric-field model, the power density of the chip remains:", options: ["A) Scaled down by 1/S²", "B) Scaled up by S²", "C) Constant (1)", "D) Scaled down by 1/S⁴"], answer: "C" },
  { id: 203, topic: "CMOS Technology Scaling", question: "What is the primary reliability penalty of employing constant-voltage scaling instead of constant electric-field scaling?", options: ["A) Power density increases drastically by S³, risking thermal runaway", "B) The operating frequency decreases by 1/S", "C) Transistor gate capacitances scale down to zero", "D) Subthreshold current drops to absolute zero"], answer: "A" },
  { id: 204, topic: "CMOS Technology Scaling", question: "Under constant electric-field scaling, the propagation delay (td) of a logic gate scales by:", options: ["A) S", "B) 1/S", "C) 1/S²", "D) 1 (Unchanged)"], answer: "B" },
  { id: 205, topic: "CMOS Technology Scaling", question: "According to Moore's Law, if a foundry process in the year 2020 features a minimum feature size of 8 nm, what is the expected minimum feature size after 3 years (assuming feature size scales down by ~0.7 every 3 years)?", options: ["A) 4 nm", "B) 5.6 nm", "C) 7 nm", "D) 2.1 nm"], answer: "B" },
  { id: 206, topic: "MOS Transistor Theory", question: "The unity-gain transition frequency (fT) of an n-channel MOSFET can be optimized by adjusting the overdrive voltage (VOV) and channel length (L) according to which proportional relationship?", options: ["A) fT ∝ VOV / L", "B) fT ∝ VOV / L²", "C) fT ∝ L² / VOV", "D) fT ∝ VOV² / L"], answer: "B" },
  { id: 207, topic: "CMOS Technology Scaling", question: "Under constant-voltage scaling, how does the Power-Delay Product (PDP) of a scaled digital gate scale?", options: ["A) 1/S³", "B) 1/S", "C) S²", "D) 1/S²"], answer: "B" },
  { id: 208, topic: "CMOS Technology Scaling", question: "What is the main engineering motivation for systematically reducing the global power-supply voltage (VDD) from one technology generation to the next?", options: ["A) To increase electron mobility inside the channels", "B) To achieve quadratic reduction in dynamic power consumption", "C) To eliminate the need for substrate tap cells", "D) To increase the threshold voltage of short-channel devices"], answer: "B" },
  { id: 209, topic: "CMOS Technology Scaling", question: "Under a constant electric-field scaling framework, the Energy-Delay Product (EDP) of a system improves by a factor of:", options: ["A) 1/S", "B) 1/S²", "C) 1/S³", "D) 1/S⁴"], answer: "D" },
  { id: 210, topic: "MOS Transistor Theory", question: "The unity-gain transition frequency (fT) is fundamentally defined as the frequency at which:", options: ["A) The voltage gain of a common-drain buffer drops to half", "B) The short-circuit current gain of a common-source configuration becomes unity", "C) The propagation delay equals the hold time margin", "D) Dynamic power consumption equals static leakage power"], answer: "B" },

  // --- Deep Physical Layout & Reliability Controls ---
  { id: 211, topic: "Reliability Issues", question: "To prevent severe plasma-induced gate-oxide damage during dry etching fabrication routines, layout tools enforce rules governing the:", options: ["A) Sheet resistance of poly contacts", "B) Antenna Effect, limiting the ratio of metal wire area connected to a thin gate oxide", "C) Distance between parallel N-well boundaries", "D) Alignment of vertical power buses on metal layer 1"], answer: "B" },
  { id: 212, topic: "Reliability Issues", question: "Which of the following layout techniques directly fixes an antenna rule violation during place-and-route optimization?", options: ["A) Replacing the active channel with a pseudo-NMOS array", "B) Jumping to an upper metal layer ('routing bridge') just before terminating at the victim gate", "C) Shrinking the channel length of the driving logic gate", "D) Disconnecting all substrate well taps within a 10-micron radius"], answer: "B" },
  { id: 213, topic: "Reliability Issues", question: "Why do foundries mandate adding physical slots or slits parallel to the current flow direction inside very wide global power routing lines?", options: ["A) To artificially increase line resistances to combat latchup", "B) To provide mechanical stress relief and prevent metal layer delamination during fabrication baking steps", "C) To minimize vertical mutual cross-coupling delay between stacked metal sheets", "D) To block dynamic clock signals from polluting clean analog grounds"], answer: "B" },
  { id: 214, topic: "Reliability Issues", question: "The physical latchup breakdown mechanism in standard CMOS layouts is triggered when substantial current flows in the substrate/well, causing:", options: ["A) The threshold voltage of all PMOS devices to permanently invert", "B) Substrate voltage (Vsub) to rise or well voltage (Vwell) to fall, turning on parasitic bipolar transistors", "C) The gate field oxide to suffer dielectric breakdown", "D) Direct shorting of poly lines to neighboring contacts"], answer: "B" },
  { id: 215, topic: "Layout & Design Rules", question: "In physical standard cell area estimations, cell heights and widths are typically quantified and scaled by counting:", options: ["A) Individual transistor gate oxide fields", "B) Wiring Tracks (WT) needed for standard routing grids", "C) The absolute number of substrate tap rows", "D) Active diffusion perimeters"], answer: "B" },
  { id: 216, topic: "Layout & Design Rules", question: "During physical mask generation layout entry, an active operational MOSFET channel region is geometrically defined by the intersection of:", options: ["A) Metal 1 and Contact cuts", "B) Polysilicon and Diffusion masks", "C) N-well and P-substrate boundaries", "D) P+ diffusion and N+ diffusion layers"], answer: "B" },
  { id: 217, topic: "Layout & Design Rules", question: "How many basic processing masks are minimally required to fabricate a standard static CMOS inverter cell?", options: ["A) 2 (Metal and Poly)", "B) 6 (N-well, Poly, n+ diffusion, p+ diffusion, Contact, Metal)", "C) 12 (All metal layers and insulation grids)", "D) 4 (N-well, P-well, NMOS gate, PMOS gate)"], answer: "B" },
  { id: 218, topic: "Reliability Issues", question: "Sharing source and drain active diffusion regions between adjacent transistors in a standard cell layout is done to:", options: ["A) Increase the threshold voltage of short-channel devices", "B) Minimize parasitic junction capacitance and optimize total cell area", "C) Completely isolate the well regions from the substrate", "D) Block electromigration along metal lines"], answer: "B" },
  { id: 219, topic: "Reliability Issues", question: "To rigorously protect an ASIC layout against latchup conditions, physical designers place heavily doped substrate and well taps to:", options: ["A) Lower the resistance of paths to power/ground, preventing parasitic BJTs from turning ON", "B) Bleed off accumulated plasma charges during metal deposition", "C) Amplify weak signals across long interconnects", "D) Stabilize the dynamic keeper transistor circuits"], answer: "A" },
  { id: 220, topic: "Reliability Issues", question: "When using exclusively Metal 1 for routing to a transistor gate, antenna violations are naturally avoided because:", options: ["A) Metal 1 cannot conduct plasma charges", "B) The connected Source/Drain diffusion acts as a built-in reverse-biased diode that safely bleeds off plasma charges", "C) Metal 1 operates below the threshold voltage of field oxide layers", "D) Polysilicon blocks any incoming current from lower layers"], answer: "B" },

  // --- Advanced Cell Design & Logic Architectures ---
  { id: 221, topic: "CMOS Logic Gates", question: "An OAI31 (OR-AND-INVERT) complex logic cell implements which of the following Boolean expressions?", options: ["A) Y = (A · B · C + D)'", "B) Y = [(A + B + C) · D]'", "C) Y = (A · B + C + D)'", "D) Y = [(A · B · C) + D]'"], answer: "B" },
  { id: 222, topic: "CMOS Logic Gates", question: "What is the structural performance trade-off between a Non-Restoring Multiplexer and a Restoring Multiplexer design?", options: ["A) Non-restoring uses standard logic gates, saving space but dropping thresholds", "B) Non-restoring uses simple transmission gates, which is compact but lacks signal regeneration over cascaded stages", "C) Restoring uses pass transistors exclusively, causing massive static power consumption", "D) Restoring multiplexers suffer from infinite charge sharing noise"], answer: "B" },
  { id: 223, topic: "CMOS Logic Gates", question: "A conventional restoring 2:1 multiplexer designed with fully complementary static CMOS gates (inverters and NAND/NOR logic structures) requires approximately how many transistors?", options: ["A) 4", "B) 6", "C) 12 to 20", "D) 32"], answer: "C" },
  { id: 224, topic: "CMOS Logic Gates", question: "The technique of 'bubble pushing' combined with De Morgan's laws is routinely applied during gate layout generation to:", options: ["A) Optimize the physical size of dynamic keeper circuits", "B) Transform complex Boolean expressions into equivalent implementations using efficient standard CMOS cells (NAND/NOR)", "C) Artificially increase the propagation delay on fast paths", "D) Clear antenna rule violations on high metal layers"], answer: "B" },
  { id: 225, topic: "CMOS Logic Gates", question: "An AOI22 (AND-OR-INVERT) complex logic cell implements which of the following Boolean functions?", options: ["A) Y = [(A + B) · (C + D)]'", "B) Y = (A · B + C · D)'", "C) Y = (A · B · C + D)'", "D) Y = [A + B · C + D]'"], answer: "B" },
  { id: 226, topic: "CMOS Logic Gates", question: "Transmission gates act as highly efficient bilateral switches in digital design because they combine an NMOS and PMOS in parallel to pass:", options: ["A) A strong logic 0 only", "B) Both full logic 1 and full logic 0 without suffering threshold voltage attenuation", "C) Analog high-frequency signals exclusively", "D) Dynamic precharge signals without needing a global clock tree"], answer: "B" },
  { id: 227, topic: "CMOS Logic Gates", question: "In dynamic CMOS logic families, leaving internal nodes floating during evaluation phases exposes the gate to severe malfunction due to:", options: ["A) Permanent threshold voltage inversion", "B) Charge leakage, subthreshold leakage, and capacitive crosstalk noise from neighboring signals", "C) Immediate thermal latchup breakdown", "D) Delamination of the metal slot structures"], answer: "B" },
  { id: 228, topic: "CMOS Logic Gates", question: "The structural role of a PMOS 'keeper' transistor attached to a dynamic CMOS gate's evaluation node is to:", options: ["A) Speed up the precharge cycle time", "B) Maintain the logic HIGH state against charge leakage and charge sharing problems without turning off the pull-down network", "C) Isolate input poly lines from active wells", "D) Transform the stage into a level-sensitive master-slave latch"], answer: "B" },
  { id: 229, topic: "CMOS Logic Gates", question: "If the pull-up network of a complex complementary static CMOS cell contains three PMOS transistors in parallel, the pull-down network must contain:", options: ["A) Three NMOS transistors in parallel", "B) Three NMOS transistors in series", "C) A cross-coupled pair of pass-gates", "D) Six NMOS transistors organized in a series-parallel grid"], answer: "B" },
  { id: 230, topic: "CMOS Logic Gates", question: "Why is a single NMOS pass-transistor inefficient at passing a logic HIGH (1) signal?", options: ["A) It completely blocks current after the precharge phase", "B) The output voltage is attenuated by a threshold voltage drop (VDD - VTN)", "C) It causes immediate latchup of the substrate taps", "D) It forces the gate into a deep velocity saturation state"], answer: "B" },

  // --- Subsystem Architectures & Sizing Math ---
  { id: 231, topic: "Device Technologies", question: "The Cell Ratio of an SRAM cell is defined as the ratio of the width of the pull-down NMOS to the access NMOS. To ensure a stable read operation, the Cell Ratio must be:", options: ["A) Kept as close to zero as possible", "B) Sufficiently large (typically > 1.2) to prevent the access transistor from accidentally flipping the cell's stored state", "C) Exactly identical to the pull-up PMOS width profile", "D) Controlled asynchronously by global clock buffers"], answer: "B" },
  { id: 232, topic: "Device Technologies", question: "To ensure a successful write operation into an SRAM cell, the Pull-Up Ratio (ratio of pull-up PMOS width to access NMOS width) must be designed to be:", options: ["A) Extremely high to isolate the cell", "B) Low enough to allow the access NMOS to easily overpower the internal pull-up PMOS and force a new state", "C) Perfectly balanced to prevent subthreshold leakage", "D) Independent of the bitline differential voltage swings"], answer: "B" },
  { id: 233, topic: "Device Technologies", question: "The core element inside a high-speed flash memory or memory bitline sense amplifier that detects differential voltage swings is structurally built as a:", options: ["A) Barrel shifter array", "B) Highly sensitive cross-coupled latch circuit configuration", "C) Linear feedback shift register network", "D) Series chain of dynamic pseudo-NMOS buffers"], answer: "B" },
  { id: 234, topic: "Device Technologies", question: "DRAM memory cells have a refresh time constraint that is directly limited by:", options: ["A) The clock frequency of the row decoder lines", "B) Charge retention degradation caused by leakage currents discharging the ultra-small storage capacitor", "C) Electromigration along global aluminum bitlines", "D) The base-emitter turn-on voltage of internal BJTs"], answer: "B" },
  { id: 235, topic: "Device Technologies", question: "Why are barrel shifters widely utilized in high-performance CPU datapath execution units over shift-register chains?", options: ["A) They completely eliminate dynamic power consumption", "B) They perform multi-bit shifting operations in a single clock cycle using purely combinational multiplexer routing", "C) They eliminate the need for global clock tree synthesis", "D) They operate below the subthreshold leakage zone"], answer: "B" },
  { id: 236, topic: "Device Technologies", question: "A primary operational step in Booth's multiplication algorithm is to scan the multiplier bit pairs to:", options: ["A) Dynamically adjust the operational supply voltage VDD", "B) Replace long sequences of continuous binary additions with a reduced set of additions and subtractions", "C) Convert serial data streams into parallel blocks using barrel shifters", "D) Check for manufacturing single stuck-at structural defects"], answer: "B" },
  { id: 237, topic: "Device Technologies", question: "Feed-Through Cells are regularly placed within row-based standard cell ASIC architectures to:", options: ["A) Convert analog voltage feedback loops into digital vectors", "B) Provide empty layout real-estate with ready routing tracks to pass signal wires through solid cell blocks", "C) Act as dynamic high-frequency current sensors", "D) Provide reverse-biased diodes to satisfy antenna rules on all layers"], answer: "B" },
  { id: 238, topic: "Device Technologies", question: "A standard 4x4 Static RAM (SRAM) matrix architecture maps address decoding via:", options: ["A) Connecting all bitlines serially in a single ring", "B) Using Row Decoders to assert a single Word Line (WL), which activates cell access gates across column Bit Lines (BL)", "C) Utilizing LFSR generators to locate data blocks randomly", "D) Shorting the ground rail during the precharge evaluation phase"], answer: "B" },
  { id: 239, topic: "Device Technologies", question: "Which adder architecture provides the fastest arithmetic execution speed for large word lengths (e.g., 64-bit) by computing carries in parallel?", options: ["A) Ripple Carry Adder (RCA)", "B) Carry Lookahead Adder (CLA)", "C) Serial Carry Accumulator", "D) Pseudo-NMOS Ripple Adder"], answer: "B" },
  { id: 240, topic: "Device Technologies", question: "What is the hardware overhead of implementing a Carry-Save Adder (CSA) topology for accumulating multiple operands?", options: ["A) It demands twice the clock frequency of standard adders", "B) It does not immediately resolve carries, instead producing a sum and carry vector that requires a final vector-merge adder step", "C) It causes chronic dynamic charge sharing errors", "D) It requires cascading bipolar junction transistors in series"], answer: "B" },

  // --- Verification, EDA Flows & System Engineering ---
  { id: 241, topic: "System Design & EDA", question: "Which verification methodology applies formal mathematical techniques to guarantee that two circuit representations are logically identical?", options: ["A) Dynamic gate-level waveform simulation", "B) Equivalence Checking (Formal Verification)", "C) IDDQ background current measurement", "D) Parasitic Extraction simulation"], answer: "B" },
  { id: 242, topic: "System Design & EDA", question: "Hardware Emulation systems are integrated into advanced ASIC development flows primarily to:", options: ["A) Physically slice silicon wafers into identical dies", "B) Validate complex system-level software and RTL architectures at high speeds using programmable hardware matrices before tape-out", "C) Check for layout design rule violations automatically", "D) Extract parasitic wire resistances post-routing"], answer: "B" },
  { id: 243, topic: "System Design & EDA", question: "The Structural View of a digital system is best defined as a representation showing:", options: ["A) A truth table capturing logic outcomes across input variables", "B) The precise interconnection of component blocks, logic library cells, and their explicit pin-to-pin net wiring", "C) Geometric shapes on lithographic manufacturing masks", "D) The mathematical power-delay trade-off charts"], answer: "B" },
  { id: 244, topic: "System Design & EDA", question: "Semi-custom Standard Cell ASICs differ from Full-custom alternatives because standard cell architectures:", options: ["A) Are designed entirely on FPGAs without layout masks", "B) Use pre-verified, pre-characterized standard cell libraries arranged in row-based layouts, drastically shortening design cycles", "C) Contain zero static power leakage nodes", "D) Allow manual sizing of every single transistor on the chip"], answer: "B" },
  { id: 245, topic: "System Design & EDA", question: "The Single Stuck-At fault model is widely preferred in industry ATPG tools because it:", options: ["A) Explicitly models all physical thermal runaway mechanisms", "B) Provides a computationally manageable abstraction that effectively screens out the majority of physical manufacturing defects", "C) Solves setup and hold timing violations across clock networks", "D) Automates the addition of metal slots on power tracks"], answer: "B" },
  { id: 246, topic: "System Design & EDA", question: "Built-In Self-Test (BIST) hardware configurations provide which clear engineering advantage during product deployment?", options: ["A) They completely eliminate the cell area footprint of a chip", "B) They allow the chip to independently test its own internal logic structures without relying on expensive external automated test equipment (ATE)", "C) They completely resolve antenna rule layout violations", "D) They eliminate the need for multi-threshold CMOS cell optimization"], answer: "B" },
  { id: 247, topic: "System Design & EDA", question: "Boundary Scan (JTAG IEEE 1149.1) architecture places dedicated shift register cells directly at the chip's input/output pins to evaluate:", options: ["A) Critical path propagation delays within the logic core", "B) Board-level electrical continuity and structural solder integrity between components mounted on a PCB", "C) Subthreshold leakage fluctuations in standard cell wells", "D) The transition frequency limits of the global clock tree"], answer: "B" },
  { id: 248, topic: "System Design & EDA", question: "A Synopsys Design Constraints (SDC) file is fed into logic synthesis and placement tools to specify details regarding:", options: ["A) The material characteristics of the silicon packaging clean room", "B) Precise clock definitions, target operating frequencies, input/output delay constraints, and false paths", "C) The chemical properties of photoresist masks", "D) Tool licensing access tokens and network configurations"], answer: "B" },
  { id: 249, topic: "System Design & EDA", question: "A bridging fault model represents a specific physical manufacturing defect where:", options: ["A) A poly gate oxide pin breaks down due to an antenna effect", "B) Two or more adjacent metal signal paths become accidentally shorted together", "C) A logic register node is permanently tied to the VDD power rail", "D) The substrate well tap resistance approaches infinity"], answer: "B" },
  { id: 250, topic: "System Design & EDA", question: "The core limitation of Electronic Design Automation (EDA) synthesis software is that it operates as an optimization tool and cannot:", options: ["A) Map logic expressions into NAND or NOR implementations", "B) Intelligently overhaul or alter a fundamentally flawed architectural system design into a highly performing layout", "C) Balance path delays across clock tree buffers", "D) Extract parasitic resistor-capacitor wire values"], answer: "B" }

];

const topicsList = ["All", ...new Set(questions.map(q => q.topic))];

const topicColors = {
  "Abstraction & Digital Basics": "#4ade80",
  "Logic Circuits": "#60a5fa",
  "Device Technologies": "#f472b6",
  "System Design & EDA": "#fb923c",
  "MOSFET Scaling": "#a78bfa",
  "CMOS Logic Gates": "#34d399",
  "Transmission Gates & Multiplexers": "#fbbf24",
  "Latches, Flip-Flops & Clocking": "#f87171",
  "Layout & Design Rules": "#38bdf8"
};

// State
let selectedTopic = "All";
let answers = {};
let submitted = false;
let currentPage = 0;
const PAGE_SIZE = 10;

// Derived State Functions
function getFilteredQuestions() {
  return selectedTopic === "All" ? questions : questions.filter(q => q.topic === selectedTopic);
}

function getTotalPages() {
  return Math.ceil(getFilteredQuestions().length / PAGE_SIZE);
}

function getPageQuestions() {
  const filtered = getFilteredQuestions();
  return filtered.slice(currentPage * PAGE_SIZE, (currentPage + 1) * PAGE_SIZE);
}

function getScore() {
  return getFilteredQuestions().filter(q => answers[q.id] === q.answer).length;
}

// Render Functions
function renderScoreCard() {
  const scoreDisplay = document.getElementById("score-display");
  if (!submitted) {
    scoreDisplay.innerHTML = "";
    return;
  }
  
  const filteredLen = getFilteredQuestions().length;
  const score = getScore();
  const pct = Math.round((score / filteredLen) * 100);
  const grade = pct >= 90 ? "Excellent" : pct >= 75 ? "Good" : pct >= 60 ? "Pass" : "Needs Work";
  const gradeColor = pct >= 90 ? "#4ade80" : pct >= 75 ? "#60a5fa" : pct >= 60 ? "#fbbf24" : "#f87171";

  scoreDisplay.innerHTML = `
    <div class="score-card" style="border: 2px solid ${gradeColor}">
      <div class="score-pct" style="color: ${gradeColor}">${pct}%</div>
      <div class="score-grade" style="color: ${gradeColor}">${grade}</div>
      <div class="score-text">${score} / ${filteredLen} correct</div>
    </div>
  `;
}

function renderFilters() {
  const container = document.getElementById("filters-container");
  container.innerHTML = "";

  topicsList.forEach(t => {
    const btn = document.createElement("button");
    btn.className = "topic-btn";
    btn.textContent = t;
    
    if (selectedTopic === t) {
      btn.style.background = topicColors[t] || "#6366f1";
      btn.style.color = "#0b0f1a";
      btn.style.fontWeight = "bold";
    } else {
      btn.style.background = "rgba(255,255,255,0.06)";
      btn.style.color = "#94a3b8";
      btn.style.fontWeight = "normal";
    }

    btn.onclick = () => {
      selectedTopic = t;
      currentPage = 0;
      updateUI();
    };

    container.appendChild(btn);
  });
}

function renderProgress() {
  const progressSection = document.getElementById("progress-section");
  if (submitted) {
    progressSection.style.display = "none";
    return;
  }
  progressSection.style.display = "block";

  const filtered = getFilteredQuestions();
  const answeredCount = filtered.filter(q => answers[q.id]).length;
  
  document.getElementById("answered-count").textContent = `${answeredCount} / ${filtered.length} answered`;
  document.getElementById("page-count").textContent = `Page ${currentPage + 1} of ${getTotalPages()}`;
  document.getElementById("progress-bar-fill").style.width = `${(answeredCount / filtered.length) * 100}%`;
}

function renderQuestions() {
  const container = document.getElementById("questions-container");
  container.innerHTML = "";
  
  const pageQ = getPageQuestions();

  pageQ.forEach((q, idx) => {
    const globalIdx = currentPage * PAGE_SIZE + idx;
    const selected = answers[q.id];
    const isCorrect = submitted && selected === q.answer;
    const isWrong = submitted && selected && selected !== q.answer;
    const topicColor = topicColors[q.topic] || "#6366f1";

    const card = document.createElement("div");
    card.className = "question-card";
    
    if (submitted) {
      card.style.borderColor = isCorrect ? "#4ade80" : isWrong ? "#f87171" : "#374151";
    }

    let optionsHTML = q.options.map(opt => {
      const letter = opt[0];
      const isSelected = selected === letter;
      const isRight = submitted && letter === q.answer;
      const isUserWrong = submitted && isSelected && letter !== q.answer;

      let bg = "rgba(255,255,255,0.03)";
      let border = "1px solid #1e293b";
      let textColor = "#94a3b8";
      let icon = "";

      if (isRight) { 
        bg = "rgba(74,222,128,0.12)"; border = "1px solid #4ade80"; textColor = "#4ade80"; icon = "✓";
      } else if (isUserWrong) { 
        bg = "rgba(248,113,113,0.12)"; border = "1px solid #f87171"; textColor = "#f87171"; icon = "✗"; 
      } else if (!submitted && isSelected) { 
        bg = "rgba(99,102,241,0.15)"; border = "1px solid #6366f1"; textColor = "#a5b4fc"; 
      }

      return `
        <button class="option-btn" 
          onclick="handleSelect(${q.id}, '${letter}')"
          ${submitted ? 'disabled' : ''}
          style="background: ${bg}; border: ${border}; color: ${textColor};">
          <span class="option-letter" style="border-color: ${textColor}">${letter}</span>
          <span>${opt.slice(3)}</span>
          <span class="option-icon">${icon}</span>
        </button>
      `;
    }).join("");

    let unansweredFeedback = "";
    if (submitted && !selected) {
      unansweredFeedback = `<div class="unanswered-text">Not answered — correct answer: ${q.answer}</div>`;
    }

    card.innerHTML = `
      <div class="question-header">
        <div class="question-meta">
          <span class="question-topic" style="background: ${topicColor}">${q.topic}</span>
          <span class="question-num">Q${globalIdx + 1}</span>
        </div>
        <p class="question-text">${q.question}</p>
      </div>
      <div class="options-container">
        ${optionsHTML}
        ${unansweredFeedback}
      </div>
    `;

    container.appendChild(card);
  });
}

function renderPagination() {
  const container = document.getElementById("pagination-container");
  container.innerHTML = "";
  
  const total = getTotalPages();
  if (total <= 1) return;

  const prevBtn = document.createElement("button");
  prevBtn.className = "page-btn nav-btn";
  prevBtn.textContent = "← Prev";
  prevBtn.disabled = currentPage === 0;
  prevBtn.onclick = () => { currentPage = Math.max(0, currentPage - 1); updateUI(); };
  container.appendChild(prevBtn);

  for (let i = 0; i < total; i++) {
    const numBtn = document.createElement("button");
    numBtn.className = `page-btn num-btn ${currentPage === i ? 'active' : ''}`;
    numBtn.textContent = i + 1;
    numBtn.onclick = () => { currentPage = i; updateUI(); };
    container.appendChild(numBtn);
  }

  const nextBtn = document.createElement("button");
  nextBtn.className = "page-btn nav-btn";
  nextBtn.textContent = "Next →";
  nextBtn.disabled = currentPage === total - 1;
  nextBtn.onclick = () => { currentPage = Math.min(total - 1, currentPage + 1); updateUI(); };
  container.appendChild(nextBtn);
}

function renderActions() {
  const container = document.getElementById("actions-container");
  container.innerHTML = "";
  
  const filtered = getFilteredQuestions();
  const answeredCount = filtered.filter(q => answers[q.id]).length;

  const btn = document.createElement("button");
  btn.className = submitted ? "action-btn retake-btn" : "action-btn submit-btn";
  
  if (!submitted) {
    btn.textContent = `Submit Quiz (${answeredCount}/${filtered.length})`;
    btn.onclick = handleSubmit;
  } else {
    btn.textContent = "↺ Retake Quiz";
    btn.onclick = handleReset;
  }
  
  container.appendChild(btn);
}

// Handlers
window.handleSelect = function(qId, optLetter) {
  if (submitted) return;
  answers[qId] = optLetter;
  updateUI();
};

function handleSubmit() {
  const filtered = getFilteredQuestions();
  const unanswered = filtered.filter(q => !answers[q.id]);
  if (unanswered.length > 0) {
    alert(`Please answer all questions. You have ${unanswered.length} unanswered.`);
    return;
  }
  submitted = true;
  currentPage = 0;
  updateUI();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleReset() {
  answers = {};
  submitted = false;
  currentPage = 0;
  updateUI();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Global Update
function updateUI() {
  renderScoreCard();
  renderFilters();
  renderProgress();
  renderQuestions();
  renderPagination();
  renderActions();
}

// Init
updateUI();
