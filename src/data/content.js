import { messages } from './contact'

export const nav = [
  { label: 'Início', href: '#inicio' },
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

// Fotos (opcional). Coloque os arquivos em /public/images e informe o caminho, ex.: './images/hero.jpg'.
// Use somente fotos profissionais, com autorização de uso. Sem foto, o site usa a ilustração da marca.
export const images = {
  hero: '',
  heroAlt: 'Ambiente acolhedor de atendimento terapêutico na Duas Asas',
  about: '',
  aboutAlt: 'Espaço de atendimento da Duas Asas',
}

// Ative/desative seções inteiras.
export const sections = {
  owners: true, // mantenha true enquanto houver perfis a preencher; desative se preferir ocultar
  differentials: true,
}

export const treatments = [
  {
    id: 'laserterapia',
    icon: 'laser',
    title: 'Laserterapia',
    text: 'A laserterapia utiliza luz em aplicações específicas, conforme a indicação e o protocolo profissional. Conheça como essa abordagem pode contribuir para o cuidado terapêutico e o seu bem-estar.',
    tags: ['Alívio da dor', 'Regeneração', 'Bem-estar'],
    message: messages.laser,
  },
  {
    id: 'auriculogia',
    icon: 'ear',
    title: 'Auriculogia',
    text: 'A auriculogia é uma abordagem terapêutica que trabalha com a observação e a estimulação de pontos relacionados à orelha, conforme a técnica e a avaliação profissional. Entre em contato para conhecer o atendimento oferecido pela Duas Asas.',
    tags: ['Cuidado integral', 'Equilíbrio do corpo e da mente'],
    message: messages.auricular,
  },
]

// TEXTO PROVISÓRIO — ajustar com as proprietárias. Não inclui história, anos de experiência ou qualificações.
export const about = {
  title: 'Cuidar de você é a nossa especialidade.',
  paragraphs: [
    'Na Duas Asas, o cuidado começa pela escuta. Cada pessoa chega com uma história, uma necessidade e um ritmo próprio — e é a partir disso que o atendimento é conduzido.',
    'Nossa proposta é oferecer um espaço de acolhimento, com respeito e atenção individual, para que você se sinta à vontade para tirar dúvidas e conhecer cada tratamento com clareza.',
  ],
  values: [
    { title: 'Escuta', text: 'Atenção ao que cada pessoa traz.' },
    { title: 'Respeito', text: 'Cuidado com o tempo e a história de cada um.' },
    { title: 'Acolhimento', text: 'Um ambiente pensado para o seu bem-estar.' },
  ],
}

// Perfis a preencher pelas proprietárias. NÃO invente dados.
// Deixe os colchetes enquanto não houver informação real; adicione/remova perfis conforme necessário.
export const owners = [
  {
    photo: '', // ex.: './images/proprietaria-1.jpg'
    photoAlt: '',
    name: '[Nome da profissional]',
    area: '[Área de atuação]',
    training: '[Formação e especializações]',
    experience: '[Experiência profissional]',
    bio: '[Breve apresentação pessoal]',
  },
  {
    photo: '',
    photoAlt: '',
    name: '[Nome da profissional]',
    area: '[Área de atuação]',
    training: '[Formação e especializações]',
    experience: '[Experiência profissional]',
    bio: '[Breve apresentação pessoal]',
  },
]

// DIFERENCIAIS A VALIDAR com as proprietárias antes de publicar.
export const differentials = [
  { title: 'Atendimento acolhedor', text: 'Um cuidado pensado para você se sentir bem-vindo desde o primeiro contato.' },
  { title: 'Atenção individualizada', text: 'Cada pessoa é ouvida e o atendimento considera suas necessidades.' },
  { title: 'Ambiente dedicado ao bem-estar', text: 'Um espaço voltado ao cuidado, ao equilíbrio e à tranquilidade.' },
  { title: 'Orientação clara', text: 'Explicações em linguagem simples sobre cada tratamento.' },
]

export const steps = [
  { title: 'Entre em contato', text: 'Chame a Duas Asas pelo WhatsApp.' },
  { title: 'Conte o que deseja conhecer', text: 'Informe qual tratamento desperta o seu interesse.' },
  { title: 'Combine dia e horário', text: 'Defina o melhor momento diretamente com a clínica.' },
]

export const faqs = [
  {
    q: 'O que é laserterapia?',
    a: 'A laserterapia utiliza luz em aplicações específicas, conforme a indicação e o protocolo profissional. Os temas trabalhados na Duas Asas são alívio da dor, regeneração e bem-estar. A indicação e os resultados variam de pessoa para pessoa — consulte a profissional pelo WhatsApp.',
  },
  {
    q: 'O que é auriculogia?',
    a: 'É uma abordagem terapêutica que trabalha com a observação e a estimulação de pontos relacionados à orelha, conforme a técnica e a avaliação profissional, dentro de uma proposta de cuidado integral e equilíbrio do corpo e da mente.',
  },
  {
    q: 'Como posso conhecer os tratamentos?',
    a: 'Chame a Duas Asas pelo WhatsApp e diga qual tratamento você quer conhecer. A profissional responde suas dúvidas e explica como funciona o atendimento.',
  },
  {
    q: 'Como faço para agendar?',
    a: 'O agendamento é feito diretamente pelo WhatsApp: entre em contato, informe o tratamento desejado e combine o melhor dia e horário com a clínica.',
  },
  {
    q: 'Preciso de uma avaliação antes do atendimento?',
    a: 'Isso depende do protocolo da clínica e do tratamento escolhido. Consulte a profissional pelo WhatsApp para saber como será o seu atendimento.',
  },
  {
    q: 'Os atendimentos substituem acompanhamento médico?',
    a: 'Não. As informações deste site são informativas e não substituem avaliação, diagnóstico ou tratamento médico. Em caso de dúvida sobre sua saúde, procure um profissional habilitado.',
  },
]
