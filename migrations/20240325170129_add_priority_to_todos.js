/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async (knex) => {
    await knex.schema.table('todos', function(table) {
        table.enum('priority', ['low', 'normal', 'high']).defaultTo('normal');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async (knex) => {
    await knex.schema.table('todos', function(table) {
        table.dropColumn('priority');
    });
};

