// Conteúdo da banda, extraído do release comercial.
import fotoGuilherme from '../assets/images/integrante-guilherme.jpg'
import fotoAureo from '../assets/images/integrante-aureo.jpg'
import fotoMari from '../assets/images/integrante-mari.jpg'
import fotoTon from '../assets/images/integrante-ton.jpg'
import fotoGabriel from '../assets/images/integrante-gabriel.jpg'

export const banda = {
  nome: 'Cadastro Reserva',
  chamada: 'Rock de verdade para o seu evento',
  descricao:
    'Banda ao vivo com clássicos do rock nacional e internacional, para colocar todo mundo para cantar junto. Levamos som, luz e instrumentos para festas, bares, pubs e festivais.',

  // Tipos de evento — fita roxa logo abaixo do topo
  eventos: ['Festas particulares', 'Festivais', 'Bares', 'Pubs', 'Eventos especiais'],

  // Fatos rápidos sobre o show — fita de papel, cruzada com a roxa
  fatos: ['Ao vivo', 'Rock nacional e internacional', 'Som, luz e instrumentos inclusos', 'De 50 min a 3 h'],

  proposta: [
    'Tocamos os artistas que marcaram a história do rock, do nacional ao internacional.',
    'O show acompanha o ritmo da noite. Começa com músicas mais tranquilas, para o público entrar no clima. Depois a energia vai subindo até o auge da festa.',
  ],

  repertorio: {
    texto:
      'Clássicos que marcaram gerações e sucessos que todo mundo sabe cantar, do rock nacional ao internacional.',
    pedido: {
      pergunta: 'Quer uma música especial na sua festa?',
      resposta: 'Dá para pedir na hora de fechar o show.',
    },
    artistas: [
      'Pitty',
      'Red Hot Chili Peppers',
      'Pink Floyd',
      'The Cranberries',
      'Mamonas Assassinas',
      'Pearl Jam',
      'Arctic Monkeys',
    ],
  },

  // `foto` são os avatares do release. Instrumentos identificados pelas ilustrações.
  integrantes: [
    { nome: 'Guilherme', funcao: 'Teclado', foto: fotoGuilherme },
    { nome: 'Áureo', funcao: 'Guitarra', foto: fotoAureo },
    { nome: 'Mari', funcao: 'Vocal', foto: fotoMari },
    { nome: 'Ton', funcao: 'Baixo', foto: fotoTon },
    { nome: 'Gabriel', funcao: 'Bateria', foto: fotoGabriel },
  ],

  // Bloco "Informações" para quem quer contratar
  informacoes: [
    {
      titulo: 'Duração',
      destaque: '50 min a 3 h',
      texto: 'Cerca de 50 minutos direto, ou até 3 horas com intervalo. Você escolhe o que combina com o seu evento.',
    },
    {
      titulo: 'Cachê',
      destaque: 'A partir de R$ 800', // espaço que não quebra: "R$" e "800" ficam sempre juntos
      texto: 'Já inclui instrumentos, som e toda a estrutura que o seu local precisar.',
    },
    {
      titulo: 'Equipamento',
      destaque: 'Estrutura completa',
      texto: 'Levamos instrumentos, som e iluminação, no tamanho certo para o seu espaço.',
    },
    {
      titulo: 'Contratação',
      destaque: 'Direto no WhatsApp',
      texto: 'Você manda a data, o horário, o tipo de evento e o local. A gente combina o resto com você.',
    },
  ],

  contato: {
    whatsapp: '(61) 98164-6762',
    instagram: '@cadastroreserva61',
  },
}

// Mensagem que já vem escrita no WhatsApp: a pessoa só completa os dados do evento
const mensagemWhatsApp = [
  'Oi, vim pelo site e quero contratar a Cadastro Reserva.',
  'Data:',
  'Cidade e local:',
  'Tipo de evento:',
].join('\n')

export const links = {
  whatsapp: `https://wa.me/5561981646762?text=${encodeURIComponent(mensagemWhatsApp)}`,
  instagram: 'https://www.instagram.com/cadastroreserva61/',
}
