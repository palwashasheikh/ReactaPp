import React from "react";

const SolarPanelInfoGoed = () => {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-10 max-w-5xl mx-auto">
      {/* Title Section */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
      Wat is een goede omvormer?
            </h1>

      {/* Introductory Text */}
      <p className="text-base md:text-lg  mb-8 leading-relaxed">
      De selectie van een omvormer met de specificaties die passen bij een specifieke zonnepanelen installatie zorgt voor een veilige belasting van de omvormer. Maar ook dat er zoveel mogelijk van de gelijkstroom van de zonnepanelen in wisselstroom wordt omgezet.
      </p>

      {/* Subsection 1 */}
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl   font-bold mb-4">
        Optimizers        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
        Optimizers kunnen helpen de maximale stroom te produceren als er verschil in opbrengst is tussen panelen door bijvoorbeeld schaduw.
        </p>
      </div>

      {/* Subsection 2 */}
      <div>
        <h2 className="text-3xl md:text-4xl  font-bold mb-7">
        Micro-omvormers        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
        In plaats van een serie panelen aan elkaar te koppelen en vervolgens te sluiten op een omvormer, is het ook mogelijk om een kleine omvormer onder het zonnepaneel te monteren. Er wordt dan per zonnepaneel omgevormd. Dit type noemen we micro-omvormers.
        </p>
      </div>
      <div>
        <h2 className="text-3xl md:text-4xl   font-bold mb-7 mt-4">
        Kosten en opbrengsten van (zonne)energie
                        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
        Stroom van je eigen zonnepanelen installatie is voordelig en geeft onafhankelijk. Echter is de invloed van terugleverkosten en de afschaffing van de salderingsregeling? Wat voor rol kunnen een thuisbatterij of energiemanagementsysteem hierbij spelen?        </p>
        <p>
        Neem contact op met Krachtdak voor inzicht in de mogelijkheden en een nuchter advies.        </p>
      </div>
      <div>
        <h2 className="text-3xl md:text-4xl  font-bold mb-4 mt-4">
        Onderhoud van een zonnepanelen installatie
                </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
        Een zonnepanelen installatie die op de juiste manier is geïnstalleerd kan jarenlang meegaan. Wat zijn hierbij de aandachtspunten?           </p>
      </div>
      <div>
        <h2 className="text-3xl  md:text-4xl  font-bold mb-4 mt-4  ">
        Teruglevering verminderen                </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
        Energieleveranciers brengen kosten in rekening voor de opgewekte terug geleverd wordt. Dat geeft de impuls om zoveel mogelijk stroom direct te gebruiken. Wat zijn de mogelijkheden om hierin te sturen.
        </p>
              </div>
    </div>
  );
};

export default SolarPanelInfoGoed;
