'use strict'

/**
 * Action usada para:
 *    - Criar o log de revisão;
 *    - Definir a data da revisão no requerimento.
 */

const { HttpException } = use('@adonisjs/generic-exceptions')
const RequestReview = use('App/Models/RequestReview')
const sanitize = use('App/Helpers/sanitize')

module.exports = () => ({
  requiresTransaction: true,
  requiresController: false,
  requiresAuthUser: true,
  requiresRequest: true,
  requiresReview: false,
  requiresType: false,
  caller
})

async function caller ({ transaction, authUser, request, payload }) {
  if (!(await authUser.hasPermission('CRH', true)) || request.crh_state !== 'PENDING') {
    throw new HttpException('Acesso negado.', 403)
  }

  const review = new RequestReview()
  review.author_id = authUser.id
  review.type = 'REVIEW'
  review.body = sanitize(payload.rej_reason)

  await request.reviews().save(review, transaction)
  await request.reviwer().associate(authUser, transaction)

  // Atualizar a data da última revisão:
  request.merge({ crh_state: 'REJECTED', last_review: new Date() })
  await request.save(transaction)
}