import React from "react";

const Info1 = () => {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-10 max-w-5xl mx-auto">
    {/* Title Section */}
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
    Wat zijn Optimizers?
                 </h1>

    {/* Introductory Text */}
    <p className="text-base md:text-lg  mb-8 leading-relaxed">
    Optimizers kunnen helpen de maximale stroom te produceren, als er verschil in opbrengst is tussen panelen door bijvoorbeeld schaduw. bijvoorbeeld schaduw. noemen we micro-omvormers.
    </p>
    <p className="text-base md:text-lg  mb-8 leading-relaxed">
    Om het maximale vermogen van zonnepanelen binnen te halen, beschikt een omvormer over een meetinstrument. Dit dient om het punt te vinden, waar de combinatie van spanning en stroom het grootst is. Dit meetinstrument heet een MPP-tracker oftewel een maximum power point tracker. 
    </p>
        <p className="text-base md:text-lg  mb-8 leading-relaxed">
        Als het punt van maximale power niet gevonden dan scheelt dat significant opbrengst. Dit gebeurt bijvoorbeeld als de zonnepanelen die in serie zijn aangesloten niet dezelfde hoeveel zonlicht ontvangen.           </p>
    
    <p className="text-base md:text-lg  mb-8 leading-relaxed">
    Als de richting of de hellingshoek van een aantal panelen verschillend is, is ook de hoek t.o.v. de zon anders en dus de hoeveelheid licht. Ook schaduw kan een oorzaak zijn van verschil in lichtinval in een serie zonnepanelen. 
    <br/>
    Soms kunnen dit soort situaties opgelost worden door de gelijke panelen te verdelen over een tweede MPP-tracker die vaak op een omvormer zit. Dit lukt echter lang niet altijd. Dan kunnen optimizers een handige oplossing zijn.   
    </p>
    <p className="text-base md:text-lg  mb-8 leading-relaxed">
    Een optimizer is een apparaatje dat onder een paneel wordt aangebracht. De optimizer wijzigt de spanning bij een paneel dusdanig dat de stroomsterkte van het paneel in lijn met de andere wordt gebracht. Zo benadelen de minder goed presterende zonnepanelen de beter presterende panelen niet en wordt de opbrengst gemaximaliseerd.
    </p>
       
  
    </div>
    
    
  );
};

export default   Info1;
