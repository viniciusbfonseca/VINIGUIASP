function navigate(pushPath) {
    window.location.href = pushPath;
}

const content = [
    {
        id: "0",
        title: "BEM VINDO AO SEU GUIA DE PASSEIO",
        image: "./assets/images/sp.jpeg",
        description: "Centro - São Paulo",
        address: "",
        operation: "",
        font: "",
    },
    {
        id: "1",
        title: "HISTORIA",
        image: "./assets/images/flagsp.png",
        description: "São Paulo começou a ser colonizada em 1532 quando Martim Afonso de Souza fundou a Vila de São Vicente hoje Baixada Santista. Em busca de novas pessoas para evangelizar, um grupo de jesuítas desbravou a Serra do Mar e chegou até o Planalto de Piratininga onde fundaram um colégio em 1554, ao redor do qual se iniciou a construção das primeiras casas, dando origem ao povoado de São Paulo de Piratininga.Nos primórdios,São Paulo vivia da agricultura de subsistência, depois da implantação da lavoura de cana-de-açúcar e também sonhava com a descoberta do ouro e dos metais preciosos. As viagens ao interior do país Bandeiras eram expedições organizadas para procurar pedras e metais preciosos nos sertões distantes.De São Paulo, partiam as Bandeiras ao longo de todo século XVIII. A virada aconteceu na passagem para o século XIX, quando as plantações de café substituíram as de cana-de-açúcar para ocupar o primeiro plano da economia nacional.A expansão da cultura do café fez com que as estradas de ferro se multiplicassem. O mesmo período também foi marcado pela vinda de imigrantes em massa para substituir a mão-de-obra nas plantações de café, com o fim da abolição da escravatura em 1888.A importância de São Paulo naexpansão cafeeira e do gado em Minas Gerais fez surgir a conhecida “política do café-com-leite” quando paulistas e mineiros se revezavam na Presidência da República.São Paulo é um dos estados da região Sudeste e tem por limites Minas Gerais, Paraná, Rio de Janeiro, Mato Grosso do Sul e o Oceano Atlântico. Possui 645 municípios e sua área total é de 248.219,627 km².",
        address: "",
        operation: "",
        font: " FONTE: saopaulo.sp.gov.br",
    },
    {
        id: "2",
        title: "DICAS PONTOS",
        image: "./assets/images/light.png",
        description: "",
        address: "",
        operation: "",
        font: "",
    },
    {
        id: "3",
        title: "OBRIGADO POR UTILIZAR",
        image: "./assets/images/logo.png",
        description: "",
        address: "",
        operation: "",
        font: "",
    },
    {
        id: "4",
        title: "MASP",
        image: "./assets/images/MASP.png",
        description: "Um ícone na cidade de São Paulo, o MASP - Museu de Arte de São Paulo, foi idelizado pelo jornalista e empresario Paraibano Assis Chateadubriand e pelo crítico de arte italiano Pietro Maria Bardi. Segundo historiadores, Assis Chateadubrfiand, na época dono do maior congloremado de mídia do país, Os diários Associados, diante do crescimento urbano em substituiçãodo clico do café, após a crise econômica de 1929, decidiu que era a hora do Brasil ter um museu de nível Internacional. porém, por não entender de arte, chamou Pietro Bardi, que estava em visita ao Brasil com a esposa, a arquiteta Lina do Bardi, para fazer as aquisições para futura instituição",
        address: "Av. Paulista 1578 - Bela Vista, São Paulo",
        operation: "Horário de funcionamento: Seg a Ter das 10:00-20:00 e Qua a Dom das 10:00-18:00",
        font: "gazetasp.com.br",
    },
    {
        id: "5",
        title: "LIBERDADE",
        image: "./assets/images/liberdade.jpeg",
        description: "O bairro da Liberdade, em São Paulo, atrai turistas do mundo inteiro. A região é conhecida por abrigar a maior comunidade japonesa do mundo fora do Japão. Além disso, as feiras, restaurantes, parques e construções características da arquitetura asiática também chamam a atenção das pessoas que passam por este bairro que se destaca no centro da capital paulistana. Entretanto, o que pouca gente sabe é que a região antes era habitada pela comunidade negra e que, ao longo das últimas décadas, parte desta memória foi ocultada.",
        address: "R. Galvão Bueno",
        operation: "",
        font: "casavogue.globo.com",
    },
    {
        id: "6",
        title: "MERCADÃO DE SP",
        image: "./assets/images/mercadao.png",
        description: "O popularmente conhecido como Mercadão de SP, é uma parada obrigatória para turistas de todo o mundo.Por lá,você encontra verduras, legumes, frutas fresquinhas, carnes, aves, peixes e frutos do mar, massas,doces, especiarias, além de produtos importados de primeira linha. Projetado pelo escritório do arquiteto Francisco Ramos de Azevedo em 1926, o Mercadão de SP foi inaugurado em 25 de janeiro de 1933. Ele segue o modelo utilizado pelo Mercado Central de Berlim, um prédio coberto e dotado de torreões laterais – que são estruturasconhecidas como pêndulos – bastante imponente e marcante.",
        address: "R. da Cantareira, 306 Centro histórico de São Paulo",
        operation: "Seg a Sáb das 06:00-18:00 e Dom das 06:00-16:00.",
        font: "meulugar.quintoandar",
    },
    {
        id: "7",
        title: "ESTAÇÃO DA LUZ",
        image: "./assets/images/estacao.jpeg",
        description: "A Estação da Luz é uma das mais importantes estações ferroviárias da cidade de São Paulo. Possui umgrande hall de entrada, uma plataforma central e três laterais. Atende às linhas 7 e 11 da Companhia Paulista de Trens Metropolitanos.",
        address: "Praça da Luz,1 São Paulo",
        operation: "",
        font: "wikipédia",
    },
    {
        id: "8",
        title: "CATEDRAL DA SÉ",
        image: "./assets/images/catedral.jpg",
        description: "Catedral Metropolitana Nossa Senhora da Assunção e São Paulo, informalmente conhecida como Catedral da Sé, é a principal templo católico da cidade de São Paulo, Brasil. Localiza-se na Praça da Sé, na Zona Central do município.Desde 2007 o arcebispo metropolitano da Arquidiocese é o cardeal Odilo Pedro Scherer.",
        address: "Praça da Sé, Sé São Paulo",
        operation: "Seg a Dom: 8:00 ás 18:00",
        font: "wikipédia",
    },
    {
        id: "09",
        title: "GALERIA DO ROCK",
        image: "./assets/images/galeria.jpg",
        description: "A Galeria do Rock, oficialmente Centro Comercial Grandes Galerias, é um centro comercial localizado na cidade de São Paulo. Foi construída em 1962 e inaugurada em 1963 no número 439 da Avenida São João, no centro da capital de São Paulo, entre as ruas 24 de Maio e o Largo Paysandu.",
        address: "Av. São João, 439 - República, São Paulo",
        operation: "Seg a Qui: 9:00 ás 19:00 & Sáb: 09:00 ás 18:00",
        font: "wikipédia",
    },
    {
        id: "10",
        title: "FAVORITOS",
        image: "./assets/images/favorites.png",
        description: "Arial",
        address: "",
        operation: "",
        font: "",
    },
];

function getContent (id){
    return content.find((item) => item.id == id)
}

