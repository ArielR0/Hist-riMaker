function generateStory() {
    const input = document.getElementById("keywords").value;
    if(!input) return alert("Digite pelo menos o nome do herói e o lugar! Ex: Batman, São Paulo");

    const words = input.split(",").map(w => w.trim()).filter(w => w);
    const hero = words[0] || "O herói";
    const place = words[1] || "um reino encantado";

    const pronouns = ["ele", "ela"];
    function getPronoun() { return pronouns[Math.floor(Math.random()*pronouns.length)]; }

  
    const storyBlocks = [
        // Começo
        [
            `${hero} acordou numa manhã brilhante em ${place}. A luz dourada atravessava as árvores, prometendo aventuras incríveis. Sentiu um friozinho de expectativa e sorriu, pronto para explorar o desconhecido.`,
            `Enquanto caminhava por ${place}, ${hero} encontrou uma trilha coberta de flores cintilantes. Cada passo revelava novas maravilhas escondidas sob a vegetação. Uma brisa suave parecia sussurrar segredos antigos.`,
            `${hero} descobriu uma ponte mágica flutuando sobre um rio cristalino. O coração bateu mais rápido, mas a coragem falou mais alto. Ele atravessou, sentindo que cada passo o aproximava do destino.`,
            `No bosque encantado de ${place}, ${hero} ouviu uma voz misteriosa. Uma árvore falante ofereceu conselhos e enigmas. Ele prestou atenção, sabendo que cada palavra podia mudar sua jornada.`
        ],
        // Meio
        [
            `Seguindo a trilha, ${hero} encontrou uma criatura lendária adormecida. O silêncio ao redor tornava o momento mágico e tenso. Ele observou com respeito e continuou cuidadosamente.`,
            `Perto de um lago cintilante, ${hero} descobriu runas antigas gravadas nas pedras. O significado parecia fugir de sua compreensão, mas a curiosidade o impulsionava a investigar mais.`,
            `Ele encontrou aliados improváveis, seres mágicos que decidiram ajudá-lo. Juntos, desvendaram enigmas e superaram desafios que pareciam impossíveis. A amizade e a confiança cresceram com cada obstáculo.`,
            `Uma caverna escondida revelou segredos do passado de ${place}. ${hero} respirou fundo e adentrou, sentindo que cada passo o aproximava de algo extraordinário. O mistério aumentava a cada instante.`,
            `No topo de uma colina iluminada pelo pôr do sol, ${hero} encontrou um artefato mágico brilhando intensamente. Ele sentiu que aquele objeto tinha grande importância, mas ainda não compreendia tudo.`,
            `Um portal se abriu diante dele, mostrando um caminho cheio de enigmas e aventuras. ${hero} respirou fundo e avançou, sentindo que aquela era a parte mais crucial da jornada.`,
            `Durante a caminhada, ${hero} enfrentou desafios que testaram sua coragem e inteligência. Cada obstáculo superado o transformava, e a determinação crescia a cada passo.`,
            `Ao explorar um jardim encantado, ${hero} descobriu segredos antigos escondidos sob a vegetação. Cada pista o guiava para novas descobertas e mistérios. Ele sentiu que estava perto de compreender a magia do lugar.`
        ],
        // Fim
        [
            `Finalmente, ${hero} alcançou o ápice de sua jornada. Ele encontrou a luz misteriosa que revelava a verdadeira magia de ${place}. Sentiu paz e realização invadirem seu coração.`,
            `O herói refletiu sobre tudo que havia vivido. Os desafios, as descobertas e os amigos encontrados pelo caminho deixaram marcas profundas em sua memória.`,
            `${hero} retornou ao início de sua jornada, mas já não era o mesmo. A experiência transformou sua coragem e sabedoria, e ele sabia que novas aventuras o aguardavam.`,
            `Com um último olhar para ${place}, ${hero} sentiu gratidão por tudo que viveu. A magia do reino permaneceria sempre com ele, guiando seus passos em futuras aventuras.`
        ]
    ];

   
    let story = "";
    storyBlocks.forEach(block => {
        block.forEach(paragraph => {
            story += paragraph + "\n\n";
        });
    });

    document.getElementById("story").value = story.trim();
}