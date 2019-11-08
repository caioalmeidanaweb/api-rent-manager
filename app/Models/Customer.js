'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Customer extends Model {
    static boot() {
        super.boot()
    }

    user() {
        return this.belongsTo('App/Models/User')
    }
}

module.exports = Customer
