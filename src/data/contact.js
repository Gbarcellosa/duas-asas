// ============================================================
//  DADOS DE CONTATO — edite SOMENTE este arquivo para configurar
//  os canais da clínica. Canais deixados em branco ('') ficam
//  ocultos no site publicado (no modo de desenvolvimento aparecem
//  como "pendente" para lembrar do preenchimento).
// ============================================================

export const contact = {
  // WhatsApp (obrigatório) — formato internacional, só números
  whatsappNumber: '5511915335422',
  whatsappDisplay: '(11) 91533-5422',

  // Telefone: preencha SOMENTE se as proprietárias confirmarem que o número recebe ligações.
  // Exemplo: phone: '5511915335422', phoneDisplay: '(11) 91533-5422'
  phone: '',
  phoneDisplay: '',

  // Instagram: link oficial do perfil. Exemplo: 'https://www.instagram.com/perfil_oficial/'
  instagramUrl: '',
  instagramHandle: '', // Exemplo: '@perfil_oficial'

  // E-mail oficial. Exemplo: 'contato@exemplo.com.br'
  email: '',

  // Endereço (somente se houver atendimento presencial divulgado publicamente)
  address: '',

  // Horário de funcionamento. Exemplo: 'Segunda a sexta, das 9h às 18h'
  hours: '',

  // Informações legais (razão social, CNPJ etc.), se fornecidas. Aparece no rodapé.
  legalInfo: '',
}

// Mensagens pré-preenchidas do WhatsApp
export const messages = {
  general:
    'Olá! Conheci a Duas Asas pelo site e gostaria de saber mais sobre os atendimentos.',
  laser: 'Olá! Gostaria de saber mais sobre o atendimento com laserterapia.',
  auricular: 'Olá! Gostaria de saber mais sobre o atendimento de auriculogia.',
}
