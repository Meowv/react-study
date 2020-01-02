'use strict';

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    this.ctx.body = "api"
  }
}

module.exports = HomeController