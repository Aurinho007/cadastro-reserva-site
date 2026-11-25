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
    'Levamos rock de verdade para apresentações individuais, festas particulares, festivais, bares, pubs e eventos especiais. Seja para animar uma festa, colocar o público para cantar junto ou transformar um evento em uma noite memorável.',

  // Tipos de evento — aparecem na faixa de papel logo abaixo do topo
  eventos: ['Festas particulares', 'Festivais', 'Bares', 'Pubs', 'Eventos especiais', 'Apresentações individuais'],

  proposta:
    'A proposta é reunir artistas nacionais e internacionais que marcaram a história do rock. Ao longo da apresentação, a energia do show se transforma gradualmente, acompanhando o ritmo da noite. O repertório começa com músicas mais tranquilas, permitindo que o público se conecte com a banda. Aos poucos, a energia do show e das músicas vai crescendo, criando uma atmosfera cada vez mais envolvente e preparando o público para momentos de maior intensidade e animação.',

  repertorio: {
    texto:
      'Um repertório completo para todos os momentos: dos clássicos que marcaram gerações aos grandes sucessos que fazem o público cantar junto. Uma seleção vibrante, versátil e cheia de personalidade, pensada para transformar cada show em uma experiência inesquecível.',
    artistas: [
      'Pitty',
      'Red Hot Chili Peppers',
      'Pink Floyd',
      'Elvis Presley',
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
      texto:
        'Adaptada a cada evento: cerca de 50 minutos sem intervalo, ou uma experiência estendida de até 3 horas, com intervalo.',
    },
    {
      titulo: 'Cachê',
      destaque: 'A partir de R$ 800',
      texto:
        'Já inclui instrumentos, equipamento de som e toda a estrutura necessária para o show, conforme as necessidades do local.',
    },
    {
      titulo: 'Equipamento',
      destaque: 'Som, luz e instrumentos',
      texto:
        'Estrutura completa: instrumentos, sistema de som e iluminação. Levamos o equipamento adequado para o tamanho do lugar.',
    },
    {
      titulo: 'Contratação',
      destaque: 'Direto no WhatsApp',
      texto:
        'Simples e rápida: alinhamos data, horário, formato do evento e condições do local. Dá até para negociar músicas específicas no repertório.',
    },
  ],

  contato: {
    whatsapp: '(61) 98164-6762',
    instagram: '@cadastroreserva61',
  },
}

const mensagemWhatsApp = 'Olá, Cadastro Reserva! Vim pelo site e quero levar o show de vocês para o meu evento.'

export const links = {
  whatsapp: `https://wa.me/5561981646762?text=${encodeURIComponent(mensagemWhatsApp)}`,
  instagram: 'https://www.instagram.com/cadastroreserva61/',
}
