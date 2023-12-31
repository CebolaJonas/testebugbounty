/**
 * Action usada para:
 *    - Especialização em Requerimento :: SPEC_REB
 */

const User = use('App/Models/User');

module.exports = () => ({
  requiresTransaction: true,
  requiresController: false,
  requiresAuthUser: false,
  requiresRequest: true,
  requiresReview: false,
  requiresType: false,
  caller
});

async function caller({ transaction, request }) {
  const user = await User.findOrFail(request.receiver_id);
  user.promoter_id = request.author_id;
  user.position_id = request.after_position_id;
  user.tag_type = 'REB';
  user.change_position_date = new Date();
  await user.save(transaction);
}
