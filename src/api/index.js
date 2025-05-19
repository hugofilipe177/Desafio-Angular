const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors());
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname)));

app.post("/login", async (req, res) => {
  try {
    const { nome, senha } = req.body;

    if (!nome || !senha) {
      return res.status(400).json({
        message: "O campo de usuário ou senha não foi preenchido!",
      });
    }

    if (nome !== "Hugo" || senha !== "123456") {
      return res.status(401).json({
        message:
          "O nome de usuário ou senha está incorreto ou não foi cadastrado!",
      });
    }

    return res.status(200).json({
      id: 1,
      nome: "Hugo",
      email: "Hugo@email.com",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Falha na comunicação com o servidor!",
      error: String(error),
    });
  }
});

app.get("/vehicles", (req, res) => {
  try {
    const vehicles = [
      {
        id: 1,
        vehicle: "Ranger",
        volumetotal: 145760,
        connected: 70000,
        softwareUpdates: 27550,
        img: "http://localhost:3001/img/ranger.png",
        preco: "R$ 244.990",
        motor: "2.0 Diesel, 4 cilindros, 16 válvulas",
        potencia: "170 cv a 3.500 rpm",
        roda: "Aço 16, pneus 255/70 R16"
      },
      {
        id: 2,
        vehicle: "Mustang",
        volumetotal: 1500,
        connected: 500,
        softwareUpdates: 750,
        img: "http://localhost:3001/img/mustang.png",
        preco: "R$ 529.000",
        motor: "5.0 V8 a gasolina",
        potencia: "488 cv",
        roda: "Liga de alumínio, dianteiras 9J x 19, traseiras 9,5J x 19",
        
      },
      {
        id: 3,
        vehicle: "Territory",
        volumetotal: 4560,
        connected: 4000,
        softwareUpdates: 3050,
        img: "http://localhost:3001/img/territory.png",
        preco: "R$ 212.000",
        motor: "1.5 Turbo a gasolina",
        potencia: "169 cv a 5.500 rpm",
        roda: "Liga leve 19, pneus 235/50 R19"
      },
      {
        id: 4,
        vehicle: "Bronco Sport",
        volumetotal: 7560,
        connected: 4060,
        softwareUpdates: 2050,
        img: "http://localhost:3001/img/broncoSport.png",
        preco: "R$ 256.900",
        motor: "2.0 Turbo a gasolina",
        potencia: "240 cv a 5.500 rpm",
        roda: "Liga leve 17, pneus 225/65 R17"
      },
    ];

    return res.status(200).json({ vehicles });
  } catch (error) {
    return res.status(500).json({
      message: "Falha na comunicação com o servidor!",
    });
  }
});

app.post("/vehicleData", (req, res) => {
  try {
    const { vin } = req.body;

    switch (vin) {
      case "2FRHDUYS2Y63NHD22454":
        return res.status(200).json({
          id: 1,
          odometro: 23344,
          nivelCombustivel: 76,
          status: "on",
          lat: -12.2322,
          long: -35.2314,
        });

      case "2RFAASDY54E4HDU34874":
        return res.status(200).json({
          id: 2,
          odometro: 130000,
          nivelCombustivel: 19,
          status: "off",
          lat: -12.2322,
          long: -35.2314,
        });

      case "2FRHDUYS2Y63NHD22455":
        return res.status(200).json({
          id: 3,
          odometro: 50000,
          nivelCombustivel: 90,
          status: "on",
          lat: -12.2322,
          long: -35.2314,
        });

      case "2RFAASDY54E4HDU34875":
        return res.status(200).json({
          id: 4,
          odometro: 10000,
          nivelCombustivel: 25,
          status: "off",
          lat: -12.2322,
          long: -35.2314,
        });

      case "2FRHDUYS2Y63NHD22654":
        return res.status(200).json({
          id: 5,
          odometro: 23544,
          nivelCombustivel: 76,
          status: "on",
          lat: -12.2322,
          long: -35.2314,
        });

      case "2FRHDUYS2Y63NHD22854":
        return res.status(200).json({
          id: 6,
          odometro: 23574,
          nivelCombustivel: 76,
          status: "on",
          lat: -12.2322,
          long: -35.2314,
        });

      default:
        return res.status(400).json({
          message: "Código VIN utilizado não foi encontrado!",
        });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Falha na comunicação com o servidor!",
    });
  }
}); 

app.get("/carousel", (req, res) => {
  try {
    const carouselImages = [
      {
        id: 1,
        titulo: "Nova Ranger 2025",
        descricao: "Potência e inovação em cada curva.",
        img: "http://localhost:3001/img/ranger.png",
      },
      {
        id: 2,
        titulo: "Mustang GT",
        descricao: "Desempenho e elegância que impressionam.",
        img: "http://localhost:3001/img/mustang.png",
      },
      {
        id: 3,
        titulo: "Territory 2025",
        descricao: "Tecnologia, conforto e segurança para a família.",
        img: "http://localhost:3001/img/territory.png",
      },
      {
        id: 4,
        titulo: "Bronco Sport",
        descricao: "Aventure-se com estilo e força.",
        img: "http://localhost:3001/img/broncoSport.png",
      },
      {
        id: 5,
        titulo: "Ranger",
        descricao: "Aventure-se com estilo e força.",
        img: "http://localhost:3001/img/imagem_1.png",
      },
      {
        id: 6,
        titulo: "Bronco Vermelho",
        descricao: "Aventure-se com estilo e força.",
        img: "http://localhost:3001/img/imagem_3.png",
      },
    ];

    return res.status(200).json({ carousel: carouselImages });
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao carregar imagens do carrossel.",
      error: String(error),
    });
  }
});
app.get("/vehicleSpecs", (req, res) => {
  try {
    const specs = [
      {
        id: 1,
        nome: "Ford Ranger XL 2025",
        preco: "R$ 244.990",
        alturaVeiculo: "1.884 mm",
        alturaSolo: "235 mm",
        motor: "2.0 Diesel, 4 cilindros, 16 válvulas",
        potencia: "170 cv a 3.500 rpm",
        roda: "Aço 16, pneus 255/70 R16",
        img: "http://localhost:3001/img/ranger.png"
      },
      {
        id: 2,
        nome: "Ford Mustang GT 2025",
        preco: "R$ 529.000",
        alturaVeiculo: "1.398 mm",
        alturaSolo: "144 mm",
        motor: "5.0 V8 a gasolina",
        potencia: "488 cv",
        roda: "Liga de alumínio, dianteiras 9J x 19, traseiras 9,5J x 19",
        img: "http://localhost:3001/img/mustang.png"
      },
      {
        id: 3,
        nome: "Ford Territory 2025",
        preco: "R$ 212.000",
        alturaVeiculo: "1.706 mm",
        alturaSolo: "179 mm",
        motor: "1.5 Turbo a gasolina",
        potencia: "169 cv a 5.500 rpm",
        roda: "Liga leve 19, pneus 235/50 R19",
        img: "http://localhost:3001/img/territory.png"
      },
      {
        id: 4,
        nome: "Ford Bronco Sport Wildtrak",
        preco: "R$ 256.900",
        alturaVeiculo: "1.813 mm",
        alturaSolo: "223 mm",
        motor: "2.0 Turbo a gasolina",
        potencia: "240 cv a 5.500 rpm",
        roda: "Liga leve 17, pneus 225/65 R17",
        img: "http://localhost:3001/img/broncoSport.png"
      },
      {
        id: 5,
        nome: "Ford Ranger 2.5 CD Limited",
        preco: "R$ 244.990",
        alturaVeiculo: "1.848 mm",
        alturaSolo: "232 mm",
        motor: "2.5 Flex (álcool/gasolina)",
        potencia: "173 cv (álcool) / 168 cv (gasolina)",
        roda: "Liga leve aro 18, pneus 265/60 R18",
        img: "http://localhost:3001/img/imagem_1.jpg"
      },
      {
        id: 6,
        nome: "Ford Bronco Vermelho (Wildtrak)",
        preco: "R$ 256.900",
        alturaVeiculo: "1.813 mm",
        alturaSolo: "223 mm",
        motor: "2.0 Turbo a gasolina",
        potencia: "240 cv a 5.500 rpm",
        roda: "Liga leve 17, pneus 225/65 R17",
        img: "http://localhost:3001/img/imagem_3.jpg"
      },
    ];

    return res.status(200).json({ specs });
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao recuperar especificações dos veículos.",
      error: String(error),
    });
  }
});




app.listen(3001, () => {
  console.log("API running on http://localhost:3001/");
});
