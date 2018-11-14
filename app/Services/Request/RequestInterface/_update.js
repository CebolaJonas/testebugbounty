'use strict'

const ActionsInterface = require('../ActionsInterface')

const Database = use('Database')

/**
 * Cria a requisição, salvando-a na base de dados.
 *
 * @param  {object} payload
 * @return {Promise<void>}
 */
module.exports = async function update (payload, request, authUser) {
  const actions = await getActions(request.type_id, 'UPDATE')

  for (const action of actions) {
    const actionInterface = new ActionsInterface()
    actionInterface.use({ payload, request, authUser })
    await actionInterface.execute(action)
  }
}

/**
 * Retorna todas as ações para um determinado tipo.
 *
 * @param  {number|string} typeId
 * @return {Promise<string[]>}
 */
const getActions = async (typeId, executeOn) => Database
  .select('A.alias')
  .from('request_actions as A')
  .innerJoin('pivot_request_action_type as P', 'P.action_id', '=', 'A.id')
  .innerJoin('request_types as T', 'T.id', '=', 'P.type_id')
  .where({
    'T.id': typeId,
    'A.execute_on': executeOn
  })
  .map(({ alias = null } = {}) => alias)
  .filter((alias) => alias !== null)
