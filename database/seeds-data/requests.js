/**
 * ---------------------------------------------------------------------
 * CONTROLLERS
 * ---------------------------------------------------------------------
 */

exports.controllers = [
  {
    id: 1,
    alias: 'SYS_METADATA',
    is_permanent: true,
    name: 'System Metadata',
    color: '#3399cc',
    is_crh: false
  },
  {
    id: 2,
    name: 'Soldados',
    color: '#663300'
  },
  {
    id: 3,
    name: 'Praças',
    color: '#2196f3'
  },
  {
    id: 4,
    name: 'Oficiais',
    color: '#000099'
  },
  {
    id: 5,
    name: 'Executivos',
    color: '#6600ff'
  },
  {
    id: 6,
    name: 'Tags',
    color: '#000000'
  },
  {
    id: 7,
    name: 'Gratificados',
    color: '#660000'
  },
  {
    id: 8,
    name: 'Desligados',
    color: '#000000'
  },
  {
    id: 9,
    name: 'Reformados',
    color: '#ff9933'
  },
  {
    id: 10,
    name: 'Exonerados',
    color: '#ff0000'
  },
  {
    id: 11,
    name: 'Mudança de Conta',
    color: '#3f51b5'
  }
];

/**
 * ---------------------------------------------------------------------
 * ACTIONS
 * ---------------------------------------------------------------------
 */

exports.actions = [
  {
    alias: 'CREATE_REQUEST',
    execute_on: 'CREATE',
    name: 'Cria uma Requisição',
    description:
      'Cria uma nova requisição na tabela "requests" com os dados do formulário.'
  },
  {
    alias: 'UPDATE_REQUEST',
    execute_on: 'UPDATE',
    name: 'Atualiza uma Requisição',
    description: 'Atualiza uma requisição.'
  },
  {
    alias: 'CREATE_UPDATE_LOG',
    execute_on: 'UPDATE',
    name: 'Crirar Log de Edição',
    description: 'Cria um log para requisição.'
  },
  {
    alias: 'REJECT_GENERAL_OPS',
    execute_on: 'REJECT',
    name: 'Operações Gerais de Rejeição',
    description: 'Executa as operações globais para um requerimento rejeitado.'
  },
  {
    alias: 'APPROVE_GENERAL_OPS',
    execute_on: 'APPROVE',
    name: 'Operações Gerais de Aprovação',
    description: 'Executa as operações globais para um requerimento aprovado.'
  },
  {
    alias: 'SPEC_CFSD_APPROVAL',
    execute_on: 'APPROVE',
    name: 'Aprovação em CFSd',
    description: '-'
  },
  {
    alias: 'SPEC_PRO',
    execute_on: 'APPROVE',
    name: 'Promoção',
    description: '-'
  },
  {
    alias: 'SPEC_REB',
    execute_on: 'APPROVE',
    name: 'Rebaixamento',
    description: '-'
  },
  {
    alias: 'SPEC_REJOIN',
    execute_on: 'APPROVE',
    name: 'Reintegração',
    description: '-'
  },
  {
    alias: 'SPEC_ABS_REQUEST',
    execute_on: 'APPROVE',
    name: 'Solicitação de Licença',
    description: '-'
  },
  {
    alias: 'SPEC_RES_REQUEST',
    execute_on: 'APPROVE',
    name: 'Solicitação de Reserva',
    description: '-'
  },
  {
    alias: 'SPEC_ADV',
    execute_on: 'APPROVE',
    name: 'Advertência',
    description: '-'
  },
  {
    alias: 'SPEC_BUY_POS',
    execute_on: 'APPROVE',
    name: 'Compra de Cargo',
    description: '-'
  },
  {
    alias: 'SPEC_TAG_REQUEST',
    execute_on: 'APPROVE',
    name: 'Solicitação de Criação de TAG',
    description: '-'
  },
  {
    alias: 'SPEC_E_GRAT',
    execute_on: 'APPROVE',
    name: 'Atribuição de Gratificações Efetivas',
    description: '-'
  },
  {
    alias: 'SPEC_T_GRAT',
    execute_on: 'APPROVE',
    name: 'Atribuição de Gratificações Temporárias',
    description: '-'
  },
  {
    alias: 'SPEC_DESL',
    execute_on: 'APPROVE',
    name: 'Desligamento',
    description: '-'
  },
  {
    alias: 'SPEC_REF_REQUEST',
    execute_on: 'APPROVE',
    name: 'Solicitação de Reforma',
    description: '-'
  },
  {
    alias: 'SPEC_EXO',
    execute_on: 'APPROVE',
    name: 'Exoneração',
    description: '-'
  },
  {
    alias: 'SPEC_CHANGE_ACC',
    execute_on: 'APPROVE',
    name: 'Transferência de Conta',
    description: '-'
  }
];

/**
 * ---------------------------------------------------------------------
 * TYPES
 * ---------------------------------------------------------------------
 */

exports.types = [
  // --- REGISTRO:
  {
    id: 1,
    alias: 'REGISTER',
    is_permanent: true,
    controller_id: 1,
    name: 'Criação da Conta',
    timeline_title: 'Criou a Conta',
    description: 'Evento de criação da conta no System.',
    color: '#3399cc',
    icon: 'fa fa-user-plus',
    allow_unregistered_users: true
  },
  // --- INSTRUÇÕES INICIAIS
  {
    id: 2,
    alias: 'CFSD_A',
    is_permanent: true,
    controller_id: 2,
    name: 'Aprovação em CFSd',
    timeline_title: 'Aprovado(a) em CFSd',
    description: '(Instruções Iniciais)',
    color: '#4e3727',
    icon: 'fa fa-check',
    allow_unregistered_users: true,
    field_notes: 'OPT',
    field_asked_by: 'OPT',
    __actions__: ['SPEC_CFSD_APPROVAL']
  },
  {
    id: 25,
    alias: 'SUP_REPR',
    is_permanent: true,
    controller_id: 2,
    name: 'Reprovação em Supervisão',
    timeline_title: 'Reprovado(a) na Supervisão',
    description: '(Instruçòes Iniciais)',
    color: '#d32f2f',
    icon: 'fa fa-times',
    info_text:
      'Assim que este requerimento for aprovado por um membro do Centro de Recursos Humanos, o(s) soldado(s) será(ão) desligado(s) da Polícia RCC automaticamente.',
    allow_unregistered_users: false,
    field_notes: 'OPT',
    field_asked_by: 'OPT',
    __actions__: ['SPEC_DESL']
  },
  // --- PRAÇAS
  {
    id: 3,
    alias: 'P_PRO',
    is_permanent: true,
    controller_id: 3,
    name: 'Promoção',
    timeline_title: 'Promovido(a)',
    description: '(Praças)',
    color: '#4caf50',
    icon: 'fa fa-arrow-circle-up',
    before_position_group_id: 1,
    after_position_group_id: 1,
    strict_to_position_group: 1,
    field_before_position: 'REQUIRED',
    field_after_position: 'REQUIRED',
    field_reason: 'REQUIRED',
    field_permission: 'OPT',
    field_notes: 'OPT',
    field_asked_by: 'OPT',
    label_field_before_position: 'Patente atual:',
    label_field_after_position: 'Patente pós-promoção:',
    label_field_reason: 'Motivo para a promoção:',
    __actions__: ['SPEC_PRO']
  },
  {
    id: 4,
    alias: 'P_REB',
    is_permanent: true,
    controller_id: 3,
    name: 'Rebaixamento',
    timeline_title: 'Rebaixado(a)',
    description: '(Praças)',
    color: '#d32f2f',
    icon: 'fa fa-arrow-circle-down',
    before_position_group_id: 1,
    after_position_group_id: 1,
    strict_to_position_group: 1,
    field_before_position: 'REQUIRED',
    field_after_position: 'REQUIRED',
    field_reason: 'REQUIRED',
    field_permission: 'OPT',
    field_notes: 'OPT',
    field_asked_by: 'OPT',
    label_field_before_position: 'Patente atual:',
    label_field_after_position: 'Patente pós-rebaixamento:',
    label_field_reason: 'Motivo para o rebaixamento:',
    __actions__: ['SPEC_REB']
  },
  {
    id: 5,
    alias: 'P_REJOIN',
    is_permanent: true,
    controller_id: 3,
    name: 'Reintegração',
    timeline_title: 'Reintegrado(a)',
    description: '(Praças)',
    color: '#3949ab',
    icon: 'fa fa-arrow-circle-o-right',
    allow_unregistered_users: true,
    after_position_group_id: 1,
    field_before_position: 'REQUIRED',
    field_after_position: 'REQUIRED',
    field_permission: 'OPT',
    field_notes: 'OPT',
    field_asked_by: 'OPT',
    label_field_before_position: 'Último posto ocupado:',
    label_field_after_position: 'Patente a ser reintegrado(a):',
    __actions__: ['SPEC_REJOIN']
  },
  // --- OFICIAIS
  {
    id: 6,
    alias: 'O_PRO',
    is_permanent: true,
    controller_id: 4,
    name: 'Promoção',
    timeline_title: 'Promovido(a)',
    description: '(Oficiais)',
    color: '#4caf50',
    icon: 'fa fa-arrow-circle-up',
    before_position_group_id: 1,
    after_position_group_id: 1,
    strict_to_position_group: 1,
    field_before_position: 'REQUIRED',
    field_after_position: 'REQUIRED',
    field_reason: 'REQUIRED',
    field_permission: 'OPT',
    field_notes: 'OPT',
    field_asked_by: 'OPT',
    label_field_before_position: 'Patente atual:',
    label_field_after_position: 'Patente pós-promoção:',
    label_field_reason: 'Motivo para a promoção:',
    __actions__: ['SPEC_PRO']
  },
  {
    id: 7,
    alias: 'O_REB',
    is_permanent: true,
    controller_id: 4,
    name: 'Rebaixamento',
    timeline_title: 'Rebaixado(a)',
    description: '(Oficiais)',
    color: '#d32f2f',
    icon: 'fa fa-arrow-circle-down',
    before_position_group_id: 1,
    after_position_group_id: 1,
    strict_to_position_group: 1,
    field_before_position: 'REQUIRED',
    field_after_position: 'REQUIRED',
    field_reason: 'REQUIRED',
    field_permission: 'OPT',
    field_notes: 'OPT',
    field_asked_by: 'OPT',
    label_field_before_position: 'Patente atual:',
    label_field_after_position: 'Patente pós-rebaixamento:',
    label_field_reason: 'Motivo para o rebaixamento:',
    __actions__: ['SPEC_REB']
  },
  {
    id: 8,
    alias: 'O_ABS',
    is_permanent: true,
    controller_id: 4,
    name: 'Solicitação de Licença',
    timeline_title: 'Solicitou Licença',
    description: '(Oficiais)',
    color: '#3949ab',
    icon: 'fa fa-clock-o',
    strict_to_position_group: 1,
    field_reason: 'REQUIRED',
    field_notes: 'OPT',
    field_absence_until: 'REQUIRED',
    label_field_reason: 'Motivo para a licença:',
    __actions__: ['SPEC_ABS_REQUEST']
  },
  {
    id: 9,
    alias: 'O_RES',
    is_permanent: true,
    controller_id: 4,
    name: 'Solicitação de Reserva',
    timeline_title: 'Solicitou Reserva',
    description: '(Oficiais)',
    color: '#8e24aa',
    icon: 'fa fa-calendar-o',
    strict_to_position_group: 1,
    field_reason: 'REQUIRED',
    field_notes: 'OPT',
    field_absence_until: 'REQUIRED',
    label_field_reason: 'Motivo para a reserva:',
    __actions__: ['SPEC_RES_REQUEST']
  },
  {
    id: 10,
    alias: 'O_ADV',
    is_permanent: true,
    controller_id: 4,
    name: 'Advertência',
    timeline_title: 'Advertido(a)',
    description: '(Oficiais)',
    color: '#fb8c00',
    icon: 'fa fa-exclamation-triangle',
    strict_to_position_group: 1,
    field_reason: 'REQUIRED',
    field_permission: 'OPT',
    field_notes: 'OPT',
    field_asked_by: 'OPT',
    label_field_reason: 'Motivo para a advertência:',
    __actions__: ['SPEC_ADV']
  },
  // --- EXECUTIVOS
  {
    id: 11,
    alias: 'E_PRO',
    is_permanent: true,
    controller_id: 5,
    name: 'Promoção',
    timeline_title: 'Promovido(a)',
    description: '(Executivos)',
    color: '#4caf50',
    icon: 'fa fa-arrow-circle-up',
    before_position_group_id: 2,
    after_position_group_id: 2,
    strict_to_position_group: 2,
    field_before_position: 'REQUIRED',
    field_after_position: 'REQUIRED',
    field_reason: 'REQUIRED',
    field_permission: 'OPT',
    field_notes: 'OPT',
    field_asked_by: 'OPT',
    label_field_before_position: 'Cargo atual:',
    label_field_after_position: 'Cargo pós-promoção:',
    label_field_reason: 'Motivo para a promoção:',
    __actions__: ['SPEC_PRO']
  },
  {
    id: 12,
    alias: 'E_BUY_P',
    is_permanent: true,
    controller_id: 5,
    name: 'Compra de Cargo',
    timeline_title: 'Comprou cargo',
    description: '(Executivos)',
    color: '#388e3c',
    icon: 'fa fa-dollar',
    allow_multiple_users: false,
    allow_unregistered_users: true,
    after_position_group_id: 2,
    field_after_position: 'REQUIRED',
    field_notes: 'OPT',
    field_asked_by: 'OPT',
    field_price: 'REQUIRED',
    label_field_after_position: 'Cargo adquirido:',
    __actions__: ['SPEC_BUY_POS']
  },
  {
    id: 13,
    alias: 'E_REB',
    is_permanent: true,
    controller_id: 5,
    name: 'Rebaixamento',
    timeline_title: 'Rebaixado(a)',
    description: '(Executivos)',
    color: '#d32f2f',
    icon: 'fa fa-arrow-circle-down',
    before_position_group_id: 2,
    after_position_group_id: 2,
    strict_to_position_group: 2,
    field_before_position: 'REQUIRED',
    field_after_position: 'REQUIRED',
    field_reason: 'REQUIRED',
    field_permission: 'OPT',
    field_notes: 'OPT',
    field_asked_by: 'OPT',
    label_field_before_position: 'Cargo atual:',
    label_field_after_position: 'Cargo pós-rebaixamento:',
    label_field_reason: 'Motivo para o rebaixamento:',
    __actions__: ['SPEC_REB']
  },
  {
    id: 14,
    alias: 'E_REJOIN',
    is_permanent: true,
    controller_id: 5,
    name: 'Reintegração',
    timeline_title: 'Reintegrado(a)',
    description: '(Executivos)',
    color: '#3949ab',
    icon: 'fa fa-arrow-circle-o-right',
    allow_unregistered_users: true,
    after_position_group_id: 2,
    field_before_position: 'REQUIRED',
    field_after_position: 'REQUIRED',
    field_permission: 'OPT',
    field_notes: 'OPT',
    field_asked_by: 'OPT',
    label_field_before_position: 'Último posto ocupado:',
    label_field_after_position: 'Cargo a ser reintegrado(a):',
    __actions__: ['SPEC_REJOIN']
  },
  {
    id: 15,
    alias: 'E_ABS',
    is_permanent: true,
    controller_id: 5,
    name: 'Solicitação de Licença',
    timeline_title: 'Solicitou Licença',
    description: '(Executivos)',
    color: '#3949ab',
    icon: 'fa fa-clock-o',
    strict_to_position_group: 2,
    field_reason: 'REQUIRED',
    field_notes: 'OPT',
    field_absence_until: 'REQUIRED',
    label_field_reason: 'Motivo para a licença:',
    __actions__: ['SPEC_ABS_REQUEST']
  },
  {
    id: 16,
    alias: 'E_RES',
    is_permanent: true,
    controller_id: 5,
    name: 'Solicitação de Reserva',
    timeline_title: 'Solicitou Reserva',
    description: '(Oficiais)',
    color: '#8e24aa',
    icon: 'fa fa-calendar-o',
    strict_to_position_group: 1,
    field_reason: 'REQUIRED',
    field_notes: 'OPT',
    field_absence_until: 'REQUIRED',
    label_field_reason: 'Motivo para a reserva:',
    __actions__: ['SPEC_RES_REQUEST']
  },
  {
    id: 17,
    alias: 'E_ADV',
    is_permanent: true,
    controller_id: 5,
    name: 'Advertência',
    timeline_title: 'Advertido(a)',
    description: '(Executivos)',
    color: '#fb8c00',
    icon: 'fa fa-exclamation-triangle',
    strict_to_position_group: 2,
    field_reason: 'REQUIRED',
    field_permission: 'OPT',
    field_notes: 'OPT',
    field_asked_by: 'OPT',
    label_field_reason: 'Motivo para a advertência:',
    __actions__: ['SPEC_ADV']
  },
  // --- TAG
  {
    id: 18,
    alias: 'TAG_REQUEST',
    is_permanent: true,
    controller_id: 6,
    name: 'Solicitação de Criação de TAG',
    timeline_title: 'Solicitou uma nova TAG',
    description: '(TAG)',
    color: '#3949ab',
    icon: 'fa fa-id-card-o',
    info_text:
      'Lembre-se que cada <strong>TAG é única</strong>, portanto, não podem haver repetições entre os policiais. Tenha ciência também que a TAG deve ser <strong>semelhante ao seu nick</strong>.',
    allow_multiple_users: false,
    field_notes: 'OPT',
    field_tag: 'REQUIRED',
    __actions__: ['SPEC_TAG_REQUEST']
  },
  // --- GRATIFICAÇÕES
  {
    id: 19,
    alias: 'GRAT_E',
    is_permanent: true,
    controller_id: 7,
    name: 'Atribuição de Gratificações Efetivas',
    timeline_title: 'Gratificado(a) com Medalhas Efetivas',
    description: '(Gratificações)',
    color: '#ffb300',
    icon: 'fa fa-trophy',
    info_text:
      'Se você deseja atribuir medalhas <strong>positivas</strong>, insira um <strong>número positivo</strong> (por exemplo, <samp>20</samp>). Se desejar, no entanto, atribuir medalhas <strong>negativas</strong>, insira um <strong>número negativo</strong> (por exemplo, <samp>-20</samp>).',
    field_reason: 'REQUIRED',
    field_notes: 'OPT',
    field_asked_by: 'OPT',
    field_bonuses: 'REQUIRED',
    label_field_reason: 'Motivo:',
    __actions__: ['SPEC_E_GRAT']
  },
  {
    id: 20,
    alias: 'GRAT_T',
    is_permanent: true,
    controller_id: 7,
    name: 'Atribuição de Gratificações Temporárias',
    timeline_title: 'Gratificado(a) com Medalhas Negativas',
    description: '(Gratificações)',
    color: '#ffb300',
    icon: 'fa fa-trophy',
    info_text:
      'Se você deseja atribuir medalhas <strong>positivas</strong>, insira um <strong>número positivo</strong> (por exemplo, <samp>20</samp>). Se desejar, no entanto, atribuir medalhas <strong>negativas</strong>, insira um <strong>número negativo</strong> (por exemplo, <samp>-20</samp>).',
    field_reason: 'REQUIRED',
    field_notes: 'OPT',
    field_asked_by: 'OPT',
    field_bonuses: 'REQUIRED',
    label_field_reason: 'Motivo:',
    __actions__: ['SPEC_T_GRAT']
  },
  // --- DESLIGAMENTOS
  {
    id: 21,
    alias: 'DESL_H',
    is_permanent: true,
    controller_id: 8,
    name: 'Desligamento Honroso',
    timeline_title: 'Desligou-se',
    description: '(Desligamentos)',
    color: '#4caf50',
    icon: 'fa fa-sign-out',
    field_before_position: 'REQUIRED',
    field_reason: 'REQUIRED',
    field_permission: 'OPT',
    field_notes: 'OPT',
    field_asked_by: 'OPT',
    label_field_before_position: 'Patente/cargo atual:',
    label_field_reason: 'Motivo para o desligamento:',
    __actions__: ['SPEC_DESL']
  },
  {
    id: 22,
    alias: 'DESL_D',
    is_permanent: true,
    controller_id: 8,
    name: 'Desligamento Desonroso',
    timeline_title: 'Desligado(a)',
    description: '(Desligamentos)',
    color: '#d32f2f',
    icon: 'fa fa-ban',
    field_before_position: 'REQUIRED',
    field_reason: 'REQUIRED',
    field_permission: 'OPT',
    field_notes: 'OPT',
    field_asked_by: 'OPT',
    label_field_before_position: 'Patente/cargo atual:',
    label_field_reason: 'Motivo para o desligamento:',
    __actions__: ['SPEC_DESL']
  },
  // --- REFORMA
  {
    id: 23,
    alias: 'REF_REQUEST',
    is_permanent: true,
    controller_id: 9,
    name: 'Solicitação de Reforma',
    timeline_title: 'Reformou-se',
    description: '(Reformas)',
    color: '#fb8c00',
    icon: 'fa fa-sign-out',
    field_before_position: 'REQUIRED',
    field_reason: 'REQUIRED',
    field_permission: 'OPT',
    field_notes: 'OPT',
    field_asked_by: 'OPT',
    label_field_before_position: 'Patente/cargo atual:',
    label_field_reason: 'Motivo para a reforma:',
    __actions__: ['SPEC_REF_REQUEST']
  },
  // --- EXONERAÇÃO
  {
    id: 24,
    alias: 'EXO_REQUEST',
    is_permanent: true,
    controller_id: 10,
    name: 'Exoneração',
    timeline_title: 'Exonerado(a)',
    description: '(Exonerações)',
    color: '#d32f2f',
    icon: 'fa fa-ban',
    allow_unregistered_users: true,
    field_before_position: 'REQUIRED',
    field_reason: 'REQUIRED',
    field_permission: 'OPT',
    field_notes: 'OPT',
    field_asked_by: 'OPT',
    field_banned_until: 'REQUIRED',
    label_field_before_position: 'Patente/cargo atual:',
    label_field_reason: 'Motivo para a exoneração:',
    __actions__: ['SPEC_EXO']
  },
  // --- MUDANÇA DE CONTA
  {
    id: 26,
    alias: 'CHANGE_ACC',
    is_permanent: true,
    controller_id: 11,
    name: 'Transferência de Conta',
    timeline_title: 'Mudou de Conta',
    description: '(Mudança de Conta)',
    color: '#3f51b5',
    icon: 'fa fa-retweet',
    allow_multiple_users: false,
    field_reason: 'REQUIRED',
    field_permission: 'OPT',
    field_notes: 'OPT',
    field_asked_by: 'OPT',
    field_extra_user_1: 'REQUIRED',
    label_field_reason: 'Motivo para a troca:',
    label_field_extra_user_1: 'Nick da <strong>nova</strong> conta:',
    __actions__: ['SPEC_CHANGE_ACC']
  }
];
