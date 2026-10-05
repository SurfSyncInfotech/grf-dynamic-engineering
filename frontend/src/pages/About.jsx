import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import workshopImg from '../assets/production_site.jpg';
import cadImg from '../assets/cad_engineering.png';
import weldingImg from '../assets/welding_precision.png';
import reactorImg from '../assets/industrial_reactor.png';
import abadMalikImg from '../assets/Abad Malik.jpeg';
import shahzadMalikImg from '../assets/Sahjad Malik .jpeg';
import zainulAbidinImg from '../assets/Zainul Abidin.jpeg';
import zrRamanImg from '../assets/New ZR RAMAN.jpeg';
import sajidMalikImg from '../assets/Sajid Malik.jpeg';
import grfImage from '../assets/GRF-Image.jpeg';
import hydroTestingImg from '../assets/hydro_testing_setup.jpg';
import exportShippingImg from '../assets/global_export_shipping.jpg';

export default function About() {
  // States
  const [activeCapId, setActiveCapId] = useState(1);
  const [activeYearIndex, setActiveYearIndex] = useState(4); // Default to 2026 (last milestone)
  const [activeMember, setActiveMember] = useState(null);
  const [isHistoryExpanded, setIsHistoryExpanded] = useState(false);
  const [isRegistryExpanded, setIsRegistryExpanded] = useState(false);
  const [isCapabilityExpanded, setIsCapabilityExpanded] = useState(false);
  const [isWfTechnicalExpanded, setIsWfTechnicalExpanded] = useState(false);
  const [isWfEngineersExpanded, setIsWfEngineersExpanded] = useState(false);
  const [isWfHelpersExpanded, setIsWfHelpersExpanded] = useState(false);
  const [isWorkforceExpanded, setIsWorkforceExpanded] = useState(false);

  // Prevent background page scrolling and GPU re-renders when modal is open
  useEffect(() => {
    if (activeMember) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeMember]);

  const capabilities = [
    {
      id: 1,
      title: "Design & Engineering",
      short: "Mechanical Layout & FEA Simulation",
      desc: "At G R F Dynamic Engineering, design and engineering form the foundation of every product we manufacture. We believe that high-performance industrial equipment begins with intelligent engineering, detailed planning, and precision-driven design...",
      fullDesc: [
        "At G R F Dynamic Engineering, design and engineering form the foundation of every product we manufacture. We believe that high-performance industrial equipment begins with intelligent engineering, detailed planning, and precision-driven design. Every pressure vessel, storage tank, chemical reactor, heat exchanger, process vessel, mixing tank, and customized industrial system is carefully engineered to deliver maximum efficiency, safety, durability, and long-term reliability. Our engineering team combines practical industry experience with advanced design technologies to develop solutions that meet the specific operational requirements of every customer while complying with recognized engineering standards.",
        "Our design process begins with a comprehensive understanding of the customer's application, production objectives, process parameters, installation environment, and operational challenges. Before creating any design, our engineers conduct detailed technical discussions to gather information regarding operating pressure, temperature, capacity requirements, material compatibility, available installation space, utility connections, and future expansion plans. This collaborative approach enables us to develop customized equipment that integrates seamlessly into existing production facilities while maximizing process efficiency and minimizing operational downtime.",
        "To achieve superior design accuracy, our engineering team utilizes advanced 3D CAD (Computer-Aided Design) software for detailed equipment modeling and visualization. Three-dimensional models allow us to verify every component before fabrication begins, ensuring proper dimensions, nozzle orientation, structural clearances, piping connections, support arrangements, and assembly compatibility. By identifying potential design challenges during the engineering phase, we reduce manufacturing errors, improve fabrication efficiency, and ensure smooth installation at the customer's site. These digital models also enable customers to visualize the equipment before production, allowing modifications to be incorporated efficiently.",
        "Structural strength and operational safety are verified using Finite Element Analysis (FEA) and other engineering calculation methods wherever applicable. Through stress analysis, load calculations, pressure evaluation, thermal expansion assessment, and structural simulations, we evaluate how equipment will perform under actual operating conditions. Critical components are analyzed to identify stress concentration areas, deformation possibilities, vibration effects, and structural stability. This analytical approach ensures that every product is capable of withstanding demanding industrial environments while maintaining optimal performance throughout its service life.",
        "Material selection is another essential aspect of our engineering process. Depending on the customer's application, operating conditions, and industry requirements, we recommend suitable materials such as Stainless Steel SS304, SS316, SS316L, Duplex Stainless Steel, Mild Steel (MS), and other specialized alloys. Our engineers carefully consider factors including corrosion resistance, pressure ratings, temperature limits, product compatibility, hygienic requirements, and mechanical strength before finalizing material specifications. This ensures that every piece of equipment delivers exceptional durability, safety, and operational efficiency.",
        "Our engineering capabilities extend beyond equipment design to complete process optimization. We carefully design vessel configurations, agitator systems, internal components, nozzle positioning, support structures, piping layouts, insulation arrangements, instrumentation locations, and automation compatibility to improve productivity and simplify maintenance. Every design is developed with consideration for ease of installation, operator accessibility, cleaning efficiency, and future maintenance requirements. This holistic engineering approach enables customers to achieve higher productivity while reducing operating costs and minimizing downtime.",
        "Before production begins, every design undergoes multiple stages of technical review and quality verification. Experienced engineers carefully examine design drawings, fabrication details, pressure calculations, welding requirements, and manufacturing specifications to ensure complete compliance with project requirements and applicable engineering standards. This rigorous review process helps eliminate potential issues before fabrication, resulting in higher manufacturing accuracy and improved product reliability.",
        "Innovation remains a key driver of our engineering philosophy. We continuously adopt modern design software, advanced engineering tools, digital modeling technologies, and evolving manufacturing practices to improve product performance and customer satisfaction. By integrating technical expertise with practical manufacturing knowledge, we develop industrial equipment that is efficient, reliable, and built to perform in demanding sectors such as pharmaceuticals, dairy, food processing, chemicals, oil and gas, water treatment, and other process industries.",
        "At G R F Dynamic Engineering, design and engineering represent far more than creating technical drawings—they reflect our commitment to innovation, precision, and engineering excellence. Every project is approached with careful planning, detailed analysis, and a customer-focused mindset to ensure the final product delivers exceptional performance, structural integrity, safety, and long-term value. Through advanced engineering practices, customized solutions, and continuous improvement, we remain dedicated to designing industrial equipment that helps businesses improve productivity, optimize operations, and achieve sustainable long-term success."
      ],
      image: cadImg,
      details: [
        { label: "Modeling Software", value: "AutoCAD / SolidWorks / ANSYS" },
        { label: "Compliance Standard", value: "ASME Section VIII Div 1 & 2" },
        { label: "Stress Testing", value: "FEA Seismic & Wind Load Simulation" },
        { label: "CAD Export Formats", value: "STEP, IGES, DWG, PDF" }
      ]
    },
    {
      id: 2,
      title: "Advanced Welding & Forming",
      short: "ASME Sec IX Certified Manufacturing",
      desc: "At G R F Dynamic Engineering, our Advanced Welding & Forming capabilities represent the foundation of our commitment to manufacturing high-quality, durable, and precision-engineered industrial equipment...",
      fullDesc: [
        "At G R F Dynamic Engineering, our Advanced Welding & Forming capabilities represent the foundation of our commitment to manufacturing high-quality, durable, and precision-engineered industrial equipment. With a combination of advanced machinery, experienced technicians, and globally recognized welding standards, we deliver fabrication solutions designed to meet the demanding requirements of industries where strength, safety, and reliability are critical.",
        "Our manufacturing facility is equipped with automatic plate bending rollers and advanced forming equipment that enables us to achieve accurate cylindrical, conical, and customized shapes with consistent quality. These heavy-duty plate rolling systems are designed to handle various thicknesses and material grades while maintaining precise dimensional accuracy. This ensures that every component manufactured meets the required engineering specifications and performs effectively under challenging operating conditions.",
        "For specialized applications, we utilize advanced dished end forming presses to manufacture high-strength pressure vessel heads and other critical components. Our forming processes are carefully controlled to maintain uniform thickness, structural integrity, and accurate geometry. By combining modern forming technology with skilled craftsmanship, we produce components that meet strict industry requirements for pressure handling, durability, and long-term operational performance.",
        "Welding is one of the most important stages in our fabrication process, and we maintain the highest standards of quality through our team of skilled weld technicians. Our welding professionals are certified according to ASME Section IX standards, ensuring that all welding procedures and qualifications comply with internationally accepted practices. Their expertise allows us to perform high-integrity welding operations for complex industrial structures and pressure-based equipment.",
        "We specialize in multiple advanced welding techniques, including Tungsten Inert Gas (TIG) Welding, Metal Inert Gas (MIG) Welding, and Submerged Arc Welding (SAW). TIG welding provides exceptional precision and clean weld quality for critical applications requiring superior finish and accuracy. MIG welding enables efficient fabrication with excellent strength and productivity, making it suitable for a wide range of industrial assemblies. Submerged Arc Welding delivers deep penetration and high-strength welds for heavy fabrication projects where reliability and structural performance are essential.",
        "Every welding operation at G R F Dynamic Engineering follows strict quality control procedures. Our team carefully monitors welding parameters, material compatibility, heat input, and inspection requirements to ensure consistent results. Weld inspections and testing procedures are carried out to verify strength, durability, and compliance with project specifications.",
        "Our advanced welding and forming capabilities allow us to manufacture a wide range of industrial products, including pressure vessels, storage tanks, reactors, heavy fabrication structures, and customized engineering solutions. By integrating automated machinery with expert human skills, we achieve the perfect balance between precision manufacturing and practical engineering expertise.",
        "At G R F Dynamic Engineering, we continuously invest in technology, workforce development, and process improvements to deliver products that meet the evolving needs of modern industries. Our focus on advanced welding techniques, accurate forming processes, and strict quality standards ensures that every project is completed with reliability, efficiency, and engineering excellence.",
        "With advanced welding and forming expertise, we provide customers with manufacturing solutions built for performance, safety, and long-term value."
      ],
      image: weldingImg,
      details: [
        { label: "Weld Standards", value: "ASME Section IX / EN 287" },
        { label: "Thickness Capacity", value: "Up to 24mm plate thickness" },
        { label: "Processes Used", value: "TIG (GTAW) / MIG (GMAW) / SAW" },
        { label: "End Forming Press", value: "Torispherical up to 3000mm diameter" }
      ]
    },
    {
      id: 3,
      title: "Surface Finish & Polishing",
      short: "Mirror Polishing & Acid Passivation",
      desc: "At G R F Dynamic Engineering, we understand that surface finishing plays a vital role in determining the performance, hygiene, durability, and visual quality of industrial equipment...",
      fullDesc: [
        "At G R F Dynamic Engineering, we understand that surface finishing plays a vital role in determining the performance, hygiene, durability, and visual quality of industrial equipment. Our advanced Surface Finish & Polishing capabilities are designed to meet the strict requirements of industries such as pharmaceuticals, dairy, food processing, chemicals, and other precision manufacturing sectors where superior surface quality is essential.",
        "Our manufacturing facility is equipped with complete surface treatment solutions that ensure every fabricated component achieves the required finish, cleanliness, and operational reliability. From internal mirror polishing to external surface treatments, we apply advanced techniques and quality-controlled processes to deliver equipment that performs efficiently in demanding industrial environments.",
        "For pharmaceutical and dairy applications, where hygiene and contamination prevention are critical, we provide automatic internal mirror polishing solutions. These advanced polishing systems create ultra-smooth internal surfaces with a surface roughness value of Ra < 0.4 microns. Such precision finishing minimizes product retention, prevents bacterial growth, and enables easy cleaning and sterilization during operation. This makes our vessels suitable for applications requiring strict sanitary standards and compliance with industry expectations.",
        "Our internal polishing process is carried out using specialized equipment and carefully selected polishing methods to achieve uniform surface quality across the entire vessel interior. Whether manufacturing storage tanks, process vessels, reactors, or customized equipment, our team ensures that every internal surface meets the required finish specifications. This attention to detail helps improve product purity, reduce maintenance requirements, and enhance the overall service life of the equipment.",
        "In addition to internal polishing, we provide advanced external surface treatment options to improve corrosion resistance, appearance, and long-term durability. Our external shot blasting process effectively removes surface impurities, oxidation, and manufacturing residues while creating a clean and uniform surface profile. This preparation improves coating adhesion and provides a strong foundation for further finishing processes.",
        "For applications requiring enhanced corrosion protection and chemical resistance, we offer chemical passivation treatments. This process strengthens the natural protective oxide layer on stainless steel surfaces, improving resistance against corrosion and maintaining material integrity even in challenging operating conditions. Chemical passivation is especially important for industries where equipment reliability, cleanliness, and long operational life are essential.",
        "Quality control is an integral part of our surface finishing operations. Our skilled technicians carefully inspect surface conditions, polishing quality, and treatment results at every stage of production. Advanced measurement techniques are used to verify surface roughness and ensure compliance with customer specifications and industry standards.",
        "At G R F Dynamic Engineering, we combine modern surface treatment technology with skilled workmanship to provide exceptional finishing solutions for critical industrial applications. Our expertise in polishing, shot blasting, and chemical passivation enables us to manufacture equipment that not only meets functional requirements but also delivers superior hygiene, aesthetics, and durability.",
        "Through continuous improvement, advanced machinery, and strict quality practices, we ensure that every product leaving our facility represents precision engineering and manufacturing excellence. Our Surface Finish & Polishing capabilities help customers achieve reliable performance, improved process efficiency, and long-term value from their industrial equipment.",
        "With a commitment to quality and innovation, G R F Dynamic Engineering delivers surface finishing solutions engineered for the highest standards of performance, safety, and reliability."
      ],
      image: workshopImg,
      details: [
        { label: "Interior Surface Finish", value: "Ra < 0.4 microns (Mirror Finish)" },
        { label: "Exterior Finish", value: "Shot blasted / Acid passivated / Matte finish" },
        { label: "Treatments Available", value: "Pickling, Passivation, Electro-polishing" },
        { label: "Sanitary Grade", value: "USDA / FDA food & dairy compliant" }
      ]
    },
    {
      id: 4,
      title: "Testing & NDT Facility",
      short: "In-house Hydro & Radiography Checks",
      desc: "At G R F Dynamic Engineering, quality assurance and safety verification are essential parts of our manufacturing process. Our advanced Testing & Non-Destructive Testing (NDT) Facility ensures that every fabricated product undergoes strict inspection...",
      fullDesc: [
        "At G R F Dynamic Engineering, quality assurance and safety verification are essential parts of our manufacturing process. Our advanced Testing & Non-Destructive Testing (NDT) Facility ensures that every fabricated product undergoes strict inspection and performance evaluation before delivery. With in-house testing capabilities, experienced quality professionals, and advanced inspection techniques, we verify the structural integrity, durability, and reliability of industrial equipment manufactured at our facility.",
        "Our comprehensive testing infrastructure is designed to meet the requirements of industries where precision, safety, and operational performance are critical. From pressure vessels and storage tanks to customized fabrication projects, we conduct detailed quality checks to ensure that every component meets customer specifications and applicable engineering standards.",
        "One of our key testing capabilities is hydrostatic pressure testing, which allows us to verify the strength and leak resistance of pressure-based equipment. Our facility is equipped to perform hydrostatic testing up to 50 Bar, where equipment is filled with water and subjected to controlled pressure conditions. This process helps identify potential weaknesses, leakage points, or structural defects while ensuring that the equipment can safely withstand its intended operating pressure.",
        "In addition to hydrostatic testing, we provide pneumatic testing solutions for applications requiring gas pressure verification. Pneumatic testing is performed under carefully controlled conditions to examine equipment integrity and identify possible leaks or pressure-related issues. Our skilled inspection team follows strict safety procedures during pneumatic testing to ensure accurate results while maintaining workplace safety.",
        "To ensure the highest level of weld quality, we offer weld radiography testing using advanced X-ray inspection methods. Radiographic testing allows our quality engineers to examine internal weld structures and detect hidden defects such as cracks, porosity, incomplete penetration, or welding inconsistencies. This non-destructive inspection method provides valuable insights into weld reliability without damaging the fabricated component.",
        "Our Dye Penetrant Inspection (DPI) facility is used for detecting surface-level defects in critical components. This process helps identify fine cracks, pinholes, and surface imperfections that may not be visible through normal visual inspection. DPI is particularly effective for examining welded joints and ensuring the surface integrity of fabricated equipment.",
        "We also perform Ultrasonic Thickness Testing to accurately measure material thickness and monitor the condition of equipment components. This advanced inspection technique helps identify material loss, corrosion, or thinning that could affect equipment performance over time. By using ultrasonic testing, we help ensure long-term reliability and support preventive maintenance planning.",
        "Every testing activity at G R F Dynamic Engineering is carried out according to established quality procedures and industry requirements. Our inspection team carefully documents test results, maintains traceability records, and ensures that all products meet the required acceptance criteria before final approval.",
        "With a strong focus on quality control, safety, and engineering excellence, our Testing & NDT Facility provides customers with complete confidence in the reliability of our products. By combining advanced testing technology with experienced professionals, we deliver equipment that is built to perform safely and efficiently in demanding industrial environments.",
        "At G R F Dynamic Engineering, our commitment to rigorous testing and inspection ensures that every product reflects our dedication to precision manufacturing, superior quality, and long-term operational reliability."
      ],
      image: reactorImg,
      details: [
        { label: "Hydrostatic Testing", value: "Up to 50 Bar working rating" },
        { label: "Non-Destructive Testing", value: "Radiography (RT) / Ultrasonic (UT)" },
        { label: "Quality Checks", value: "Dye-penetrant (DP) / Magnetic particle (MP)" },
        { label: "Inspection Certs", value: "TC (Test Certificate) & Third-Party Inspect" }
      ]
    },
    {
      id: 5,
      title: "Warranty & Hydrostatic Testing",
      short: "Quality Guarantee & Multi-Bar Hydro Tests",
      desc: "At G R F Dynamic Engineering, we stand behind the quality, reliability, and performance of every product we manufacture. Our commitment to customer satisfaction is reinforced through comprehensive warranty support...",
      fullDesc: [
        "At G R F Dynamic Engineering, we stand behind the quality, reliability, and performance of every product we manufacture. Our commitment to customer satisfaction is reinforced through comprehensive warranty support and rigorous hydrostatic testing procedures that ensure every piece of equipment meets the highest standards of safety, strength, and operational integrity before delivery.",
        "Hydrostatic testing is one of the most critical stages of our quality assurance process. Using advanced testing equipment, we conduct controlled pressure tests to verify the structural integrity, pressure resistance, and leak-proof performance of pressure vessels, storage tanks, reactors, and other fabricated equipment. Each product is tested according to applicable design specifications and industry standards, ensuring it can safely withstand its intended operating conditions.",
        "In addition to hydrostatic testing, our quality assurance team performs detailed inspections and verification procedures to confirm dimensional accuracy, weld quality, material integrity, and overall product performance. These comprehensive checks help identify and eliminate potential defects before the equipment reaches the customer, ensuring dependable operation and long service life.",
        "Our warranty reflects our confidence in the quality of our engineering and manufacturing processes. Every product is built using premium-grade materials, precision fabrication techniques, and strict quality control measures, providing customers with reliable equipment designed for consistent performance in demanding industrial environments. Should any manufacturing-related issue arise within the applicable warranty period, our technical team is committed to providing prompt assistance and appropriate support.",
        "At G R F Dynamic Engineering, our focus on warranty assurance and comprehensive hydrostatic testing demonstrates our dedication to delivering safe, durable, and high-performance industrial equipment that customers can trust with complete confidence."
      ],
      image: hydroTestingImg,
      details: [
        { label: "Warranty Coverage", value: "12 to 24 Months Manufacturer Guarantee" },
        { label: "Hydrostatic Limit", value: "Up to 50 Bar pressure rating" },
        { label: "Testing Standard", value: "ASME Sec VIII / API 650 compliant" },
        { label: "Verification TCs", value: "Provided with Third-Party Inspection options" }
      ]
    },
    {
      id: 6,
      title: "Quality & Compliance",
      short: "ISO 9001:2015, GST, MSME & IEC Certificates",
      desc: "At G R F Dynamic Engineering, quality and compliance are the cornerstones of our manufacturing philosophy. We are committed to maintaining the highest standards of transparency...",
      fullDesc: [
        "At G R F Dynamic Engineering, quality and compliance are the cornerstones of our manufacturing philosophy. We are committed to maintaining the highest standards of transparency, regulatory compliance, and operational excellence to ensure that every product and service meets customer expectations as well as applicable national and international requirements. Our focus on quality enables us to build long-term trust with clients across India and global markets.",
        "Our manufacturing operations are supported by a robust Quality Management System certified under ISO 9001:2015, demonstrating our commitment to consistent quality in engineering, design, welding, fabrication, inspection, and surface finishing. Every stage of the manufacturing process follows documented procedures, strict quality controls, and continuous improvement practices to ensure reliable and repeatable results.",
        "In addition to our quality certification, G R F Dynamic Engineering is officially registered under MSME (Udyam), holds a valid GSTIN registration, and possesses a registered Import-Export Code (IEC), enabling us to conduct business efficiently across domestic and international markets. These registrations reflect our commitment to operating with complete legal compliance and professional integrity.",
        "To maintain superior product quality, we implement comprehensive inspection and testing procedures, including material verification, dimensional checks, welding inspections, hydrostatic testing, and Non-Destructive Testing (NDT) wherever required. These quality assurance practices ensure that every product meets the required engineering specifications, safety standards, and performance expectations.",
        "At G R F Dynamic Engineering, quality is more than a certification—it is a commitment embedded in every project we undertake. By combining regulatory compliance, skilled workmanship, advanced manufacturing practices, and continuous improvement, we deliver dependable industrial equipment that customers can trust for safety, durability, and long-term performance."
      ],
      image: grfImage,
      details: [
        { label: "Quality System", value: "ISO 9001:2015 Certified" },
        { label: "Tax Registration", value: "Goods & Services Tax (GSTIN)" },
        { label: "Enterprise Type", value: "MSME / Udyam Registered" },
        { label: "Global Trade", value: "DGFT Import-Export Code (IEC)" }
      ]
    },
    {
      id: 7,
      title: "International Import & Export",
      short: "Global Supply Chain & IEC Certified Exports",
      desc: "At G R F Dynamic Engineering, we are committed to expanding our presence in global markets by providing reliable international import and export services...",
      fullDesc: [
        "At G R F Dynamic Engineering, we are committed to expanding our presence in global markets by providing reliable international import and export services for high-quality industrial process equipment and engineering solutions. With a valid Import-Export Code (IEC) and a well-established logistics network, we are fully equipped to serve customers across Asia, the Middle East, Africa, Europe, and other international markets. Our goal is to deliver world-class engineering products that meet international quality standards while ensuring safe, efficient, and timely delivery.",
        "We specialize in the export of a wide range of industrial equipment, including pressure vessels, storage tanks, process reactors, heat exchangers, mixing vessels, process skids, CIP systems, pipelines, and other customized stainless steel and mild steel fabrication solutions. Every product is manufactured according to customer specifications and engineered to deliver reliable performance in demanding industrial environments. Our solutions are widely suitable for industries such as pharmaceuticals, food and beverage, dairy, chemicals, biotechnology, water treatment, oil and gas, and power generation.",
        "Quality remains our highest priority throughout the export process. Every product undergoes comprehensive quality inspections, dimensional verification, weld inspections, Non-Destructive Testing (NDT), hydrostatic testing, and final performance evaluations before shipment. These strict quality assurance procedures ensure that our equipment complies with customer requirements and internationally recognized engineering standards, providing confidence in product reliability and long-term performance.",
        "To ensure safe transportation across international destinations, we follow industry-approved packaging and shipping practices. Equipment is carefully cleaned, protected, and packed using durable materials designed to prevent damage during handling, storage, and transit. Depending on customer requirements and shipment size, we provide customized packaging solutions, including wooden crates, steel frames, moisture-resistant wrapping, and export-grade protective packaging to maintain product integrity throughout the supply chain.",
        "Our experienced export team manages all aspects of international documentation and regulatory compliance. We prepare and maintain complete export documentation, including commercial invoices, packing lists, certificates of origin, inspection reports, and other required shipping documents. We strictly comply with customs regulations, international trade guidelines, and country-specific import requirements, ensuring smooth customs clearance and efficient international deliveries.",
        "In addition to exports, G R F Dynamic Engineering also supports the import of specialized raw materials, engineering components, valves, fittings, instruments, and other industrial accessories whenever required for specific customer applications. By sourcing high-quality materials and components from trusted international suppliers, we are able to maintain superior product quality, improve manufacturing capabilities, and meet specialized engineering requirements.",
        "Our logistics and supply chain management team works closely with reliable freight forwarders, shipping companies, and transportation partners to ensure timely dispatch and delivery of products worldwide. Whether shipping by sea, air, or road, we carefully monitor every stage of the logistics process to provide customers with dependable service and on-time project execution.",
        "Customer satisfaction remains at the heart of our international operations. We believe in building long-term business relationships through transparent communication, competitive pricing, technical expertise, and responsive customer support. Our engineering team works closely with international clients to understand their project requirements, provide technical guidance, and deliver customized solutions that match their operational needs.",
        "At G R F Dynamic Engineering, we are continuously expanding our global footprint while maintaining the highest standards of engineering excellence, quality, and compliance. Through dependable import and export services, advanced manufacturing capabilities, and a commitment to customer success, we aim to become a trusted global engineering partner delivering innovative industrial solutions that create lasting value for businesses around the world."
      ],
      image: exportShippingImg,
      details: [
        { label: "Global Reach", value: "Asia, Middle East, Africa, Europe" },
        { label: "IEC Code", value: "Registered under DGFT, India" },
        { label: "Transit Prep", value: "Export-grade packing & steel framing" },
        { label: "Documentation", value: "Complete customs & origin compliance" }
      ]
    }
  ];

  const timeline = [
    {
      year: "2011",
      title: "Company Foundation",
      subtitle: "Saharanpur, UP",
      desc: "Founded as a regional custom manufacturing unit specializing in steel structures and basic industrial silos in Saharanpur, Uttar Pradesh.",
      stats: { "Team Size": "10 skilled technicians", "Facility Area": "5,000 sq ft", "Initial Focus": "Agricultural storage" }
    },
    {
      year: "2015",
      title: "Heavy Equipment Expansion",
      subtitle: "Machinery Upgrades",
      desc: "Upgraded workshop machinery by installing automated plate bending rollers and a dedicated dished-end hydraulic forming press.",
      stats: { "Equipment Added": "Auto Rollers & Press", "Max Tank Capacity": "50,000 Liters", "Active Clients": "40+ regional industries" }
    },
    {
      year: "2018",
      title: "ASME Compliance & Growth",
      subtitle: "National Certifications",
      desc: "Upgraded quality management systems. Welding operators certified under ASME Section IX, expanding supply lines across North India.",
      stats: { "Weld Certs": "ASME Section IX", "States Reached": "12+ Indian states", "Annual Production": "80+ vessels" }
    },
    {
      year: "2021",
      title: "Silo & Reactor Leadership",
      subtitle: "Dairy & Chemical focus",
      desc: "Established leadership in fabricating milk storage silos (with dimple cooling jackets) and high-pressure chemical reactors.",
      stats: { "Silos Installed": "150+", "High-Pressure Rating": "Up to 35 Bar", "Completed Projects": "500+" }
    },
    {
      year: "2026",
      title: "Digital Integration & 800+ Tanks",
      subtitle: "Modern Engineering Era",
      desc: "Embraced smart engineering with advanced CAD simulation workflows, achieving over 800+ completed installations nationwide.",
      stats: { "Completed Tanks": "800+ nationwide", "Design Workflow": "Fully 3D & FEA simulation", "Quality Audits": "Zero-defect pass rate" }
    }
  ];

  const team = [
    {
      name: "Aabad Malik",
      image: abadMalikImg,
      role: "Chief Executive Officer (CEO) | Technical Expert",
      experience: "17+ Years",
      shortBio: "Aabad Malik is the Chief Executive Officer of GRF Dynamic Engineering, bringing over 17 years of experience in industrial engineering, technical design, fabrication, inspection, quality assurance, and project management.",
      fullBio: [
        "I am Aabad Malik, the Chief Executive Officer (CEO) of GRF Dynamic Engineering, with over 17 years of professional experience in industrial engineering, process equipment manufacturing, technical design, fabrication, inspection, quality assurance, and project management. Throughout my career, I have been committed to delivering innovative engineering solutions while maintaining the highest standards of quality, safety, and operational excellence.",
        "My engineering journey has been built on extensive practical experience, technical expertise, and a passion for solving complex industrial challenges. Over the years, I have developed comprehensive knowledge in the design, engineering, manufacturing, installation, and commissioning of industrial process equipment for a wide range of industries. My experience enables me to transform customer requirements into efficient, reliable, and cost-effective engineering solutions.",
        "As the Chief Executive Officer of GRF Dynamic Engineering, I lead the company's overall strategic direction, technical operations, business development, and manufacturing excellence. I work closely with our engineering, production, quality assurance, procurement, finance, and project management teams to ensure that every project is completed with precision, efficiency, and complete customer satisfaction.",
        "My core responsibilities include technical consultation, engineering design review, project planning, production management, quality assurance, inspection, fabrication supervision, cost optimization, client relationship management, and continuous improvement of manufacturing processes. I strongly believe that technical excellence, innovation, integrity, and teamwork are the key drivers of long-term business success.",
        "With more than 17 years of hands-on industry experience, I have successfully managed numerous industrial projects involving the design and manufacturing of customized process equipment. My expertise includes engineering calculations, fabrication drawings, welding standards, pressure vessel manufacturing, stainless steel fabrication, quality inspection, testing procedures, and project execution in accordance with national and international engineering standards.",
        "At GRF Dynamic Engineering, we specialize in the design and manufacturing of high-performance industrial process equipment, including MS & SS Reactors, Limpeted & Jacketed Reactors, Pressure Vessels, Heat Exchangers, Storage Tanks, Mixing Tanks, Air Receivers, Dairy Processing Equipment, Chemical Process Equipment, Pharmaceutical Equipment, Stainless Steel Fabrication, and Customized Industrial Process Equipment.",
        "My vision is to establish GRF Dynamic Engineering as one of the most trusted and respected manufacturers of industrial process equipment by delivering world-class engineering solutions, adopting advanced manufacturing technologies, and maintaining uncompromising standards of quality, safety, and reliability.",
        "I firmly believe that every successful project is built on technical expertise, innovation, customer trust, and continuous improvement. My mission is to provide customized engineering solutions that enhance productivity, improve operational efficiency, and create long-term value for our clients. Through strong leadership, engineering excellence, and a customer-focused approach, I remain dedicated to driving the continued growth and success of GRF Dynamic Engineering while building lasting partnerships with customers across diverse industrial sectors."
      ],
      specialties: [
        "Engineering Calculations",
        "Fabrication Drawings & Welding Standards",
        "Pressure Vessel Manufacturing",
        "Stainless Steel Fabrication",
        "Quality Inspection & Testing Procedures",
        "Project Execution",
        "Technical Consultation",
        "Production Management"
      ],
      productsSpecialty: [
        "MS & SS Reactors",
        "Limpeted & Jacketed Reactors",
        "Pressure Vessels",
        "Heat Exchangers",
        "Storage Tanks",
        "Mixing Tanks",
        "Air Receivers",
        "Dairy Processing Equipment",
        "Chemical Process Equipment",
        "Pharmaceutical Equipment",
        "Stainless Steel Fabrication",
        "Customized Industrial Process Equipment"
      ]
    },
    {
      name: "ZR Raman",
      image: zrRamanImg,
      role: "Manager | Finance Manager | M.Tech Engineer | Inspection & Drawing Engineer",
      experience: "10+ Years",
      shortBio: "ZR Raman is a Manager and Finance Manager with over 10 years of experience in engineering, manufacturing, inspection, technical drawing, quality assurance, and project management.",
      fullBio: [
        "I am ZR Rahan, an M.Tech Engineer with over 10 years of professional experience in engineering, manufacturing, inspection, technical drawing, finance management, quality assurance, and project management. Throughout my career, I have been committed to delivering innovative engineering solutions while maintaining the highest standards of quality, operational excellence, and customer satisfaction.",
        "I completed my engineering education in Aligarh and earned my Master of Technology (M.Tech) from Delhi AFU University. My academic background provided me with a strong foundation in engineering principles, technical design, manufacturing processes, industrial management, quality assurance, and advanced engineering applications. This combination of education and practical experience has enabled me to successfully manage complex engineering projects and lead multidisciplinary teams.",
        "My professional journey began at Manaskriti School & Institute, Faridabad, where I gained valuable experience in engineering drawings, drawing analysis, technical documentation, inspection, quality control, operations management, and project coordination. This experience strengthened my technical expertise, analytical thinking, leadership abilities, and problem-solving skills.",
        "For the past three years, I have been serving as the Manager and Finance Manager at GRF Dynamic Engineering, a trusted manufacturer of industrial process equipment and customized engineering solutions. In this role, I oversee engineering design, inspection, fabrication drawings, production planning, budgeting, financial management, procurement, project execution, quality assurance, client coordination, and overall business operations. My responsibilities include ensuring cost-effective manufacturing, maintaining high-quality standards, optimizing production efficiency, and delivering projects on time while building long-term relationships with clients.",
        "As an Inspection & Drawing Engineer, I specialize in preparing and reviewing fabrication drawings, interpreting technical specifications, conducting dimensional inspections, verifying material quality, monitoring fabrication activities, and ensuring compliance with engineering codes and international quality standards. My focus is on delivering technically accurate, reliable, and innovative engineering solutions.",
        "At GRF Dynamic Engineering, we specialize in the design and manufacturing of MS & SS Reactors, Limpeted & Jacketed Reactors, Pressure Vessels, Heat Exchangers, Storage Tanks, Mixing Tanks, Air Receivers, Dairy Processing Equipment, Chemical Process Equipment, and Custom Stainless Steel Fabrication.",
        "I believe that quality, integrity, innovation, financial discipline, and customer satisfaction are the foundation of every successful engineering organization. My mission is to deliver reliable, cost-effective, and customized engineering solutions while continuously improving manufacturing processes and exceeding customer expectations.",
        "With over a decade of professional experience, advanced technical knowledge, strong leadership capabilities, and practical expertise in engineering and financial management, I remain committed to driving the growth of GRF Dynamic Engineering and delivering world-class engineering solutions that create lasting value for our customers and business partners."
      ],
      specialties: [
        "Engineering & Project Management",
        "Financial Planning & Budgeting",
        "Fabrication Drawing Preparations",
        "Dimensional Inspections",
        "Material Quality Verification",
        "Operations & Procurement Management",
        "Quality Assurance",
        "Client Coordination"
      ],
      productsSpecialty: [
        "MS & SS Reactors",
        "Limpeted & Jacketed Reactors",
        "Pressure Vessels",
        "Heat Exchangers",
        "Storage Tanks",
        "Mixing Tanks",
        "Air Receivers",
        "Dairy Processing Equipment",
        "Chemical Process Equipment",
        "Custom Stainless Steel Fabrication"
      ]
    },
    {
      name: "Sahjad Malik",
      image: shahzadMalikImg,
      role: "Project Execution & Installation Expert",
      experience: "14+ Years",
      shortBio: "Sahjad Malik is a Project Execution and Installation Expert with over 14 years of hands-on experience in site management, equipment installation, testing, commissioning, and quality assurance.",
      fullBio: [
        "I am Shahzad, the Site Incharge at GRF Dynamic Engineering, with more than 14 years of professional experience in industrial project execution, equipment installation, manufacturing supervision, site management, quality assurance, and commissioning. Throughout my career, I have been dedicated to delivering safe, efficient, and high-quality project execution while ensuring complete customer satisfaction and compliance with engineering standards.",
        "With over fourteen years of hands-on industrial experience, I have developed extensive expertise in managing complex installation projects, supervising installation and erection activities, coordinating multidisciplinary teams, and ensuring that every project is completed on schedule and within the required quality standards. My practical knowledge of industrial processes, combined with strong leadership and problem-solving abilities, enables me to successfully manage projects from initial planning to final commissioning.",
        "As the Site Incharge at GRF Dynamic Engineering, I am responsible for planning, organizing, and supervising all on-site activities. My role includes coordinating with clients, engineers, contractors, and project teams to ensure seamless project execution. I oversee equipment installation, manufacturing assembly, erection, alignment, testing, commissioning, quality inspections, safety compliance, manpower management, and project documentation while ensuring strict adherence to engineering drawings and technical specifications.",
        "My expertise includes interpreting engineering drawings, supervising manufacturing and welding activities, monitoring installation procedures, conducting site inspections, ensuring dimensional accuracy, managing resources efficiently, resolving technical challenges, and maintaining project timelines. I am committed to implementing best engineering practices that improve productivity, enhance operational efficiency, and deliver reliable industrial solutions.",
        "Throughout my career, I have successfully managed the installation and commissioning of a wide range of industrial process equipment for chemical, pharmaceutical, dairy, food processing, cosmetic, water treatment, and other manufacturing industries. My technical knowledge and practical experience enable me to handle challenging site conditions while maintaining the highest standards of quality, safety, and performance.",
        "At GRF Dynamic Engineering, we specialize in the design, manufacturing, installation, and commissioning of premium industrial process equipment, including MS & SS Reactors, Limpeted & Jacketed Reactors, Pressure Vessels, Heat Exchangers, Storage Tanks, Mixing Tanks, Air Receivers, Dairy Processing Equipment, Chemical Process Equipment, Pharmaceutical Equipment, Stainless Steel Manufacturing, and Customized Industrial Process Equipment.",
        "I firmly believe that safety, discipline, teamwork, quality, and customer satisfaction are the cornerstones of every successful industrial project. My mission is to ensure that every installation is executed with precision, every project is delivered on time, and every customer receives dependable engineering solutions that meet the highest industry standards.",
        "With 14+ years of professional experience, I remain committed to supporting the continued growth of GRF Dynamic Engineering through exceptional site management, technical expertise, and dedicated project execution. My goal is to contribute to the successful completion of every project by delivering excellence, reliability, and long-term value to our clients while upholding the company's reputation for quality and professionalism."
      ],
      specialties: [
        "Industrial Equipment Installation",
        "Site Management & Coordination",
        "Equipment Alignment & Leveling",
        "Manufacturing & Welding Supervision",
        "Testing & Commissioning Procedures",
        "Safety Compliance & Resource Management",
        "Manpower Management",
        "Site Inspections"
      ],
      productsSpecialty: [
        "MS & SS Reactors",
        "Limpeted & Jacketed Reactors",
        "Pressure Vessels",
        "Heat Exchangers",
        "Storage Tanks",
        "Mixing Tanks",
        "Air Receivers",
        "Dairy Processing Equipment",
        "Chemical Process Equipment",
        "Pharmaceutical Equipment",
        "Stainless Steel Manufacturing",
        "Customized Industrial Process Equipment"
      ]
    },
    {
      name: "Zainul Abidin",
      image: zainulAbidinImg,
      role: "Technical & Drawing Engineer",
      experience: "15+ Years",
      shortBio: "Zainul Abidin is a Technical & Drawing Engineer with over 15 years of experience in engineering design, technical drawing, industrial manufacturing, assembly operations, quality assurance, and project execution.",
      fullBio: [
        "I am Zainul Abidin, serving as the Technical & Drawing Engineer at GRF Dynamic Engineering, with more than 15 years of professional experience in engineering design, technical drawing, industrial manufacturing, quality control, quality assurance, and project execution. Throughout my career, I have been dedicated to delivering technically accurate engineering solutions, innovative designs, and high-quality manufacturing support while maintaining the highest standards of precision, safety, and operational excellence.",
        "With over 15 years of hands-on industrial experience, I have developed extensive expertise in engineering design, production drawings, process equipment manufacturing, technical documentation, production planning, inspection, and engineering coordination. My practical knowledge and technical capabilities enable me to transform complex engineering concepts into efficient, reliable, and cost-effective manufacturing solutions that meet customer requirements and international engineering standards.",
        "As the Technical & Drawing Engineer at GRF Dynamic Engineering, I play a vital role in the design and development of industrial process equipment. My responsibilities include preparing and reviewing engineering drawings, developing manufacturing and assembly drawings, creating General Arrangement (GA) drawings, interpreting technical specifications, coordinating with production teams, and providing complete technical support throughout the manufacturing process. I ensure that every drawing is accurate, practical for manufacturing, and fully compliant with project specifications and engineering standards.",
        "I work closely with project managers, production engineers, quality assurance teams, and clients to ensure smooth coordination between design and manufacturing. My responsibilities also include design verification, material estimation, bill of materials (BOM) preparation, production planning support, technical problem-solving, drawing revisions, and engineering documentation. Through careful planning and attention to detail, I help ensure that every project is completed with maximum efficiency, accuracy, and quality.",
        "Throughout my professional career, I have successfully contributed to the design, engineering, and manufacturing of customized industrial equipment for the chemical, pharmaceutical, dairy, food processing, cosmetic, water treatment, paints, petrochemical, and other process industries. My expertise enables me to optimize designs for better manufacturing efficiency, reduce production costs, improve product performance, and maintain strict quality standards throughout every stage of production.",
        "My core areas of expertise include: Engineering Design & Development, Technical & Production Drawings, General Arrangement (GA) Drawings, Manufacturing & Production Support, Material Estimation & Bill of Materials (BOM), Equipment Detailing & Assembly Drawings, Inspection & Quality Assurance, Technical Documentation, Engineering Coordination, Process Equipment Design, Problem Solving & Design Optimization, Production Planning & Manufacturing Support.",
        "At GRF Dynamic Engineering, we specialize in the design and manufacturing of premium industrial process equipment, including MS & SS Reactors, Limpeted & Jacketed Reactors, Pressure Vessels, Heat Exchangers, Storage Tanks, Mixing Tanks, Air Receivers, Chemical Process Equipment, Pharmaceutical Equipment, Dairy Processing Equipment, Stainless Steel Manufacturing, and Customized Industrial Process Equipment.",
        "I firmly believe that precision, innovation, technical excellence, and continuous improvement are the cornerstones of successful engineering. Every engineering drawing serves as the foundation of a successful manufacturing project, and I am committed to ensuring that every design is technically sound, practical, and optimized for efficient production. My objective is to develop engineering solutions that enhance productivity, improve equipment reliability, and deliver long-term value to our clients.",
        "With 15+ years of professional experience, I continue to contribute to the growth and success of GRF Dynamic Engineering by combining technical expertise, practical industry knowledge, and innovative thinking. I remain committed to delivering world-class engineering drawings, customized technical solutions, and manufacturing excellence while supporting our clients with reliable, efficient, and high-performance industrial process equipment. My dedication to engineering quality, customer satisfaction, and continuous innovation drives me to achieve excellence in every project and strengthen the reputation of GRF Dynamic Engineering as a trusted name in industrial process equipment manufacturing."
      ],
      specialties: [
        "Engineering Design & Development",
        "Technical & Production Drawings",
        "General Arrangement (GA) Drawings",
        "Manufacturing & Production Support",
        "Material Estimation & Bill of Materials (BOM)",
        "Equipment Detailing & Assembly Drawings",
        "Inspection & Quality Assurance",
        "Technical Documentation",
        "Engineering Coordination",
        "Process Equipment Design",
        "Problem Solving & Design Optimization",
        "Production Planning"
      ],
      productsSpecialty: [
        "MS & SS Reactors",
        "Limpeted & Jacketed Reactors",
        "Pressure Vessels",
        "Heat Exchangers",
        "Storage Tanks",
        "Mixing Tanks",
        "Air Receivers",
        "Chemical Process Equipment",
        "Pharmaceutical Equipment",
        "Dairy Processing Equipment",
        "Stainless Steel Manufacturing",
        "Customized Industrial Process Equipment"
      ]
    },
    {
      name: "Sajid Malik",
      image: sajidMalikImg,
      role: "Supervisor | Project & Erection Specialist",
      experience: "10 Years",
      shortBio: "Sajid Malik is a dedicated and experienced Supervisor with 10 years of expertise in the manufacturing, erection, installation, testing, and commissioning of industrial process equipment.",
      fullBio: [
        "I am Sajid Malik, a dedicated and experienced Supervisor at GRF Dynamic Engineering, with 10 years of expertise in the manufacturing, erection, installation, testing, and commissioning of industrial process equipment. I have successfully supervised projects involving SS/MS storage tanks, pressure vessels, reactors, mixing vessels, condensers, milk processing plants, dairy equipment, and process piping systems.",
        "As a Supervisor, he is responsible for overseeing daily site activities, supervising skilled manpower, ensuring work is executed according to approved drawings and technical specifications, and maintaining the highest standards of quality and safety. He coordinates closely with site engineers and project teams to ensure smooth project execution and timely completion.",
        "With strong technical knowledge, practical problem-solving skills, and a commitment to quality workmanship, Sajid Malik has earned a reputation for reliability and professionalism. His dedication to delivering projects safely, efficiently, and on schedule makes him a valuable member of the GRF Dynamic Engineering team."
      ],
      specialties: [
        "Site Activity Supervision",
        "Manpower Coordination",
        "Drawing Compliance Verification",
        "Quality & Safety Control",
        "Process Piping Installation",
        "Equipment Testing & Commissioning",
        "Project Coordination",
        "Technical Problem-Solving"
      ],
      productsSpecialty: [
        "SS/MS Storage Tanks",
        "Pressure Vessels",
        "MS & SS Reactors",
        "Mixing Vessels",
        "Condensers",
        "Milk Processing Plants & Dairy Equipment",
        "Process Piping Systems",
        "Customized Industrial Process Equipment"
      ]
    }
  ];

  const activeCapability = capabilities.find(c => c.id === activeCapId) || capabilities[0];
  const activeTimeline = timeline[activeYearIndex];

  return (
    <div className="py-16 bg-brand-obsidian min-h-screen relative overflow-hidden">

      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fadeIn text-left">

        {/* Page Header */}
        <div className="border-b border-white/[0.04] pb-10 mb-16">
          <span className="text-brand-accent text-xs font-bold uppercase tracking-widest bg-brand-accent/5 border border-brand-accent/20 px-3 py-1.5 rounded-sm font-mono">
            ESTABLISHED IN SAHARANPUR, UP // EST. 2011
          </span>
          <h1 className="heading-font text-4xl sm:text-5xl font-extrabold text-white mt-4 uppercase">
            About GRF Dynamic Engineering
          </h1>
          <div className="h-0.5 w-12 bg-brand-accent mt-4"></div>
        </div>

        {/* Company Story Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-24">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] font-mono text-brand-accent uppercase tracking-widest block font-bold">
              // COMPANY OVERVIEW
            </span>
            <h2 className="heading-font text-2xl sm:text-3xl text-white font-black uppercase leading-tight">
              Manufacturing Excellence Since 2011
            </h2>
            <div className="space-y-4 text-slate-400 text-sm sm:text-base leading-relaxed font-light">
              <p>
                Since its establishment in 2011, G R F Dynamic Engineering has remained committed to delivering high-quality industrial process equipment, storage solutions, and customized engineering systems that meet the evolving requirements of modern industries. Headquartered in the industrial city of Saharanpur, Uttar Pradesh, the company has steadily grown from a regional fabrication unit into a trusted manufacturer serving customers across India. Through a combination of engineering expertise, modern manufacturing technology, premium-quality materials, and an uncompromising commitment to quality, we have built a strong reputation for delivering reliable industrial equipment that performs consistently in demanding operating environments.
              </p>
              {isHistoryExpanded && (
                <>
                  <p>
                    Over the years, our success has been driven by a clear vision—to manufacture industrial equipment that combines durability, precision, safety, and operational efficiency. Every project we undertake reflects our dedication to engineering excellence and customer satisfaction. Whether manufacturing pressure vessels, storage tanks, chemical reactors, heat exchangers, mixing systems, process vessels, CIP systems, dairy processing equipment, pharmaceutical tanks, or customized industrial solutions, we approach every assignment with the same level of professionalism, technical expertise, and attention to detail.
                  </p>
                  <p>
                    Located in one of North India's rapidly developing industrial regions, our manufacturing facility is equipped with modern infrastructure designed to support the complete fabrication process under one roof. Our state-of-the-art workshop features advanced fabrication machinery, CNC cutting equipment, precision welding stations, sheet metal processing machines, polishing units, material handling systems, and comprehensive quality inspection facilities. This integrated manufacturing environment allows us to maintain complete control over every stage of production while ensuring consistency, efficiency, and superior product quality.
                  </p>
                  <p>
                    One of the key strengths of G R F Dynamic Engineering is our ability to manufacture customized industrial equipment according to the exact operational requirements of our clients. We recognize that every manufacturing facility has unique production processes, installation constraints, capacity requirements, and industry regulations. Rather than offering standardized equipment, our engineering team works closely with customers to develop tailor-made solutions that integrate seamlessly into existing production systems. From equipment dimensions and vessel configurations to nozzle orientations, piping arrangements, insulation requirements, automation compatibility, and finishing specifications, every component is designed to deliver maximum operational efficiency.
                  </p>
                  <p>
                    Our engineering process begins with detailed technical consultation and project evaluation. Experienced engineers carefully analyze process requirements, operating conditions, pressure ratings, temperature ranges, material compatibility, and production objectives before initiating equipment design. Using advanced CAD software, 3D modeling tools, and engineering calculations, our design team develops accurate manufacturing drawings that optimize structural integrity, performance, safety, and ease of maintenance. Every design undergoes multiple stages of review to ensure complete compliance with applicable engineering standards and customer specifications before fabrication begins.
                  </p>
                  <p>
                    Material selection plays a crucial role in ensuring product reliability and long service life. We manufacture equipment using premium-grade Stainless Steel SS304, SS316, SS316L, Duplex Stainless Steel, Mild Steel (MS), and other specialized alloys depending on the application. Every raw material is procured from trusted suppliers and undergoes rigorous quality verification before entering production. Material certification, chemical composition verification, mechanical property inspection, and traceability documentation ensure that every component meets stringent quality requirements and industry standards.
                  </p>
                  <p>
                    Our fabrication process combines skilled craftsmanship with modern manufacturing technology to achieve exceptional precision and durability. Precision cutting, CNC machining, rolling, bending, forming, TIG welding, MIG welding, arc welding, polishing, and assembly operations are performed by experienced professionals who understand the importance of accuracy in industrial fabrication. Every weld joint, pressure-retaining component, structural support, flange connection, and fabricated assembly is carefully inspected throughout the manufacturing process to ensure maximum strength, dimensional accuracy, and long-term reliability.
                  </p>
                  <p>
                    Quality assurance is embedded into every stage of production. Our dedicated quality control team performs comprehensive inspections and testing procedures to ensure every product meets the highest standards of safety and performance. Inspection activities include dimensional verification, visual inspection, material traceability, welding inspection, Non-Destructive Testing (NDT), hydrostatic pressure testing, pneumatic leak testing, vacuum testing where applicable, and final performance evaluation. These rigorous inspection procedures help eliminate potential defects before delivery while ensuring dependable performance under demanding industrial conditions.
                  </p>
                  <p>
                    We strictly follow nationally and internationally recognized engineering standards during design and manufacturing. Depending on customer requirements and application, our products are manufactured in accordance with standards such as ASME Section VIII, API 650, ISO sanitary guidelines, and other applicable industrial codes. Compliance with these standards ensures that every product satisfies strict requirements related to structural integrity, pressure containment, hygienic design, operational safety, and long-term reliability.
                  </p>
                  <p>
                    Serving diverse industrial sectors has enabled us to develop extensive expertise across multiple process industries. Our equipment is widely used in pharmaceutical manufacturing, dairy processing, food and beverage production, chemical processing, oil and gas, water treatment plants, distilleries, breweries, cosmetics, power generation, fertilizer plants, and other industrial processing facilities. Each industry presents unique operational challenges, and our engineering team possesses the technical knowledge required to design equipment capable of meeting these specialized requirements with confidence.
                  </p>
                  <p>
                    Innovation remains a driving force behind our manufacturing excellence. We continuously invest in advanced production technologies, modern fabrication methods, engineering software, automation capabilities, and workforce development to improve product quality and manufacturing efficiency. Continuous process improvement enables us to reduce production lead times, enhance fabrication accuracy, optimize resource utilization, and consistently deliver high-quality industrial equipment that exceeds customer expectations.
                  </p>
                  <p>
                    Beyond manufacturing, our commitment extends throughout the complete project lifecycle. We provide comprehensive support that includes equipment installation, commissioning, technical consultation, maintenance guidance, operational assistance, and responsive after-sales service. Our experienced technical team works closely with customers to ensure smooth installation, reliable commissioning, and optimal equipment performance throughout its operational life. This long-term partnership approach has earned the trust of clients across India who rely on our engineering expertise for their critical industrial operations.
                  </p>
                  <p>
                    Safety and environmental responsibility are integral aspects of our manufacturing philosophy. Every product is designed with careful consideration for operator safety, process reliability, and environmental protection. We implement strict workplace safety practices, responsible manufacturing procedures, efficient material utilization, and quality-focused production methods that contribute to sustainable industrial operations while minimizing operational risks.
                  </p>
                  <p>
                    Over more than a decade of dedicated service, G R F Dynamic Engineering has established itself as a trusted name in industrial fabrication by consistently delivering products that combine precision engineering, superior craftsmanship, durable construction, and dependable performance. Our commitment to quality, innovation, customer satisfaction, and continuous improvement has enabled us to build lasting relationships with businesses across multiple industries. As we continue to grow, we remain focused on our mission of providing world-class industrial process equipment and customized engineering solutions that help organizations improve productivity, ensure operational safety, and achieve sustainable long-term success. Every project we undertake reflects our passion for engineering excellence and our commitment to delivering manufacturing solutions that stand the test of time.
                  </p>
                </>
              )}
            </div>

            <div className="pt-2">
              <button
                onClick={() => setIsHistoryExpanded(!isHistoryExpanded)}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-accent hover:text-white uppercase tracking-wider transition-colors cursor-pointer"
              >
                {isHistoryExpanded ? 'View Less -' : 'View More +'}
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-[#0a0d18] border border-white/5 p-4 rounded-sm">
                <span className="text-slate-500 font-mono text-[9px] block uppercase">PROJECT RECORD</span>
                <span className="text-xl font-bold text-white font-mono mt-1 block">800+ Vessels</span>
              </div>
              <div className="bg-[#0a0d18] border border-white/5 p-4 rounded-sm">
                <span className="text-slate-500 font-mono text-[9px] block uppercase">QUALITY AUDITS</span>
                <span className="text-xl font-bold text-brand-accent font-mono mt-1 block">ASME Certified</span>
              </div>
            </div>
          </div>

          {/* Interactive Workshop Floor Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative border border-white/10 bg-[#0a0d18] rounded-sm overflow-hidden p-3 group shadow-2xl">
              <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none"></div>
              <div className="absolute top-2 left-2 text-[7px] font-mono text-slate-500">SYS_LOC: 29.96N 77.55E // SAHARANPUR</div>
              <div className="absolute top-2 right-2 text-[7px] font-mono text-slate-500">DWG: GRF-ABOUT-01</div>
              <div className="absolute bottom-2 right-2 text-[7px] font-mono text-slate-500">SCALE: NOT TO SCALE</div>

              <img
                src={workshopImg}
                alt="GRF Workshop Floor"
                className="w-full h-72 object-cover rounded-xs border border-white/5 opacity-70 group-hover:opacity-90 transition-opacity duration-300 select-none"
              />

              <div className="absolute bottom-5 left-5 right-5 bg-brand-obsidian/95 border border-brand-accent/30 p-3 rounded-xs backdrop-blur-md">
                <div className="flex justify-between items-center text-[9px] font-mono mb-1 text-slate-400">
                  <span>FACILITY: SAHARANPUR WORKSHOP</span>
                  <span className="text-brand-accent font-bold animate-pulse">● ACTIVE</span>
                </div>
                <p className="heading-font text-white font-bold text-xs uppercase tracking-wide">
                  Main Production Workshop Floor
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Factory Registry & Board Info */}
        <section className="mb-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Registered Board Image Card */}
          <div className="lg:col-span-5 relative border border-white/10 bg-[#0a0d18] rounded-sm overflow-hidden p-3 shadow-2xl group">
            <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none"></div>
            <div className="absolute top-2 left-2 text-[7px] font-mono text-slate-500">SYS_REG: GSTIN-09DSUPA8591K1ZS</div>
            <div className="absolute top-2 right-2 text-[7px] font-mono text-slate-500">SIGNAGE: BOARD-01</div>
            <div className="absolute bottom-2 right-2 text-[7px] font-mono text-slate-500">STATUS: VERIFIED</div>

            <img
              src={grfImage}
              alt="GRF Dynamic Engineering Official Board"
              className="w-full h-auto object-contain rounded-xs border border-white/5 opacity-85 group-hover:opacity-100 transition-opacity duration-300 select-none"
            />

            <div className="mt-3 bg-brand-obsidian/95 border border-brand-accent/25 p-3 rounded-xs text-[10px] font-mono">
              <div className="flex justify-between items-center mb-1.5 text-slate-400">
                <span>UNIT SIGNAGE</span>
                <span className="text-brand-accent font-bold">● REGISTERED</span>
              </div>
              <p className="heading-font text-white font-bold uppercase text-[11px] tracking-wide">
                Official Production Unit Board
              </p>
            </div>
          </div>

          {/* Right: Technical Credentials & Registrations */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-[10px] font-mono text-brand-accent uppercase tracking-widest block font-bold">
              // CORPORATE REGISTRATION & CREDENTIALS
            </span>
            <h2 className="heading-font text-2xl sm:text-3xl text-white font-black uppercase leading-tight">
              Official Manufacturing Registry
            </h2>
            <div className="space-y-4 text-slate-400 text-sm sm:text-base leading-relaxed font-light">
              <p>
                G R F Dynamic Engineering operates with a strong commitment to transparency, legal compliance, and responsible manufacturing practices. Since our establishment in 2011, we have ensured that every aspect of our business is conducted in accordance with applicable government regulations and industry standards. Our manufacturing facility in Saharanpur, Uttar Pradesh, is officially registered and operates under the necessary statutory requirements, enabling us to serve customers across India with complete confidence. By maintaining full regulatory compliance, we provide our clients with the assurance that they are partnering with a reliable and professionally managed engineering organization.
              </p>
              {isRegistryExpanded && (
                <>
                  <p>
                    As a recognized industrial manufacturer, we maintain all required business registrations and taxation records in accordance with Indian regulatory authorities. Our operations are supported by a valid Goods and Services Tax Identification Number (GSTIN), allowing us to conduct business efficiently while ensuring complete transparency in commercial transactions. All customer invoices, quotations, purchase orders, and related documentation are processed through our registered business entity, ensuring compliance with applicable taxation laws and financial regulations. This systematic approach reflects our dedication to ethical business practices and long-term customer trust.
                  </p>
                  <p>
                    Our manufacturing facility is designed to support the complete production lifecycle of industrial process equipment under one roof. The factory premises accommodate modern fabrication infrastructure, precision machining equipment, advanced welding facilities, sheet metal processing units, polishing stations, quality inspection areas, and material handling systems. Every department within the facility is organized to maintain smooth workflow, production efficiency, and strict quality control throughout the manufacturing process. By integrating design, fabrication, testing, and dispatch operations within a single facility, we ensure better coordination, faster project execution, and consistent product quality.
                  </p>
                  <p>
                    To maintain complete manufacturing transparency, our production specifications, factory information, and approved product categories are properly documented and maintained within our operational records. Customers visiting our manufacturing facility can gain a comprehensive understanding of our production capabilities, engineering processes, quality assurance systems, and manufacturing infrastructure. This openness reflects our confidence in the quality of our work and our commitment to building long-term business relationships based on honesty, professionalism, and accountability.
                  </p>
                  <p>
                    Every product manufactured by G R F Dynamic Engineering is produced using documented manufacturing procedures and established quality management practices. From raw material procurement to final inspection, each stage of production is carefully monitored to ensure compliance with customer specifications and applicable engineering standards. Material traceability, fabrication records, welding documentation, inspection reports, and testing procedures are maintained throughout the manufacturing process, ensuring consistency, reliability, and complete production accountability. These documented processes help us maintain superior quality while providing customers with confidence in every product we deliver.
                  </p>
                  <p>
                    Compliance is not limited to statutory registrations alone. We continuously strive to follow recognized engineering practices, quality standards, and safety guidelines that contribute to dependable industrial equipment manufacturing. Our engineering team works in accordance with established design principles and industry-specific requirements to ensure that every pressure vessel, storage tank, chemical reactor, heat exchanger, and customized process system is manufactured with precision, durability, and operational reliability. This disciplined approach allows us to consistently deliver products that meet demanding industrial applications across pharmaceutical, dairy, food processing, chemical, oil and gas, water treatment, and other process industries.
                  </p>
                  <p>
                    At G R F Dynamic Engineering, regulatory compliance represents more than a legal obligation—it reflects our commitment to integrity, professionalism, and customer confidence. By maintaining officially registered operations, transparent manufacturing practices, documented production processes, and responsible business ethics, we continue to strengthen our reputation as a trusted engineering and manufacturing partner. Our focus on compliance, quality, and accountability ensures that every customer receives dependable industrial solutions backed by a professionally managed organization dedicated to excellence in manufacturing.
                  </p>
                </>
              )}
            </div>

            <div className="pt-2">
              <button
                onClick={() => setIsRegistryExpanded(!isRegistryExpanded)}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-accent hover:text-white uppercase tracking-wider transition-colors cursor-pointer"
              >
                {isRegistryExpanded ? 'View Less -' : 'View More +'}
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#0a0d18] border border-white/5 p-4 rounded-sm relative group overflow-hidden">
                <div className="absolute top-0 left-0 h-[2px] bg-brand-accent w-0 group-hover:w-full transition-all duration-300"></div>
                <span className="text-slate-500 font-mono text-[9px] block uppercase">GSTIN REGISTRATION</span>
                <span className="text-sm font-bold text-white font-mono mt-1.5 block">09DSUPA8591K1ZS</span>
              </div>
              <div className="bg-[#0a0d18] border border-white/5 p-4 rounded-sm relative group overflow-hidden">
                <div className="absolute top-0 left-0 h-[2px] bg-blue-500 w-0 group-hover:w-full transition-all duration-300"></div>
                <span className="text-slate-500 font-mono text-[9px] block uppercase">REGISTERED ENTITY</span>
                <span className="text-sm font-bold text-brand-accent font-mono mt-1.5 block">G.R.F. DYNAMIC ENGINEERING</span>
              </div>
            </div>

            <div className="border-t border-white/[0.04] pt-5 mt-2 space-y-4">
              <span className="text-[8px] font-mono text-brand-accent uppercase tracking-widest block">
                // FACTORY COORDINATES & LOCATIONS
              </span>

              <div className="grid grid-cols-1 gap-3 font-mono text-[10px]">
                <div className="p-3 bg-brand-charcoal/50 border border-white/5 rounded-xs flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                  <span className="text-slate-500 uppercase">PRODUCTION UNIT ADDRESS:</span>
                  <span className="text-white font-bold text-right sm:max-w-md">
                    Plot No. 5253, Annu Vihar Colony, Kailashpur, Saharanpur, U.P.
                  </span>
                </div>
                <div className="p-3 bg-brand-charcoal/50 border border-white/5 rounded-xs flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                  <span className="text-slate-500 uppercase">CORPORATE OFFICE:</span>
                  <span className="text-white font-bold text-right sm:max-w-md">
                    Chaudhary Market, Laxman Puram Colony, Opp. Transport Nagar, Saharanpur, U.P.
                  </span>
                </div>
                <div className="p-3 bg-brand-charcoal/50 border border-white/5 rounded-xs flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                  <span className="text-slate-500 uppercase">OFFICIAL CONTACT:</span>
                  <span className="text-brand-accent font-bold">
                    +91 95575 30193 / +91 86309 62561
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Milestone Timeline */}
        <section className="mb-28 bg-[#0a0d18]/45 border border-white/5 rounded-sm p-6 sm:p-10 relative overflow-hidden">
          <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none"></div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 border-b border-white/[0.04] pb-6 relative z-10">
            <div>
              <span className="text-[10px] font-mono text-brand-accent uppercase tracking-widest block">// CHRONOLOGICAL PROGRESS</span>
              <h2 className="heading-font text-2xl text-white font-bold uppercase">
                Interactive Journey & Milestones
              </h2>
            </div>
            <div className="text-[10px] font-mono text-slate-500 bg-brand-obsidian px-3 py-1.5 border border-white/10 rounded-sm">
              CLICK A YEAR TO LOAD RECORD DATA
            </div>
          </div>

          {/* Timeline Selector Track */}
          <div className="relative mb-12 px-4 z-10">
            <div className="absolute left-4 right-4 top-1/2 h-0.5 bg-white/10 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute left-4 top-1/2 h-0.5 bg-brand-accent -translate-y-1/2 pointer-events-none transition-all duration-300"
              style={{ width: `${(activeYearIndex / (timeline.length - 1)) * 95}%` }}></div>

            <div className="relative flex justify-between items-center">
              {timeline.map((item, index) => {
                const isActive = index === activeYearIndex;
                return (
                  <button
                    key={item.year}
                    onClick={() => setActiveYearIndex(index)}
                    className="group flex flex-col items-center focus:outline-none cursor-pointer"
                  >
                    <span className={`text-xs font-mono font-bold transition-all duration-300 pb-2 block ${isActive ? 'text-brand-accent scale-110' : 'text-slate-500 group-hover:text-slate-300'}`}>
                      {item.year}
                    </span>
                    <span className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 z-10 ${isActive
                      ? 'bg-brand-accent border-brand-accent shadow-md shadow-brand-accent/50 scale-125'
                      : index < activeYearIndex
                        ? 'bg-brand-accent/30 border-brand-accent'
                        : 'bg-brand-charcoal border-white/20 group-hover:border-brand-accent/50'
                      }`}></span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Timeline Details Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">

            {/* Description Area */}
            <div className="lg:col-span-7 bg-brand-obsidian/60 border border-white/5 p-6 rounded-sm flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="inline-block bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-[8px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-widest font-mono">
                  {activeTimeline.subtitle}
                </span>
                <h3 className="heading-font text-white text-lg font-bold uppercase tracking-wider">
                  {activeTimeline.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                  {activeTimeline.desc}
                </p>
              </div>
              <div className="text-[9px] font-mono text-slate-500 pt-3 border-t border-white/5 flex items-center gap-1.5">
                <span>YEAR OF MANUFACTURE: {activeTimeline.year}</span>
                <span>//</span>
                <span>STATUS: ARCHIVED</span>
              </div>
            </div>

            {/* Spec Sheet Panel */}
            <div className="lg:col-span-5 bg-brand-charcoal/80 border border-white/5 p-6 rounded-sm relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-2 left-2 border-t border-l border-white/10 w-2.5 h-2.5"></div>
              <div className="absolute top-2 right-2 border-t border-r border-white/10 w-2.5 h-2.5"></div>
              <div className="absolute bottom-2 left-2 border-b border-l border-white/10 w-2.5 h-2.5"></div>
              <div className="absolute bottom-2 right-2 border-b border-r border-white/10 w-2.5 h-2.5"></div>

              <div className="space-y-4">
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block border-b border-white/[0.04] pb-2">
                  RECORD_METADATA_SHEET
                </span>

                <div className="space-y-2.5 font-mono text-[10px]">
                  {Object.entries(activeTimeline.stats).map(([label, val]) => (
                    <div key={label} className="flex justify-between border-b border-white/[0.03] pb-1.5">
                      <span className="text-slate-500 uppercase">{label}:</span>
                      <span className="text-white font-bold">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 text-center">
                <span className="text-[7px] tracking-widest text-brand-accent font-bold font-mono">
                  VERIFIED CAD DATA SHEET // GRF-SYS-{activeTimeline.year}
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* Manufacturing Capabilities Showroom */}
        <section className="mb-28">
          <div className="mb-10">
            <span className="text-[10px] font-mono text-brand-accent uppercase tracking-widest block">// CAPABILITIES CONSOLE</span>
            <h2 className="heading-font text-2xl sm:text-3xl text-white font-bold uppercase mt-1">
              Industrial Manufacturing Capabilities
            </h2>
            <div className="h-px bg-white/[0.04] w-full mt-3"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Capability Selectors & Mobile Inline Content */}
            <div className="lg:col-span-5 space-y-3">
              {capabilities.map((cap) => {
                const isActive = cap.id === activeCapId;
                return (
                  <div key={cap.id} id={`cap-container-${cap.id}`} className="space-y-3 scroll-mt-24">
                    <button
                      onClick={() => {
                        setActiveCapId(cap.id);
                        setIsCapabilityExpanded(false);
                        if (window.innerWidth < 1024) {
                          setTimeout(() => {
                            const el = document.getElementById(`cap-container-${cap.id}`);
                            if (el) {
                              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                          }, 120);
                        }
                      }}
                      className={`w-full text-left p-4 sm:p-5 rounded-sm border transition-all duration-300 cursor-pointer flex gap-4 ${isActive
                        ? 'bg-brand-accent/5 border-brand-accent text-brand-accent shadow-md shadow-brand-accent/[0.02]'
                        : 'bg-brand-steel/10 border-white/5 hover:border-white/20 text-slate-400 hover:text-slate-200'
                        }`}
                    >
                      <div className={`heading-font font-bold text-xs font-mono shrink-0 ${isActive ? 'text-brand-accent' : 'text-slate-600'}`}>
                        [0{cap.id}]
                      </div>
                      <div className="space-y-1">
                        <h3 className={`heading-font text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors ${isActive ? 'text-white' : 'text-slate-300'}`}>
                          {cap.title}
                        </h3>
                        <p className="text-[10px] opacity-75 line-clamp-1 leading-normal font-light">
                          {cap.short}
                        </p>
                      </div>
                    </button>

                    {/* Inline Content (Mobile Only) */}
                    {isActive && (
                      <div className="block lg:hidden bg-[#0a0d18]/45 border border-white/5 rounded-sm p-5 relative overflow-hidden flex flex-col gap-5 shadow-2xl animate-fadeIn">
                        <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none"></div>
                        {/* CAD blueprint style corner markers */}
                        <div className="absolute top-2 left-2 border-t border-l border-brand-accent/20 w-3 h-3"></div>
                        <div className="absolute top-2 right-2 border-t border-r border-brand-accent/20 w-3 h-3"></div>
                        <div className="absolute bottom-2 left-2 border-b border-l border-brand-accent/20 w-3 h-3"></div>
                        <div className="absolute bottom-2 right-2 border-b border-r border-brand-accent/20 w-3 h-3"></div>

                        {/* Photo Area / Certificates Grid */}
                        {cap.id === 6 ? (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* ISO Certificate */}
                            <div className="bg-brand-charcoal/50 p-4 rounded-xs border border-white/5 hover:border-brand-accent/30 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden">
                              <div className="absolute top-0 right-0 w-12 h-12 pointer-events-none opacity-5 group-hover:opacity-10 transition-opacity">
                                <svg className="w-full h-full text-brand-accent" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                              </div>
                              <div className="space-y-2">
                                <div className="h-7 w-7 rounded-sm bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent">
                                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                  </svg>
                                </div>
                                <h4 className="heading-font text-white font-bold text-xs uppercase tracking-wide group-hover:text-brand-accent transition-colors">
                                  ISO 9001:2015 Cert
                                </h4>
                                <p className="text-slate-400 text-[10px] leading-relaxed font-light line-clamp-2">
                                  Quality Management Systems certification verifying our adherence to strict manufacturing, design, and welding standards.
                                </p>
                              </div>
                              <div className="pt-3 mt-auto">
                                <a
                                  href="/certificates/GRF DYNAMIC ENGINEERING 9001 2015 Q2A.pdf"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-[10px] font-bold text-brand-accent hover:text-white uppercase tracking-wider transition-colors font-mono cursor-pointer"
                                >
                                  PDF
                                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </svg>
                                </a>
                              </div>
                            </div>

                            {/* GST Certificate */}
                            <div className="bg-brand-charcoal/50 p-4 rounded-xs border border-white/5 hover:border-brand-accent/30 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden">
                              <div className="absolute top-0 right-0 w-12 h-12 pointer-events-none opacity-5 group-hover:opacity-10 transition-opacity">
                                <svg className="w-full h-full text-brand-accent" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                              </div>
                              <div className="space-y-2">
                                <div className="h-7 w-7 rounded-sm bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent">
                                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                  </svg>
                                </div>
                                <h4 className="heading-font text-white font-bold text-xs uppercase tracking-wide group-hover:text-brand-accent transition-colors">
                                  GST Certificate
                                </h4>
                                <p className="text-slate-400 text-[10px] leading-relaxed font-light line-clamp-2">
                                  Official Goods and Services Tax registration certificate issued by the Government of India for legal business operations.
                                </p>
                              </div>
                              <div className="pt-3 mt-auto">
                                <a
                                  href="/certificates/1.GST CERTIFICATE  NEW.pdf"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-[10px] font-bold text-brand-accent hover:text-white uppercase tracking-wider transition-colors font-mono cursor-pointer"
                                >
                                  PDF
                                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </svg>
                                </a>
                              </div>
                            </div>

                            {/* MSME Udyam */}
                            <div className="bg-brand-charcoal/50 p-4 rounded-xs border border-white/5 hover:border-brand-accent/30 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden">
                              <div className="absolute top-0 right-0 w-12 h-12 pointer-events-none opacity-5 group-hover:opacity-10 transition-opacity">
                                <svg className="w-full h-full text-brand-accent" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                              </div>
                              <div className="space-y-2">
                                <div className="h-7 w-7 rounded-sm bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent">
                                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                  </svg>
                                </div>
                                <h4 className="heading-font text-white font-bold text-xs uppercase tracking-wide group-hover:text-brand-accent transition-colors">
                                  Udyam Certificate
                                </h4>
                                <p className="text-slate-400 text-[10px] leading-relaxed font-light line-clamp-2">
                                  Ministry of Micro, Small & Medium Enterprises registration certificate confirming national compliance and recognition.
                                </p>
                              </div>
                              <div className="pt-3 mt-auto">
                                <a
                                  href="/certificates/Udhyam GRF Dynamic Engineering En (1).pdf"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-[10px] font-bold text-brand-accent hover:text-white uppercase tracking-wider transition-colors font-mono cursor-pointer"
                                >
                                  PDF
                                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </svg>
                                </a>
                              </div>
                            </div>

                            {/* IEC Certificate */}
                            <div className="bg-brand-charcoal/50 p-4 rounded-xs border border-white/5 hover:border-brand-accent/30 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden">
                              <div className="absolute top-0 right-0 w-12 h-12 pointer-events-none opacity-5 group-hover:opacity-10 transition-opacity">
                                <svg className="w-full h-full text-brand-accent" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2a2.5 2.5 0 002.5-2.5V8a2 2 0 00-2-2h-1.5a3 3 0 01-3-3V3.055M11 12a1 1 0 100-2 1 1 0 000 2z" />
                                </svg>
                              </div>
                              <div className="space-y-2">
                                <div className="h-7 w-7 rounded-sm bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent">
                                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2a2.5 2.5 0 002.5-2.5V8a2 2 0 00-2-2h-1.5a3 3 0 01-3-3V3.055M11 12a1 1 0 100-2 1 1 0 000 2z" />
                                  </svg>
                                </div>
                                <h4 className="heading-font text-white font-bold text-xs uppercase tracking-wide group-hover:text-brand-accent transition-colors">
                                  IEC Certificate
                                </h4>
                                <p className="text-slate-400 text-[10px] leading-relaxed font-light line-clamp-2">
                                  Import Export Code (IEC) certificate issued by the DGFT, enabling global commercial process equipment distribution.
                                </p>
                              </div>
                              <div className="pt-3 mt-auto">
                                <a
                                  href="/certificates/certificateOfIEC (1).pdf"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-[10px] font-bold text-brand-accent hover:text-white uppercase tracking-wider transition-colors font-mono cursor-pointer"
                                >
                                  PDF
                                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </svg>
                                </a>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="relative aspect-[16/9] w-full rounded-xs overflow-hidden border border-white/5 group" style={{ backgroundColor: '#0a0d18' }}>
                            <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none"></div>
                            <img
                              src={cap.image}
                              alt={cap.title}
                              className="w-full h-full object-cover opacity-80 select-none"
                            />
                            <div className="absolute top-3 left-3 border border-white/10 px-2 py-1 rounded-xs text-[8px] font-mono text-slate-400" style={{ backgroundColor: 'rgba(5, 6, 11, 0.9)' }}>
                              REF_DWG: GRF-CAP-0{cap.id}
                            </div>
                          </div>
                        )}

                        {/* Details & Specs Sheet */}
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <h3 className="heading-font text-white text-base font-bold uppercase tracking-wider">
                              {cap.title}
                            </h3>
                            <div className="text-slate-400 text-xs leading-relaxed font-light space-y-3">
                              {isCapabilityExpanded ? (
                                cap.fullDesc.map((paragraph, pIdx) => (
                                  <p key={pIdx}>{paragraph}</p>
                                ))
                              ) : (
                                <p>{cap.desc}</p>
                              )}
                            </div>
                          </div>

                          <div className="pt-1">
                            <button
                              onClick={() => setIsCapabilityExpanded(!isCapabilityExpanded)}
                              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-accent hover:text-white uppercase tracking-wider transition-colors cursor-pointer"
                            >
                              {isCapabilityExpanded ? 'View Less -' : 'View More +'}
                            </button>
                          </div>

                          <div className="border-t border-white/[0.04] pt-4 mt-2">
                            <span className="text-[8px] font-mono text-brand-accent uppercase tracking-widest block mb-3">
                              // TECHNICAL SPECIFICATIONS PARAMETERS
                            </span>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {cap.details.map((detail, dIndex) => (
                                <div key={dIndex} className="p-3 bg-brand-charcoal/50 border border-white/5 rounded-xs font-mono text-[9px]">
                                  <span className="text-slate-500 uppercase block mb-1">{detail.label}</span>
                                  <span className="text-white font-bold block">{detail.value}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column: Active Capability Details (Desktop Only) */}
            <div className="hidden lg:flex lg:col-span-7 bg-[#0a0d18]/45 border border-white/5 rounded-sm p-6 sm:p-8 relative overflow-hidden flex-col gap-6 shadow-2xl">
              <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none"></div>

              {/* CAD blueprint style corner markers */}
              <div className="absolute top-2 left-2 border-t border-l border-brand-accent/20 w-3 h-3"></div>
              <div className="absolute top-2 right-2 border-t border-r border-brand-accent/20 w-3 h-3"></div>
              <div className="absolute bottom-2 left-2 border-b border-l border-brand-accent/20 w-3 h-3"></div>
              <div className="absolute bottom-2 right-2 border-b border-r border-brand-accent/20 w-3 h-3"></div>

              {/* Photo Area / Certificates Grid */}
              {activeCapability.id === 6 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* ISO Certificate */}
                  <div className="bg-brand-charcoal/50 p-5 rounded-xs border border-white/5 hover:border-brand-accent/30 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-12 h-12 pointer-events-none opacity-5 group-hover:opacity-10 transition-opacity">
                      <svg className="w-full h-full text-brand-accent" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </div>
                    <div className="space-y-3">
                      <div className="h-8 w-8 rounded-sm bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent">
                        <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h4 className="heading-font text-white font-bold text-xs uppercase tracking-wide group-hover:text-brand-accent transition-colors">
                        ISO 9001:2015 Cert
                      </h4>
                      <p className="text-slate-400 text-[10px] leading-relaxed font-light line-clamp-2">
                        Quality Management Systems certification verifying our adherence to strict manufacturing, design, and welding standards.
                      </p>
                    </div>
                    <div className="pt-4 mt-auto">
                      <a
                        href="/certificates/GRF DYNAMIC ENGINEERING 9001 2015 Q2A.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[10px] font-bold text-brand-accent hover:text-white uppercase tracking-wider transition-colors font-mono cursor-pointer"
                      >
                        PDF
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* GST Certificate */}
                  <div className="bg-brand-charcoal/50 p-5 rounded-xs border border-white/5 hover:border-brand-accent/30 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-12 h-12 pointer-events-none opacity-5 group-hover:opacity-10 transition-opacity">
                      <svg className="w-full h-full text-brand-accent" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="space-y-3">
                      <div className="h-8 w-8 rounded-sm bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent">
                        <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h4 className="heading-font text-white font-bold text-xs uppercase tracking-wide group-hover:text-brand-accent transition-colors">
                        GST Certificate
                      </h4>
                      <p className="text-slate-400 text-[10px] leading-relaxed font-light line-clamp-2">
                        Official Goods and Services Tax registration certificate issued by the Government of India for legal business operations.
                      </p>
                    </div>
                    <div className="pt-4 mt-auto">
                      <a
                        href="/certificates/1.GST CERTIFICATE  NEW.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[10px] font-bold text-brand-accent hover:text-white uppercase tracking-wider transition-colors font-mono cursor-pointer"
                      >
                        PDF
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* MSME Udyam */}
                  <div className="bg-brand-charcoal/50 p-5 rounded-xs border border-white/5 hover:border-brand-accent/30 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-12 h-12 pointer-events-none opacity-5 group-hover:opacity-10 transition-opacity">
                      <svg className="w-full h-full text-brand-accent" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div className="space-y-3">
                      <div className="h-8 w-8 rounded-sm bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent">
                        <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h4 className="heading-font text-white font-bold text-xs uppercase tracking-wide group-hover:text-brand-accent transition-colors">
                        Udyam Certificate
                      </h4>
                      <p className="text-slate-400 text-[10px] leading-relaxed font-light line-clamp-2">
                        Ministry of Micro, Small & Medium Enterprises registration certificate confirming national compliance and recognition.
                      </p>
                    </div>
                    <div className="pt-4 mt-auto">
                      <a
                        href="/certificates/Udhyam GRF Dynamic Engineering En (1).pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[10px] font-bold text-brand-accent hover:text-white uppercase tracking-wider transition-colors font-mono cursor-pointer"
                      >
                        PDF
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* IEC Certificate */}
                  <div className="bg-brand-charcoal/50 p-5 rounded-xs border border-white/5 hover:border-brand-accent/30 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-12 h-12 pointer-events-none opacity-5 group-hover:opacity-10 transition-opacity">
                      <svg className="w-full h-full text-brand-accent" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2a2.5 2.5 0 002.5-2.5V8a2 2 0 00-2-2h-1.5a3 3 0 01-3-3V3.055M11 12a1 1 0 100-2 1 1 0 000 2z" />
                      </svg>
                    </div>
                    <div className="space-y-3">
                      <div className="h-8 w-8 rounded-sm bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent">
                        <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2a2.5 2.5 0 002.5-2.5V8a2 2 0 00-2-2h-1.5a3 3 0 01-3-3V3.055M11 12a1 1 0 100-2 1 1 0 000 2z" />
                        </svg>
                      </div>
                      <h4 className="heading-font text-white font-bold text-xs uppercase tracking-wide group-hover:text-brand-accent transition-colors">
                        IEC Certificate
                      </h4>
                      <p className="text-slate-400 text-[10px] leading-relaxed font-light line-clamp-2">
                        Import Export Code (IEC) certificate issued by the DGFT, enabling global commercial process equipment distribution.
                      </p>
                    </div>
                    <div className="pt-4 mt-auto">
                      <a
                        href="/certificates/certificateOfIEC (1).pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[10px] font-bold text-brand-accent hover:text-white uppercase tracking-wider transition-colors font-mono cursor-pointer"
                      >
                        PDF
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative aspect-[16/9] w-full rounded-xs overflow-hidden border border-white/5 group" style={{ backgroundColor: '#0a0d18' }}>
                  <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none"></div>
                  <img
                    key={activeCapability.id}
                    src={activeCapability.image}
                    alt={activeCapability.title}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500 select-none animate-fadeIn"
                  />
                  <div className="absolute top-3 left-3 border border-white/10 px-2 py-1 rounded-xs text-[8px] font-mono text-slate-400" style={{ backgroundColor: 'rgba(5, 6, 11, 0.9)' }}>
                    REF_DWG: GRF-CAP-0{activeCapability.id}
                  </div>
                </div>
              )}

              {/* Details & Specs Sheet */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="heading-font text-white text-lg font-bold uppercase tracking-wider">
                    {activeCapability.title}
                  </h3>
                  <div className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light space-y-3">
                    {isCapabilityExpanded ? (
                      activeCapability.fullDesc.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))
                    ) : (
                      <p>{activeCapability.desc}</p>
                    )}
                  </div>
                </div>

                <div className="pt-1">
                  <button
                    onClick={() => setIsCapabilityExpanded(!isCapabilityExpanded)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-accent hover:text-white uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    {isCapabilityExpanded ? 'View Less -' : 'View More +'}
                  </button>
                </div>

                <div className="border-t border-white/[0.04] pt-4 mt-2">
                  <span className="text-[8px] font-mono text-brand-accent uppercase tracking-widest block mb-3">
                    // TECHNICAL SPECIFICATIONS PARAMETERS
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeCapability.details.map((detail, dIndex) => (
                      <div key={dIndex} className="p-3 bg-brand-charcoal/50 border border-white/5 rounded-xs font-mono text-[9px] sm:text-[10px]">
                        <span className="text-slate-500 uppercase block mb-1">{detail.label}</span>
                        <span className="text-white font-bold block">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Our Leadership & Technical Experts Section */}
        <section className="mb-24">
          <div className="mb-10">
            <span className="text-[10px] font-mono text-brand-accent uppercase tracking-widest block">// CORE TEAM LEADERSHIP</span>
            <h2 className="heading-font text-2xl sm:text-3xl text-white font-bold uppercase mt-1">
              Leadership & Technical Experts
            </h2>
            <div className="h-px bg-white/[0.04] w-full mt-3"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-brand-charcoal/80 p-6 rounded-sm border border-white/5 hover:border-brand-accent/30 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden h-full">
                <div className="space-y-4">
                  <div className="aspect-[4/3] w-full bg-[#0a0d18] border border-white/5 rounded-xs flex items-center justify-center relative group overflow-hidden">
                    <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none"></div>
                    {member.image ? (
                      <>
                        <img
                          src={member.image}
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover blur-xl opacity-30 scale-110 pointer-events-none"
                        />
                        <img
                          src={member.image}
                          alt={member.name}
                          className="relative z-10 w-full h-full object-contain"
                          loading="lazy"
                        />
                      </>
                    ) : (
                      <>
                        <svg className="w-12 h-12 text-slate-700 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                        <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest mt-2 block">
                          Photo Coming Soon
                        </span>
                      </>
                    )}
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-1">
                      <h3 className="heading-font text-white font-extrabold text-sm sm:text-base uppercase tracking-wide group-hover:text-brand-accent transition-colors">
                        {member.name}
                      </h3>
                      {index === 0 && (
                        <span className="bg-brand-accent/15 text-brand-accent border border-brand-accent/20 text-[7px] font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-widest shrink-0 font-mono">
                          CEO
                        </span>
                      )}
                    </div>
                    <p className="text-[10px] font-mono text-slate-500 font-semibold uppercase tracking-wider line-clamp-1">
                      {member.role.split('|')[0].trim()}
                    </p>
                    <p className="text-slate-400 text-xs leading-relaxed font-light line-clamp-3">
                      {member.shortBio}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-auto">
                  <button
                    onClick={() => setActiveMember(member)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-brand-accent hover:text-white uppercase tracking-wider transition-colors font-mono cursor-pointer"
                  >
                    Read Full Bio
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Biography Modal */}
        {activeMember && createPortal(
          <div
            onClick={() => setActiveMember(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-[2px] flex items-center justify-center p-4 overflow-y-auto animate-fadeIn cursor-pointer"
          >
            <div
              className="bg-brand-charcoal border border-brand-accent/20 rounded-sm w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 md:p-8 relative shadow-2xl animate-scaleUp text-left cursor-default transform-gpu will-change-transform overscroll-contain"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Corner Borders */}
              <div className="absolute top-2 left-2 border-t border-l border-brand-accent/30 w-3 h-3"></div>
              <div className="absolute top-2 right-2 border-t border-r border-brand-accent/30 w-3 h-3"></div>
              <div className="absolute bottom-2 left-2 border-b border-l border-brand-accent/30 w-3 h-3"></div>
              <div className="absolute bottom-2 right-2 border-b border-r border-brand-accent/30 w-3 h-3"></div>
              <div className="absolute inset-0 blueprint-grid opacity-5 pointer-events-none"></div>

              {/* Close Button */}
              <button
                onClick={() => setActiveMember(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white hover:bg-white/[0.04] p-1.5 rounded-sm border border-transparent hover:border-white/5 transition-all duration-200 cursor-pointer"
                title="Close biography"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>

              {/* Modal Content */}
              <div className="space-y-6">
                <div>
                  <span className="text-[9px] font-mono text-brand-accent uppercase tracking-widest block mb-1">
                    GRF TECHNICAL TEAM MEMBER PROFILE // EXP: {activeMember.experience}
                  </span>
                  <h2 className="heading-font text-xl sm:text-2xl text-white font-extrabold uppercase">
                    {activeMember.name}
                  </h2>
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mt-1 border-b border-white/[0.04] pb-3">
                    {activeMember.role}
                  </p>
                </div>

                {/* Biography Text */}
                <div className="space-y-4 text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                  {activeMember.fullBio.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                {/* Grid: Core Areas of Expertise */}
                <div className="border-t border-white/[0.04] pt-5">
                  <span className="text-[8px] font-mono text-brand-accent uppercase tracking-widest block mb-3">
                    // CORE AREAS OF EXPERTISE & SPECIALTIES
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeMember.specialties.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center space-x-2 text-xs text-slate-300 font-mono">
                        <span className="text-brand-accent text-xs">■</span>
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Grid: Specialized Process Equipment */}
                <div className="border-t border-white/[0.04] pt-5">
                  <span className="text-[8px] font-mono text-brand-accent uppercase tracking-widest block mb-3">
                    // SPECIALIZED PROCESS EQUIPMENT EXPERTISE
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeMember.productsSpecialty.map((prod, prIdx) => (
                      <span key={prIdx} className="bg-brand-charcoal/80 border border-white/5 text-[9px] sm:text-[10px] text-slate-300 px-2.5 py-1 rounded-sm uppercase tracking-wide font-mono">
                        {prod}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}

        {/* Manufacturing Excellence Section */}
        <section className="mb-28">
          <div className="mb-12">
            <span className="text-[10px] font-mono text-brand-accent uppercase tracking-widest block">// MANUFACTURING STANDARD</span>
            <h2 className="heading-font text-2xl sm:text-3xl text-white font-bold uppercase mt-1">
              Manufacturing Excellence
            </h2>
            <div className="h-px bg-white/[0.04] w-full mt-3"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left side: Context and Description */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <span className="inline-block bg-brand-accent/5 border border-brand-accent/25 text-brand-accent text-[9px] font-bold px-3 py-1 uppercase tracking-widest rounded-sm font-mono">
                  Precision Engineering // Saharanpur UP
                </span>
                <p className="text-slate-350 text-sm leading-relaxed font-light">
                  At GRF Dynamic Engineering, manufacturing excellence is the result of technical expertise, precision engineering, and a highly dedicated workforce. Based in Saharanpur, Uttar Pradesh, we are a trusted manufacturer of premium industrial process equipment, serving the chemical, pharmaceutical, dairy, food processing, cosmetic, water treatment, edible oil, and allied industries with reliable and customized engineering solutions.
                </p>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                  Our manufacturing facility is equipped to manufacture a wide range of MS and SS Reactors, Limpeted & Jacketed Reactors, Pressure Vessels, Heat Exchangers, Storage Tanks, Mixing Tanks, Air Receivers, Dairy Processing Equipment, Pharmaceutical Equipment, Chemical Process Equipment, and Customized Stainless Steel Manufacturing. Every product is engineered with a strong focus on structural integrity, process efficiency, durability, and long service life to meet diverse industrial requirements.
                </p>
                <p className="text-slate-450 text-xs sm:text-sm leading-relaxed font-light">
                  The strength of GRF Dynamic Engineering lies in its experienced team of engineers, project managers, inspection professionals, technical drawing specialists, and 15 highly skilled manufacturing professionals, supported by a dedicated team of helpers and installation personnel. Together, they execute every stage of manufacturing—from engineering design and material inspection to manufacturing, welding, machining, polishing, testing, assembly, installation, and commissioning—with strict adherence to approved engineering standards and quality procedures.
                </p>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                  We believe that every successful project begins with detailed engineering and ends with complete customer satisfaction. Our manufacturing processes emphasize precision, quality control, safety, timely delivery, and continuous improvement. By combining modern engineering practices with practical industry experience, we consistently deliver equipment that offers reliable performance, operational efficiency, and long-term value.
                </p>
                <p className="text-slate-450 text-xs sm:text-sm leading-relaxed font-light">
                  At GRF Dynamic Engineering, our mission is to build lasting relationships through engineering excellence, innovative manufacturing, and dependable after-sales support. Every reactor, vessel, tank, and customized process system that leaves our facility reflects our commitment to quality, reliability, integrity, and customer satisfaction, making us a trusted partner for industrial process equipment across India.
                </p>
              </div>

              {/* Quick Specs Grid */}
              <div className="grid grid-cols-3 gap-4 pt-4 font-mono text-[9px]">
                <div className="bg-[#0a0d18] border border-white/5 p-4 rounded-sm relative">
                  <div className="absolute top-1 right-2 text-brand-accent/40 font-bold">01</div>
                  <span className="text-slate-500 block uppercase mb-1">Testing</span>
                  <span className="text-white font-bold block uppercase">Hydro & Radiography</span>
                </div>
                <div className="bg-[#0a0d18] border border-white/5 p-4 rounded-sm relative">
                  <div className="absolute top-1 right-2 text-brand-accent/40 font-bold">02</div>
                  <span className="text-slate-500 block uppercase mb-1">Standard</span>
                  <span className="text-white font-bold block uppercase">ASME SEC VIII DIV 1</span>
                </div>
                <div className="bg-[#0a0d18] border border-white/5 p-4 rounded-sm relative">
                  <div className="absolute top-1 right-2 text-brand-accent/40 font-bold">03</div>
                  <span className="text-slate-500 block uppercase mb-1">Quality</span>
                  <span className="text-white font-bold block uppercase">Zero-Defect Goal</span>
                </div>
              </div>
            </div>

            {/* Right side: Detailed Scope Sheet */}
            <div className="lg:col-span-5 bg-brand-charcoal/80 border border-white/5 p-6 rounded-sm relative overflow-hidden flex flex-col justify-between">
              {/* Drafting grid outline marks */}
              <div className="absolute top-2 left-2 border-t border-l border-white/10 w-2.5 h-2.5"></div>
              <div className="absolute top-2 right-2 border-t border-r border-white/10 w-2.5 h-2.5"></div>
              <div className="absolute bottom-2 left-2 border-b border-l border-white/10 w-2.5 h-2.5"></div>
              <div className="absolute bottom-2 right-2 border-b border-r border-white/10 w-2.5 h-2.5"></div>
              <div className="absolute inset-0 blueprint-grid opacity-[0.03] pointer-events-none"></div>

              <div className="space-y-4">
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block border-b border-white/[0.04] pb-2">
                  APPROVED_MANUFACTURING_SPECTRUM
                </span>

                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  Our manufacturing facility is fully equipped to manufacture a wide range of custom vessels and pressure components designed for structural integrity, process efficiency, and long service life:
                </p>

                <div className="space-y-2 font-mono text-[10px] sm:text-[11px] text-slate-350">
                  {[
                    "MS & SS Reactors (Jacketed & Limpeted)",
                    "High-Integrity Pressure Vessels",
                    "Shell & Tube Heat Exchangers",
                    "Milk Storage & Dairy Processing Tanks",
                    "Custom Storage & Mixing Tanks",
                    "Industrial Air Receivers",
                    "Customized Stainless Steel Manufacturing",
                    "Sanitary Food & Chemical Piping"
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between border-b border-white/[0.03] pb-1.5">
                      <span className="text-slate-500 uppercase tracking-wide">{(idx + 1).toString().padStart(2, '0')}. {item.split(' (')[0]}</span>
                      <span className="text-brand-accent font-bold">READY</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 text-center border-t border-white/[0.04] mt-6">
                <span className="text-[7.5px] tracking-widest text-brand-accent font-bold font-mono uppercase">
                  GRF SYSTEM CATALOGUE ID // GRF-MFG-EXCELLENCE-2026
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Our Skilled Workforce Section */}
        <section className="mb-28">
          <div className="mb-12">
            <span className="text-[10px] font-mono text-brand-accent uppercase tracking-widest block">// HUMAN CAPITAL & CRAFTSMANSHIP</span>
            <h2 className="heading-font text-2xl sm:text-3xl text-white font-bold uppercase mt-1">
              Our Skilled Workforce
            </h2>
            <div className="h-px bg-white/[0.04] w-full mt-3"></div>
          </div>

          {/* Grid Layout of Workforce */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
            {/* Left: General Introduction & Stats */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <span className="inline-block bg-[#0ea5e9]/5 border border-[#0ea5e9]/20 text-[#0ea5e9] text-[9px] font-bold px-3 py-1 uppercase tracking-widest rounded-sm font-mono">
                  Operational Safety & Work Culture
                </span>
                <div className="text-slate-350 text-sm leading-relaxed font-light space-y-4 text-left">
                  <p>
                    At G R F Dynamic Engineering, our greatest strength is our highly skilled, dedicated, and experienced workforce that forms the foundation of our manufacturing excellence. Our team consists of qualified engineers, supervisors, technical professionals, welders, fitters, machinists, polishers, installers, and support staff who work together with a common vision of delivering high-quality industrial process equipment with precision, reliability, and efficiency.
                  </p>
                  {isWorkforceExpanded && (
                    <>
                      <p>
                        Our skilled workforce brings extensive practical knowledge and hands-on experience in manufacturing Stainless Steel (SS) and Mild Steel (MS) equipment for various industrial applications. Every team member contributes valuable expertise to ensure that each project is completed according to engineering specifications, quality standards, and customer requirements. Through strong coordination between different departments, we maintain a smooth production workflow and achieve consistent results across all manufacturing activities.
                      </p>
                      <p>
                        Safety is one of the most important pillars of our work culture. At G R F Dynamic Engineering, we believe that a safe working environment is essential for achieving operational excellence. We continuously promote safe work practices by following proper safety procedures, using appropriate protective equipment, and maintaining awareness of workplace safety standards. Regular guidance and supervision help our workforce perform their responsibilities efficiently while minimizing risks during manufacturing, fabrication, and installation activities.
                      </p>
                      <p>
                        Quality awareness is deeply integrated into our daily operations. Our workforce understands the importance of accuracy, attention to detail, and process discipline in delivering reliable industrial solutions. From material preparation and fabrication to welding, finishing, inspection, and final assembly, every stage is handled with a strong commitment to quality. This approach enables us to manufacture equipment that meets performance expectations and provides long-term value to our customers.
                      </p>
                      <p>
                        Continuous learning and skill development are key elements of our organizational growth. We encourage our employees to improve their technical knowledge, adopt modern manufacturing practices, and stay updated with evolving industry requirements. By combining experience with continuous improvement, our workforce remains capable of handling complex engineering challenges and customized project requirements.
                      </p>
                      <p>
                        Our engineers and supervisors provide strong technical guidance throughout the manufacturing process. They ensure proper planning, effective resource utilization, and compliance with design and quality specifications. Skilled technicians and production teams execute these plans with precision, transforming engineering concepts into reliable industrial equipment.
                      </p>
                      <p>
                        Our welders, fitters, machinists, and polishers bring specialized expertise to critical manufacturing operations. Their craftsmanship and attention to detail ensure strong fabrication, accurate assembly, superior surface finishing, and dependable equipment performance. Similarly, our installation and support teams contribute to successful project completion by providing efficient on-site assistance and technical support.
                      </p>
                      <p>
                        Teamwork is a core value at G R F Dynamic Engineering. Every employee understands the importance of collaboration and coordination in achieving project goals. A culture of mutual respect, responsibility, and professional commitment allows us to complete projects effectively while maintaining high standards of quality and safety.
                      </p>
                      <p>
                        With a strong combination of technical expertise, operational discipline, and safety-focused practices, our workforce enables G R F Dynamic Engineering to deliver durable, high-performance, and cost-effective engineering solutions. Our people are not only employees but valuable contributors who drive innovation, reliability, and continuous improvement across the organization.
                      </p>
                      <p>
                        Through dedication, experience, and teamwork, our skilled workforce continues to strengthen our reputation as a trusted engineering partner for industrial manufacturing solutions.
                      </p>
                    </>
                  )}
                </div>
                <div className="pt-1 text-left">
                  <button
                    onClick={() => setIsWorkforceExpanded(!isWorkforceExpanded)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-accent hover:text-white uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    {isWorkforceExpanded ? 'View Less -' : 'View More +'}
                  </button>
                </div>
              </div>

              {/* Counter Row */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="bg-[#0a0d18] border border-white/5 p-4 rounded-sm relative group overflow-hidden">
                  <div className="absolute top-0 left-0 h-[2px] bg-brand-accent w-0 group-hover:w-full transition-all duration-300"></div>
                  <span className="text-brand-accent font-mono text-3xl font-extrabold block">15</span>
                  <span className="text-slate-500 font-mono text-[8px] block uppercase mt-1">Manufacturing Specialists</span>
                </div>
                <div className="bg-[#0a0d18] border border-white/5 p-4 rounded-sm relative group overflow-hidden">
                  <div className="absolute top-0 left-0 h-[2px] bg-white w-0 group-hover:w-full transition-all duration-300"></div>
                  <span className="text-white font-mono text-3xl font-extrabold block">100%</span>
                  <span className="text-slate-500 font-mono text-[8px] block uppercase mt-1">Supervised Quality</span>
                </div>
                <div className="bg-[#0a0d18] border border-white/5 p-4 rounded-sm relative group overflow-hidden">
                  <div className="absolute top-0 left-0 h-[2px] bg-brand-accent w-0 group-hover:w-full transition-all duration-300"></div>
                  <span className="text-brand-accent font-mono text-3xl font-extrabold block">ASME</span>
                  <span className="text-slate-500 font-mono text-[8px] block uppercase mt-1">IX Certified Welders</span>
                </div>
              </div>
            </div>

            {/* Right Panels: Pillars of Workforce */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {/* Pillar 1: Manufacturing Specialists */}
                <div className="bg-brand-charcoal/80 p-5 rounded-sm border border-white/5 hover:border-brand-accent/20 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group">
                  <div className="space-y-3 text-left">
                    <div className="flex justify-between items-center">
                      <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest block">// SPECIALIST_GRP: 01</span>
                      <span className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-ping"></span>
                    </div>
                    <h3 className="heading-font text-white font-bold text-sm uppercase tracking-wide group-hover:text-brand-accent transition-colors">
                      Skilled Technical Team
                    </h3>
                    <div className="text-slate-400 text-xs leading-relaxed font-light space-y-3">
                      <p>
                        At G R F Dynamic Engineering, our strength lies in our highly skilled and experienced technical team that drives excellence across every stage of manufacturing. Supported by a team of 15 dedicated professionals, including experienced fitters, certified welders, and skilled polishers, we have built strong expertise in handling complex fabrication requirements for Stainless Steel (SS) and Mild Steel (MS) industrial setups.
                      </p>
                      {isWfTechnicalExpanded && (
                        <>
                          <p>
                            Our technical workforce brings extensive hands-on experience in fabrication, assembly, welding, finishing, and quality-focused production processes. Each team member plays an important role in ensuring that every project is completed with accuracy, efficiency, and attention to detail. Their practical knowledge allows us to manage customized engineering requirements while maintaining high standards of workmanship.
                          </p>
                          <p>
                            Our skilled fitters are experienced in precision assembly, alignment, and installation activities, ensuring that every component is manufactured according to engineering drawings and dimensional requirements. Our professional welders specialize in advanced welding techniques, delivering strong and reliable joints for critical industrial applications. Similarly, our polishing experts ensure superior surface quality and finishing standards, especially for applications requiring smooth and hygienic surfaces.
                          </p>
                          <p>
                            Continuous skill development and practical expertise enable our team to adapt to evolving manufacturing technologies and industry requirements. By combining technical knowledge with modern equipment and proven processes, we achieve consistent quality across every project.
                          </p>
                          <p>
                            At G R F Dynamic Engineering, our skilled technical team represents our commitment to reliability, precision, and manufacturing excellence. Their dedication, experience, and craftsmanship ensure that every product delivered meets customer expectations for performance, durability, and quality.
                          </p>
                        </>
                      )}
                    </div>
                    <div className="pt-1">
                      <button
                        onClick={() => setIsWfTechnicalExpanded(!isWfTechnicalExpanded)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-accent hover:text-white uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        {isWfTechnicalExpanded ? 'View Less -' : 'View More +'}
                      </button>
                    </div>
                    <ul className="space-y-1.5 pt-2 text-[10px] font-mono text-slate-350">
                      <li className="flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-brand-accent rounded-full"></span>
                        High-Pressure Vessel Welding
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-brand-accent rounded-full"></span>
                        Mirror Finishes (Ra &lt; 0.4 microns)
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-brand-accent rounded-full"></span>
                        GTAW & GMAW Qualified Joints
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Pillar 2: Supervision & Engineering */}
                <div className="bg-brand-charcoal/80 p-5 rounded-sm border border-white/5 hover:border-brand-accent/20 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group">
                  <div className="space-y-3 text-left">
                    <div className="flex justify-between items-center">
                      <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest block">// CONTROL_GRP: 02</span>
                      <span className="w-1.5 h-1.5 bg-white rounded-full opacity-60"></span>
                    </div>
                    <h3 className="heading-font text-white font-bold text-sm uppercase tracking-wide group-hover:text-white transition-colors">
                      Engineers & Supervisors
                    </h3>
                    <div className="text-slate-400 text-xs leading-relaxed font-light space-y-3">
                      <p>
                        At G R F Dynamic Engineering, our manufacturing operations are supported by a team of experienced design engineers, project managers, and quality inspectors who provide strong technical leadership throughout every stage of production. Their expertise ensures that each project is executed with precision, efficiency, and strict compliance with engineering requirements.
                      </p>
                      {isWfEngineersExpanded && (
                        <>
                          <p>
                            Our design engineers are responsible for developing accurate technical solutions by analyzing customer requirements, preparing engineering designs, and ensuring that every component meets functional and performance expectations. With advanced knowledge of fabrication processes and industrial equipment design, they help optimize manufacturing methods while maintaining structural integrity and reliability.
                          </p>
                          <p>
                            Project managers play a crucial role in coordinating activities from planning to final delivery. They manage project timelines, resources, production workflows, and communication between different departments to ensure smooth execution. Their effective supervision helps maintain productivity while ensuring that every project is completed within the required schedule and specifications.
                          </p>
                          <p>
                            Our quality inspectors continuously monitor manufacturing processes to maintain high standards of accuracy and safety. They perform detailed inspections, verify material quality, review fabrication activities, and ensure compliance with defined quality procedures. Their attention to detail helps identify potential issues early and ensures that only reliable products are delivered to customers.
                          </p>
                          <p>
                            With the combined expertise of engineers, supervisors, and quality professionals, G R F Dynamic Engineering maintains a strong foundation of technical excellence and operational control. Their guidance enables our team to deliver innovative, durable, and precision-engineered solutions that meet the highest standards of industrial performance.
                          </p>
                        </>
                      )}
                    </div>
                    <div className="pt-1">
                      <button
                        onClick={() => setIsWfEngineersExpanded(!isWfEngineersExpanded)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-accent hover:text-white uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        {isWfEngineersExpanded ? 'View Less -' : 'View More +'}
                      </button>
                    </div>
                    <ul className="space-y-1.5 pt-2 text-[10px] font-mono text-slate-350">
                      <li className="flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-white rounded-full opacity-50"></span>
                        Detailed Production Drawings
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-white rounded-full opacity-50"></span>
                        Dimensional & Quality Inspections
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-white rounded-full opacity-50"></span>
                        On-Site Erection Oversight
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Pillar 3: Support Operations & Helpers */}
              <div className="bg-brand-charcoal/80 p-5 rounded-sm border border-white/5 hover:border-blue-500/20 transition-all duration-300 relative overflow-hidden text-left">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/[0.04] pb-4 mb-4">
                  <div>
                    <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest block">// SUPPORT_GRP: 03</span>
                    <h3 className="heading-font text-white font-bold text-sm uppercase tracking-wide mt-1">
                      Dedicated Helpers & Support Staff
                    </h3>
                  </div>
                  <span className="text-[8px] font-mono text-[#0ea5e9] bg-[#0ea5e9]/5 border border-[#0ea5e9]/20 px-2 py-0.5 rounded-sm uppercase tracking-wide">
                    Workflow Logistics
                  </span>
                </div>
                <div className="text-slate-400 text-xs leading-relaxed font-light space-y-3">
                  <p>
                    At G R F Dynamic Engineering, our manufacturing success is supported by a dedicated team of semi-skilled and unskilled helpers who play an important role in maintaining smooth workflow operations across all departments. Their continuous support and commitment contribute significantly to efficient production, timely project completion, and overall workplace productivity.
                  </p>
                  {isWfHelpersExpanded && (
                    <>
                      <p>
                        Our support staff assists in various essential activities, including material handling, machine operations, fabrication support, assembly work, loading and unloading, surface finishing assistance, housekeeping, and on-site installation activities. Their involvement ensures that every stage of the manufacturing process is properly coordinated and completed without interruptions.
                      </p>
                      <p>
                        The material handling team plays a key role in organizing and moving raw materials, fabricated components, and finished products safely within the facility. Their efficient coordination helps reduce operational delays and improves production flow. During fabrication and assembly processes, our helpers provide valuable assistance to technicians and engineers by preparing materials, supporting equipment operations, and maintaining an organized working environment.
                      </p>
                      <p>
                        For project execution and installation activities, our support staff contributes by assisting with transportation, site preparation, equipment positioning, and installation support. Their practical experience and dedication help ensure smooth execution of both in-house manufacturing and on-site requirements.
                      </p>
                      <p>
                        A clean, safe, and organized workplace is essential for achieving quality results. Our housekeeping support team maintains proper working conditions by following systematic cleaning and safety practices, helping create an efficient environment for manufacturing activities.
                      </p>
                      <p>
                        At G R F Dynamic Engineering, we recognize the importance of every team member in achieving operational excellence. The dedication, teamwork, and reliability of our support staff strengthen our manufacturing capabilities and enable us to deliver projects with better efficiency, quality, and consistency.
                      </p>
                      <p>
                        Through effective workflow management and coordinated efforts across all departments, our dedicated helpers and support staff contribute significantly to building a strong foundation for successful engineering solutions.
                      </p>
                    </>
                  )}
                </div>
                <div className="pt-3">
                  <button
                    onClick={() => setIsWfHelpersExpanded(!isWfHelpersExpanded)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-accent hover:text-white uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    {isWfHelpersExpanded ? 'View Less -' : 'View More +'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Workflow Sequence Lifecycle */}
          <div className="mb-12 bg-[#05060b] border border-white/5 p-6 rounded-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 border-t border-r border-white/10 w-2.5 h-2.5"></div>
            <div className="absolute bottom-0 left-0 border-b border-l border-white/10 w-2.5 h-2.5"></div>
            <span className="text-[9px] font-mono text-brand-accent uppercase tracking-widest block mb-5 border-b border-white/[0.04] pb-2">// WORKFORCE QUALITY LIFECYCLE & EXECUTION STAGES</span>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { step: "01", name: "Material Verification", desc: "Chemical tests & thickness logs" },
                { step: "02", name: "Precision Cutting", desc: "CAD drawing alignment layout" },
                { step: "03", name: "Fit-Up Alignment", desc: "Nozzle & shell orientation" },
                { step: "04", name: "ASME Welding", desc: "GTAW / GMAW process execution" },
                { step: "05", name: "Hydro Inspections", desc: "Pressure & load checks" },
                { step: "06", name: "Mirror Polishing", desc: "Sanding & safe logistics packing" }
              ].map((item, idx) => (
                <div key={idx} className="bg-brand-charcoal/40 p-4 rounded-sm border border-white/5 relative group hover:border-brand-accent/20 transition-all duration-300">
                  <span className="text-brand-accent font-mono text-xs font-bold block mb-1">{item.step}</span>
                  <span className="text-white text-xs font-bold block uppercase tracking-wide mb-1 group-hover:text-brand-accent transition-colors">{item.name}</span>
                  <span className="text-slate-500 text-[10px] leading-tight block">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Equipment Scope Catalog */}
          <div className="bg-brand-charcoal/30 border border-white/5 p-6 sm:p-8 rounded-sm relative overflow-hidden">
            {/* Drafting grids on corners */}
            <div className="absolute top-2 left-2 border-t border-l border-white/10 w-2.5 h-2.5"></div>
            <div className="absolute top-2 right-2 border-t border-r border-white/10 w-2.5 h-2.5"></div>
            <div className="absolute bottom-2 left-2 border-b border-l border-white/10 w-2.5 h-2.5"></div>
            <div className="absolute bottom-2 right-2 border-b border-r border-white/10 w-2.5 h-2.5"></div>

            <div className="mb-8 border-b border-white/[0.04] pb-6">
              <span className="text-[9px] font-mono text-brand-accent uppercase tracking-widest block">// MANUFACTURING SPECTRUM CATALOG</span>
              <h3 className="heading-font text-white font-extrabold text-lg uppercase tracking-wider mt-1">
                Collective Equipment Scope
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm font-light mt-2 max-w-3xl">
                The collective expertise of our workforce enables us to manufacture and install a wide range of custom industrial process equipment:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "MS & SS Reactors",
                "Limpeted & Jacketed Reactors",
                "Pressure Vessels",
                "Heat Exchangers",
                "Storage Tanks",
                "Mixing Tanks",
                "Air Receivers",
                "Dairy Processing Equipment",
                "Chemical Process Equipment",
                "Pharmaceutical Equipment",
                "Stainless Steel Manufacturing",
                "Customized Process Systems"
              ].map((tag, idx) => (
                <div
                  key={idx}
                  className="bg-[#0a0d18] border border-white/5 hover:border-brand-accent/30 p-4 rounded-sm transition-all duration-300 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-slate-600 font-mono text-[9px] group-hover:text-brand-accent transition-colors">
                      {(idx + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="text-slate-300 text-xs font-mono uppercase tracking-wide group-hover:text-white transition-colors">
                      {tag}
                    </span>
                  </div>
                  <span className="w-1.5 h-1.5 bg-brand-accent/40 rounded-full group-hover:bg-brand-accent transition-colors"></span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality & Compliance Certificates Section Moved to Capabilities Console */}

        {/* Call to Action: Inquiry Link */}
        <section className="text-center bg-brand-charcoal/30 border border-dashed border-white/10 rounded-sm p-10 relative overflow-hidden">
          <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none"></div>
          <div className="absolute top-2 left-2 border-t border-l border-white/10 w-3 h-3"></div>
          <div className="absolute top-2 right-2 border-t border-r border-white/10 w-3 h-3"></div>
          <div className="absolute bottom-2 left-2 border-b border-l border-white/10 w-3 h-3"></div>
          <div className="absolute bottom-2 right-2 border-b border-r border-white/10 w-3 h-3"></div>

          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <h3 className="heading-font text-white text-xl font-bold uppercase tracking-wider">
              Need a Custom Process Vessel Solution?
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
              Get in touch with our engineering team based in Saharanpur. We will work with your process calculations to design and manufacture the exact reactor or storage system required.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-block bg-brand-accent hover:bg-brand-accent/90 text-black font-bold py-3 px-8 rounded-sm text-xs uppercase tracking-widest transition-all shadow-md shadow-brand-accent/15 cursor-pointer active:scale-95"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
