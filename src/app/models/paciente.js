const mongoose = require('../../database');
const bcrypt = require('bcryptjs')

const PacienteSchema = new mongoose.Schema({
  cns: { 
    type: String,
    required: true
  },
  nomeCompleto: { 
    type: String,
    required: true
  },
  dataNascimento: { 
    type: Date,
    required: true
  },
  sexo: { 
    type: String,
    required: true
  },
  racaCor: { 
    type: String,
  },
  rg: { 
    type: String,
    required: true
  },
  cpf: { 
    type: String,
    required: true
  },
  telefone: { 
    type: String,
    required: true
  },
  nomeMae: { 
    type: String,
    required: true
  },
  escolaridade: { 
    type: String,
    required: true
  },
  zona: { 
    type: String,
    required: true
  },
  pais: { 
    type: String,
    required: true
  },
  estado: { 
    type: String,
    required: true
  },
  cidade: { 
    type: String,
    required: true
  },
  cep: { 
    type: String,
    required: true
  },
  bairro: { 
    type: String,
    required: true
  },
  endereco: { 
    type: String,
    required: true
  },
  numero: { 
    type: String,
    required: true
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario'
  },
  informacaoComplementar: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'InformacaoComplementar'
  },
  dadosLaboratorial: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DadoLaboratorial'
  },
  dadosClinicos: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DadoClinico'
  },
  dataCadastro :{
    type: Date,
    default: Date.now
  }
})


const Paciente = mongoose.model('Paciente', PacienteSchema);

module.exports = Paciente