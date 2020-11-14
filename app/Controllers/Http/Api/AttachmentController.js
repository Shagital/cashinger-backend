'use strict'
const Attachment = use("App/Models/Attachment");
const {validateAll} = use("Validator");
const {random} = use("App/Common/helpers");
const Cloudinary = use('Cloudinary')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with attachments
 */
class AttachmentController {
  /**
   * Show a list of all attachments.
   * GET attachments
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async index ({ auth, request:{qs}, response }) {
    let user = await auth.getUser();
    let data = await Attachment.query().where('user_id', user.id).paginate(qs.page || 1, qs.per_page || 25);

    response.send(data);
  }


  /**
   * Create/save a new attachment.
   * POST attachments
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ auth, request, response }) {
    const rules = {
      file: 'required',
    };

    const validation = await validateAll(request.files(), rules)

    if (validation.fails()) {
      return response.status(422).send(validation.messages())
    }

    let user = await auth.getUser();

    let file = request.file('file', { types: ['image'], size: '2mb' });

    let result = await Cloudinary.uploader.upload(file.tmpPath)
      if (!result.public_id) {
        response.status(400).send({error: "File upload failed"})
      }

      let data = {
        public_id: result.public_id,
        format: result.format,
        resource_type: result.resource_type,
        url: result.secure_url,
        user_id: user.id
      };

      let attachment = await Attachment.create(data);

      response.send(attachment)

  }

  /**
   * Display a single attachment.
   * GET attachments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async show ({ auth, params, request, response }) {
    let user = await auth.getUser();
    let attachment = await Attachment.query().where({'user_id': user.id, 'id': params.id}).firstOrFail();
    attachment.url = await Cloudinary.url(attachment.public_id, {
      width: params.width || 100,
      height: params.height || 150,
      crop: params.crop || "fill",
      gravity: params.gravity || "face"
    });

    response.send(attachment)
  }

  /**
   * Delete a attachment with id.
   * DELETE attachments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ auth, params, request, response }) {
    let user = await auth.getUser();
    let attachment = await Attachment.query().where({'user_id': user.id, 'id': params.id}).firstOrFail();
    attachment.delete();

    response.status(204).send()
  }
}

module.exports = AttachmentController
