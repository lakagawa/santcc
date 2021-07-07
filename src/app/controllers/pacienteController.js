const express = require('express')

const authMiddleware = require('../middlewares/auth')
const Paciente = require('../models/paciente')
const DadoClinico = require('../models/dadoClinico')
const DadoLaboratorial = require('../models/dadoLaboratorial')
const InformacaoComplementar = require('../models/informacaoComplementar')

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
  try {
    const pacientes = await Paciente.find().populate('usuario');

    return res.send({
      pacientes
    })
  } catch (err) {
    return res.status(400).send({
      error: 'Erro ao listar'
    })
  }
})

router.get('/:pacienteId', async (req, res) => {
  try {
    const paciente = await Paciente.findById(req.params.pacienteId).populate(['usuario', 'dadosLaboratorial', 'dadosClinicos', 'informacaoComplementar'])

    return res.send({
      paciente
    })
  } catch (err) {
    return res.status(400).send({
      error: 'Erro ao obter o paciente'
    })
  }
})


router.post('/', async (req, res) => {
  try {

    const {
      cns,
      nomeCompleto,
      dataNascimento,
      sexo,
      racaCor,
      rg,
      cpf,
      telefone,
      nomeMae,
      escolaridade,
      zona,
      pais,
      estado,
      cidade,
      cep,
      bairro,
      endereco,
      numero,
      dadosLaboratorial,
      dadosClinicos,
      informacaoComplementar
    } = req.body;

    const ddCli = await DadoClinico.create({ ...dadosClinicos});
    const ddLab = await DadoLaboratorial.create({ ...dadosLaboratorial});
    const infoComp = await InformacaoComplementar.create({ ...informacaoComplementar });

    const paciente = await Paciente.create({
      cns,
      nomeCompleto,
      dataNascimento,
      sexo,
      racaCor,
      rg,
      cpf,
      telefone,
      nomeMae,
      escolaridade,
      zona,
      pais,
      estado,
      cidade,
      cep,
      bairro,
      endereco,
      numero,
      usuario: req.userId,
      dadosLaboratorial: ddLab._id,
      dadosClinicos: ddCli._id ,
      informacaoComplementar: infoComp._id
    })

    await DadoClinico.findByIdAndUpdate(ddCli._id, {paciente: paciente._id})
    await InformacaoComplementar.findByIdAndUpdate(infoComp._id, {paciente: paciente._id})
    await DadoLaboratorial.findByIdAndUpdate(ddLab._id, {paciente: paciente._id})

    return res.status(201).send({
      paciente
    })
  } catch (err) {
    return res.status(400).send({
      error: 'Erro ao cadastrar ' + err
    })
  }
})

router.put('/:pacienteId', async (req, res) => {
  // preciso fazer essa parte do update
})

router.delete('/:pacienteId', async (req, res) => {
  try {
    await Paciente.findByIdAndRemove(req.params.pacienteId)


    return res.send()
  } catch (err) {
    return res.status(400).send({
      error: 'Erro ao deletar o paciente'
    })
  }
})



module.exports = app => app.use('/paciente', router)