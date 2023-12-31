const Schema = use('Schema');

class RequestTypeSchema extends Schema {
  up() {
    this.create('request_types', (table) => {
      table.increments();
      table.timestamps();

      table.string('alias', 80).notNullable().unique().index();
      table.boolean('is_permanent').notNullable().defaultTo(false);

      table.integer('controller_id').unsigned().index().notNullable();
      table
        .foreign('controller_id')
        .references('request_controllers.id')
        .onDelete('cascade');

      table.string('name', 90).notNullable();
      table.string('timeline_title', 90).notNullable();

      table.text('description').defaultTo(null);
      table.string('icon', 100).defaultTo('fa fa-circle-o').notNullable();
      table.string('color', 30).defaultTo('#37474f').notNullable();

      table.text('info_text').defaultTo(null);
      table.boolean('show_in_timeline').notNullable().defaultTo(true);
      table.boolean('allow_unregistered_users').notNullable().defaultTo(false);
      table.boolean('allow_multiple_users').notNullable().defaultTo(true);

      // --- POSITION FIELDS
      table.integer('before_position_group_id').defaultTo(null).unsigned();
      table
        .foreign('before_position_group_id')
        .references('position_groups.id')
        .onDelete('set null');
      table.integer('after_position_group_id').defaultTo(null).unsigned();
      table
        .foreign('after_position_group_id')
        .references('position_groups.id')
        .onDelete('set null');
      table.integer('strict_to_position_group').defaultTo(null).unsigned();
      table
        .foreign('strict_to_position_group')
        .references('position_groups.id')
        .onDelete('set null');

      // --- LABELS
      table.text('label_field_before_position').defaultTo(null);
      table.text('label_field_after_position').defaultTo(null);
      table.text('label_field_reason').defaultTo(null);
      table.text('label_field_extra_user_1').defaultTo(null);
      table.text('label_field_extra_user_2').defaultTo(null);
      table.text('label_field_extra_user_3').defaultTo(null);
      table.text('label_field_extra_user_4').defaultTo(null);

      // --- FIELDS
      table
        .enum('field_before_position', ['HIDE', 'OPT', 'REQUIRED'])
        .notNullable()
        .defaultTo('HIDE');
      table
        .enum('field_after_position', ['HIDE', 'OPT', 'REQUIRED'])
        .notNullable()
        .defaultTo('HIDE');

      table
        .enum('field_reason', ['HIDE', 'OPT', 'REQUIRED'])
        .notNullable()
        .defaultTo('HIDE');
      table
        .enum('field_permission', ['HIDE', 'OPT', 'REQUIRED'])
        .notNullable()
        .defaultTo('HIDE');
      table
        .enum('field_notes', ['HIDE', 'OPT', 'REQUIRED'])
        .notNullable()
        .defaultTo('HIDE');
      table
        .enum('field_asked_by', ['HIDE', 'OPT', 'REQUIRED'])
        .notNullable()
        .defaultTo('HIDE');

      table
        .enum('field_tag', ['HIDE', 'OPT', 'REQUIRED'])
        .notNullable()
        .defaultTo('HIDE');
      table
        .enum('field_price', ['HIDE', 'OPT', 'REQUIRED'])
        .notNullable()
        .defaultTo('HIDE');
      table
        .enum('field_absence_until', ['HIDE', 'OPT', 'REQUIRED'])
        .notNullable()
        .defaultTo('HIDE');
      table
        .enum('field_banned_until', ['HIDE', 'OPT', 'REQUIRED'])
        .notNullable()
        .defaultTo('HIDE');
      table
        .enum('field_bonuses', ['HIDE', 'OPT', 'REQUIRED'])
        .notNullable()
        .defaultTo('HIDE');
      table
        .enum('field_extra_user_1', ['HIDE', 'OPT', 'REQUIRED'])
        .notNullable()
        .defaultTo('HIDE');
      table
        .enum('field_extra_user_2', ['HIDE', 'OPT', 'REQUIRED'])
        .notNullable()
        .defaultTo('HIDE');
      table
        .enum('field_extra_user_3', ['HIDE', 'OPT', 'REQUIRED'])
        .notNullable()
        .defaultTo('HIDE');
      table
        .enum('field_extra_user_4', ['HIDE', 'OPT', 'REQUIRED'])
        .notNullable()
        .defaultTo('HIDE');
    });
  }

  down() {
    this.drop('request_types');
  }
}

module.exports = RequestTypeSchema;
